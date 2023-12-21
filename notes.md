# Anika's Notes

## Midterm

### The Console (command line)
- **pwd** - see which directory you are in. (present working directory = pwd) also shos the absolute path of the directory.
- **ls** - list all of the files in the directory. even hidden ones are listed if you use -la as a parameter.
- **echo** - output thte parameters of the command. 
- **cd** - change directory
- **mkdir/rmdir** - make directory/remove directory
- **rm** - remove file(s)
- **mv** - move file(s)
- **cp** - copy file(s)
- **curl** - command line client url browser
- **grep** - regular expression search
- **find** - find files
- **top** - view running processes with CPU and memory usage
- **df** - view disk statistics
- **cat** - output contents of a file
- **less** - interactively output the contents of a file
- **wc** - word count
- **ps** - view the currently running processes
- **kill** - kill a currently running process
- **sudo** - execute a command as a super user (admin)
- **ssh** - create a secure shell on a remote computer
- **scp** - securely copy files to a remote computer
- **history** - show the history of commands
- **ping** - check if a website is up
- **tracert** - trace the connections to a website
- **dig** - show the DNS information for a domain
- **man** - look up a command in the manual
- **|** - pipe or pass output from the command on the left to the command on the right
- **>** - redirect output to a file...overwrite the file if it exists
- **>>** - redirect output to a file...append if it exists
- **Ctrl-R** - use type ahead to find previous commands
- **Ctrl-C** - kill the currently running command
- **nano** - text editor
- **wget** - command line file downloader
- **chmod** - change file permissions

### DNS
- Domain Name System
- domain names are converted to IP address by doing a lookup in the DNS
- dig is used to lookup the IP address for any domain name.
- an address (A) record is straight mapping from a domain name to IP address.
- a canonical name (CNAME) record maps one domain to another domain name (byu.com maps to byu.edu)
- name server (NS) record contains the names of the authoritative name servers that authorize you to place DNS records in this DNS server
- start of authority (SOA) record provides contact info about the owner of the domain name.

### Domain names
- Broken up into a root domain with one or more subdomain prefixes. root domain is represented by a secondary level domain and a top level. TLd = edu, com, org, click, etc.
- ex. [subdomain.]*secondary.top
- each subdomain may have a different IP address
- get info using whois

### Caddy
- handles creation and rotation of web certificates allowing us to easily support HTTPS
- serves up all of your static HTML, CSS, and JavaScript files.
- acts as a gateway for subdomain requests.
- port 443(https), 80(http), 22(ssh)

### HTTPS and TLS
- the secure version of HTTPS
- all data is encrypted using TLS protocol
- web certificate is required

 ### HTML
 - hypertext markup language
 - foundational content structure
 - one page - single page application (SPA)
 - group of hyperlinked pages - multi-page application (MPA)
 - **Elements** - represented with enclosing tags.
   - <p></p> = paragraph
   - html element represents the top page level structure
   - head element contains metadata about the page and page title
   - body element represents content
   - main element represents main content (as opposed to headers, footers, asides, and navigation)
   - script element is a JavaScript reference
   - meta element has metadata for the page (character set or viewport settings)
   - include element refers to external content
   - section element is a section of the main content
   - aside element is content aside from the main content
   - div elemen is a block of division of content
   - span an inline span of content
   - h1, h2, h3... h9 = text heading (1 is highest level, 9 is lowest level)
   - b bring attention
   - table table
   - tr table row
   - th table header
   - td table data
   - ol, ul, li, lists
   - a anchor to hyperlink
   - img graphical image reference
   - dialog interactive component
   - form is a collection of user input
   - input is a user input field
   - audio, video
   - svg is scalable vector graphic content
   - ifram is inline frame of another HTML page
- **Attributes** - describe the specific details of the element. (inside the element tag)
   - id - gives the element an ID to distinguish it from other elements (id="")
   - class - classifies the element into a named group of elements (class='')
- **Hyperlinks**
   - take you from one page to another with a click. represented with an anchor (a) element containing the address of the hyperlink reference (href)
   - ex. <a href="https://website.com">website</a>
