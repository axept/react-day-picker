'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Day;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleEvent(handler, day, modifiers) {
  if (!handler) {
    return undefined;
  }
  var dayState = {};
  modifiers.forEach(function (modifier) {
    dayState[modifier] = true;
  });
  return function (e) {
    e.persist();
    handler(e, day, dayState);
  };
}
function Day(_ref) {
  var day = _ref.day;
  var tabIndex = _ref.tabIndex;
  var empty = _ref.empty;
  var modifiers = _ref.modifiers;
  var styles = _ref.styles;
  var onMouseEnter = _ref.onMouseEnter;
  var onMouseLeave = _ref.onMouseLeave;
  var onClick = _ref.onClick;
  var onKeyDown = _ref.onKeyDown;
  var onTouchStart = _ref.onTouchStart;
  var onTouchEnd = _ref.onTouchEnd;
  var onFocus = _ref.onFocus;
  var ariaLabel = _ref.ariaLabel;
  var ariaDisabled = _ref.ariaDisabled;
  var ariaSelected = _ref.ariaSelected;
  var children = _ref.children;

  var className = 'DayPicker-Day';
  className += modifiers.map(function (modifier) {
    return ' ' + className + '--' + modifier;
  }).join('');

  var customStyle = {};
  if (styles.day) {
    Object.assign(customStyle, styles.day(day));
  }
  if (empty) {
    return _react2.default.createElement('div', { role: 'gridcell', 'aria-disabled': true, className: className });
  }
  return _react2.default.createElement(
    'div',
    {
      className: className,
      style: customStyle,
      tabIndex: tabIndex,
      role: 'gridcell',
      'aria-label': ariaLabel,
      'aria-disabled': ariaDisabled.toString(),
      'aria-selected': ariaSelected.toString(),
      onClick: handleEvent(onClick, day, modifiers),
      onKeyDown: handleEvent(onKeyDown, day, modifiers),
      onMouseEnter: handleEvent(onMouseEnter, day, modifiers),
      onMouseLeave: handleEvent(onMouseLeave, day, modifiers),
      onTouchEnd: handleEvent(onTouchEnd, day, modifiers),
      onTouchStart: handleEvent(onTouchStart, day, modifiers),
      onFocus: handleEvent(onFocus, day, modifiers)
    },
    children
  );
}

Day.propTypes = {
  day: _react.PropTypes.instanceOf(Date).isRequired,
  children: _react.PropTypes.node.isRequired,

  ariaDisabled: _react.PropTypes.bool,
  ariaLabel: _react.PropTypes.string,
  ariaSelected: _react.PropTypes.bool,
  empty: _react.PropTypes.bool,
  modifiers: _react.PropTypes.array,
  styles: _react.PropTypes.object,
  onClick: _react.PropTypes.func,
  onKeyDown: _react.PropTypes.func,
  onMouseEnter: _react.PropTypes.func,
  onMouseLeave: _react.PropTypes.func,
  onTouchEnd: _react.PropTypes.func,
  onTouchStart: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  tabIndex: _react.PropTypes.number
};

Day.defaultProps = {
  modifiers: [],
  empty: false
};
//# sourceMappingURL=Day.js.map