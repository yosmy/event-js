"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ui = require("@yosmy/ui");

var _date = require("@yosmy/date");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var EventLayout = function EventLayout(_ref) {
  var label = _ref.label,
      involved = _ref.involved,
      extra = _ref.extra,
      date = _ref.date;
  return /*#__PURE__*/_react["default"].createElement(_ui.Container, {
    row: true,
    flow: "row",
    margin: {
      top: 4
    }
  }, /*#__PURE__*/_react["default"].createElement(_ui.Container, {
    cell: true,
    width: 300
  }, label), /*#__PURE__*/_react["default"].createElement(_ui.Container, {
    cell: true,
    width: 600,
    align: {
      cross: "center"
    },
    margin: {
      left: 1
    }
  }, Array.isArray(involved) ? involved.map(function (subject, i) {
    return /*#__PURE__*/_react["default"].createElement(subject.type, _extends({
      key: i
    }, subject.props));
  }) : involved), /*#__PURE__*/_react["default"].createElement(_ui.Container, {
    cell: true,
    width: 300,
    margin: {
      left: 1
    }
  }, extra), /*#__PURE__*/_react["default"].createElement(_ui.Container, {
    cell: true,
    margin: {
      left: 1
    },
    width: 300
  }, /*#__PURE__*/_react["default"].createElement(_ui.Text, null, (0, _date.format)(date * 1000, "D [de] MMMM, YYYY, h:mm:ss A"))));
};

EventLayout.propTypes = {
  label: _propTypes["default"].object.isRequired,
  involved: _propTypes["default"].arrayOf(_propTypes["default"].object.isRequired),
  extra: _propTypes["default"].object.isRequired,
  date: _propTypes["default"].number.isRequired
};
var _default = EventLayout;
exports["default"] = _default;