- <!DOCTYPE html> tells the browser the type and version of the document.
- index.html is the default that will be shown
- **External Media** - media tags take a URL as an attribute. relative or full path. relative if it is in the same location as the HTML (src="")
- to display an image with a hyperlink in HTML, use the anchor tag to create the hyperlinke and the img tag to display the image within it.

### CSS
- style attribute, link to sheet in the head element
- elements inherite the rules of their parents. rules at a lower level override the rules at a higher level
- **Box Model** - everything is defined as a box. applying stles applies them to a rectangular box. within an element's box there are internal boxes
   - innermost - content (text or image)
   - next - padding (inherits things like background color)
   - border - color thickness, line style
   - margin - considered external and only represents whitespace.
- **Selectors**
   - element type selector (use the name of the element) (body)
   - combinators - descendant combinator (element within an element) (section h2), child (section > p), general sibling (p ~ div), adjacent sibling (p + div)
   - class selector (.summary) (.[class])
   - ID selector (#ID)
   - attribute selector (a[href]) (p[class='summary'])
   - Pseudo selector (section:hover) positional relationships, mouse interactions, hyperlink visitation states, and attributes.
 - you could use a span tag with a class or ID and style it using CSS to change the color of specific text.
 - default property value for a span element is inline.
 - **Display** - change how an html element is displayed (none, block (p or div), inline (b or span), flex, grid)
 - **Viewport meta tag** - tells the browser not to automatically scale the page
 - **Float** - moves an element to the left or the right of its container element and allows inline elements to wrap around it.
 - **Media Queries** - @media selector dynamically detects the size and orientation of the device and applies CSS rules that accommodates the size. takes one boolean argument (orientation, height, width, etc)
 - **Grid** - useful when displaying a group of child elements. Start with a container element and a lot of child elements. display: grid lets it be displayed in grid flow
 - **Flex** - partition app into areas that move around based on window size/orientation. display: flex lets it be displayed in flex flow. flex-direction changes the way that it's oriented. flex: 0 80 px 0 means it won't grow and has a height of 80 pixels. fixed size box. flex:1 it gets one fractional unit of growth.

### JavaScript
- log is to output a message.
- timers (time and timeEnd) will output the duration between time and timeEnd. wrap the code with the calls
- count will show you how many times a block of code is called.
- declare variables with let and const. let allows you to change the value. const doesn't
- variable types include null, undefined, boolean, number, BigInt, string, and symbol Boolean, Number, and String are commonly used.
- there are also object types including object, function, date, array, map, JSON
- variables can change types. important to use === or !== if you want to skip type conversion when computing equality.
- conditionals include if, else, and if else (just like in c++) compact if else a === 1 ? console.log(1) : console.log('not 1');
- boolean operators (&& || !)
- loops include for, for in, for of, while, do while, and switch.
- **Strings** - sequence of characters surrounded with single quotes, double quotes, or backticks. backtick defines a string literal that may contain JavaScript that is evaluated in place & concatenated into the string. replacement specifier is declared with a dollar sign followed by a curly brace pair. Content inside curly braces is evaluated as JavaScript.
   - length - number of characters
   - indexof() - starting index of a given substring
   - split() - split the string into an array on the given delimiter
   - startsWith() - True if the string has a given prefix
   - endsWith() - True if the string has a given suffix
   - toLowerCase() - Converts all characters to lowercase
- **Functions** - first class objects meaning they can be assigned a name, passed as a parameter, returned as a result, and referenced from an object or array. Begins with the function keyword and is followed by zero or more parameters and a body with zero of more return statements.
   - **Paramenters** - if a parameter is not provided, the value is undefined when the function executes.
   - the function can define a default value. assign a value to the parameter in the function delaration.
   - **Anonymous functions** - assign a function to a variable so that they can be passed as a parameter or stored as an object property.
   - **Inner functions** - functions declared inside other functions.
- **Arrow functions** - arrow syntax makes code more complex. no need for the function keyword. just use => after the parameter declaration. () => 3
   - **return values** - return keyword optional if no curly braces are provided and the function contains a single expression. The result of the expressio is automatically returned. If curly braces are provided, it behaves just like a standard function.
   - **This pointer** - inherit the this pointer from where it is created. makes a closure. allows the function to continue referencing its creation scope, even after it has passed out of that scope. Closures can remember the values of variables when the function was created instead of what they are when they are executed.
   - **debounce** - only execute a specified function once within a given time window. window.addEventListener
- **Arrays** - basically just a list :)
   - push() - Add an item to the end of the array a.push(4)
   - pop() - Remove an item from the end of the array x = a.pop()
   - slice() - Return a sub-array a.slice(1, -1)
   - sort() - Run a function to sort an array in place a.sort((a,b) => b-a)
   - value() - Creates an iterator for use with a for of loop for (i of a.values()) {...}
   - find() - Find the first item satistfied by a test function a.find(i => 1 < 2)
   - forEach() - Run a function on each array item a.forEach(console.log)
   - reduce() - Run a function to reduce each array item to a single item a.reduce((a,c) => a + c)
   - map() - Run a function to map an array to a new array a.map(i => i+i)
   - filter() - Run a function to remove items a.filter(i => i%2)
   - every() - Run a function to test if all items match a.every(i => i < 3)
   - some() - Run a function to test if any items match a.some(i => 1 < 1)
