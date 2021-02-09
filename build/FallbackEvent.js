"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ui = require("@yosmy/ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FallbackEvent = function FallbackEvent(_ref) {
  var ui = _ref.ui,
      labels = _ref.labels,
      involved = _ref.involved,
      extra = _ref.extra,
      date = _ref.date;
  labels = labels.map(function (label) {
    return label.replace("yosmy.", "");
  });
  return /*#__PURE__*/_react["default"].createElement(ui.layout, {
    label: /*#__PURE__*/_react["default"].createElement(_ui.Json, null, labels),
    involved: [/*#__PURE__*/_react["default"].createElement(_ui.Json, null, involved)],
    extra: /*#__PURE__*/_react["default"].createElement(_ui.Json, null, extra),
    date: date
  });
};

FallbackEvent.propTypes = {
  ui: _propTypes["default"].shape({
    layout: _propTypes["default"].func.isRequired
  }).isRequired,
  labels: _propTypes["default"].arrayOf(_propTypes["default"].string.isRequired).isRequired,
  involved: _propTypes["default"].object,
  extra: _propTypes["default"].object,
  date: _propTypes["default"].number.isRequired
};
var _default = FallbackEvent;
exports["default"] = _default;