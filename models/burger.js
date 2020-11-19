var orm = require("../config/orm.js");


var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  create: function (cols, vals, cb) {
    orm.create("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
 // Delete a burger from the db.
 deleteOne: function(condition, cb) {
  orm.deleteOne("burgers", condition, function(res) {
      cb(res);
  });
  }
};
module.exports = burger

