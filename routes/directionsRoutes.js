//     'https://maps.googleapis.com/maps/api/directions/json?origin=75+9th+Ave+New+York,+NY&destination=MetLife+Stadium+1+MetLife+Stadium+Dr+East+Rutherford,+NJ+07073&key=AIzaSyCexFsxDoQltJZDyF__z2ayYEKteqw2bJY',
var request = require('request');

module.exports = app => {
  app.get('/api/directions/:origin/:destination', (req, res) => {
    const origin = req.params.origin;
    // 75+9th+Ave+New+York,+NY
    const destination = req.params.destination;
    // MetLife+Stadium+1+MetLife+Stadium+Dr+East+Rutherford,+NJ+07073
    request(
      {
        uri: `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=AIzaSyCexFsxDoQltJZDyF__z2ayYEKteqw2bJY`
      },
      (err, response, body) => {
        res.send(body);
      }
    );
  });
};
