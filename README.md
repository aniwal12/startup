# Cookbook
## Description deliverable
### Elevator pitch
Last week I called my mom to ask for her pumpkin bread recipe... AGAIN. This happens around this time every year, but it doesn't need to. With Cookbook, users can easily share recipes with other users and request recipes from other users. Now, I don't need to call my mom every fall to get the same pumpkin bread recipe. Instead, I can surprise her with a freshly made loaf.
### Design
### Key features
- Secure login
- Ability to create recipe requests.
- Ability to share recipes with other users.
### Technologies
- **HTML** - Uses correct HTML structure. One page for login and one for sending and requesting recipes.
- **CSS** - Style application to look good accross various devices and screen sizes, use good whitespace, and have good color contrast.
- **JavaScript** - Provide login, display recipes, display option to send/request recipes from other users, display recipe requests. 
- **Web Service** - Backend service with endpoints for:
        - login
        - retrieving recipe requests
        - submitting recipes
        - retrieving recipes
- **Authentication** - Register and login users. Securely store credentials in database. Require authentication to send and request recipes.
- **Database persistence** - Store users, recipes, and requests in database.
- **WebSocket** - As a user shares a recipe, the recipe is broadcast to the intended recipient.
- **Web Framework** - Application ported to use the React web framework.
