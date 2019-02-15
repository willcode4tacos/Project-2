
var db = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    var result = {
      partialDashboard: true
    };
    res.render("index", result);
  });

  app.get("/addItems", function (req, res) {
    var result = {
      addItems: true
    };
    res.render("index", result);
  });

  app.get("/updateItems/:uuid", function (req, res) {

    var query = {};
    query.uuid = req.params.uuid;

    db.Item.findOne({
      where: query
    }).then(function (dbItem) {

      var result = {
        updateItems: true,
        dbItem: dbItem
      };

      res.render("index", result);
      //res.json(dbItem);
    });
  });

  app.get("/table/allItems", function (req, res) {
    var result = {
      allItemTable: true
    };
    res.render("index", result);
  });

  app.get("/table/lowItems", function (req, res) {
    var result = {
      lowItemTable: true
    };
    res.render("index", result);
  });

  app.get("/table/expiredItems", function (req, res) {
    var result = {
      expiredItemTable: true
    };
    res.render("index", result);
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};