- **JSON** - JavaScript Object Notation. simple and effective way to share and store data. easily convertable to and from JavaScript objects. Always encoded with UTF-8. JSON document contains one of the following data types:
   - string
   - number
   - boolean
   - array
   - object (kinda like a dictionary or a map). The most common data type a JSON document contains. Strings are always delimited with double quotes. commas delimit arrays. curly braces delimit and object.
   - null
   - JSON.parse & JSON.stringify
 - **Regular Expressions** - support built into Javascript. match, replace, search, and split accept regex. for a quick test to see if there is a match use the object's test function.
 - **Rest** - have a function take in an unknown number of parameters. rest sytax is basically a parameter that contains the rest of the parameters. last parameter of any function, prefix it with three periods. Combines the parameters into an array.
 - **Spread** - does the opposite of rest. takes an iterable (array or string) and expandis it into a function's parameters.
 - **Exceptions** - try catch and throw syntax. triggered whenever your code generates an exception using the throw keyword or runtime... wrap a code block with try, follow try block with catch block. If an exception is thrown in the try block, the rest of the code is ignored and the catch block is called. finally block is always called whenever the try block is exited.
 - **Fallbacks** - implemented using exception handling. normal feature path in try block, fallback implementation in the catch block.
 - **Desctructuring** - process of pulling individual items out of an existing one or removing structure. done with arrays or objects. kind of looks like declaring an array with the syntax on the left side of the expression. Same with objects. specify the properties you want to pull from the source object. you can also map names to new variables. default value provided for missing ones.
 - **Object** - collection of name value pairs referred to as properties. name has to be String or symbol, value can be any type. have common object-oriented functionality (constructors, this pointer, static properties, functions, inheritance). Can be created with the "new" operator. causes the constructor to be called. You can add properties by referencing the property name in assignment. properties can be referenced with dot or brack notation... obj.prop or obj['prop']
 - **Object-literals** - declare a variable of object type.
 - **Object-functions** - entries: returns an array of key value pairs. keys: returns an array of keys. values: returns an array of values.
 - **Constructor** - any function that returns an object
 - **This pointer** - in the context of an object, it's a pointer to the object.
 - **Classes** - used to define objects. clarifies the intent to create a reusable component rather than a one-off object. similar to declaring an object but have an explicit constructor and assumed function declarations (?). you can make properties and functions private by putting # before them.
 - **Inheritance** - extends keyword used to define inheritance. super function passes parameters to the parent class. the parent function can be accessed using super.
 - **Scope** - global, module, function, block
   - Global this - when this is referenced outside a function or object it refers to the browser's window object
   - Function this - refers to the object that owns the function. either an object you defined or global This
   - object this - refers to the object.
   - array
   - Closure is a function and its surrounding state
   - arrow functions inherit the this pointer of their creation context.
