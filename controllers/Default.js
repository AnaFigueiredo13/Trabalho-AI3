'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.tarefasGET = function tarefasGET (req, res, next) {
  Default.tarefasGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tarefasIdDELETE = function tarefasIdDELETE (req, res, next, id) {
  Default.tarefasIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tarefasIdGET = function tarefasIdGET (req, res, next, id) {
  Default.tarefasIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tarefasIdPUT = function tarefasIdPUT (req, res, next, id) {
  Default.tarefasIdPUT(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tarefasPOST = function tarefasPOST (req, res, next) {
  Default.tarefasPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
