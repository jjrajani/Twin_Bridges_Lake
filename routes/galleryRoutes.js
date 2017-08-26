// BASE_URL https://api.flickr.com/services/rest

// METHOD ?method=flickr.photos.getRecent
// KEY &api_key=29224b1aa64ce41ffc9966ef92598e22&per_page=10&format=json&nojsoncallback=1

module.exports = app => {
  app.get('/api/gallery', (req, res) => {
    console.log('getting gallery');
    res.send('Gallery');
  });
};
