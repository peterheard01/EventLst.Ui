//a books repository to interact with
module.exports = {
  drawRoutes: function(app) {

    var endpoint = '/books';
    var books = [
        {id: 1, title: 'Great Expectations', author: 'Dickens'},
        {id: 2, title: 'Foundation Series', author: 'Asimov'},
        {id: 3, title: 'Treasure Island', author: 'Stephenson'}
    ];
    app.get(endpoint, function(req, res) {
       //console.log(req);
       res.json(books);
    });
    app.put(endpoint, function(req, res) {
        //console.log(req);
       res.json({ message: 'books have been put' });
    });

    app.post(endpoint, function(req, res) {
       //console.log(req);
       res.json({ message: 'books have been posted' });
    });

    app.delete(endpoint, function (req, res) {
       //console.log(req);
       res.json({ message: 'books have been deleted' });
    });
  }
};
