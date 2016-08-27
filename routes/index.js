
/*
 * GET home page.
 */
 
exports.index = function(req, res) {
    var date = req.params.date;
    date = Number(date) || date;
    date = new Date(date);
    res.json({ 
        "unix": isNaN(date) ? null : date.getTime(),
        "natural": isNaN(date) ? null : date.toDateString()
    });
};

exports.home = function(req, res){
  res.render('index');
};