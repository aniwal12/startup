const { WebSocketServer } = require('ws');
const uuid = require('uuid');
const db = require('./database.js')

function peerProxy(httpServer) {
    const wss = new WebSocketServer({ noServer: true });

    httpServer.on('upgrade', (request, socket, head) => {
        wss.handleUpgrade(request, socket, head, function done(ws) {
            wss.emit('connection', ws, request);
        });
    });

    let connections = [];

    wss.on('connection', (ws) => {
        const connection = { id: uuid.v4(), alive: true, ws: ws };
        connections.push(connection);

        ws.on('message', async function message(data) {
            const message = JSON.parse(data);
            console.log(message);
            if (message.type === "request") {
                let requests = await db.addRequest(message.value);
                for (let connection of connections) {
                    connection.ws.emit(requests);}
            } 
        })

        ws.on('close', () => {
            connections.findIndex((o, i) => {
                if (o.id === connection.id) {
                    connections.splice(i, 1);
                    return true;
                }
            });
        });

        ws.on('pong', () => {
            connection.alive = true;
        });
    });

    setInterval(() => {
        connections.forEach((c) => {
            if (!c.alive) {
                c.ws.terminate();
            } else {
                c.alive = false;
                c.ws.ping();
            }
        });
    }, 10000);
}

module.exports = { peerProxy };