- **Modules** - allow for paritioning and sharing of code. Node.js modules are called CommonJS modules. JavaScript modules are called ES modules. create a file-based scope. you must export the objects from one file and import them into another. Modules can only be called from other modules, not from the global scope. in HTML  script type="module" leak it into the global scope by attaching an event handler or by adding it to the global window object.
- **DOM** - object representation of HTML elements. global variable name is document. for everything in the HTML there is a node in the DOM (elements, attributes, text, comments) DOM is a big tree. DOM element interface: iterate child elements, access parent element, manipulate element attributes. querySelectorAll select elements from the documents. textContent contains all of the element's text. innerHTML is the textual representation of an element's HTML content. insert, modify, delete elements in the DOM. create element (.createElement()) on the document, insert the new element by appending it to an existing element (.appendChild()). Event listeners: clipboard (cut, copied, pasted), focus (an element gets focus), keyboard (keys are pressed), mouse (click events), text selection (when text is selected)
- **Local storage** - ability to store and retrive data on a user's browser across user sessions. setItem(name, value), getItem(name), removeItem(name), clear(), string, number, or boolean. object or array convert to string with stringify(). parse it back with .parse() when retrieved.
-  **Promises** - single threaded application, one piece of code at a time. Promise object can be pending, fulfilled, or rejected.
-  .grid = class #title = ID
-  getelementbyID('byu').style.color = green
-  switch (expression) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // code

}

## Final

### Web Services Introduction
- **Frontend Overview**
- Application intinially loaded from the web server and runs on the user's browser.
- Frontend comprises HTML, CSS, JavaScript, and image files.
- All requests between devices, including fetching application files, use HTTPS.
- **Frontend Fetch**
- Frontend JavaScript can make requests to external services worldwide
- To make a web service request, use the fetch function and provide the service's URL.
- Enables obtaining external data and injecting it into the DOM for user interaction.
- **Backend Functionality**
- Next setp in full-stack development involves creating your web service (backend).
- Web service provides static frontend files and handles fetch requests for various tasks such as storing data persistently, providing security, running tasks, executing application logic (hidden from users), and communication with other users.
- Web service functions are often called endpoints or APIs.
- **Backend Interaction**
- backend web service can use fetch to make requests to other web services.
- Example: frontend fetches user data from backend, which in turn fetches data from a database and another service for subway routes.
- backend combines fetched data and returns it to the frontend for display.
- **Key Concepts**
- frontend fetches external data using https
- backend serves as the application's backend, handling various tasks and interacting with databases and external services.
- fetch function is crucial for communication between frontend and backend.
- endpoints/apis are the functions provided by a web service
- full stack application involves both frontedn and backend development.

### URL
- **Definition**
- URL stands for uniform resource locator
- represents the location of a web resouce, which can be diverse, including web pages, fonts, images, videos, database records, or JSON objects.
- Examples of ephemeral resources: visitation counter, gaming session.
- **URL Structure**
- syntax: <scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>
- **URL components**
- scheme: example - https. represents the protocol required to request the resource
- domain name: example - byu.edu. the domain that owns the resource.
- port: example - 443. specifices the network port used to connect to the domain. default: 80 for http, 443 for https
- path: example - /cs/260/student. represents the path to the resource on the domain. doesn't necessarily correspond to the file system. it can beb logical (endpoint parameters, database table, object schema).
- parameters: example - filter=accepted. key-value pairs representing additional qualifiers on the resource. also called the query string.
- anchor: example - summary. represents a sub-location in the resource. for html pages, prompts the browser to scroll to the element with a matching ID. Also called hash or fragment ID.
- **Additional URL Considerations**
- Historical convention: usernames and passwords could precede the domain for authentication but are now deprecated for security reasons.
- URN (uniform resource name): unique resource name without location information.
- URI (uniform resource identifier): general resource identifier referring to either a URL or URN.
- In web programming, focus is typically on URLs
- **Key Concepts**
- understanding URL structure: scheme, domain name, port, path, parameters, anchor.
- usage of usernames/passwords in URLs (deprecated for security).
- distinction between URN and URI in the context of web resources.

