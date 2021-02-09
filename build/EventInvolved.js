"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ui = require("@yosmy/ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var EventInvolved = function EventInvolved(_ref) {
  var label = _ref.label,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_ui.Container, {
    flow: "row",
    align: {
      main: "flex-start",
      cross: "center"
    }
  }, /*#__PURE__*/_react["default"].createElement(_ui.Text, {
    margin: {
      right: 1
    }
  }, label, ":"), children);
};

var _default = EventInvolved;
exports["default"] = _default;