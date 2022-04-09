const ports = require("./ports");

const baseURL = "http://localhost:";

const routes = [
  {
    prefix: "/volume",
    target: baseURL + ports.volume,
  },
];

module.exports = routes;