### Ports
-**Importance of Ports**
- Connection to a device on the internet requires both an IP address and a numbered port.
- Ports enable a single device to support multiple protocols and various services
- ports may be externally exposed or used internally on the device.
- **IANA and Port Usage**
- Internet assigned numbers authority (IANA) defines standard usage for port numbers.
- port ranges:
- 0-1023: standard protocols.
- 1024 10 49151: assigned to requesting entities.
- 49152 to 65535: dynamic, used for creating dynamic connections to a device.
- **Common Port Numbers**
- 20: FTP (file transfer protocol) for data transfer
- 22: SSH (secure shell) for connecting remote devices
- 80: HTTP (hypertext transfer protocol) for web requests.
- 443: HTTPS (HTTP secure) for secure web requests.
- 25: SMTP
- 53: DNS
- 110: POP3
- 123 NTP
- 161 SNMP
- 194 IRC
- **Web Server Example**
- your web server exposes ports externally for different purposes: port 22, 443, 80... see above
- **Caddy**
- listens on ports 80 and 443
- requests on 80 are automatically redirected to port 443 for a secure connection
- handling requests on 443. reads static files if the path matches. connects to gateway services on specified ports (eg 3000 or 4000) based on path definitions.
- **Managing Ports Internally**
- internally on a web server, multiple web services can run, each using a different port
- consistency is crucial, ensure each service uses a unique port.

### HTTP
-**Intro**
- HTTP is the language of the web, faciliating communication between web clients (browsers) and servers
- understanding HTTP internals enhances effective communication on the web
- **HTTP Exchange**
- interaction involves HTTP requests and responses
- user browser debugger or tools like curl to visualize the exchange
- **HTTP Request syntax**
- general syntax: <verb><url path, parameters, anchor><version>
- headers: <header key: value>*
- body (optional)
- example request:
- GET /hypertext/WWW/Helping.html HTTP/1.1
- Host: info.cern.ch
- Accept: text/html
- **HTTP Response Syntax**
- General syntax: <version> <status code> <status string>
- headers: <header key: value>
- body (optional)
- example response:
- HTTP/1.1 200 OK
- Date: Tue, 06 Dec 2022 21:54:42 GMT
- Server: Apache
- ...
- Content-Type: text/html
- **Common HTTP Verbs**
- GET: get requested resource
- POST: create a new resource; includes the resource in the request body
- PUT: update a resource; requires a unique ID
- DELETE: delete a resource; requires the unique ID
- OPTIONS: get metadata about a resource; usually returns only HTTP headers.
- **Status Codes**:
- 1xx: informational
- 2xx: Success
- 3xx: redirect
- 4xx: client errors
- 5xx: server errors
- **Examples
- 100 continue
- 200 success
- 201 created
- 204 no content
- 304 not modified
- 307 permanent redirect
- 308 temporary redirect
- 400 bad request
- 401 unauthorized
- 403 forbidden
- 404 not found
- 408 request timeout
- 409 conflict
- 418 I'm a teapot
- 429 too many requests
- 500 internal server error
- 503 service unavailable
- **HTTP Headers**
- Metadata about a request or response
- examples: authorization: token authorizing user, accept: format the client accepts, content-type: format of the content being sent, cookie: key-value pairs generated by the server and stored on the client, host: domain name of the server, origin: indenities the origin that cause the request, access-contorl-allow-origin: server response of what origins can make a request, content-length: number of bytes contained in the response, cache-control: tells client how to cache, user-agent: client application making the request
- **Body**
- format dfined by the content-type header
- HTML, image, JSON, JavaScript are examples
- client specifies accepted formats using the accept headers
- **Cookies**
- generated by the server, passed to the client, and returned in subsequent requests
- used for tracking state, user preferences, authentication credentials

### SOP and CORS
- **Same Origin Policy**
- restricts JavaScript requests to a domain only if it matches the domain the user is currently viewing.
- SOP enhances security but introduces challenges for building web applications that interact with multiple domains.
- **Cross-Origin Resourse Sharing (CORS)**
- addresses SOP limitations
- allows client to specify the origin of a request and lets the server respond with allowed origins
- may allow all origins (*) or specifiy certain origins)

