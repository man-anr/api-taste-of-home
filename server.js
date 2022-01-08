const http = require('http');
const app = require('./app');
const ip = require('ip');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUiExpress = require('swagger-ui-express');

const port = process.env.PORT || 3000;

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            "title": "Taste of Home API",
            "description": "Server for Taste of Home",
            "termsOfService": "http://example.com/terms/",
            "contact": {
                "name": "API Support",
                "url": "http://www.example.com/support",
                "email": "support@example.com"
            },
            "license": {
                "name": "Apache 2.0",
                "url": "https://www.apache.org/licenses/LICENSE-2.0.html"
            },
            "version": "1.0.0",
            servers: ["http://localhost:3000"]
        },
        tags: [
            {
                name: 'Recipes',
                description: 'Everything about recipes'
            }
        ]

    },
    // ['routes/*.js']
    apis: ['app.js', 'api/routes/*.js']
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocs));



const server = http.createServer(app);

server.listen(port, () => console.log(">>> Sever deployed on: \n    http://" + ip.address() + ":" + port));