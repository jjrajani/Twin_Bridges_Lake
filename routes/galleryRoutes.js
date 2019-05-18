const request = require("request");
const keys = require("../config/keys");

const KEY = keys.flickr_api_key;
const USER_ID = keys.flickr_user_id;
const method = "flickr.people.getPublicPhotos";
const perPage = "50";

module.exports = app => {
  app.get("/api/gallery", (req, res) => {
    request(
      `https://api.flickr.com/services/rest/?method=${method}&api_key=${KEY}&user_id=${USER_ID}&per_page=${perPage}&format=json&nojsoncallback=1`,
      (err, response, body) => {
        res.send(body);
      }
    );
  });
};
