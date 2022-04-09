const express = require("express");
const app = express();
const port = require("../ports");

app.get("/calculate-volume/:width/:length/:height", (request, response) => {
  try {
    const { width, length, height } = request.params;
    const volume = (width * length * height) / 500; // calculating volume
    let res = {
      data: {
        volume: volume,
      },
    };
    response.send(res);
  } catch (e) {
    response.status(500).send({ error: e });
  }
});

app.listen(port.volume, () => {
  console.log("volume service running on port 8081");
});
