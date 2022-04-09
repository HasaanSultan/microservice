const gateway = require("fast-gateway");
const port = require("../ports");
const appRoutes = require("../routes");

const server = gateway({
  routes: appRoutes,
});

server.get("/get", (req, res) => res.send("Hello World!"));

server.start(port.main);