### Fetch
- ability to make HTTP requests from JavaScript
- **Fetch basics**
- fetch function takes a URL and returns a promise
- promises' callback function is asynchronously invoked when the requested URL content is obtained.
- if the content is of type application/json, the json function on the response object can be used to convert it to a JavaScript Object.
- Example Request: fetch('https://api.quotable.io/random')
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });

- Example Response: {
  "content": "Never put off till tomorrow what you can do today.",
  "author": "Thomas Jefferson"

}
-Post request, population options parameter with the HTTP method and headers: fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'test title',
    body: 'test body',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });

  ### Service Design
  - **Service Design Overview**
  - web services play a crucial role in web applications, handling tasks like user authentication, session tracking, data storage, analysis, and connecting with peers
  - well-designed contributes to increased productivity, user satisfaction, and cost efficiency
  - **Model and Sequence Diagrams**
  - model primary objects and their interactions
  - use sequence diagrams to illustrate object interactions
  - **Leveraging HTTP**
  - design influenced by HTTP verbs
  - leverage HTTP infrastructure for caching, edge servers, and replication servers to enhance performance and resilience
  - **Endpoints Design**
  - service endpoints are API entry points, each serving a specific purpose
  - **Exposing Endpoints**
  - three common models, RPC, REST, and GraphQL
  - RPC (remote procedure calls): simple functional calls often using the POST HTTP verb, mapping directly to server-side functions
  - REST (representational state transfer): utilizes HTTP principles, focusing on resources and their state changes. optimizes caching
  - GraphQL: emphasizes data manipulation through queries, reducing the need for multiple REST or RPC calls. One query endpoint.

## Node.js
- application for deploying JS outisde of a browser, JS can power your entire technology stack.
- Took the V8 engine and ran it inside of the console application. V8 reads the code and executes it.
- NVM = node version manager
- node -v to check that it is installed
- pass JS file to node
- NPM = node package manager, knkows how to access repository of preexisting packages. npm init -y to accept defaults. used to install and manage JS packages.
- package.json contains metadata (name and default entry JS file), scripts (commands that you can execute to run, test, or distribute code), and dependencies (different packages).

## Express
- **introduction**
- express is a node package that provides enhanced features
- to set up: npm install express
- create an application by requiring and calling the express constructor:
- const express = require('express');
const app = express();
app.listen(8080);
- **Defining routes**
- revolves around http routing and middleware functions
- use HTTP verbs on the app object to define routes
- consist of URL patterns and callback functions
- path parameters, previxed with : allow dynamic URL patterms
- example:
- app.get('/store/:storeName', (req, res, next) => {
  res.send({ name: req.params.storeName });
});
- **Middleware in express**
- adds functionality
- follows mediator/middleware pattern
- express provides built-in middleware for routing, authentication, sessions, etc.
- middleware functions using app.use
- pattern: function mddilewareName(req, res, next)
- example:
- app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});
- **Built-in Middleware**
- include express.static for serving static files
- order of middleware addiction determines hte order of execution
- example:
- app.use(express.static('public'));
-  **Third-party Middleware**
-  installed using NPM and include in project
-  ex. cookie-parser for handling cookies
-  example:
-  const cookieParser = require('cookie-parser');
app.use(cookieParser());
- **Error handling middleware**
- take an additional err parameter
- example:
- app.use((err, req, res, next) => {
  res.status(500).send({ type: err.name, message: err.message });
});
- **full example**
- const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
// ... (routes, middleware, error handling)
const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

