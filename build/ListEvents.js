"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ui = require("@yosmy/ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ListEvents = function ListEvents(_ref) {
  var ui = _ref.ui,
      criteria = _ref.criteria,
      onCollect = _ref.onCollect;
  return /*#__PURE__*/_react["default"].createElement(_ui.LoaderList, {
    ui: {
      layout: function layout(_ref2) {
        var children = _ref2.children;
        return /*#__PURE__*/_react["default"].createElement(ui.layout, null, /*#__PURE__*/_react["default"].createElement(_ui.Container, {
          row: true,
          flow: "row"
        }, /*#__PURE__*/_react["default"].createElement(_ui.Container, {
          cell: true,
          width: 300
        }, /*#__PURE__*/_react["default"].createElement(_ui.Text, null, "Etiqueta")), /*#__PURE__*/_react["default"].createElement(_ui.Container, {
          cell: true,
          width: 600
        }, /*#__PURE__*/_react["default"].createElement(_ui.Text, null, "Involucrados")), /*#__PURE__*/_react["default"].createElement(_ui.Container, {
          cell: true,
          width: 300
        }, /*#__PURE__*/_react["default"].createElement(_ui.Text, null, "Extra")), /*#__PURE__*/_react["default"].createElement(_ui.Container, {
          cell: true,
          width: 300
        }, /*#__PURE__*/_react["default"].createElement(_ui.Text, null, "Fecha"))), children);
      },
      empty: function empty() {
        return /*#__PURE__*/_react["default"].createElement(_ui.Text, null, "No hay eventos a\xFAn");
      },
      loading: _ui.LoaderListLoading,
      more: _ui.LoaderListMore,
      item: ui.item
    },
    criteria: {
      query: criteria.query,
      limit: criteria.limit
    },
    onCollect: onCollect
  });
};

ListEvents.propTypes = {
  ui: _propTypes["default"].shape({
    layout: _propTypes["default"].func.isRequired,
    item: _propTypes["default"].func.isRequired
  }).isRequired,
  criteria: _propTypes["default"].shape({
    query: _propTypes["default"].object,
    limit: _propTypes["default"].number.isRequired
  }).isRequired,
  onCollect: _propTypes["default"].func.isRequired
};
var _default = ListEvents;
exports["default"] = _default;