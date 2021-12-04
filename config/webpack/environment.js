const { environment } = require("@rails/webpacker");

environment.config.set("output.filename", "js/[name].js");

environment.config.set("output.filename", (chunkData) => {
  return chunkData.chunk.name.match("sdk") !== null
    ? "[name].js"
    : "[name]-[hash].js";
});

module.exports = environment;
