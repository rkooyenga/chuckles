var restify = require('restify');
var builder = require('botbuilder');

// Create bot and add dialogs
var connector = new builder.ChatConnector({
    appId: "43882228-84dd-4797-ae33-6b63538f06ec",
    appPassword: ""
});
var bot = new builder.UniversalBot(connector);
bot.dialog('/', function (session) {
    session.send('I need to focus on the businesses that make me money');
});

// Setup Restify Server
var server = restify.createServer();
server.post('/api/messages', connector.listen());
server.listen(process.env.port || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
});