### PM2
- **Intro**
- to keep programs running persistently, register them as daemons
- PM2 is a tool that manages node.js processes, ensuring they run continuously
- **PM2 Commands**
- pm2 ls - list all hosted node processes
- pm2 monit - visual monitor
- pm2 start index.js -n <name> - add a new process with an explicit name
- pm2 start index.js -n <name> -- <port> - add a new process with an explicit name and port parameter
- pm2 stop <name> - stop a process
- pm2 restart <name>
- pm2 delete <name>
- pm2 delete all
- pm2 save
- pm2 restart all
- pm2 restart <name> --update-env - reload process and update Node versio nto the current environment definition
- pm2 update
- pm2 start <file.js> --watch --ignore-wathc="node_modules" - automatically reload service when index.js changes
- pm2 describe <name>
- pm2 startup
- pm2 logs <name>
- pm2 env <id>
- **Registering a new web service**
- add a rule to the caddyfile for directing requests to the new subdomain
- create a directory and add files for the new web service
- configure pm2 to host the new web service

  ### Data Services
  - to query for documents using MongoDP use find fucntion on the collection object. aysnchronous so use await keyword
  - no parameters, return entire collection
  - $gt is greater than
  - $lt is less than
 
 ### Authorization SErvices
  - **cookie**
  - domain: specifies the purpose to which the cookie belongs, limits the cookie to be sent only to specified domain and its subdomains
  - path: defines the URL path for which the cookie is valid, restricts the cookie to be sent only for requests matching the specified path
  - samesite: manages when cookies should be sent with cross-site requests, helps prevent cross-site request forgery (CSRF) attack by controlling when cookies are sent the requests initiated by third-party websites. strict, lax, none. will only return the cookie to the domain that generated it.
  - HTTPOnly: enhances security by preventing client-side scripts from accssing the cookie. When set, the cookie is not accessible through the document.cookie API in Js. tells the browser to not allow JS running on the browser to read the cookie
  - Secure: requires HTTPs to be used when sending the cookie backto the server.
 
### Account creation and login
- store users in Mongo
- getUser and createUser functions
- uuid package to generate authentication tokens
- cryptographically hash the password. hash the login password and compare it to stored hash
- bcrypt package
- pass authentication token to the browser
- bcrypt.compare

### Websocket
- after initial connection is made and upgraded to a websocket connection the relationship changes to a peer-to-peer connection where either party can efficiently sned data at any time.
- only between two parties
- create a websocket object by specifying the port you want to communicate on
- send messages with send function
- register callback using the onmessage function to receive messages
- ws package is used to create a websocketserver
-  **Chat client**
-  provides input for user's name and input for creating messages and an element to display the messages that are sent and received
-  JS provides interaction with the DOM
-  event listener on name input and disable if the name is empty.
-  add a listener that watch for the Enter keystroke
-  window.location.protocol... non-secure http ws, otherwise wss
-  window.location.host, connect the websocket
-  add listener for onopen event
-  ping and pong to keep the connection alive

### Web Frameworks
- react combines JS and HTML into its component format. CSS declared outside of the JSX file.
- JSX is a syntax extension for JS used with react to describe what the UI should look like. allows you to write HTML in js. curly braces are used for embedding JS expressions. dynamically include values, variables, or JS expressions.


### React
- **JSX**
- converted into valid HTML and JS using Babel. Both HTML and JS in a single representation.
- **Components**
- allow you to modularize the functionality of your application
- generate user interface using render function to insert into the component HTML element
- **State**
- component can have internal state. created by calling react.usestate function
- returns a variable that contains the current state and a function to update the state
-  **Toolchains**
-  functional pieces include:
-  code repository - github
-  linter
-  prettier
-  transpiler - vite, ESbuild, postcss
-  polyfill
-  bundler - rollup
-  minifier
-  testing
-  deployment
-  **Hooks**
-  allow react function style components to do everythign a class style component can do + more
-  useEffect hook - allows you to represent lifecycle events. For example, run a function every time the component completes rendering.
-  useful for creating side effects for things.
-  **Hook Dependencies**
-  only used in certain times, pass an array of dependencies as a second parameter to the useEffect
-  empty array hook is only called if the component is first rendered.

### Vite
- bundles code quickly
- great debugging support
- allows you to support JSX, TypeScript, and different CSS flavors
- ./private
- index.html - primary page, starting point to load all of the JSX components
- packag.json - npm definition for package dependencies and script commands. what maps npm run dev to start up vite
- package-lock.json - version constraints for included packages
- vite.config.js - configuration setting for vite. specifically this sets up react for development.
- ./public
- vite.svg
- ./src
- main.jsx - entry point for code execution, loads APP component
- index.css - css for application
- app.jsx jsx for application component
- app.css - css for top level app component
- ./src/assets
- react.svg
- index.html points to main.jsx points to app.jsx
- npm rund build execute build scrip and invokes vite CLI (command line interface)
