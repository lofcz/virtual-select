/*!
 * Virtual Select v1.1.4
 * https://sa-si-dev.github.io/virtual-select
 * Licensed under MIT (https://github.com/sa-si-dev/virtual-select/blob/master/LICENSE)
 *//******/ (function() { // webpackBootstrap
/******/ 	"use strict";

// UNUSED EXPORTS: VirtualSelect

;// ./src/utils/utils.js
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Utils = /*#__PURE__*/function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }
  return _createClass(Utils, null, [{
    key: "getString",
    value:
    /**
     * @param {any} text
     * @returns {string}
     * @memberof Utils
     */
    function getString(text) {
      return text || text === 0 ? text.toString() : '';
    }

    /**
     * @param {any} value
     * @param {boolean} defaultValue
     * @returns {boolean}
     * @memberof Utils
     */
  }, {
    key: "convertToBoolean",
    value: function convertToBoolean(value) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var result;
      if (value === true || value === 'true') {
        result = true;
      } else if (value === false || value === 'false') {
        result = false;
      } else {
        result = defaultValue;
      }
      return result;
    }

    /**
     * @param {any} value
     * @returns {boolean}
     * @memberof Utils
     */
  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      var result = false;
      if (!value) {
        result = true;
      } else if (Array.isArray(value)) {
        if (value.length === 0) {
          result = true;
        }
      } else if (_typeof(value) === 'object' && Object.keys(value).length === 0) {
        result = true;
      }
      return result;
    }

    /**
     * @param {any} value
     * @returns {boolean}
     * @memberof Utils
     */
  }, {
    key: "isNotEmpty",
    value: function isNotEmpty(value) {
      return !Utils.isEmpty(value);
    }

    /**
     * Normalizes values by converting booleans to strings while preserving other types
     * Handles both single values and arrays efficiently
     * @param {*} value - The value to normalize
     * @return {*} - Normalized value(s)
     * @memberof Utils
     */
  }, {
    key: "normalizeValues",
    value: function normalizeValues(value) {
      // Fast path for arrays
      if (Array.isArray(value)) {
        var result = new Array(value.length);
        for (var i = 0; i < value.length; i += 1) {
          var v = value[i];
          if (v === true) {
            result[i] = 'true';
          } else if (v === false) {
            result[i] = 'false';
          } else {
            result[i] = v;
          }
        }
        return result;
      }

      // Handle single values
      if (value === true) {
        return 'true';
      }
      if (value === false) {
        return 'false';
      }
      return value;
    }

    /**
     * @param {any[]} array
     * @param {any} value
     * @param {boolean} cloneArray
     * @returns {any[]}
     * @memberof Utils
     */
  }, {
    key: "removeItemFromArray",
    value: function removeItemFromArray(array, value) {
      var cloneArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (!Array.isArray(array) || !array.length) {
        return array;
      }
      var inputArr = cloneArray ? _toConsumableArray(array) : array;
      var index = inputArr.indexOf(value);
      if (index !== -1) {
        inputArr.splice(index, 1);
      }
      return inputArr;
    }

    /**
     * @param {any[]} array
     * @returns {any[]}
     * @memberof Utils
     */
  }, {
    key: "removeArrayEmpty",
    value: function removeArrayEmpty(array) {
      if (!Array.isArray(array) || !array.length) {
        return [];
      }
      return array.filter(function (d) {
        return !!d;
      });
    }

    /**
     * @param {number} max
     * @param {number} max
     * @returns {number}
     * @memberof Utils
     */
  }, {
    key: "getRandomInt",
    value: function getRandomInt(max) {
      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var minN = Math.ceil(min);
      var maxN = Math.floor(max);
      return Math.floor(Math.random() * (maxN - minN - 1)) + minN;
    }

    /**
     * @param {string} text
     * @return {string}
     * @memberof Utils
     */
  }, {
    key: "regexEscape",
    value: function regexEscape(text) {
      var ESC_REGEX = /[-/\\^$*+?.()|[\]{}]/g;
      return text.replace(ESC_REGEX, '\\$&');
    }

    /**
     * Removes diacritical marks from a string for accent-insensitive comparison.
     * E.g., "café" -> "cafe", "naïve" -> "naive", "Přestup" -> "Prestup"
     * @param {string} text
     * @return {string}
     * @memberof Utils
     */
  }, {
    key: "normalizeString",
    value: function normalizeString(text) {
      // NFD decomposes characters: "á" becomes "a" + combining acute accent
      // Then we remove only the combining diacritical marks (U+0300 to U+036F)
      // This preserves spaces, punctuation, and other characters
      return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    /**
     * @static
     * @param {*} container
     * @param {string} text
     * @return {boolean}
     * @memberof Utils
     */
  }, {
    key: "willTextOverflow",
    value: function willTextOverflow(container, text) {
      var tempElement = document.createElement('div');
      tempElement.style.position = 'absolute';
      tempElement.style.visibility = 'hidden';
      tempElement.style.whiteSpace = 'nowrap';
      tempElement.style.fontSize = window.getComputedStyle(container).fontSize;
      tempElement.style.fontFamily = window.getComputedStyle(container).fontFamily;
      tempElement.textContent = text;
      document.body.appendChild(tempElement);
      var textWidth = tempElement.clientWidth;
      document.body.removeChild(tempElement);
      return textWidth > container.clientWidth;
    }

    /**
     * @static
     * @param {string} text
     * @return {string}
     * @memberof Utils
     */
  }, {
    key: "replaceDoubleQuotesWithHTML",
    value: function replaceDoubleQuotesWithHTML(text) {
      return text.replace(/"/g, '&quot;');
    }

    /**
     * @static
     * @param {string} text
     * @return {boolean}
     * @memberof Utils
     */
  }, {
    key: "containsHTML",
    value: function containsHTML(text) {
      return /<[a-z][\s\S]*>/i.test(text);
    }

    /**
     * @static
     * @param {string} text
     * @return {boolean}
     * @memberof Utils
     */
  }, {
    key: "containsHTMLorJS",
    value: function containsHTMLorJS(text) {
      return /<([a-z]+)[\s\S]*?>|on\w+="[^"]*"/i.test(text);
    }

    /**
     * Throttle function to limit how often a function can fire
     * @static
     * @param {Function} method - The function to throttle
     * @param {number} delay - The throttle delay in milliseconds
     * @return {Function}
     * @memberof Utils
     */
  }, {
    key: "throttle",
    value: function throttle(method, delay) {
      var prev = 0;
      var timeout;
      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        var now = new Date().getTime();
        var remaining = delay - (now - prev);
        clearTimeout(timeout);
        if (remaining <= 0) {
          prev = now;
          method.apply(void 0, args);
        } else {
          timeout = setTimeout(function () {
            method.apply(void 0, args);
          }, remaining);
        }
      };
    }
  }]);
}();
;// ./src/utils/dom-utils.js
function dom_utils_typeof(o) { "@babel/helpers - typeof"; return dom_utils_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, dom_utils_typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || dom_utils_unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function dom_utils_toConsumableArray(r) { return dom_utils_arrayWithoutHoles(r) || dom_utils_iterableToArray(r) || dom_utils_unsupportedIterableToArray(r) || dom_utils_nonIterableSpread(); }
function dom_utils_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function dom_utils_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return dom_utils_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? dom_utils_arrayLikeToArray(r, a) : void 0; } }
function dom_utils_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function dom_utils_arrayWithoutHoles(r) { if (Array.isArray(r)) return dom_utils_arrayLikeToArray(r); }
function dom_utils_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function dom_utils_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function dom_utils_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, dom_utils_toPropertyKey(o.key), o); } }
function dom_utils_createClass(e, r, t) { return r && dom_utils_defineProperties(e.prototype, r), t && dom_utils_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function dom_utils_toPropertyKey(t) { var i = dom_utils_toPrimitive(t, "string"); return "symbol" == dom_utils_typeof(i) ? i : i + ""; }
function dom_utils_toPrimitive(t, r) { if ("object" != dom_utils_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != dom_utils_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var DomUtils = /*#__PURE__*/function () {
  function DomUtils() {
    dom_utils_classCallCheck(this, DomUtils);
  }
  return dom_utils_createClass(DomUtils, null, [{
    key: "addClass",
    value:
    /**
     * @param {HTMLElement | NodeListOf<HTMLElement>} $ele
     * @param {string} classNames
     */
    function addClass($ele, classNames) {
      if (!$ele) {
        return;
      }
      var classNamesArr = classNames.split(' ');
      DomUtils.getElements($ele).forEach(function ($this) {
        var _$this$classList;
        (_$this$classList = $this.classList).add.apply(_$this$classList, dom_utils_toConsumableArray(classNamesArr));
      });
    }

    /**
     * @param {HTMLElement | NodeListOf<HTMLElement>} $ele
     * @param {string} classNames
     */
  }, {
    key: "removeClass",
    value: function removeClass($ele, classNames) {
      if (!$ele) {
        return;
      }
      var classNamesArr = classNames.split(' ');
      DomUtils.getElements($ele).forEach(function ($this) {
        var _$this$classList2;
        (_$this$classList2 = $this.classList).remove.apply(_$this$classList2, dom_utils_toConsumableArray(classNamesArr));
      });
    }

    /**
     * @param {HTMLElement | NodeListOf<HTMLElement>} $ele
     * @param {string} classNames
     * @param {boolean} [isAdd]
     */
  }, {
    key: "toggleClass",
    value: function toggleClass($ele, classNames, isAdd) {
      if (!$ele) {
        return;
      }

      /** @type {boolean | undefined} */
      var isAdding;
      if (isAdd !== undefined) {
        isAdding = Boolean(isAdd);
      }
      DomUtils.getElements($ele).forEach(function ($this) {
        $this.classList.toggle(classNames, isAdding);
      });
    }

    /**
     * @param {HTMLElement | HTMLElement[]} $ele
     * @param {string} className
     * @returns {boolean}
     */
  }, {
    key: "hasClass",
    value: function hasClass($ele, className) {
      if (!$ele) {
        return false;
      }
      var elements = DomUtils.getElements($ele);
      return elements.some(function ($el) {
        return $el.classList.contains(className);
      });
    }

    /**
     * @param {HTMLElement} $ele
     * @returns {boolean}
     */
  }, {
    key: "hasEllipsis",
    value: function hasEllipsis($ele) {
      if (!$ele) {
        return false;
      }
      return $ele.scrollWidth > $ele.offsetWidth;
    }

    /**
     * @param {HTMLElement} $ele
     * @param {string} name
     * @param {string} [type]
     * @returns {any}
     */
  }, {
    key: "getData",
    value: function getData($ele, name, type) {
      if (!$ele) {
        return undefined;
      }

      /** @type {any} */
      var value = $ele ? $ele.dataset[name] : '';
      if (type === 'number') {
        value = parseFloat(value) || 0;
      } else if (value === 'true') {
        value = true;
      } else if (value === 'false') {
        value = false;
      }
      return value;
    }

    /**
     * @param {HTMLElement} $ele
     * @param {string} name
     * @param {string} value
     */
  }, {
    key: "setData",
    value: function setData($ele, name, value) {
      if (!$ele) {
        return;
      }

      // eslint-disable-next-line no-param-reassign
      $ele.dataset[name] = value;
    }

    /**
     * @param {HTMLElement} $ele
     * @param {string} name
     * @param {string} value
     */
  }, {
    key: "setAttr",
    value: function setAttr($ele, name, value) {
      if (!$ele) {
        return;
      }
      $ele.setAttribute(name, value);
    }

    /**
     * @param {HTMLElement} $from
     * @param {HTMLElement} $to
     * @param {string[]} attrList
     * @param {string[]} valueLessProps
     */
  }, {
    key: "setAttrFromEle",
    value: function setAttrFromEle($from, $to, attrList, valueLessProps) {
      /** @type {any} */
      var values = {};
      attrList.forEach(function (attr) {
        values[attr] = $from.getAttribute(attr);
      });
      attrList.forEach(function (attr) {
        var value = values[attr];
        if (value || valueLessProps.indexOf(attr) !== -1 && value === '') {
          $to.setAttribute(attr, value);
        }
      });
    }

    /**
     * @param {HTMLElement} $ele
     * @param {string} name
     * @param {string} value
     */
  }, {
    key: "setStyle",
    value: function setStyle($ele, name, value) {
      if (!$ele) {
        return;
      }

      // @ts-ignore
      // eslint-disable-next-line no-param-reassign
      $ele.style[name] = value;
    }

    /**
     * @param {HTMLElement} $ele
     * @param {any} props
     */
  }, {
    key: "setStyles",
    value: function setStyles($ele, props) {
      if (!$ele || !props) {
        return;
      }
      Object.keys(props).forEach(function (name) {
        // @ts-ignore
        // eslint-disable-next-line no-param-reassign
        $ele.style[name] = props[name];
      });
    }

    /**
     * @param {HTMLElement} $ele
     * @param {string} name
     * @param {string} value
     */
  }, {
    key: "setAria",
    value: function setAria($ele, name, value) {
      if (!$ele) {
        return;
      }
      var attrName = name;
      if (attrName !== 'role') {
        attrName = "aria-".concat(attrName);
      }
      $ele.setAttribute(attrName, value);
    }

    /**
     * @param {any} $ele
     * @returns {any[]}
     */
  }, {
    key: "getElements",
    value: function getElements($ele) {
      if (!$ele) {
        return [];
      }
      return $ele.forEach === undefined ? [$ele] : $ele;
    }

    /**
     * @static
     * @param {string} [$selector='']
     * @param {*} [$parentEle=undefined]
     * @return {*}
     * @memberof DomUtils
     */
  }, {
    key: "getElementsBySelector",
    value: function getElementsBySelector() {
      var $selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var $parentEle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var elements;
      var parent = $parentEle !== undefined ? $parentEle : document;
      if ($selector !== '') {
        elements = parent.querySelectorAll($selector);
      }
      return elements !== undefined ? Array.from(elements) : [];
    }

    /**
     * @param {HTMLElement} $ele
     * @param {string} events
     * @param {Function} callback
     * @param {Object} [context]
     * @param {AbortController} [context.eventHandler]
     */
  }, {
    key: "addEvent",
    value: function addEvent($ele, events, callback, context) {
      if (!$ele) {
        return;
      }
      var eventsArray = Utils.removeArrayEmpty(events.split(' '));
      eventsArray.forEach(function (event) {
        var $eleArray = DomUtils.getElements($ele);
        $eleArray.forEach(function ($this) {
          var options = context !== null && context !== void 0 && context.eventHandler ? {
            signal: context.eventHandler.signal
          } : undefined;
          $this.addEventListener(event, callback, options);
        });
      });
    }

    /**
     * @param {HTMLElement} $ele
     * @param {string} eventName
     * @param {boolean} [bubbles]
     */
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent($ele, eventName) {
      var bubbles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (!$ele) {
        return;
      }
      var $eleArray = DomUtils.getElements($ele);

      /** using setTimeout to trigger asynchronous event */
      setTimeout(function () {
        $eleArray.forEach(function ($this) {
          $this.dispatchEvent(new CustomEvent(eventName, {
            bubbles: bubbles
          }));
        });
      }, 0);
    }

    /**
     * convert object to dom attributes
     * @param {ObjectString} data
     */
  }, {
    key: "getAttributesText",
    value: function getAttributesText(data) {
      var html = '';
      if (!data) {
        return html;
      }

      // @ts-ignore
      Object.entries(data).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          k = _ref2[0],
          v = _ref2[1];
        if (v !== undefined) {
          html += " ".concat(k, "=\"").concat(v, "\" ");
        }
      });
      return html;
    }

    /**
     * convert "maxValue" to "data-max-value"
     * @param {string} prop
     */
  }, {
    key: "convertPropToDataAttr",
    value: function convertPropToDataAttr(prop) {
      return prop ? "data-".concat(prop).replace(/([A-Z])/g, '-$1').toLowerCase() : '';
    }

    /**
     * Changes the tab index of an element passed as an input
     * @static
     * @param {HTMLElement | NodeListOf<HTMLElement>} $ele
     * @param {number} newTabIndex
     * @memberof DomUtils
     */
  }, {
    key: "changeTabIndex",
    value: function changeTabIndex($ele, newTabIndex) {
      if (!$ele) {
        // eslint-disable-next-line no-console
        console.log($ele, 'Invalid element provided.');
        return;
      }
      DomUtils.getElements($ele).forEach(function ($this) {
        // eslint-disable-next-line no-param-reassign
        $this.tabIndex = newTabIndex;
      });
    }

    /**
     * @param {HTMLElement} $ele
     * @param {string} event
     * @param {Function} callback
     */
  }, {
    key: "removeEvent",
    value: function removeEvent($ele, event, callback) {
      if (!$ele) {
        return;
      }
      var $eleArray = DomUtils.getElements($ele);
      $eleArray.forEach(function ($this) {
        $this.removeEventListener(event, callback);
      });
    }

    /**
     * Get single element from selector string or return element
     * @param {string|HTMLElement} $ele
     * @return {HTMLElement|null}
     */
  }, {
    key: "getElement",
    value: function getElement($ele) {
      if ($ele) {
        if (typeof $ele === 'string') {
          $ele = document.querySelector($ele);
        } else if ($ele.length !== undefined) {
          $ele = $ele[0];
        }
      }
      return $ele || null;
    }

    /**
     * Show an element
     * @param {HTMLElement} $ele
     * @param {string} [value='block'] - CSS display value
     */
  }, {
    key: "show",
    value: function show($ele) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'block';
      DomUtils.setStyle($ele, 'display', value);
    }

    /**
     * Hide an element
     * @param {HTMLElement} $ele
     */
  }, {
    key: "hide",
    value: function hide($ele) {
      DomUtils.setStyle($ele, 'display', 'none');
    }

    /**
     * Get bounding client rect coordinates
     * @param {HTMLElement} $ele
     * @return {DOMRect|{}}
     */
  }, {
    key: "getCoords",
    value: function getCoords($ele) {
      return $ele ? $ele.getBoundingClientRect() : {};
    }

    /**
     * Get absolute coordinates including scroll position
     * @param {HTMLElement} $ele
     * @return {Object|undefined}
     */
  }, {
    key: "getAbsoluteCoords",
    value: function getAbsoluteCoords($ele) {
      if (!$ele) {
        return undefined;
      }
      var box = $ele.getBoundingClientRect();
      var pageX = window.pageXOffset;
      var pageY = window.pageYOffset;
      return {
        width: box.width,
        height: box.height,
        top: box.top + pageY,
        right: box.right + pageX,
        bottom: box.bottom + pageY,
        left: box.left + pageX
      };
    }

    /**
     * Get which sides of an element are more visible in the viewport
     * @param {HTMLElement} $ele
     * @return {Object}
     */
  }, {
    key: "getMoreVisibleSides",
    value: function getMoreVisibleSides($ele) {
      if (!$ele) {
        return {};
      }
      var box = $ele.getBoundingClientRect();
      var availableWidth = window.innerWidth;
      var availableHeight = window.innerHeight;
      var leftArea = box.left;
      var topArea = box.top;
      var rightArea = availableWidth - leftArea - box.width;
      var bottomArea = availableHeight - topArea - box.height;
      var horizontal = leftArea > rightArea ? 'left' : 'right';
      var vertical = topArea > bottomArea ? 'top' : 'bottom';
      return {
        horizontal: horizontal,
        vertical: vertical
      };
    }

    /**
     * Get all scrollable parent elements
     * @param {HTMLElement} $ele
     * @return {Array}
     */
  }, {
    key: "getScrollableParents",
    value: function getScrollableParents($ele) {
      if (!$ele) {
        return [];
      }
      var $scrollableElems = [window];
      var $parent = $ele.parentElement;
      while ($parent) {
        var overflowValue = getComputedStyle($parent).overflow;
        if (overflowValue.indexOf('scroll') !== -1 || overflowValue.indexOf('auto') !== -1) {
          $scrollableElems.push($parent);
        }
        $parent = $parent.parentElement;
      }
      return $scrollableElems;
    }
  }]);
}();
;// ./src/popover/popover.js
function popover_typeof(o) { "@babel/helpers - typeof"; return popover_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, popover_typeof(o); }
function popover_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function popover_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, popover_toPropertyKey(o.key), o); } }
function popover_createClass(e, r, t) { return r && popover_defineProperties(e.prototype, r), t && popover_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function popover_toPropertyKey(t) { var i = popover_toPrimitive(t, "string"); return "symbol" == popover_typeof(i) ? i : i + ""; }
function popover_toPrimitive(t, r) { if ("object" != popover_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != popover_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/** cSpell:ignore popcomp */
/* eslint-disable class-methods-use-this */
// @ts-nocheck


/**
 * POPPER COMPONENT
 * Original source: popper-plugin
 * Handles positioning of popover elements
 */

var allPositions = ['top', 'bottom', 'left', 'right'];
var allPositionsClass = allPositions.map(function (d) {
  return "position-".concat(d);
});
var arrowRotateMapping = {
  top: 'rotate(180deg)',
  left: 'rotate(90deg)',
  right: 'rotate(-90deg)'
};
var PopperComponent = /*#__PURE__*/function () {
  /**
   * Create a Popper
   * @property {element} $popperEle - Popper element
   * @property {element} $triggerEle - Trigger element
   * @property {element} $arrowEle - Arrow icon in the popper
   * @property {string} [position=auto] - Position of popper (top, bottom, left, right, auto)
   * @property {number} [margin=8] - Space between popper and its activator (in pixel)
   * @property {number} [offset=5] - Space between popper and window edge (in pixel)
   * @property {number} [enterDelay=0] - Delay time before showing popper (in milliseconds)
   * @property {number} [exitDelay=0] - Delay time before hiding popper (in milliseconds)
   * @property {number} [showDuration=300] - Transition duration for show animation (in milliseconds)
   * @property {number} [hideDuration=200] - Transition duration for hide animation (in milliseconds)
   * @property {number} [transitionDistance=10] - Distance to translate on show/hide animation (in pixel)
   * @property {number} [borderRadiusOffset=4] - Offset to subtract from translate when dropdown opens at top/bottom for seamless border radius
   * @property {number} [zIndex=1] - CSS z-index value for popper
   * @property {function} [afterShow] - Callback function to trigger after show
   * @property {function} [afterHide] - Callback function to trigger after hide
   */
  function PopperComponent(options) {
    popover_classCallCheck(this, PopperComponent);
    try {
      this.setProps(options);
      this.init();
    } catch (e) {
      console.warn("Couldn't initiate popper");
      console.error(e);
    }
  }
  return popover_createClass(PopperComponent, [{
    key: "init",
    value: function init() {
      var $popperEle = this.$popperEle;
      if (!$popperEle || !this.$triggerEle) {
        return;
      }
      DomUtils.setStyle($popperEle, 'zIndex', this.zIndex);
      this.setPosition();
    }

    /** set methods - start */
  }, {
    key: "setProps",
    value: function setProps(options) {
      options = this.setDefaultProps(options);
      var position = options.position ? options.position.toLowerCase() : 'auto';
      this.$popperEle = options.$popperEle;
      this.$triggerEle = options.$triggerEle;
      this.$arrowEle = options.$arrowEle;
      this.margin = parseFloat(options.margin);
      this.offset = parseFloat(options.offset);
      this.enterDelay = parseFloat(options.enterDelay);
      this.exitDelay = parseFloat(options.exitDelay);
      this.showDuration = parseFloat(options.showDuration);
      this.hideDuration = parseFloat(options.hideDuration);
      this.transitionDistance = parseFloat(options.transitionDistance);
      this.borderRadiusOffset = parseFloat(options.borderRadiusOffset);
      this.maxHeight = options.maxHeight ? parseFloat(options.maxHeight) : null;
      this.zIndex = parseFloat(options.zIndex);
      this.afterShowCallback = options.afterShow;
      this.afterHideCallback = options.afterHide;
      this.hasArrow = this.$arrowEle ? true : false;
      if (position.indexOf(' ') !== -1) {
        var positionArray = position.split(' ');
        this.position = positionArray[0];
        this.secondaryPosition = positionArray[1];
      } else {
        this.position = position;
      }
    }
  }, {
    key: "setDefaultProps",
    value: function setDefaultProps(options) {
      var defaultOptions = {
        position: 'auto',
        margin: 8,
        offset: 5,
        enterDelay: 0,
        exitDelay: 0,
        showDuration: 300,
        hideDuration: 200,
        transitionDistance: 10,
        borderRadiusOffset: 4,
        zIndex: 1
      };
      return Object.assign(defaultOptions, options);
    }

    /**
     * Calculate the optimal position for the popper without modifying the DOM
     * Returns the calculated position data without applying it
     * @returns {Object} Position data including position, top, left, and whether to flip
     */
  }, {
    key: "calculatePosition",
    value: function calculatePosition() {
      var viewportWidth = window.innerWidth;
      var viewportHeight = window.innerHeight;
      var popperEleCoords = DomUtils.getAbsoluteCoords(this.$popperEle);
      var triggerEleCoords = DomUtils.getAbsoluteCoords(this.$triggerEle);
      var popperEleWidth = popperEleCoords.width;
      var popperEleHeight = popperEleCoords.height;
      var popperEleTop = popperEleCoords.top;
      var popperEleRight = popperEleCoords.right;
      var popperEleBotttom = popperEleCoords.bottom;
      var popperEleLeft = popperEleCoords.left;
      var triggerEleWidth = triggerEleCoords.width;
      var triggerEleHeight = triggerEleCoords.height;
      var triggerEleTop = triggerEleCoords.top;
      var triggerEleRight = triggerEleCoords.right;
      var triggerEleBottom = triggerEleCoords.bottom;
      var triggerEleLeft = triggerEleCoords.left;
      var topDiff = triggerEleTop - popperEleTop;
      var leftDiff = triggerEleLeft - popperEleLeft;
      var left = leftDiff;
      var top = topDiff;
      var position = this.position;
      var secondaryPosition = this.secondaryPosition;
      var widthCenter = triggerEleWidth / 2 - popperEleWidth / 2;
      var heightCenter = triggerEleHeight / 2 - popperEleHeight / 2;
      var margin = this.margin;
      var borderRadiusOffset = this.borderRadiusOffset;
      var topEdge = window.scrollY - popperEleTop;
      var bottomEdge = viewportHeight + topEdge;
      var leftEdge = window.scrollX - popperEleLeft;
      var rightEdge = viewportWidth + leftEdge;
      var inversePosition = null;
      var viewportOffset = this.offset;
      var flipped = false;
      if (viewportOffset) {
        topEdge += viewportOffset;
        bottomEdge -= viewportOffset;
        leftEdge += viewportOffset;
        rightEdge -= viewportOffset;
      }

      /** find the position which has more space */
      if (position === 'auto') {
        var moreVisibleSides = DomUtils.getMoreVisibleSides(this.$triggerEle);
        position = moreVisibleSides.vertical;
      }
      var positionsValue = {
        top: {
          top: top - popperEleHeight - margin,
          left: left + widthCenter
        },
        bottom: {
          top: top + triggerEleHeight + margin,
          left: left + widthCenter
        },
        right: {
          top: top + heightCenter,
          left: left + triggerEleWidth + margin
        },
        left: {
          top: top + heightCenter,
          left: left - popperEleWidth - margin
        }
      };
      var positionValue = positionsValue[position];
      top = positionValue.top;
      left = positionValue.left;

      /** Calculate available space and adjust height/position if needed */
      if (this.maxHeight && (position === 'top' || position === 'bottom')) {
        var spaceAbove = triggerEleTop - topEdge - margin;
        var spaceBelow = bottomEdge - triggerEleBottom - margin;
        var maxAvailableSpace = position === 'bottom' ? spaceBelow : spaceAbove;
        var oppositeSpace = position === 'bottom' ? spaceAbove : spaceBelow;

        // Check if we should flip to opposite position for better fit
        if (maxAvailableSpace < 100 && oppositeSpace > maxAvailableSpace) {
          // Flip to opposite position
          position = position === 'bottom' ? 'top' : 'bottom';
          flipped = true;
          maxAvailableSpace = oppositeSpace;
          // Recalculate positionsValue with new position and get new coordinates
          var newPositionsValue = {
            top: {
              top: topDiff - popperEleHeight - margin,
              left: leftDiff + widthCenter
            },
            bottom: {
              top: topDiff + triggerEleHeight + margin,
              left: leftDiff + widthCenter
            }
          };
          var newPositionValue = newPositionsValue[position];
          top = newPositionValue.top;
          left = newPositionValue.left;
        }

        // Only reduce if we need to fit in smaller space than desired
        if (this.maxHeight > maxAvailableSpace) {
          // Reduce height to fit available space (with minimum of 100px)
          var newHeight = Math.max(100, maxAvailableSpace);
          // Update height for positioning calculations
          popperEleHeight = newHeight;
          // Recalculate position with new height
          if (position === 'top') {
            top = topDiff - popperEleHeight - margin;
          } else {
            top = topDiff + triggerEleHeight + margin;
          }
        }
      }

      /** setting secondary position value */
      if (secondaryPosition) {
        if (secondaryPosition === 'top') {
          top = topDiff;
        } else if (secondaryPosition === 'bottom') {
          top = topDiff + triggerEleHeight - popperEleHeight;
        } else if (secondaryPosition === 'left') {
          left = leftDiff;
        } else if (secondaryPosition === 'right') {
          left = leftDiff + triggerEleWidth - popperEleWidth;
        }
      }

      /* if popperEle is hiding on left edge */
      if (left < leftEdge) {
        if (position === 'left') {
          inversePosition = 'right';
        } else if (leftEdge + popperEleLeft > triggerEleRight) {
          /** if triggerEle is hiding on left edge */
          left = triggerEleRight - popperEleLeft;
        } else {
          left = leftEdge;
        }
      } else if (left + popperEleWidth > rightEdge) {
        /* if popperEle is hiding on right edge */
        if (position === 'right') {
          inversePosition = 'left';
        } else if (rightEdge + popperEleLeft < triggerEleLeft) {
          /** if triggerEle is hiding on right edge */
          left = triggerEleLeft - popperEleRight;
        } else {
          left = rightEdge - popperEleWidth;
        }
      }

      /* if popperEle is hiding on top edge */
      if (top < topEdge) {
        if (position === 'top') {
          inversePosition = 'bottom';
        } else if (topEdge + popperEleTop > triggerEleBottom) {
          /** if triggerEle is hiding on top edge */
          top = triggerEleBottom - popperEleTop;
        } else {
          top = topEdge;
        }
      } else if (top + popperEleHeight > bottomEdge) {
        /* if popperEle is hiding on bottom edge */
        if (position === 'bottom') {
          inversePosition = 'top';
        } else if (bottomEdge + popperEleTop < triggerEleTop) {
          /** if triggerEle is hiding on bottom edge */
          top = triggerEleTop - popperEleBotttom;
        } else {
          top = bottomEdge - popperEleHeight;
        }
      }

      /** if popper element is hidden in the given position, show it on opposite position */
      if (inversePosition) {
        var inversePositionValue = positionsValue[inversePosition];
        position = inversePosition;
        flipped = true;
        if (position === 'top' || position === 'bottom') {
          top = inversePositionValue.top;
        } else if (position === 'left' || position === 'right') {
          left = inversePositionValue.left;
        }
      }

      // Apply border radius offset for seamless connection at top/bottom positions
      if (position === 'top') {
        top += borderRadiusOffset;
      } else if (position === 'bottom' || !position || position === 'auto') {
        top -= borderRadiusOffset;
      }
      return {
        position: position,
        top: top,
        left: left,
        flipped: flipped,
        popperEleWidth: popperEleWidth,
        popperEleHeight: popperEleHeight,
        triggerEleWidth: triggerEleWidth,
        triggerEleHeight: triggerEleHeight,
        topDiff: topDiff,
        leftDiff: leftDiff
      };
    }
  }, {
    key: "setPosition",
    value: function setPosition() {
      DomUtils.show(this.$popperEle, 'inline-flex');
      var transitionDistance = this.transitionDistance;
      var borderRadiusOffset = this.borderRadiusOffset;
      var fromTop;
      var fromLeft;

      // Get calculated position
      var positionData = this.calculatePosition();
      var position = positionData.position;
      var top = positionData.top;
      var left = positionData.left;
      var popperEleHeight = positionData.popperEleHeight;
      var popperEleWidth = positionData.popperEleWidth;
      var triggerEleHeight = positionData.triggerEleHeight;
      var triggerEleWidth = positionData.triggerEleWidth;
      var topDiff = positionData.topDiff;
      var leftDiff = positionData.leftDiff;

      // Apply height adjustments based on maxHeight if needed
      if (this.maxHeight && (position === 'top' || position === 'bottom')) {
        var viewportHeight = window.innerHeight;
        var triggerEleCoords = DomUtils.getAbsoluteCoords(this.$triggerEle);
        var _triggerEleTop = triggerEleCoords.top;
        var triggerEleBottom = triggerEleCoords.bottom;
        var topEdge = window.scrollY - DomUtils.getAbsoluteCoords(this.$popperEle).top;
        var bottomEdge = viewportHeight + topEdge;
        var margin = this.margin;
        var viewportOffset = this.offset;
        if (viewportOffset) {
          topEdge += viewportOffset;
          bottomEdge -= viewportOffset;
        }
        var spaceAbove = _triggerEleTop - topEdge - margin;
        var spaceBelow = bottomEdge - triggerEleBottom - margin;
        var maxAvailableSpace = position === 'bottom' ? spaceBelow : spaceAbove;
        if (this.maxHeight > maxAvailableSpace) {
          var newHeight = Math.max(100, maxAvailableSpace);
          DomUtils.setStyle(this.$popperEle, 'height', "".concat(newHeight, "px"));
          DomUtils.setStyle(this.$popperEle, 'maxHeight', "".concat(newHeight, "px"));
        } else {
          DomUtils.setStyle(this.$popperEle, 'height', '');
          DomUtils.setStyle(this.$popperEle, 'maxHeight', "".concat(this.maxHeight, "px"));
        }
      }
      if (position === 'top') {
        fromTop = top + transitionDistance;
        fromLeft = left;
      } else if (position === 'right') {
        fromTop = top;
        fromLeft = left - transitionDistance;
      } else if (position === 'left') {
        fromTop = top;
        fromLeft = left + transitionDistance;
      } else {
        fromTop = top - transitionDistance;
        fromLeft = left;
      }
      fromTop = fromTop;
      fromLeft = fromLeft;
      var transformText = "translate3d(".concat(parseInt(fromLeft), "px, ").concat(parseInt(fromTop), "px, 0)");
      DomUtils.setStyle(this.$popperEle, 'transform', transformText);
      DomUtils.setData(this.$popperEle, 'fromLeft', fromLeft);
      DomUtils.setData(this.$popperEle, 'fromTop', fromTop);
      DomUtils.setData(this.$popperEle, 'top', top);
      DomUtils.setData(this.$popperEle, 'left', left);
      DomUtils.removeClass(this.$popperEle, allPositionsClass.join(' '));
      DomUtils.addClass(this.$popperEle, "position-".concat(position));

      // Store the resolved position so it can be accessed after show
      this.resolvedPosition = position;
      if (this.hasArrow) {
        var arrowLeft = 0;
        var arrowTop = 0;
        var fullLeft = left + popperEleLeft;
        var fullTop = top + popperEleTop;
        var arrowWidthHalf = this.$arrowEle.offsetWidth / 2;
        var rotateText = arrowRotateMapping[position] || '';
        if (position === 'top' || position === 'bottom') {
          var triggerEleWidthCenter = triggerEleWidth / 2 + triggerEleLeft;
          arrowLeft = triggerEleWidthCenter - fullLeft;

          /** if arrow crossed left edge of popper element */
          if (arrowLeft < arrowWidthHalf) {
            arrowLeft = arrowWidthHalf;
          } else if (arrowLeft > popperEleWidth - arrowWidthHalf) {
            /** if arrow crossed right edge of popper element */
            arrowLeft = popperEleWidth - arrowWidthHalf;
          }
        } else if (position === 'left' || position === 'right') {
          var triggerEleHeightCenter = triggerEleHeight / 2 + triggerEleTop;
          arrowTop = triggerEleHeightCenter - fullTop;

          /** if arrow crossed top edge of popper element */
          if (arrowTop < arrowWidthHalf) {
            arrowTop = arrowWidthHalf;
          } else if (arrowTop > popperEleHeight - arrowWidthHalf) {
            /** if arrow crossed bottom edge of popper element */
            arrowTop = popperEleHeight - arrowWidthHalf;
          }
        }
        DomUtils.setStyle(this.$arrowEle, 'transform', "translate3d(".concat(parseInt(arrowLeft), "px, ").concat(parseInt(arrowTop), "px, 0) ").concat(rotateText));
      }
      DomUtils.hide(this.$popperEle);
    }
  }, {
    key: "resetPosition",
    value: function resetPosition() {
      DomUtils.setStyle(this.$popperEle, 'transform', 'none');
      this.setPosition();
    }
    /** set methods - end */

    /**
     * @prop {boolean} [resetPosition] - Recalculate position before show
     * @prop {object} [data] - Any custom data which would be passed to afterShow callback function call
     */
  }, {
    key: "show",
    value: function show() {
      var _this = this;
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        resetPosition = _ref.resetPosition,
        data = _ref.data;
      clearTimeout(this.exitDelayTimeout);
      clearTimeout(this.hideDurationTimeout);
      if (resetPosition) {
        this.resetPosition();
      }
      this.enterDelayTimeout = setTimeout(function () {
        var left = DomUtils.getData(_this.$popperEle, 'left');
        var top = DomUtils.getData(_this.$popperEle, 'top');
        var transformText = "translate3d(".concat(parseInt(left), "px, ").concat(parseInt(top), "px, 0)");
        var showDuration = _this.showDuration;
        DomUtils.show(_this.$popperEle, 'inline-flex');

        /** calling below method to force redraw - it would move the popper element to its fromLeft and fromTop position */
        DomUtils.getCoords(_this.$popperEle);
        DomUtils.setStyle(_this.$popperEle, 'transitionDuration', showDuration + 'ms');
        DomUtils.setStyle(_this.$popperEle, 'transform', transformText);
        DomUtils.setStyle(_this.$popperEle, 'opacity', 1);
        _this.showDurationTimeout = setTimeout(function () {
          if (typeof _this.afterShowCallback === 'function') {
            _this.afterShowCallback(data);
          }
        }, showDuration);
      }, this.enterDelay);
    }

    /**
     * @prop {object} [data] - Any custom data which would be passed to afterHide callback function call
     */
  }, {
    key: "hide",
    value: function hide() {
      var _this2 = this;
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        data = _ref2.data;
      clearTimeout(this.enterDelayTimeout);
      clearTimeout(this.showDurationTimeout);
      this.exitDelayTimeout = setTimeout(function () {
        if (_this2.$popperEle) {
          var left = parseInt(DomUtils.getData(_this2.$popperEle, 'fromLeft'));
          var top = parseInt(DomUtils.getData(_this2.$popperEle, 'fromTop'));
          var transformText = "translate3d(".concat(left, "px, ").concat(top, "px, 0)");
          var hideDuration = _this2.hideDuration;
          DomUtils.setStyle(_this2.$popperEle, 'transitionDuration', hideDuration + 'ms');
          DomUtils.setStyle(_this2.$popperEle, 'transform', transformText);
          DomUtils.setStyle(_this2.$popperEle, 'opacity', 0);
          _this2.hideDurationTimeout = setTimeout(function () {
            DomUtils.hide(_this2.$popperEle);
            if (typeof _this2.afterHideCallback === 'function') {
              _this2.afterHideCallback(data);
            }
          }, hideDuration);
        }
      }, this.exitDelay);
    }
  }, {
    key: "updatePosition",
    value: function updatePosition() {
      DomUtils.setStyle(this.$popperEle, 'transitionDuration', '0ms');
      this.resetPosition();
      var left = parseInt(DomUtils.getData(this.$popperEle, 'left'));
      var top = parseInt(DomUtils.getData(this.$popperEle, 'top'));
      DomUtils.show(this.$popperEle, 'inline-flex');
      DomUtils.setStyle(this.$popperEle, 'transform', "translate3d(".concat(left, "px, ").concat(top, "px, 0)"));
    }
  }]);
}();

/**
 * POPOVER COMPONENT
 * Original source: popover-plugin
 * Handles popover show/hide behavior and interactions
 */

var keyDownMethodMapping = {
  27: 'onEscPress'
};
var dataProps = ['target', 'position', 'margin', 'offset', 'enterDelay', 'exitDelay', 'showDuration', 'hideDuration', 'transitionDistance', 'updatePositionThrottle', 'zIndex', 'hideOnOuterClick', 'showOnHover', 'hideArrowIcon', 'disableManualAction', 'disableUpdatePosition'];
var attrPropsMapping;
var PopoverComponent = /*#__PURE__*/function () {
  /**
   * @property {(element|string)} ele - Trigger element to toggle popover element
   * @property {string} target - CSS selector to get popover element
   * @property {string} [position=auto] - Position of popover element (auto, top, bottom, left, right, top left, top right, bottom left, bottom right, left top, left bottom, right top, right bottom)
   * @property {number} [margin=8] - Space between popover element and its Trigger element (in pixel)
   * @property {number} [offset=5] - Space between popover element and window edge (in pixel)
   * @property {number} [enterDelay=0] - Delay time before showing popover element (in milliseconds)
   * @property {number} [exitDelay=0] - Delay time before hiding popover element (in milliseconds)
   * @property {number} [showDuration=300] - Transition duration for show animation (in milliseconds)
   * @property {number} [hideDuration=200] - Transition duration for hide animation (in milliseconds)
   * @property {number} [transitionDistance=10] - Distance to translate on show/hide animation (in pixel)
   * @property {number} [updatePositionThrottle=100] - Throttle time for updating popover position on scroll event (in milliseconds)
   * @property {number} [zIndex=1] - CSS z-index value for popover element
   * @property {boolean} [hideOnOuterClick=true] - Hide on clicking outside of popover element
   * @property {boolean} [showOnHover=false] - Show popover element on hovering trigger element
   * @property {boolean} [hideArrowIcon=false] - Hide arrow icon in the popover
   * @property {boolean} [disableManualAction=false] - By default popover would be showed on click/hover trigger element.
   * Set true to disable it and handle show/hide programmatically.
   * @property {boolean} [disableUpdatePosition=false] - By default popover position would be updated on scrolling the parent element.
   * Set true to disable it.
   * @property {function} [beforeShow] - Callback function for before showing popover
   * @property {function} [afterShow] - Callback function for after showing popover
   * @property {function} [beforeHide] - Callback function for before hiding popover
   * @property {function} [afterHide] - Callback function for after hiding popover
   */
  function PopoverComponent(options) {
    popover_classCallCheck(this, PopoverComponent);
    try {
      this.setProps(options);
      this.init();
    } catch (e) {
      console.warn("Couldn't initiate Popover component");
      console.error(e);
    }
  }
  return popover_createClass(PopoverComponent, [{
    key: "init",
    value: function init() {
      if (!this.$popover) {
        return;
      }
      this.setElementProps();
      this.renderArrow();
      this.initPopper();
      this.addEvents();
    }

    /** dom event methods - start */
  }, {
    key: "getEvents",
    value: function getEvents() {
      var events = [{
        $ele: document,
        event: 'click',
        method: 'onDocumentClick'
      }, {
        $ele: document,
        event: 'keydown',
        method: 'onDocumentKeyDown'
      }];
      if (!this.disableManualAction) {
        events.push({
          $ele: this.$ele,
          event: 'click',
          method: 'onTriggerEleClick'
        });
        if (this.showOnHover) {
          events.push({
            $ele: this.$ele,
            event: 'mouseenter',
            method: 'onTriggerEleMouseEnter'
          });
          events.push({
            $ele: this.$ele,
            event: 'mouseleave',
            method: 'onTriggerEleMouseLeave'
          });
        }
      }
      return events;
    }
  }, {
    key: "addOrRemoveEvents",
    value: function addOrRemoveEvents(action) {
      var _this3 = this;
      var events = this.getEvents();
      events.forEach(function (d) {
        _this3.addOrRemoveEvent({
          action: action,
          $ele: d.$ele,
          events: d.event,
          method: d.method
        });
      });
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      this.addOrRemoveEvents('add');
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      this.addOrRemoveEvents('remove');
      this.removeScrollEventListeners();
      this.removeResizeEventListeners();
    }
  }, {
    key: "addOrRemoveEvent",
    value: function addOrRemoveEvent(_ref3) {
      var _this4 = this;
      var action = _ref3.action,
        $ele = _ref3.$ele,
        events = _ref3.events,
        method = _ref3.method,
        throttle = _ref3.throttle;
      if (!$ele) {
        return;
      }
      events = Utils.removeArrayEmpty(events.split(' '));
      events.forEach(function (event) {
        var eventsKey = "".concat(method, "-").concat(event);
        var callback = _this4.events[eventsKey];
        if (!callback) {
          callback = _this4[method].bind(_this4);
          if (throttle) {
            callback = Utils.throttle(callback, throttle);
          }
          _this4.events[eventsKey] = callback;
        }
        if (action === 'add') {
          DomUtils.addEvent($ele, event, callback);
        } else {
          DomUtils.removeEvent($ele, event, callback);
        }
      });
    }
  }, {
    key: "addScrollEventListeners",
    value: function addScrollEventListeners() {
      this.$scrollableElems = DomUtils.getScrollableParents(this.$ele);
      this.addOrRemoveEvent({
        action: 'add',
        $ele: this.$scrollableElems,
        events: 'scroll',
        method: 'onAnyParentScroll',
        throttle: this.updatePositionThrottle
      });
    }
  }, {
    key: "removeScrollEventListeners",
    value: function removeScrollEventListeners() {
      if (!this.$scrollableElems) {
        return;
      }
      this.addOrRemoveEvent({
        action: 'remove',
        $ele: this.$scrollableElems,
        events: 'scroll',
        method: 'onAnyParentScroll'
      });
      this.$scrollableElems = null;
    }
  }, {
    key: "addResizeEventListeners",
    value: function addResizeEventListeners() {
      this.addOrRemoveEvent({
        action: 'add',
        $ele: window,
        events: 'resize',
        method: 'onResize',
        throttle: this.updatePositionThrottle
      });
    }
  }, {
    key: "removeResizeEventListeners",
    value: function removeResizeEventListeners() {
      this.addOrRemoveEvent({
        action: 'remove',
        $ele: window,
        events: 'resize',
        method: 'onResize'
      });
    }
  }, {
    key: "onAnyParentScroll",
    value: function onAnyParentScroll() {
      this.popper.updatePosition();
    }
  }, {
    key: "onResize",
    value: function onResize() {
      this.popper.updatePosition();
    }
  }, {
    key: "onDocumentClick",
    value: function onDocumentClick(e) {
      var $target = e.target;
      var $triggerEle = $target.closest('.pop-comp-ele');
      var $popoverEle = $target.closest('.pop-comp-wrapper');
      if (this.hideOnOuterClick && $triggerEle !== this.$ele && $popoverEle !== this.$popover) {
        this.hide();
      }
    }
  }, {
    key: "onDocumentKeyDown",
    value: function onDocumentKeyDown(e) {
      var key = e.which || e.keyCode;
      var method = keyDownMethodMapping[key];
      if (method) {
        this[method](e);
      }
    }
  }, {
    key: "onEscPress",
    value: function onEscPress() {
      if (this.hideOnOuterClick) {
        this.hide();
      }
    }
  }, {
    key: "onTriggerEleClick",
    value: function onTriggerEleClick() {
      this.toggle();
    }
  }, {
    key: "onTriggerEleMouseEnter",
    value: function onTriggerEleMouseEnter() {
      this.show();
    }
  }, {
    key: "onTriggerEleMouseLeave",
    value: function onTriggerEleMouseLeave() {
      this.hide();
    }
    /** dom event methods - end */

    /** set methods - start */
  }, {
    key: "setProps",
    value: function setProps(options) {
      options = this.setDefaultProps(options);
      this.setPropsFromElementAttr(options);
      var convertToBoolean = Utils.convertToBoolean;
      this.$ele = options.ele;
      this.target = options.target;
      this.position = options.position;
      this.margin = parseFloat(options.margin);
      this.offset = parseFloat(options.offset);
      this.enterDelay = parseFloat(options.enterDelay);
      this.exitDelay = parseFloat(options.exitDelay);
      this.showDuration = parseFloat(options.showDuration);
      this.hideDuration = parseFloat(options.hideDuration);
      this.transitionDistance = parseFloat(options.transitionDistance);
      this.updatePositionThrottle = parseFloat(options.updatePositionThrottle);
      this.zIndex = parseFloat(options.zIndex);
      this.hideOnOuterClick = convertToBoolean(options.hideOnOuterClick);
      this.showOnHover = convertToBoolean(options.showOnHover);
      this.hideArrowIcon = convertToBoolean(options.hideArrowIcon);
      this.disableManualAction = convertToBoolean(options.disableManualAction);
      this.disableUpdatePosition = convertToBoolean(options.disableUpdatePosition);
      this.beforeShowCallback = options.beforeShow;
      this.afterShowCallback = options.afterShow;
      this.beforeHideCallback = options.beforeHide;
      this.afterHideCallback = options.afterHide;
      this.events = {};
      this.$popover = DomUtils.getElement(this.target);
    }
  }, {
    key: "setDefaultProps",
    value: function setDefaultProps(options) {
      var defaultOptions = {
        position: 'auto',
        margin: 8,
        offset: 5,
        enterDelay: 0,
        exitDelay: 0,
        showDuration: 300,
        hideDuration: 200,
        transitionDistance: 10,
        updatePositionThrottle: 100,
        zIndex: 1,
        hideOnOuterClick: true,
        showOnHover: false,
        hideArrowIcon: false,
        disableManualAction: false,
        disableUpdatePosition: false
      };
      return Object.assign(defaultOptions, options);
    }
  }, {
    key: "setPropsFromElementAttr",
    value: function setPropsFromElementAttr(options) {
      var $ele = options.ele;
      for (var k in attrPropsMapping) {
        var value = $ele.getAttribute(k);
        if (value) {
          options[attrPropsMapping[k]] = value;
        }
      }
    }
  }, {
    key: "setElementProps",
    value: function setElementProps() {
      var $ele = this.$ele;
      $ele.popComp = this;
      $ele.show = PopoverComponent.showMethod;
      $ele.hide = PopoverComponent.hideMethod;
      $ele.updatePosition = PopoverComponent.updatePositionMethod;
      DomUtils.addClass(this.$ele, 'pop-comp-ele');
      DomUtils.addClass(this.$popover, 'pop-comp-wrapper');
    }
    /** set methods - end */

    /** get methods - start */
  }, {
    key: "getOtherTriggerPopComp",
    value: function getOtherTriggerPopComp() {
      var popComp = this.$popover.popComp;
      var otherPopComp;
      if (popComp && popComp.$ele !== this.$ele) {
        otherPopComp = popComp;
      }
      return otherPopComp;
    }
    /** get methods - end */
  }, {
    key: "initPopper",
    value: function initPopper() {
      var options = {
        $popperEle: this.$popover,
        $triggerEle: this.$ele,
        $arrowEle: this.$arrowEle,
        position: this.position,
        margin: this.margin,
        offset: this.offset,
        enterDelay: this.enterDelay,
        exitDelay: this.exitDelay,
        showDuration: this.showDuration,
        hideDuration: this.hideDuration,
        transitionDistance: this.transitionDistance,
        zIndex: this.zIndex,
        afterShow: this.afterShow.bind(this),
        afterHide: this.afterHide.bind(this)
      };
      this.popper = new PopperComponent(options);
    }
  }, {
    key: "beforeShow",
    value: function beforeShow() {
      if (typeof this.beforeShowCallback === 'function') {
        this.beforeShowCallback(this);
      }
    }
  }, {
    key: "beforeHide",
    value: function beforeHide() {
      if (typeof this.beforeHideCallback === 'function') {
        this.beforeHideCallback(this);
      }
    }
  }, {
    key: "show",
    value: function show() {
      if (this.isShown()) {
        return;
      }
      if (this.isShownForOtherTrigger()) {
        this.showAfterOtherHide();
        return;
      }
      DomUtils.addClass(this.$popover, 'pop-comp-disable-events');
      this.$popover.popComp = this;
      this.beforeShow();
      this.popper.show({
        resetPosition: true
      });
      DomUtils.addClass(this.$ele, 'pop-comp-active');
    }
  }, {
    key: "hide",
    value: function hide() {
      if (!this.isShown()) {
        return;
      }
      this.beforeHide();
      this.popper.hide();
      this.removeScrollEventListeners();
      this.removeResizeEventListeners();
    }
  }, {
    key: "toggle",
    value: function toggle(show) {
      if (show === undefined) {
        show = !this.isShown();
      }
      if (show) {
        this.show();
      } else {
        this.hide();
      }
    }
  }, {
    key: "isShown",
    value: function isShown() {
      return DomUtils.hasClass(this.$ele, 'pop-comp-active');
    }

    /**
     * Calculate the optimal position for the popover without showing it
     * This allows setting position classes before the dropdown becomes visible
     * @returns {Object} Position data including position name and flip status
     */
  }, {
    key: "calculatePosition",
    value: function calculatePosition() {
      if (this.popper) {
        return this.popper.calculatePosition();
      }
      return {
        position: this.position || 'bottom',
        flipped: false
      };
    }
  }, {
    key: "isShownForOtherTrigger",
    value: function isShownForOtherTrigger() {
      var otherPopComp = this.getOtherTriggerPopComp();
      return otherPopComp ? otherPopComp.isShown() : false;
    }

    /** showing popover after same popover with different trigger element hide */
  }, {
    key: "showAfterOtherHide",
    value: function showAfterOtherHide() {
      var _this5 = this;
      var otherPopComp = this.getOtherTriggerPopComp();
      if (!otherPopComp) {
        return;
      }
      var otherHideTime = otherPopComp.exitDelay + otherPopComp.hideDuration + 100;
      setTimeout(function () {
        _this5.show();
      }, otherHideTime);
    }
  }, {
    key: "afterShow",
    value: function afterShow() {
      var _this6 = this;
      if (this.showOnHover) {
        /** using setTimeout to avoid an issue in firefox. show/hide event is calling continuously when showOnHover is enabled */
        setTimeout(function () {
          DomUtils.removeClass(_this6.$popover, 'pop-comp-disable-events');
        }, 2000);
      } else {
        DomUtils.removeClass(this.$popover, 'pop-comp-disable-events');
      }
      if (!this.disableUpdatePosition) {
        this.addScrollEventListeners();
        this.addResizeEventListeners();
      }
      if (typeof this.afterShowCallback === 'function') {
        this.afterShowCallback(this);
      }
    }
  }, {
    key: "afterHide",
    value: function afterHide() {
      DomUtils.removeClass(this.$ele, 'pop-comp-active');
      if (typeof this.afterHideCallback === 'function') {
        this.afterHideCallback(this);
      }
    }
  }, {
    key: "renderArrow",
    value: function renderArrow() {
      if (this.hideArrowIcon) {
        return;
      }
      var $arrowEle = this.$popover.querySelector('.pop-comp-arrow');
      if (!$arrowEle) {
        this.$popover.insertAdjacentHTML('afterbegin', '<i class="pop-comp-arrow"></i>');
        $arrowEle = this.$popover.querySelector('.pop-comp-arrow');
      }
      this.$arrowEle = $arrowEle;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.removeEvents();
    }

    /** static methods - start */
  }], [{
    key: "init",
    value: function init(options) {
      var $eleArray = options.ele;
      if (!$eleArray) {
        return;
      }
      var singleEle = false;
      if (typeof $eleArray === 'string') {
        $eleArray = document.querySelectorAll($eleArray);
        if (!$eleArray) {
          return;
        }
        if ($eleArray.length === 1) {
          singleEle = true;
        }
      }
      if ($eleArray.length === undefined) {
        $eleArray = [$eleArray];
        singleEle = true;
      }
      var instances = [];
      $eleArray.forEach(function ($ele) {
        options.ele = $ele;
        PopoverComponent.destroy($ele);
        instances.push(new PopoverComponent(options));
      });
      return singleEle ? instances[0] : instances;
    }
  }, {
    key: "destroy",
    value: function destroy($ele) {
      if (!$ele) {
        return;
      }
      var popComp = $ele.popComp;
      if (popComp) {
        popComp.destroy();
      }
    }
  }, {
    key: "showMethod",
    value: function showMethod() {
      this.popComp.show();
    }
  }, {
    key: "hideMethod",
    value: function hideMethod() {
      this.popComp.hide();
    }
  }, {
    key: "updatePositionMethod",
    value: function updatePositionMethod() {
      this.popComp.popper.updatePosition();
    }
  }, {
    key: "getAttrProps",
    value: function getAttrProps() {
      var convertPropToDataAttr = DomUtils.convertPropToDataAttr;
      var result = {};
      dataProps.forEach(function (d) {
        result[convertPropToDataAttr(d)] = d;
      });
      return result;
    }
    /** static methods - end */
  }]);
}();
attrPropsMapping = PopoverComponent.getAttrProps();
window.PopoverComponent = PopoverComponent;
;// ./src/virtual-select.js
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = virtual_select_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function virtual_select_typeof(o) { "@babel/helpers - typeof"; return virtual_select_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, virtual_select_typeof(o); }
function virtual_select_slicedToArray(r, e) { return virtual_select_arrayWithHoles(r) || virtual_select_iterableToArrayLimit(r, e) || virtual_select_unsupportedIterableToArray(r, e) || virtual_select_nonIterableRest(); }
function virtual_select_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function virtual_select_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function virtual_select_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function virtual_select_toConsumableArray(r) { return virtual_select_arrayWithoutHoles(r) || virtual_select_iterableToArray(r) || virtual_select_unsupportedIterableToArray(r) || virtual_select_nonIterableSpread(); }
function virtual_select_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function virtual_select_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return virtual_select_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? virtual_select_arrayLikeToArray(r, a) : void 0; } }
function virtual_select_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function virtual_select_arrayWithoutHoles(r) { if (Array.isArray(r)) return virtual_select_arrayLikeToArray(r); }
function virtual_select_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function virtual_select_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function virtual_select_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, virtual_select_toPropertyKey(o.key), o); } }
function virtual_select_createClass(e, r, t) { return r && virtual_select_defineProperties(e.prototype, r), t && virtual_select_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function virtual_select_toPropertyKey(t) { var i = virtual_select_toPrimitive(t, "string"); return "symbol" == virtual_select_typeof(i) ? i : i + ""; }
function virtual_select_toPrimitive(t, r) { if ("object" != virtual_select_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != virtual_select_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/** cSpell:ignore nocheck, Labelledby, vscomp, tabindex, combobox, haspopup, listbox, activedescendant */
/* eslint-disable class-methods-use-this */
// @ts-nocheck


var dropboxCloseButtonFullHeight = 48;
var searchHeight = 40;
var virtual_select_keyDownMethodMapping = {
  13: 'onEnterPress',
  38: 'onUpArrowPress',
  40: 'onDownArrowPress',
  46: 'onBackspaceOrDeletePress',
  // Delete
  8: 'onBackspaceOrDeletePress' // Backspace
};
var valueLessProps = ['autofocus', 'disabled', 'multiple', 'required'];
var nativeProps = ['autofocus', 'class', 'disabled', 'id', 'multiple', 'name', 'placeholder', 'required'];
var virtual_select_attrPropsMapping;
var virtual_select_dataProps = ['additionalClasses', 'additionalDropboxClasses', 'additionalDropboxContainerClasses', 'additionalToggleButtonClasses', 'afterFirstRender', 'aliasKey', 'allOptionsSelectedText', 'allowNewOption', 'alwaysShowSelectedOptionsCount', 'alwaysShowSelectedOptionsLabel', 'announce', 'ariaLabelledby', 'ariaLabelText', 'ariaLabelClearButtonText', 'ariaLabelTagClearButtonText', 'ariaLabelSearchClearButtonText', 'autoDestroy', 'autoSelectFirstOption', 'clearButtonText', 'descriptionKey', 'disableAllOptionsSelectedText', 'disableOptionGroupCheckbox', 'disableSelectAll', 'disableValidation', 'dropboxWidth', 'dropboxWrapper', 'emptyValue', 'enableDeselectAll', 'enableSecureText', 'focusSelectedOptionOnOpen', 'getSearchIndex', 'hasOptionDescription', 'hideClearButton', 'hideValueTooltipOnSelectAll', 'instanceId', 'keepAlwaysOpen', 'labelKey', 'markSearchResults', 'maxValues', 'maxWidth', 'minValues', 'moreText', 'noOfDisplayValues', 'noOptionsText', 'noSearchResultsText', 'optionHeight', 'optionSelectedText', 'optionsCount', 'optionsSelectedText', 'popupDropboxBreakpoint', 'popupPosition', 'position', 'search', 'searchByStartsWith', 'searchDelay', 'searchFormLabel', 'searchGroup', 'searchIndex', 'searchIndexValue', 'searchNormalize', 'searchPlaceholderText', 'selectAllOnlyVisible', 'selectAllText', 'setValueAsArray', 'showDropboxAsPopup', 'showOptionsOnlyOnSearch', 'showSelectedOptionsFirst', 'showValueAsTags', 'silentInitialValueSet', 'textDirection', 'tooltipAlignment', 'tooltipFontSize', 'tooltipMaxWidth', 'updatePositionThrottle', 'useGroupValue', 'valueKey', 'zIndex'];

/** Class representing VirtualSelect */
var VirtualSelect = /*#__PURE__*/function () {
  /**
   * @param {virtualSelectOptions} options
   */
  function VirtualSelect(options) {
    virtual_select_classCallCheck(this, VirtualSelect);
    try {
      this.createSecureTextElements();
      this.setProps(options);
      this.setDisabledOptions(options.disabledOptions);
      this.setOptions(options.options);
      this.render();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn("Couldn't initiate Virtual Select");
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }

  /** render methods - start */
  return virtual_select_createClass(VirtualSelect, [{
    key: "render",
    value: function render() {
      if (!this.$ele) {
        return;
      }
      var uniqueId = this.uniqueId;
      var wrapperClasses = 'vscomp-wrapper';
      var toggleButtonClasses = 'vscomp-toggle-button';
      var valueTooltip = this.showValueAsTags ? '' : this.getTooltipAttrText(this.placeholder, true, true);
      var clearButtonTooltip = this.getTooltipAttrText(this.clearButtonText);
      var ariaLabelledbyText = this.ariaLabelledby ? "aria-labelledby=\"".concat(this.ariaLabelledby, "\"") : '';
      var ariaLabelText = this.ariaLabelText ? "aria-label=\"".concat(this.ariaLabelText, "\"") : '';
      var ariaLabelClearBtnTxt = this.ariaLabelClearButtonText ? "aria-label=\"".concat(this.ariaLabelClearButtonText, "\"") : '';
      var isExpanded = false;
      if (this.additionalClasses) {
        wrapperClasses += " ".concat(this.additionalClasses);
      }
      if (this.additionalToggleButtonClasses) {
        toggleButtonClasses += " ".concat(this.additionalToggleButtonClasses);
      }
      if (this.multiple) {
        wrapperClasses += ' multiple';
        if (!this.disableSelectAll) {
          wrapperClasses += ' has-select-all';
        }
      }
      if (this.enableClearButton) {
        wrapperClasses += ' has-clear-button';
      }
      if (this.keepAlwaysOpen) {
        wrapperClasses += ' keep-always-open';
        isExpanded = true;
      } else {
        wrapperClasses += ' closed';
      }
      if (this.showAsPopup) {
        wrapperClasses += ' show-as-popup';
      }
      if (this.hasSearch) {
        wrapperClasses += ' has-search-input';
      }
      if (this.showValueAsTags) {
        wrapperClasses += ' show-value-as-tags';
      }
      if (this.textDirection) {
        wrapperClasses += " text-direction-".concat(this.textDirection);
      }
      if (this.popupPosition) {
        wrapperClasses += " popup-position-".concat(this.popupPosition.toLowerCase());
      }

      // eslint-disable-next-line no-trailing-spaces
      var html = "<div id=\"vscomp-ele-wrapper-".concat(uniqueId, "\" class=\"vscomp-ele-wrapper ").concat(wrapperClasses, "\" tabindex=\"0\"\n        role=\"combobox\" aria-haspopup=\"listbox\" aria-controls=\"vscomp-dropbox-container-").concat(uniqueId, "\"\n        aria-expanded=\"").concat(isExpanded, "\" ").concat(ariaLabelledbyText, " ").concat(ariaLabelText, ">\n        <input type=\"hidden\" name=\"").concat(this.name, "\" class=\"vscomp-hidden-input\">\n        <div class=\"").concat(toggleButtonClasses, "\">\n          <div class=\"vscomp-value\" ").concat(valueTooltip, ">\n            ").concat(this.placeholder, "\n          </div>\n          <div class=\"vscomp-arrow\"></div>\n          <div class=\"vscomp-clear-button ").concat(this.enableClearButton ? '' : 'neverRender', " toggle-button-child\" ").concat(clearButtonTooltip, "\n          tabindex=\"-1\" role=\"button\" ").concat(ariaLabelClearBtnTxt, ">\n            <i class=\"vscomp-clear-icon\"></i>\n          </div>\n        </div>\n\n        ").concat(this.renderDropbox({
        wrapperClasses: wrapperClasses
      }), "\n      </div>");
      this.$ele.innerHTML = html;
      this.$body = document.querySelector('body');
      this.$wrapper = this.$ele.querySelector('.vscomp-wrapper');
      if (this.hasDropboxWrapper) {
        this.$allWrappers = [this.$wrapper, this.$dropboxWrapper];
        this.$dropboxContainer = this.$dropboxWrapper.querySelector('.vscomp-dropbox-container');
        DomUtils.addClass(this.$dropboxContainer, 'pop-comp-wrapper');
      } else {
        this.$allWrappers = [this.$wrapper];
        this.$dropboxContainer = this.$wrapper.querySelector('.vscomp-dropbox-container');
      }
      this.$toggleButton = this.$ele.querySelector('.vscomp-toggle-button');
      this.$clearButton = this.$ele.querySelector('.vscomp-clear-button');
      this.$valueText = this.$ele.querySelector('.vscomp-value');
      this.$hiddenInput = this.$ele.querySelector('.vscomp-hidden-input');
      this.$dropbox = this.$dropboxContainer.querySelector('.vscomp-dropbox');
      this.$dropboxCloseButton = this.$dropboxContainer.querySelector('.vscomp-dropbox-close-button');
      this.$dropboxContainerBottom = this.$dropboxContainer.querySelector('.vscomp-dropbox-container-bottom');
      this.$dropboxContainerTop = this.$dropboxContainer.querySelector('.vscomp-dropbox-container-top');
      this.$search = this.$dropboxContainer.querySelector('.vscomp-search-wrapper');
      this.$optionsContainer = this.$dropboxContainer.querySelector('.vscomp-options-container');
      this.$optionsList = this.$dropboxContainer.querySelector('.vscomp-options-list');
      this.$options = this.$dropboxContainer.querySelector('.vscomp-options');
      this.$noOptions = this.$dropboxContainer.querySelector('.vscomp-no-options');
      this.$noSearchResults = this.$dropboxContainer.querySelector('.vscomp-no-search-results');
      this.afterRenderWrapper();
    }
  }, {
    key: "renderDropbox",
    value: function renderDropbox(_ref) {
      var wrapperClasses = _ref.wrapperClasses;
      var $wrapper = this.dropboxWrapper !== 'self' ? document.querySelector(this.dropboxWrapper) : null;
      var dropboxClasses = 'vscomp-dropbox';
      if (this.additionalDropboxClasses) {
        dropboxClasses += " ".concat(this.additionalDropboxClasses);
      }
      var dropboxContainerClasses = 'vscomp-dropbox-container';
      if (this.additionalDropboxContainerClasses) {
        dropboxContainerClasses += " ".concat(this.additionalDropboxContainerClasses);
      }

      // eslint-disable-next-line no-trailing-spaces
      var html = "<div id=\"vscomp-dropbox-container-".concat(this.uniqueId, "\" class=\"").concat(dropboxContainerClasses, "\">\n        <div class=\"vscomp-dropbox-container-top\" aria-hidden=\"true\" tabindex=\"-1\">&nbsp;</div>\n        <div class=\"").concat(dropboxClasses, "\">\n          <div class=\"vscomp-search-wrapper\"></div>\n\n          <div class=\"vscomp-options-container\" role=\"listbox\" aria-labelledby=\"vscomp-ele-wrapper-").concat(this.uniqueId, "\" >\n            <div class=\"vscomp-options-loader\"></div>\n\n            <div class=\"vscomp-options-list\">\n              <div class=\"vscomp-options\"></div>\n            </div>\n          </div>\n\n          <div class=\"vscomp-options-bottom-freezer\"></div>\n          <div class=\"vscomp-no-options\">").concat(this.noOptionsText, "</div>\n          <div class=\"vscomp-no-search-results\">").concat(this.noSearchResultsText, "</div>\n\n          <span class=\"vscomp-dropbox-close-button\"><i class=\"vscomp-clear-icon\"></i></span>\n        </div>\n        <div class=\"vscomp-dropbox-container-bottom\" aria-hidden=\"true\" tabindex=\"-1\">&nbsp;</div>\n      </div>");
      if ($wrapper) {
        var $dropboxWrapper = document.createElement('div');
        this.$dropboxWrapper = $dropboxWrapper;
        this.hasDropboxWrapper = true;
        $dropboxWrapper.innerHTML = html;
        $wrapper.appendChild($dropboxWrapper);
        DomUtils.addClass($dropboxWrapper, "vscomp-dropbox-wrapper ".concat(wrapperClasses));
        if (!this.keepAlwaysOpen) {
          DomUtils.setAttr($dropboxWrapper, 'tabindex', '-1');
          DomUtils.setAria($dropboxWrapper, 'hidden', true);
        }
        return '';
      }
      this.hasDropboxWrapper = false;
      return html;
    }
  }, {
    key: "renderOptions",
    value: function renderOptions() {
      var _this = this;
      // Calculate ARIA metadata before rendering to ensure it's always up to date
      this.calculateAriaMetadata();
      var html = '';
      var visibleOptions = this.getVisibleOptions();
      var checkboxHtml = '';
      var newOptionIconHtml = '';
      var markSearchResults = !!(this.markSearchResults && this.searchValue);
      var searchRegex;
      var labelRenderer = this.labelRenderer,
        disableOptionGroupCheckbox = this.disableOptionGroupCheckbox,
        uniqueId = this.uniqueId,
        searchGroup = this.searchGroup;
      var hasLabelRenderer = typeof labelRenderer === 'function';
      var convertToBoolean = Utils.convertToBoolean;
      var groupName = '';
      if (markSearchResults) {
        searchRegex = new RegExp("(".concat(Utils.regexEscape(this.searchValue), ")(?!([^<]+)?>)"), 'gi');
      }
      if (this.multiple) {
        checkboxHtml = '<span class="checkbox-icon"></span>';
      }
      if (this.allowNewOption) {
        var newOptionTooltip = this.getTooltipAttrText('New Option');
        newOptionIconHtml = "<span class=\"vscomp-new-option-icon\" ".concat(newOptionTooltip, "></span>");
      }
      visibleOptions.forEach(function (d) {
        var index = d.index;
        var optionLabel;
        var optionClasses = 'vscomp-option';
        var optionTooltip = _this.getTooltipAttrText('', true, true);
        var leftSection = checkboxHtml;
        var rightSection = '';
        var description = '';
        var groupIndexText = '';
        var ariaLabel = '';
        var tabIndexValue = '-1';
        var isSelected = convertToBoolean(d.isSelected);
        var ariaDisabledText = '';
        if (d.classNames) {
          optionClasses += " ".concat(d.classNames);
        }
        if (d.isFocused) {
          tabIndexValue = '0';
          optionClasses += ' focused';
        }
        if (d.isDisabled) {
          optionClasses += ' disabled';
          ariaDisabledText = 'aria-disabled="true"';
        }
        if (d.isGroupTitle) {
          groupName = d.label;
          optionClasses += ' group-title';
          if (disableOptionGroupCheckbox) {
            leftSection = '';
          }
        }
        if (isSelected) {
          optionClasses += ' selected';
        }
        if (d.isGroupOption) {
          var optionDesc = '';
          optionClasses += ' group-option';
          groupIndexText = "data-group-index=\"".concat(d.groupIndex, "\"");
          if (d.customData) {
            groupName = d.customData.group_name !== undefined ? "".concat(d.customData.group_name, ", ") : '';
            optionDesc = d.customData.description !== undefined ? " ".concat(d.customData.description, ",") : '';
            ariaLabel = "aria-label=\"".concat(groupName, " ").concat(d.label, ", ").concat(optionDesc, "\"");
          } else {
            ariaLabel = "aria-label=\"".concat(groupName, ", ").concat(d.label, "\"");
          }
        }
        if (hasLabelRenderer) {
          optionLabel = labelRenderer(d);
        } else {
          optionLabel = d.label;
        }
        if (d.description) {
          description = "<div class=\"vscomp-option-description\" ".concat(optionTooltip, ">").concat(d.description, "</div>");
        }
        if (d.isCurrentNew) {
          optionClasses += ' current-new';
          rightSection += newOptionIconHtml;
        } else if (markSearchResults && (!d.isGroupTitle || searchGroup)) {
          optionLabel = optionLabel.replace(searchRegex, '<mark>$1</mark>');
        }

        // Add aria-setsize and aria-posinset for virtualized listbox accessibility
        var ariaAttrs = '';
        if (_this.ariaSetSize > 0) {
          ariaAttrs = "aria-setsize=\"".concat(_this.ariaSetSize, "\"");
          if (d.filteredIndex) {
            ariaAttrs += " aria-posinset=\"".concat(d.filteredIndex, "\"");
          }
        }
        html += "<div role=\"option\" aria-selected=\"".concat(isSelected, "\" id=\"vscomp-option-").concat(uniqueId, "-").concat(index, "\"\n          class=\"").concat(optionClasses, "\" data-value=\"").concat(d.value, "\" data-index=\"").concat(index, "\" data-visible-index=\"").concat(d.visibleIndex, "\"\n          tabindex=").concat(tabIndexValue, " ").concat(groupIndexText, " ").concat(ariaDisabledText, " ").concat(ariaLabel, " ").concat(ariaAttrs, "\n        >\n          ").concat(leftSection, "\n          <span class=\"vscomp-option-text\" ").concat(optionTooltip, ">\n            ").concat(optionLabel, "\n          </span>\n          ").concat(description, "\n          ").concat(rightSection, "\n        </div>");
      });
      groupName = '';
      this.$options.innerHTML = html;
      this.$visibleOptions = this.$options.querySelectorAll('.vscomp-option');
      this.afterRenderOptions();
    }
  }, {
    key: "renderSearch",
    value: function renderSearch() {
      if (!this.hasSearchContainer) {
        return;
      }
      var checkboxHtml = '';
      var searchInput = '';
      if (this.multiple && !this.disableSelectAll) {
        checkboxHtml = "<span class=\"vscomp-toggle-all-button\" tabindex=\"0\" aria-label=\"".concat(this.selectAllText, "\">\n          <span class=\"checkbox-icon vscomp-toggle-all-checkbox\"></span>\n          <span class=\"vscomp-toggle-all-label\">").concat(this.selectAllText, "</span>\n        </span>");
      }
      if (this.hasSearch) {
        var ariaLabelSearchClearBtnTxt = this.ariaLabelSearchClearButtonText ? "aria-label=\"".concat(this.ariaLabelSearchClearButtonText, "\"") : '';
        searchInput = "<label for=\"vscomp-search-input-".concat(this.uniqueId, "\" class=\"vscomp-search-label\"\n        id=\"vscomp-search-label-").concat(this.uniqueId, "\"\n      >\n        ").concat(this.searchFormLabel, "\n      </label>\n      <input type=\"text\" class=\"vscomp-search-input\" placeholder=\"").concat(this.searchPlaceholderText, "\"\n        id=\"vscomp-search-input-").concat(this.uniqueId, "\">\n      <span class=\"vscomp-search-clear\" role=\"button\" ").concat(ariaLabelSearchClearBtnTxt, ">&times;</span>");
      }
      var html = "<div class=\"vscomp-search-container\">\n        ".concat(checkboxHtml, "\n        ").concat(searchInput, "\n      </div>");
      this.$search.innerHTML = html;
      this.$searchInput = this.$dropboxContainer.querySelector('.vscomp-search-input');
      this.$searchClear = this.$dropboxContainer.querySelector('.vscomp-search-clear');
      this.$toggleAllButton = this.$dropboxContainer.querySelector('.vscomp-toggle-all-button');
      this.$toggleAllCheckbox = this.$dropboxContainer.querySelector('.vscomp-toggle-all-checkbox');
      this.addEvent(this.$searchInput, 'input', 'onSearch');
      // Prevents the change event from bubbling and triggering the main onChange handler twice.
      this.addEvent(this.$searchInput, 'change', 'preventPropagation');
      this.addEvent(this.$searchClear, 'click keydown', 'onSearchClear');
      this.addEvent(this.$toggleAllButton, 'click', 'onToggleAllOptions');
      this.addEvent(this.$dropboxContainerBottom, 'focus', 'onDropboxContainerTopOrBottomFocus');
      this.addEvent(this.$dropboxContainerTop, 'focus', 'onDropboxContainerTopOrBottomFocus');
    }
    /** render methods - end */

    /** dom event methods - start */
  }, {
    key: "addEvents",
    value: function addEvents() {
      this.addEvent(document, 'click', 'onDocumentClick');
      this.addEvent(this.$allWrappers, 'keydown', 'onKeyDown');
      this.addEvent(this.$toggleButton, 'click keydown', 'onToggleButtonPress');
      this.addEvent(this.$clearButton, 'click keydown', 'onClearButtonClick');
      this.addEvent(this.$dropboxContainer, 'click', 'onDropboxContainerClick');
      this.addEvent(this.$dropboxCloseButton, 'click', 'onDropboxCloseButtonClick');
      this.addEvent(this.$optionsContainer, 'scroll', 'onOptionsScroll');
      this.addEvent(this.$options, 'click', 'onOptionsClick');
      this.addEvent(this.$options, 'mouseover', 'onOptionsMouseOver');
      this.addEvent(this.$options, 'touchmove', 'onOptionsTouchMove');
      this.addMutationObserver();
    }
  }, {
    key: "addEvent",
    value: function addEvent($ele, events, method) {
      var _this2 = this;
      if (!$ele) {
        return;
      }
      var eventsArray = Utils.removeArrayEmpty(events.split(' '));
      eventsArray.forEach(function (event) {
        var eventsKey = "".concat(method, "-").concat(event);
        var callback = _this2.events[eventsKey];
        if (!callback) {
          callback = _this2[method].bind(_this2);
          _this2.events[eventsKey] = callback;
        }
        DomUtils.addEvent($ele, event, callback, {
          eventHandler: _this2.eventHandler
        });
      });
    }

    /** dom event methods - start */
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      this.removeEvent(document, 'click', 'onDocumentClick');
      this.removeEvent(this.$allWrappers, 'keydown', 'onKeyDown');
      this.removeEvent(this.$toggleButton, 'click keydown', 'onToggleButtonPress');
      this.removeEvent(this.$clearButton, 'click keydown', 'onClearButtonClick');
      this.removeEvent(this.$dropboxContainer, 'click', 'onDropboxContainerClick');
      this.removeEvent(this.$dropboxCloseButton, 'click', 'onDropboxCloseButtonClick');
      this.removeEvent(this.$optionsContainer, 'scroll', 'onOptionsScroll');
      this.removeEvent(this.$options, 'click', 'onOptionsClick');
      this.removeEvent(this.$options, 'mouseover', 'onOptionsMouseOver');
      this.removeEvent(this.$options, 'touchmove', 'onOptionsTouchMove');

      // Remove search-related events that are added in renderSearch()
      if (this.$searchInput) {
        this.removeEvent(this.$searchInput, 'input', 'onSearch');
        this.removeEvent(this.$searchInput, 'change', 'preventPropagation');
        if (this.$searchClear) {
          this.removeEvent(this.$searchClear, 'click', 'onSearchClear');
          this.removeEvent(this.$searchClear, 'keydown', 'onSearchClear');
        }
      }
      if (this.$toggleAllButton) {
        this.removeEvent(this.$toggleAllButton, 'click', 'onToggleAllOptions');
      }
      if (this.$dropboxContainerBottom) {
        this.removeEvent(this.$dropboxContainerBottom, 'focus', 'onDropboxContainerTopOrBottomFocus');
      }
      if (this.$dropboxContainerTop) {
        this.removeEvent(this.$dropboxContainerTop, 'focus', 'onDropboxContainerTopOrBottomFocus');
      }
      this.removeMutationObserver();
    }
  }, {
    key: "removeEvent",
    value: function removeEvent($ele, events, method) {
      var _this3 = this;
      if (!$ele) {
        return;
      }
      var eventsArray = Utils.removeArrayEmpty(events.split(' '));
      eventsArray.forEach(function (event) {
        var eventsKey = "".concat(method, "-").concat(event);
        var callback = _this3.events[eventsKey];
        if (callback) {
          DomUtils.removeEvent($ele, event, callback);
        }
      });
    }
  }, {
    key: "onDocumentClick",
    value: function onDocumentClick(e) {
      var $clickedEle = e.target.closest('.vscomp-wrapper');

      // Close all if clicking outside any dropdown
      if (!$clickedEle) {
        VirtualSelect.openInstances.forEach(function (instance) {
          // Don't focus when closing due to clicking outside
          var instanceObj = instance;
          instanceObj.shouldFocusWrapperOnClose = false;
          instanceObj.closeDropbox();
        });
        return;
      }

      // If clicking a different dropdown, close current one
      var clickedInstance = $clickedEle.parentElement.virtualSelect;
      if (clickedInstance && clickedInstance !== this && this.isOpened() && !this.keepAlwaysOpen) {
        // Don't focus when closing due to another dropdown being opened
        this.shouldFocusWrapperOnClose = false;
        this.closeDropbox();
      }
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      var key = e.which || e.keyCode;
      var method = virtual_select_keyDownMethodMapping[key];
      if (document.activeElement === this.$searchInput && !e.shiftKey && key === 9 && !this.multiple) {
        e.preventDefault();
        this.focusFirstVisibleOption();
      }
      if (document.activeElement === this.$toggleAllButton && key === 13) {
        this.toggleAllOptions();
        return;
      }

      // Handle the Escape key when showing the dropdown as a popup, closing it
      if (key === 27 || e.key === 'Escape') {
        var wrapper = this.showAsPopup ? this.$wrapper : this.$dropboxWrapper;
        if (wrapper && (document.activeElement === wrapper || wrapper.contains(document.activeElement)) && !this.keepAlwaysOpen) {
          this.closeDropbox();
          return;
        }
      }
      if (method) {
        this[method](e);
      }
    }
  }, {
    key: "onEnterPress",
    value: function onEnterPress(e) {
      e.preventDefault();
      if (this.isOpened()) {
        this.selectFocusedOption();
      } else if (this.$ele.disabled === false) {
        this.openDropbox();
      }
    }
  }, {
    key: "onDownArrowPress",
    value: function onDownArrowPress(e) {
      // Allow default behavior (cursor movement) when search input is focused
      if (document.activeElement === this.$searchInput) {
        return;
      }
      e.preventDefault();
      if (this.isOpened()) {
        this.focusOption({
          direction: 'next'
        });
      } else {
        this.openDropbox();
      }
    }
  }, {
    key: "onUpArrowPress",
    value: function onUpArrowPress(e) {
      // Allow default behavior (cursor movement) when search input is focused
      if (document.activeElement === this.$searchInput) {
        return;
      }
      e.preventDefault();
      if (this.isOpened()) {
        this.focusOption({
          direction: 'previous'
        });
      } else {
        this.openDropbox();
      }
    }
  }, {
    key: "onBackspaceOrDeletePress",
    value: function onBackspaceOrDeletePress(e) {
      if (e.target === this.$wrapper) {
        e.preventDefault();
        if (this.selectedValues.length > 0) {
          this.reset();
        }
      }
    }
  }, {
    key: "onToggleButtonPress",
    value: function onToggleButtonPress(e) {
      if (e.type === 'keydown') {
        // Allow default Tab navigation and other non-activation keys
        if (e.code !== 'Enter' && e.code !== 'Space') {
          return;
        }
        e.preventDefault();
      }
      var $target = e.target;
      if ($target.closest('.vscomp-value-tag-clear-button')) {
        e.stopPropagation();
        this.removeValue($target.closest('.vscomp-value-tag'));
        return;
      }
      if (!$target.closest('.toggle-button-child')) {
        // Let the event bubble normally
        this.toggleDropbox();
      }
    }
  }, {
    key: "onClearButtonClick",
    value: function onClearButtonClick(e) {
      if (e.type === 'click') {
        this.reset();
      } else if (e.type === 'keydown' && (e.code === 'Enter' || e.code === 'Space')) {
        e.stopPropagation();
        this.reset();
      }
    }
  }, {
    key: "onOptionsScroll",
    value: function onOptionsScroll() {
      this.setVisibleOptions(true);
    }
  }, {
    key: "onOptionsClick",
    value: function onOptionsClick(e) {
      var $option = e.target.closest('.vscomp-option');
      if ($option && !DomUtils.hasClass($option, 'disabled')) {
        if (DomUtils.hasClass($option, 'group-title')) {
          this.onGroupTitleClick($option);
        } else {
          this.selectOption($option, {
            event: e
          });
        }
      }
    }
  }, {
    key: "onGroupTitleClick",
    value: function onGroupTitleClick($ele) {
      if (!$ele || !this.multiple || this.disableOptionGroupCheckbox) {
        return;
      }
      var isAdding = !DomUtils.hasClass($ele, 'selected');
      this.toggleGroupTitleCheckbox($ele, isAdding);
      this.toggleGroupOptions($ele, isAdding);
    }
  }, {
    key: "onDropboxContainerClick",
    value: function onDropboxContainerClick(e) {
      if (!e.target.closest('.vscomp-dropbox')) {
        this.closeDropbox();
      }
    }
  }, {
    key: "onDropboxCloseButtonClick",
    value: function onDropboxCloseButtonClick() {
      this.closeDropbox();
    }
  }, {
    key: "onOptionsMouseOver",
    value: function onOptionsMouseOver(e) {
      var $ele = e.target.closest('.vscomp-option');
      if ($ele && this.isOpened()) {
        if (DomUtils.hasClass($ele, 'disabled') || DomUtils.hasClass($ele, 'group-title')) {
          this.removeOptionFocus();
        } else {
          this.focusOption({
            $option: $ele
          });
        }
      }
    }
  }, {
    key: "onOptionsTouchMove",
    value: function onOptionsTouchMove() {
      this.removeOptionFocus();
    }
  }, {
    key: "onSearch",
    value: function onSearch(e) {
      e.stopPropagation();
      this.setSearchValue(e.target.value, true);
    }
  }, {
    key: "preventPropagation",
    value: function preventPropagation(e) {
      e.stopPropagation();
    }
  }, {
    key: "onSearchClear",
    value: function onSearchClear(e) {
      e.stopPropagation();
      if (e.code === 'Enter' || e.code === 'Space' || e.type === 'click') {
        this.setSearchValue('');
        this.focusSearchInput();
      }
    }
  }, {
    key: "onToggleAllOptions",
    value: function onToggleAllOptions() {
      this.toggleAllOptions();
    }
  }, {
    key: "onDropboxContainerTopOrBottomFocus",
    value: function onDropboxContainerTopOrBottomFocus() {
      this.closeDropbox();
    }
  }, {
    key: "onResize",
    value: function onResize() {
      this.setOptionsContainerHeight(true);
    }

    /** to remove dropboxWrapper on removing vscomp-ele when it is rendered outside of vscomp-ele */
  }, {
    key: "addMutationObserver",
    value: function addMutationObserver() {
      var _this4 = this;
      if (!this.hasDropboxWrapper) {
        return;
      }
      var $vscompEle = this.$ele;
      this.mutationObserver = new MutationObserver(function (mutations) {
        var isAdded = false;
        var isRemoved = false;
        mutations.forEach(function (mutation) {
          if (!isAdded) {
            isAdded = virtual_select_toConsumableArray(mutation.addedNodes).some(function ($ele) {
              return !!($ele === $vscompEle || $ele.contains($vscompEle));
            });
          }
          if (!isRemoved) {
            isRemoved = virtual_select_toConsumableArray(mutation.removedNodes).some(function ($ele) {
              return !!($ele === $vscompEle || $ele.contains($vscompEle));
            });
          }
        });
        if (isRemoved && !isAdded) {
          _this4.destroy();
        }
      });
      this.mutationObserver.observe(document.querySelector('body'), {
        childList: true,
        subtree: true
      });
    }
  }, {
    key: "removeMutationObserver",
    value: function removeMutationObserver() {
      if (this.hasDropboxWrapper) {
        this.mutationObserver.disconnect();
      }
    }

    /** dom event methods - end */
    /** before event methods - start */
  }, {
    key: "beforeValueSet",
    value: function beforeValueSet(isReset) {
      this.toggleAllOptionsClass(isReset ? false : undefined);
    }
  }, {
    key: "beforeSelectNewValue",
    value: function beforeSelectNewValue() {
      var _this5 = this;
      var newOption = this.getNewOption();
      var newIndex = newOption.index;
      this.newValues.push(newOption.value);
      this.setOptionProp(newIndex, 'isCurrentNew', false);
      this.setOptionProp(newIndex, 'isNew', true);

      /** using setTimeout to fix the issue of dropbox getting closed on select */
      setTimeout(function () {
        _this5.setSearchValue('');
        _this5.focusSearchInput();
      }, 0);
    }
    /** before event methods - end */

    /** after event methods - start */
  }, {
    key: "afterRenderWrapper",
    value: function afterRenderWrapper() {
      var _this6 = this;
      DomUtils.addClass(this.$ele, 'vscomp-ele');
      this.renderSearch();
      this.setEleStyles();
      this.setDropboxStyles();
      this.setVisibleOptionsCount();
      this.setOptionsContainerHeight();
      this.addEvents();
      this.setEleProps();
      if (!this.keepAlwaysOpen && !this.showAsPopup) {
        this.initDropboxPopover();
      }
      if (this.initialSelectedValue) {
        this.setValueMethod(this.initialSelectedValue, this.silentInitialValueSet);
      } else if (this.autoSelectFirstOption && this.visibleOptions.length) {
        this.setValueMethod(this.visibleOptions[0].value, this.silentInitialValueSet);
      }
      if (this.showOptionsOnlyOnSearch) {
        this.setSearchValue('', false, true);
      }
      if (this.initialDisabled) {
        this.disable();
      }
      if (this.autofocus) {
        this.focus();
      }

      // Call afterFirstRender callback if provided
      if (typeof this.afterFirstRender === 'function') {
        setTimeout(function () {
          _this6.afterFirstRender();
        }, 0);
      }
    }
  }, {
    key: "afterRenderOptions",
    value: function afterRenderOptions() {
      var _this7 = this;
      var visibleOptions = this.getVisibleOptions();
      var hasNoOptions = !this.options.length && !this.hasServerSearch;
      var hasNoSearchResults = !hasNoOptions && !visibleOptions.length;
      if (!this.allowNewOption || this.hasServerSearch || this.showOptionsOnlyOnSearch) {
        DomUtils.toggleClass(this.$allWrappers, 'has-no-search-results', hasNoSearchResults);
        if (hasNoSearchResults) {
          DomUtils.setAttr(this.$noSearchResults, 'tabindex', '0');
          DomUtils.setAttr(this.$noSearchResults, 'aria-hidden', 'false');
        } else {
          DomUtils.setAttr(this.$noSearchResults, 'tabindex', '-1');
          DomUtils.setAttr(this.$noSearchResults, 'aria-hidden', 'true');
        }
      }
      DomUtils.toggleClass(this.$allWrappers, 'has-no-options', hasNoOptions);
      if (hasNoOptions) {
        DomUtils.setAttr(this.$noOptions, 'tabindex', '0');
        DomUtils.setAttr(this.$noOptions, 'aria-hidden', 'false');
      } else {
        DomUtils.setAttr(this.$noOptions, 'tabindex', '-1');
        DomUtils.setAttr(this.$noOptions, 'aria-hidden', 'true');
      }
      this.setOptionAttr();
      this.setOptionsPosition();
      this.setOptionsTooltip();
      if (document.activeElement !== this.$searchInput) {
        setTimeout(function () {
          var focusedOption = DomUtils.getElementsBySelector('.focused', _this7.$dropboxContainer)[0];
          if (focusedOption !== undefined) {
            focusedOption.focus({
              preventScroll: true
            });
          }
        }, 20);
      }
    }
  }, {
    key: "afterSetOptionsContainerHeight",
    value: function afterSetOptionsContainerHeight(reset) {
      if (reset && this.showAsPopup) {
        this.setVisibleOptions();
      }
    }
  }, {
    key: "afterSetSearchValue",
    value: function afterSetSearchValue() {
      var _this8 = this;
      if (this.hasServerSearch) {
        clearTimeout(this.serverSearchTimeout);
        this.serverSearchTimeout = setTimeout(function () {
          _this8.serverSearch();
        }, this.searchDelay);
      } else {
        this.setVisibleOptionsCount();
      }
      if (this.selectAllOnlyVisible) {
        this.toggleAllOptionsClass();
      }
      this.focusOption({
        focusFirst: true
      });
    }
  }, {
    key: "afterSetVisibleOptionsCount",
    value: function afterSetVisibleOptionsCount() {
      this.scrollToTop();
      this.setOptionsHeight();
      this.setVisibleOptions();
      this.updatePosition();
    }
  }, {
    key: "afterValueSet",
    value: function afterValueSet() {
      this.scrollToTop();
      this.setSearchValue('');
      this.renderOptions();
    }
  }, {
    key: "afterSetOptions",
    value: function afterSetOptions(keepValue) {
      if (keepValue) {
        this.setSelectedProp();
      }
      this.setOptionsHeight();
      this.setVisibleOptions();
      if (this.showOptionsOnlyOnSearch) {
        this.setSearchValue('', false, true);
      }
      if (!keepValue) {
        this.reset();
      }
    }
    /** after event methods - end */

    /** set methods - start */
    /**
     * @param {virtualSelectOptions} params
     */
  }, {
    key: "setProps",
    value: function setProps(params) {
      var options = this.setDefaultProps(params);
      this.setPropsFromElementAttr(options);
      var convertToBoolean = Utils.convertToBoolean;
      this.$ele = options.ele;
      this.dropboxWrapper = options.dropboxWrapper;
      this.valueKey = options.valueKey;
      this.labelKey = options.labelKey;
      this.descriptionKey = options.descriptionKey;
      this.aliasKey = options.aliasKey;
      this.optionHeightText = options.optionHeight;
      this.optionHeight = parseFloat(this.optionHeightText);
      this.multiple = convertToBoolean(options.multiple);
      this.hasSearch = convertToBoolean(options.search);
      this.searchByStartsWith = convertToBoolean(options.searchByStartsWith);
      this.searchGroup = convertToBoolean(options.searchGroup);
      this.searchIndex = options.searchIndex;
      this.searchIndexValue = options.searchIndexValue;
      this.getSearchIndex = options.getSearchIndex;
      this.hideClearButton = convertToBoolean(options.hideClearButton);
      // Support both enableClear and enableClearButton for backwards compatibility
      this.enableClearButton = convertToBoolean(options.enableClearButton, options.enableClear);
      this.autoSelectFirstOption = convertToBoolean(options.autoSelectFirstOption);
      this.hasOptionDescription = convertToBoolean(options.hasOptionDescription);
      this.silentInitialValueSet = convertToBoolean(options.silentInitialValueSet);
      this.allowNewOption = convertToBoolean(options.allowNewOption);
      this.markSearchResults = convertToBoolean(options.markSearchResults);
      this.showSelectedOptionsFirst = convertToBoolean(options.showSelectedOptionsFirst);
      this.disableSelectAll = convertToBoolean(options.disableSelectAll);
      this.keepAlwaysOpen = convertToBoolean(options.keepAlwaysOpen);
      this.showDropboxAsPopup = convertToBoolean(options.showDropboxAsPopup);
      this.hideValueTooltipOnSelectAll = convertToBoolean(options.hideValueTooltipOnSelectAll);
      this.showOptionsOnlyOnSearch = convertToBoolean(options.showOptionsOnlyOnSearch);
      this.selectAllOnlyVisible = convertToBoolean(options.selectAllOnlyVisible);
      this.alwaysShowSelectedOptionsCount = convertToBoolean(options.alwaysShowSelectedOptionsCount);
      this.alwaysShowSelectedOptionsLabel = convertToBoolean(options.alwaysShowSelectedOptionsLabel);
      this.disableAllOptionsSelectedText = convertToBoolean(options.disableAllOptionsSelectedText);
      this.showValueAsTags = convertToBoolean(options.showValueAsTags);
      this.autoDestroy = convertToBoolean(options.autoDestroy);
      this.instanceId = options.instanceId;
      this.enableDeselectAll = convertToBoolean(options.enableDeselectAll);
      this.announce = options.announce;
      this.afterFirstRender = options.afterFirstRender;
      this.disableOptionGroupCheckbox = convertToBoolean(options.disableOptionGroupCheckbox);
      this.enableSecureText = convertToBoolean(options.enableSecureText);
      this.setValueAsArray = convertToBoolean(options.setValueAsArray);
      this.disableValidation = convertToBoolean(options.disableValidation);
      this.initialDisabled = convertToBoolean(options.disabled);
      this.required = convertToBoolean(options.required);
      this.autofocus = convertToBoolean(options.autofocus);
      this.useGroupValue = convertToBoolean(options.useGroupValue);
      this.focusSelectedOptionOnOpen = convertToBoolean(options.focusSelectedOptionOnOpen);
      this.noOptionsText = options.noOptionsText;
      this.noSearchResultsText = options.noSearchResultsText;
      this.selectAllText = options.selectAllText;
      this.searchNormalize = options.searchNormalize;
      this.searchPlaceholderText = options.searchPlaceholderText;
      this.searchFormLabel = options.searchFormLabel;
      this.optionsSelectedText = options.optionsSelectedText;
      this.optionSelectedText = options.optionSelectedText;
      this.allOptionsSelectedText = options.allOptionsSelectedText;
      this.clearButtonText = options.clearButtonText;
      this.moreText = options.moreText;
      this.placeholder = options.placeholder;
      this.position = options.position;
      this.textDirection = options.textDirection;
      this.dropboxWidth = options.dropboxWidth;
      this.tooltipFontSize = options.tooltipFontSize;
      this.tooltipAlignment = options.tooltipAlignment;
      this.tooltipMaxWidth = options.tooltipMaxWidth;
      this.updatePositionThrottle = options.updatePositionThrottle;
      this.borderRadiusOffset = parseFloat(options.borderRadiusOffset);
      this.noOfDisplayValues = parseInt(options.noOfDisplayValues);
      this.zIndex = parseInt(options.zIndex);
      this.maxValues = parseInt(options.maxValues);
      this.minValues = parseInt(options.minValues);
      this.name = this.secureText(options.name);
      this.additionalClasses = options.additionalClasses;
      this.additionalDropboxClasses = options.additionalDropboxClasses;
      this.additionalDropboxContainerClasses = options.additionalDropboxContainerClasses;
      this.additionalToggleButtonClasses = options.additionalToggleButtonClasses;
      this.popupDropboxBreakpoint = options.popupDropboxBreakpoint;
      this.popupPosition = options.popupPosition;
      this.onServerSearch = options.onServerSearch;
      this.labelRenderer = options.labelRenderer;
      this.selectedLabelRenderer = options.selectedLabelRenderer;
      this.initialSelectedValue = options.selectedValue === 0 ? '0' : options.selectedValue;
      this.emptyValue = options.emptyValue;
      this.ariaLabelText = options.ariaLabelText;
      this.ariaLabelledby = options.ariaLabelledby;
      this.ariaLabelClearButtonText = options.ariaLabelClearButtonText;
      this.ariaLabelTagClearButtonText = options.ariaLabelTagClearButtonText;
      this.ariaLabelSearchClearButtonText = options.ariaLabelSearchClearButtonText;
      this.maxWidth = options.maxWidth;
      this.searchDelay = options.searchDelay;
      this.showDuration = parseInt(options.showDuration);
      this.hideDuration = parseInt(options.hideDuration);

      /** @type {string[]} */
      this.selectedValues = [];
      /** @type {virtualSelectOption[]} */
      this.selectedOptions = [];
      this.newValues = [];
      this.events = {};
      this.tooltipEnterDelay = 200;
      this.searchValue = '';
      this.searchValueOriginal = '';
      this.isAllSelected = false;
      if (options.search === undefined && this.multiple || this.allowNewOption || this.showOptionsOnlyOnSearch) {
        this.hasSearch = true;
      }
      this.hasServerSearch = typeof this.onServerSearch === 'function';
      if (this.maxValues || this.hasServerSearch || this.showOptionsOnlyOnSearch) {
        this.disableSelectAll = true;
        this.disableOptionGroupCheckbox = true;
      }
      if (this.keepAlwaysOpen) {
        this.dropboxWrapper = 'self';
      }
      this.showAsPopup = this.showDropboxAsPopup && !this.keepAlwaysOpen && window.innerWidth <= parseFloat(this.popupDropboxBreakpoint);
      this.hasSearchContainer = this.hasSearch || this.multiple && !this.disableSelectAll;
      // Store the initial/requested options count for recalculation on resize
      this.initialOptionsCount = options.optionsCount;
      this.optionsCount = this.getOptionsCount(options.optionsCount);
      this.halfOptionsCount = Math.ceil(this.optionsCount / 2);
      this.optionsHeight = this.getOptionsHeight();
      this.uniqueId = this.getUniqueId();
      this.shouldFocusWrapperOnClose = true; // Initialize focus management property
      this.ariaSetSize = 0;
      this.eventHandler = options.eventHandler || new AbortController();

      // Expose API globally if instanceId is provided
      if (this.instanceId) {
        window["vselectApi_".concat(this.instanceId)] = this;
      }
    }

    /**
     * @param {virtualSelectOptions} options
     */
  }, {
    key: "setDefaultProps",
    value: function setDefaultProps(options) {
      var defaultOptions = {
        dropboxWrapper: 'self',
        valueKey: 'value',
        labelKey: 'label',
        descriptionKey: 'description',
        aliasKey: 'alias',
        ariaLabelText: 'Options list',
        ariaLabelClearButtonText: 'Clear button',
        ariaLabelTagClearButtonText: 'Remove option',
        ariaLabelSearchClearButtonText: 'Clear search input',
        optionsCount: 5,
        noOfDisplayValues: 50,
        optionHeight: '40px',
        noOptionsText: 'No options found',
        noSearchResultsText: 'No results found',
        selectAllText: 'Select All',
        searchNormalize: true,
        // Enable diacritic-insensitive search by default
        searchPlaceholderText: 'Search...',
        searchFormLabel: 'Search',
        clearButtonText: 'Clear',
        moreText: 'more...',
        optionsSelectedText: 'options selected',
        optionSelectedText: 'option selected',
        allOptionsSelectedText: 'All',
        placeholder: 'Select',
        position: 'bottom left',
        zIndex: options.keepAlwaysOpen ? 1 : 2,
        tooltipFontSize: '14px',
        tooltipAlignment: 'center',
        tooltipMaxWidth: '300px',
        updatePositionThrottle: 100,
        borderRadiusOffset: 4,
        name: '',
        additionalClasses: '',
        additionalDropboxClasses: '',
        additionalDropboxContainerClasses: '',
        additionalToggleButtonClasses: '',
        maxValues: 0,
        showDropboxAsPopup: true,
        popupDropboxBreakpoint: '576px',
        popupPosition: 'center',
        hideValueTooltipOnSelectAll: true,
        emptyValue: '',
        searchDelay: 300,
        focusSelectedOptionOnOpen: true,
        showDuration: 300,
        hideDuration: 200,
        eventHandler: new AbortController()
      };
      if (options.hasOptionDescription) {
        defaultOptions.optionsCount = 4;
        defaultOptions.optionHeight = '50px';
      }
      return Object.assign(defaultOptions, options);
    }
  }, {
    key: "setPropsFromElementAttr",
    value: function setPropsFromElementAttr(options) {
      var $ele = options.ele;
      Object.keys(virtual_select_attrPropsMapping).forEach(function (k) {
        var value = $ele.getAttribute(k);
        if (valueLessProps.indexOf(k) !== -1 && (value === '' || value === 'true')) {
          value = true;
        }
        if (value) {
          // eslint-disable-next-line no-param-reassign
          options[virtual_select_attrPropsMapping[k]] = value;
        }
      });
    }
  }, {
    key: "setEleProps",
    value: function setEleProps() {
      var $ele = this.$ele;
      $ele.virtualSelect = this;
      $ele.value = this.multiple ? [] : '';
      $ele.name = this.name;
      $ele.disabled = false;
      $ele.required = this.required;
      $ele.autofocus = this.autofocus;
      $ele.multiple = this.multiple;
      $ele.form = $ele.closest('form');
      $ele.reset = VirtualSelect.reset;
      $ele.setValue = VirtualSelect.setValueMethod;
      $ele.setOptions = VirtualSelect.setOptionsMethod;
      $ele.setDisabledOptions = VirtualSelect.setDisabledOptionsMethod;
      $ele.setEnabledOptions = VirtualSelect.setEnabledOptionsMethod;
      $ele.toggleSelectAll = VirtualSelect.toggleSelectAll;
      $ele.isAllSelected = VirtualSelect.isAllSelected;
      $ele.addOption = VirtualSelect.addOptionMethod;
      $ele.getNewValue = VirtualSelect.getNewValueMethod;
      $ele.getDisplayValue = VirtualSelect.getDisplayValueMethod;
      $ele.getSelectedOptions = VirtualSelect.getSelectedOptionsMethod;
      $ele.getDisabledOptions = VirtualSelect.getDisabledOptionsMethod;
      $ele.open = VirtualSelect.openMethod;
      $ele.close = VirtualSelect.closeMethod;
      $ele.focus = VirtualSelect.focusMethod;
      $ele.enable = VirtualSelect.enableMethod;
      $ele.disable = VirtualSelect.disableMethod;
      $ele.destroy = VirtualSelect.destroyMethod;
      $ele.validate = VirtualSelect.validateMethod;
      $ele.toggleRequired = VirtualSelect.toggleRequiredMethod;
      if (this.hasDropboxWrapper) {
        this.$dropboxWrapper.virtualSelect = this;
      }
    }
  }, {
    key: "setValueMethod",
    value: function setValueMethod(newValue, silentChange) {
      var valuesMapping = {};
      var valuesOrder = {};
      var validValues = [];
      var isMultiSelect = this.multiple;
      // Normalize input value first
      var value = Utils.normalizeValues(newValue);
      if (value) {
        if (!Array.isArray(value)) {
          value = [value];
        }
        if (isMultiSelect) {
          var maxValues = this.maxValues;
          if (maxValues && value.length > maxValues) {
            value.splice(maxValues);
          }
        } else if (value.length > 1) {
          value = [value[0]];
        }
        if (this.useGroupValue) {
          value = this.setGroupOptionsValue(value);
        }
        value.forEach(function (d, i) {
          valuesMapping[d] = true;
          valuesOrder[d] = i;
        });
        if (this.allowNewOption && value) {
          this.setNewOptionsFromValue(value);
        }
      }
      this.options.forEach(function (d) {
        // Compare with normalized option values
        var normalizedOptionValue = Utils.normalizeValues(d.value);
        if (valuesMapping[normalizedOptionValue] === true && !d.isDisabled && !d.isGroupTitle) {
          // eslint-disable-next-line no-param-reassign
          d.isSelected = true;
          // Store original value but compare with normalized value
          validValues.push(d.value);
        } else {
          // eslint-disable-next-line no-param-reassign
          d.isSelected = false;
        }
      });
      if (isMultiSelect) {
        if (this.hasOptionGroup) {
          this.setGroupsSelectedProp();
        }

        /** sorting validValues in the given values order */
        validValues.sort(function (a, b) {
          return valuesOrder[Utils.normalizeValues(a)] - valuesOrder[Utils.normalizeValues(b)];
        });
      } else {
        /** taking first value for single select */
        var _validValues = validValues;
        var _validValues2 = virtual_select_slicedToArray(_validValues, 1);
        validValues = _validValues2[0];
      }
      this.beforeValueSet();
      this.setValue(validValues, {
        disableEvent: silentChange
      });
      this.afterValueSet();
    }
  }, {
    key: "setGroupOptionsValue",
    value: function setGroupOptionsValue(preparedValues) {
      var selectedValues = [];
      var selectedGroups = {};
      var valuesMapping = {};
      preparedValues.forEach(function (d) {
        valuesMapping[d] = true;
      });
      this.options.forEach(function (d) {
        var value = d.value;
        var isSelected = valuesMapping[value] === true;
        if (d.isGroupTitle) {
          if (isSelected) {
            selectedGroups[d.index] = true;
          }
        } else if (isSelected || selectedGroups[d.groupIndex]) {
          selectedValues.push(value);
        }
      });
      return selectedValues;
    }
  }, {
    key: "setGroupsSelectedProp",
    value: function setGroupsSelectedProp() {
      var isAllGroupOptionsSelected = this.isAllGroupOptionsSelected.bind(this);
      this.options.forEach(function (d) {
        if (d.isGroupTitle) {
          // eslint-disable-next-line no-param-reassign
          d.isSelected = isAllGroupOptionsSelected(d.index);
        }
      });
    }
  }, {
    key: "setOptionsMethod",
    value: function setOptionsMethod(options, keepValue) {
      this.setOptions(options);
      this.afterSetOptions(keepValue);
    }
  }, {
    key: "setDisabledOptionsMethod",
    value: function setDisabledOptionsMethod(disabledOptions) {
      var keepValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.setDisabledOptions(disabledOptions, true);
      if (!keepValue) {
        this.setValueMethod(null);
        this.toggleAllOptionsClass();
      }
      this.setVisibleOptions();
    }
  }, {
    key: "setDisabledOptions",
    value: function setDisabledOptions(disabledOptions) {
      var setOptionsProp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var disabledOptionsArr = [];
      if (!disabledOptions) {
        if (setOptionsProp) {
          this.options.forEach(function (d) {
            // eslint-disable-next-line no-param-reassign
            d.isDisabled = false;
            return d;
          });
        }
      } else if (disabledOptions === true) {
        if (setOptionsProp) {
          this.options.forEach(function (d) {
            // eslint-disable-next-line no-param-reassign
            d.isDisabled = true;
            disabledOptionsArr.push(d.value);
            return d;
          });
        }
      } else {
        disabledOptionsArr = disabledOptions.map(function (d) {
          return d.toString();
        });
        var disabledOptionsMapping = {};
        disabledOptionsArr.forEach(function (d) {
          disabledOptionsMapping[d] = true;
        });
        if (setOptionsProp) {
          this.options.forEach(function (d) {
            // eslint-disable-next-line no-param-reassign
            d.isDisabled = disabledOptionsMapping[d.value] === true;
            return d;
          });
        }
      }
      this.disabledOptions = disabledOptionsArr;
    }
  }, {
    key: "setEnabledOptionsMethod",
    value: function setEnabledOptionsMethod(disabledOptions) {
      var keepValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.setEnabledOptions(disabledOptions);
      if (!keepValue) {
        this.setValueMethod(null);
        this.toggleAllOptionsClass();
      }
      this.setVisibleOptions();
    }
  }, {
    key: "setEnabledOptions",
    value: function setEnabledOptions(enabledOptions) {
      if (enabledOptions === undefined) {
        return;
      }
      var disabledOptionsArr = [];
      if (enabledOptions === true) {
        this.options.forEach(function (d) {
          // eslint-disable-next-line no-param-reassign
          d.isDisabled = false;
          return d;
        });
      } else {
        var enabledOptionsMapping = {};
        enabledOptions.forEach(function (d) {
          enabledOptionsMapping[d] = true;
        });
        this.options.forEach(function (d) {
          var isDisabled = enabledOptionsMapping[d.value] !== true;

          // eslint-disable-next-line no-param-reassign
          d.isDisabled = isDisabled;
          if (isDisabled) {
            disabledOptionsArr.push(d.value);
          }
          return d;
        });
      }
      this.disabledOptions = disabledOptionsArr;
    }
  }, {
    key: "setOptions",
    value: function setOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var preparedOptions = [];
      var hasDisabledOptions = this.disabledOptions.length;
      var valueKey = this.valueKey,
        labelKey = this.labelKey,
        descriptionKey = this.descriptionKey,
        aliasKey = this.aliasKey,
        hasOptionDescription = this.hasOptionDescription;
      var getString = Utils.getString,
        convertToBoolean = Utils.convertToBoolean;
      var secureText = this.secureText.bind(this);
      var getAlias = this.getAlias.bind(this);
      var index = 0;
      var hasOptionGroup = false;
      var disabledOptionsMapping = {};
      var hasEmptyValueOption = false;
      this.disabledOptions.forEach(function (d) {
        disabledOptionsMapping[d] = true;
      });
      var _prepareOption = function prepareOption(d) {
        if (virtual_select_typeof(d) !== 'object') {
          // eslint-disable-next-line no-param-reassign
          d = _defineProperty(_defineProperty({}, valueKey, d), labelKey, d);
        }
        var value = secureText(getString(d[valueKey]));
        var label = secureText(getString(d[labelKey]));
        var childOptions = d.options;
        var isGroupTitle = !!childOptions;
        var option = {
          index: index,
          value: value,
          label: label,
          // labelNormalized is computed lazily on first search for efficiency
          alias: getAlias(d[aliasKey]),
          isVisible: convertToBoolean(d.isVisible, true),
          isNew: d.isNew || false,
          isGroupTitle: isGroupTitle,
          classNames: d.classNames
        };
        if (!hasEmptyValueOption && value === '') {
          hasEmptyValueOption = true;
        }
        if (hasDisabledOptions) {
          option.isDisabled = disabledOptionsMapping[value] === true;
        }
        if (d.isGroupOption) {
          option.isGroupOption = true;
          option.groupIndex = d.groupIndex;
        }
        if (hasOptionDescription) {
          option.description = secureText(getString(d[descriptionKey]));
        }
        if (d.customData) {
          option.customData = d.customData;
        }
        preparedOptions.push(option);
        index += 1;
        if (isGroupTitle) {
          var groupIndex = option.index;
          hasOptionGroup = true;
          childOptions.forEach(function (childData) {
            // eslint-disable-next-line no-param-reassign
            childData.isGroupOption = true;
            // eslint-disable-next-line no-param-reassign
            childData.groupIndex = groupIndex;
            _prepareOption(childData);
          });
        }
      };
      if (Array.isArray(options)) {
        options.forEach(_prepareOption);
      }
      var optionsLength = preparedOptions.length;
      var $ele = this.$ele;
      $ele.options = preparedOptions;
      $ele.length = optionsLength;
      this.options = preparedOptions;
      this.visibleOptionsCount = optionsLength;
      this.lastOptionIndex = optionsLength - 1;
      this.newValues = [];
      this.hasOptionGroup = hasOptionGroup;
      this.hasEmptyValueOption = hasEmptyValueOption;
      this.setSortedOptions();
    }
  }, {
    key: "setServerOptions",
    value: function setServerOptions() {
      var _this9 = this;
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.setOptionsMethod(options, true);
      var selectedOptions = this.selectedOptions;
      var newOptions = this.options;
      var optionsUpdated = false;

      /** merging already selected options details with new options */
      if (selectedOptions.length) {
        var newOptionsValueMapping = {};
        optionsUpdated = true;
        newOptions.forEach(function (d) {
          newOptionsValueMapping[d.value] = true;
        });
        selectedOptions.forEach(function (d) {
          if (newOptionsValueMapping[d.value] !== true) {
            // eslint-disable-next-line no-param-reassign
            d.isVisible = false;
            newOptions.push(d);
          }
        });
        this.setOptionsMethod(newOptions, true);
      }

      /** merging new search option */
      if (this.allowNewOption && this.searchValue) {
        var hasExactOption = newOptions.some(function (d) {
          return d.label.toLowerCase() === _this9.searchValue;
        });
        if (!hasExactOption) {
          optionsUpdated = true;
          this.setNewOption();
        }
      }
      if (optionsUpdated) {
        this.setVisibleOptionsCount();
        if (this.multiple) {
          this.toggleAllOptionsClass();
        }
        this.setValueText();
      } else {
        this.updatePosition();
      }
      this.setVisibleOptionsCount();
      DomUtils.removeClass(this.$allWrappers, 'server-searching');
    }
  }, {
    key: "setSelectedOptions",
    value: function setSelectedOptions() {
      this.selectedOptions = this.options.filter(function (d) {
        return d.isSelected;
      });
    }
  }, {
    key: "setSortedOptions",
    value: function setSortedOptions() {
      var sortedOptions = virtual_select_toConsumableArray(this.options);
      if (this.showSelectedOptionsFirst && this.selectedValues.length) {
        if (this.hasOptionGroup) {
          sortedOptions = this.sortOptionsGroup(sortedOptions);
        } else {
          sortedOptions = this.sortOptions(sortedOptions);
        }
      }
      this.sortedOptions = sortedOptions;
    }
  }, {
    key: "setVisibleOptions",
    value: function setVisibleOptions() {
      var visibleOptions = virtual_select_toConsumableArray(this.sortedOptions);
      var maxOptionsToShow = this.optionsCount * 2;
      var startIndex = this.getVisibleStartIndex();
      var newOption = this.getNewOption();
      var endIndex = startIndex + maxOptionsToShow - 1;
      var i = 0;
      if (newOption) {
        newOption.visibleIndex = i;
        i += 1;
      }
      visibleOptions = visibleOptions.filter(function (d) {
        var inView = false;
        if (d.isVisible && !d.isCurrentNew) {
          inView = i >= startIndex && i <= endIndex;
          // eslint-disable-next-line no-param-reassign
          d.visibleIndex = i;
          i += 1;
        }
        return inView;
      });
      if (newOption) {
        visibleOptions = [newOption].concat(virtual_select_toConsumableArray(visibleOptions));
      }
      this.visibleOptions = visibleOptions;
      // update number of visible options
      this.visibleOptionsCount = visibleOptions.length;
      this.renderOptions();
    }
  }, {
    key: "setOptionsPosition",
    value: function setOptionsPosition(startIndex) {
      // We use the parseInt to fix a Chrome issue when dealing with decimal pixels in translate3d
      var top = parseInt((startIndex || this.getVisibleStartIndex()) * this.optionHeight);
      this.$options.style.transform = "translate3d(0, ".concat(top, "px, 0)");
      DomUtils.setData(this.$options, 'top', top);
    }
  }, {
    key: "setOptionsTooltip",
    value: function setOptionsTooltip() {
      var _this0 = this;
      var visibleOptions = this.getVisibleOptions();
      var hasOptionDescription = this.hasOptionDescription;
      visibleOptions.forEach(function (d) {
        var $optionEle = _this0.$dropboxContainer.querySelector(".vscomp-option[data-index=\"".concat(d.index, "\"]"));
        DomUtils.setData($optionEle.querySelector('.vscomp-option-text'), 'tooltip', d.label);
        if (hasOptionDescription) {
          DomUtils.setData($optionEle.querySelector('.vscomp-option-description'), 'tooltip', d.description);
        }
      });
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref2$disableEvent = _ref2.disableEvent,
        disableEvent = _ref2$disableEvent === void 0 ? false : _ref2$disableEvent,
        _ref2$disableValidati = _ref2.disableValidation,
        disableValidation = _ref2$disableValidati === void 0 ? false : _ref2$disableValidati;
      // Normalize input value first
      var normalizedValue = Utils.normalizeValues(value);
      var isValidValue = this.hasEmptyValueOption && normalizedValue === '' || normalizedValue;
      if (!isValidValue) {
        this.selectedValues = [];
      } else if (Array.isArray(normalizedValue)) {
        this.selectedValues = virtual_select_toConsumableArray(normalizedValue);
      } else {
        this.selectedValues = [normalizedValue];
      }
      var newValue = this.getValue();
      this.$ele.value = newValue;
      this.$hiddenInput.value = this.getInputValue(newValue);
      this.isMaxValuesSelected = !!(this.maxValues && this.maxValues <= this.selectedValues.length);
      this.toggleAllOptionsClass();
      this.setValueText();
      var hasValue = Utils.isNotEmpty(this.selectedValues);
      DomUtils.toggleClass(this.$allWrappers, 'has-value', hasValue);
      DomUtils.toggleClass(this.$allWrappers, 'max-value-selected', this.isMaxValuesSelected);
      DomUtils.setAttr(this.$clearButton, 'tabindex', hasValue ? '0' : '-1');
      DomUtils.setAria(this.$clearButton, 'hidden', hasValue === false);
      if (!disableValidation) {
        this.validate();
      }
      if (!disableEvent) {
        DomUtils.dispatchEvent(this.$ele, 'change', true);
      }
    }
  }, {
    key: "setValueText",
    value: function setValueText() {
      var _this1 = this;
      var multiple = this.multiple,
        selectedValues = this.selectedValues,
        noOfDisplayValues = this.noOfDisplayValues,
        showValueAsTags = this.showValueAsTags,
        $valueText = this.$valueText,
        selectedLabelRenderer = this.selectedLabelRenderer;
      var valueText = [];
      var valueTooltip = [];
      var selectedLength = selectedValues.length;
      var selectedValuesCount = 0;
      var showAllText = this.isAllSelected && !this.hasServerSearch && !this.disableAllOptionsSelectedText && !showValueAsTags;

      /** show all values selected text without tooltip text */
      if (showAllText && this.hideValueTooltipOnSelectAll) {
        $valueText.innerHTML = "".concat(this.allOptionsSelectedText, " (").concat(selectedLength, ")");
      } else {
        var selectedOptions = this.getSelectedOptions({
          fullDetails: true,
          keepSelectionOrder: true
        });
        selectedOptions.some(function (d) {
          if (d.isCurrentNew) {
            return false;
          }
          if (selectedValuesCount >= noOfDisplayValues) {
            return true;
          }
          var label = d.label;
          if (typeof selectedLabelRenderer === 'function') {
            label = selectedLabelRenderer(d);
          }
          valueText.push(label);
          selectedValuesCount += 1;
          if (showValueAsTags) {
            // Will cause text overflow in runtime and if so,the tooltip information is prepared
            var valueTooltipForTags = Utils.willTextOverflow($valueText.parentElement, label) ? _this1.getTooltipAttrText(label, false, true) : '';

            // replace is nedded to remove html tags from aria-label (ex: when there is an icon in the label)
            var ariaLabelClearBtnTxt = '';
            if (_this1.ariaLabelTagClearButtonText) {
              var stripHtmlLabel = label.replace(/<[^>]+>/ig, '').trim();
              ariaLabelClearBtnTxt = "aria-label=\"".concat(stripHtmlLabel, ", ").concat(_this1.ariaLabelTagClearButtonText, "\"");
            }
            var valueTagHtml = "<span class=\"vscomp-value-tag\" data-index=\"".concat(d.index, "\" ").concat(valueTooltipForTags, ">\n                  <span class=\"vscomp-value-tag-content\">").concat(label, "</span>\n                  <span \n                    class=\"vscomp-value-tag-clear-button\" \n                    role=\"button\" \n                    ").concat(ariaLabelClearBtnTxt, "\n                    tabindex=\"0\">\n                      <i class=\"vscomp-clear-icon\"></i>\n                  </span>\n                </span>");
            valueTooltip.push(valueTagHtml);
          } else {
            valueTooltip.push(label);
          }
          return false;
        });
        var moreSelectedOptions = selectedLength - noOfDisplayValues;
        if (moreSelectedOptions > 0) {
          valueTooltip.push("<span class=\"vscomp-value-tag more-value-count\">+ ".concat(moreSelectedOptions, " ").concat(this.moreText, "</span>"));
        }
        var aggregatedValueText = valueText.join(', ');
        if (aggregatedValueText === '') {
          $valueText.innerHTML = this.placeholder;
        } else {
          $valueText.innerHTML = aggregatedValueText;
          if (multiple) {
            var maxValues = this.maxValues;
            var showSelectedCount = this.alwaysShowSelectedOptionsCount || DomUtils.hasEllipsis($valueText);
            if (showSelectedCount || maxValues || showValueAsTags) {
              var countText = "<span class=\"vscomp-selected-value-count\">".concat(selectedLength, "</span>");
              if (maxValues) {
                countText += " / <span class=\"vscomp-max-value-count\">".concat(maxValues, "</span>");
              }

              /** show all values selected text with tooltip text */
              if (showAllText) {
                $valueText.innerHTML = "".concat(this.allOptionsSelectedText, " (").concat(selectedLength, ")");
              } else if (showValueAsTags) {
                $valueText.innerHTML = valueTooltip.join('');
                this.$valueTags = $valueText.querySelectorAll('.vscomp-value-tag');
                this.setValueTagAttr();
              } else if (!this.alwaysShowSelectedOptionsLabel) {
                /** replace comma separated list of selections with shorter text indicating selection count */
                var optionsSelectedText = selectedLength === 1 ? this.optionSelectedText : this.optionsSelectedText;
                $valueText.innerHTML = "".concat(countText, " ").concat(optionsSelectedText);
              }
            } else {
              /** removing tooltip if full value text is visible */
              valueTooltip = [];
            }
          }
        }
      }
      var tooltipText = '';
      if (selectedLength === 0) {
        tooltipText = this.placeholder;
      } else if (!showValueAsTags) {
        tooltipText = valueTooltip.join(', ');
      }
      if (!showValueAsTags) {
        DomUtils.setData($valueText, 'tooltip', tooltipText);
      }
      if (multiple) {
        if (!showValueAsTags) {
          DomUtils.setData($valueText, 'tooltipEllipsisOnly', selectedLength === 0);
        } else {
          this.updatePosition();
        }
      }
    }
  }, {
    key: "setSearchValue",
    value: function setSearchValue(value) {
      var skipInputSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var forceSet = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (value === this.searchValueOriginal && !forceSet) {
        return;
      }
      if (!skipInputSet) {
        this.$searchInput.value = value;
      }
      var searchValue = value.replace(/\\/g, '').toLowerCase().trim();
      this.searchValue = searchValue;
      this.searchValueOriginal = value;
      DomUtils.toggleClass(this.$allWrappers, 'has-search-value', value);
      DomUtils.setAttr(this.$searchClear, 'tabindex', value !== '' ? '0' : '-1');
      DomUtils.setAria(this.$searchClear, 'hidden', value === '');
      this.afterSetSearchValue();
    }
  }, {
    key: "setVisibleOptionsCount",
    value: function setVisibleOptionsCount() {
      var visibleOptionsCount = 0;
      var hasExactOption = false;
      var visibleOptionGroupsMapping;
      var searchGroup = this.searchGroup,
        showOptionsOnlyOnSearch = this.showOptionsOnlyOnSearch,
        searchByStartsWith = this.searchByStartsWith;

      /** If searchNormalize we'll normalize the searchValue */
      var searchValue = this.searchValue;
      searchValue = this.searchNormalize && searchValue.trim() !== '' ? Utils.normalizeString(searchValue) : searchValue;
      var isOptionVisible = this.isOptionVisible.bind(this);
      if (this.hasOptionGroup) {
        visibleOptionGroupsMapping = this.getVisibleOptionGroupsMapping(searchValue);
      }

      /** Use external search index if provided */
      var searchIndexResults = null;
      if (this.searchIndex && this.getSearchIndex) {
        searchIndexResults = this.getSearchIndex().search(searchValue);
      }
      this.options.forEach(function (d) {
        if (d.isCurrentNew) {
          return;
        }
        var result;
        if (showOptionsOnlyOnSearch && !searchValue) {
          // eslint-disable-next-line no-param-reassign
          d.isVisible = false;
          result = {
            isVisible: false,
            hasExactOption: false
          };
        } else {
          result = isOptionVisible({
            data: d,
            searchValue: searchValue,
            hasExactOption: hasExactOption,
            visibleOptionGroupsMapping: visibleOptionGroupsMapping,
            searchGroup: searchGroup,
            searchByStartsWith: searchByStartsWith,
            searchIndexResults: searchIndexResults
          });
        }
        if (result.isVisible) {
          visibleOptionsCount += 1;
        }
        if (!hasExactOption) {
          hasExactOption = result.hasExactOption;
        }
      });
      if (this.allowNewOption) {
        if (searchValue && !hasExactOption) {
          this.setNewOption();
          visibleOptionsCount += 1;
        } else {
          this.removeNewOption();
        }
      }
      this.visibleOptionsCount = visibleOptionsCount;
      this.afterSetVisibleOptionsCount();
    }

    /**
     * Calculates ARIA metadata (aria-setsize and aria-posinset) for virtualized listbox accessibility.
     * This method iterates through ALL filtered options (not just rendered ones) to calculate
     * the correct position in the full filtered set. This ensures screen readers announce
     * correct positions even when only a subset of options is rendered (e.g., "Option 50, 50 of 10001").
     *
     * Example: With 10,001 filtered options showing only 5 at a time:
     * - All 10,001 options get filteredIndex values: 1, 2, 3, ..., 10001
     * - ariaSetSize = 10001
     * - When options 50-54 are rendered, they have filteredIndex: 50, 51, 52, 53, 54
     * - Screen reader announces: "Option 50, 50 of 10001"
     */
  }, {
    key: "calculateAriaMetadata",
    value: function calculateAriaMetadata() {
      var _this10 = this;
      var ariaSetSize = 0;
      var filteredPosition = 0;
      var optionsSource = this.sortedOptions && this.sortedOptions.length ? this.sortedOptions : this.options;

      // Iterate through ALL options (not just rendered ones) to calculate positions in the full filtered set
      optionsSource.forEach(function (d) {
        if (d.isCurrentNew) {
          // eslint-disable-next-line no-param-reassign
          d.filteredIndex = undefined;
          return;
        }
        if (d.isVisible === true) {
          var isSelectableGroupTitle = d.isGroupTitle && _this10.multiple && !_this10.disableOptionGroupCheckbox;
          if (!d.isGroupTitle || isSelectableGroupTitle) {
            filteredPosition += 1;
            ariaSetSize += 1;
            // eslint-disable-next-line no-param-reassign
            d.filteredIndex = filteredPosition;
          } else {
            // eslint-disable-next-line no-param-reassign
            d.filteredIndex = undefined;
          }
        } else {
          // eslint-disable-next-line no-param-reassign
          d.filteredIndex = undefined;
        }
      });
      if (this.allowNewOption) {
        var newOption = this.getNewOption();
        if (newOption && newOption.isVisible === true) {
          filteredPosition += 1;
          ariaSetSize += 1;
          // eslint-disable-next-line no-param-reassign
          newOption.filteredIndex = filteredPosition;
        } else if (newOption) {
          // eslint-disable-next-line no-param-reassign
          newOption.filteredIndex = undefined;
        }
      }
      this.ariaSetSize = ariaSetSize;
    }
  }, {
    key: "setOptionProp",
    value: function setOptionProp(index, key, value) {
      if (!this.options[index]) {
        return;
      }
      this.options[index][key] = value;

      // Invalidate cached normalized values when relevant properties change
      // so they get recomputed on next search
      if (key === 'label') {
        delete this.options[index].labelNormalized;
      } else if (key === 'alias') {
        delete this.options[index].aliasNormalized;
      }
    }
  }, {
    key: "setOptionsHeight",
    value: function setOptionsHeight() {
      this.$optionsList.style.height = "".concat(this.optionHeight * this.visibleOptionsCount, "px");
    }
  }, {
    key: "setOptionsContainerHeight",
    value: function setOptionsContainerHeight(reset) {
      var optionsHeight;
      if (reset) {
        // Recalculate options count based on current viewport for both popup and dropdown modes
        this.optionsCount = this.getOptionsCount(this.initialOptionsCount);
        this.halfOptionsCount = Math.ceil(this.optionsCount / 2);
        optionsHeight = this.getOptionsHeight();
        this.optionsHeight = optionsHeight;
      } else {
        optionsHeight = this.optionsHeight;
        if (this.keepAlwaysOpen) {
          DomUtils.setStyle(this.$noOptions, 'height', optionsHeight);
          DomUtils.setStyle(this.$noSearchResults, 'height', optionsHeight);
        }
      }
      DomUtils.setStyle(this.$optionsContainer, 'max-height', optionsHeight);
      this.afterSetOptionsContainerHeight(reset);
    }
  }, {
    key: "setNewOption",
    value: function setNewOption(newValue) {
      var value = newValue || this.searchValueOriginal.trim();
      if (!value) {
        return;
      }
      var newOption = this.getNewOption();
      if (newOption) {
        var newIndex = newOption.index;
        this.setOptionProp(newIndex, 'value', this.secureText(value));
        this.setOptionProp(newIndex, 'label', this.secureText(value));
      } else {
        var data = {
          value: value,
          label: value
        };
        if (newValue) {
          data.isNew = true;
          this.newValues.push(value);
        } else {
          data.isCurrentNew = true;
        }
        this.addOption(data);
      }
    }
  }, {
    key: "setSelectedProp",
    value: function setSelectedProp() {
      var valuesMapping = {};
      this.selectedValues.forEach(function (d) {
        valuesMapping[d] = true;
      });
      this.options.forEach(function (d) {
        if (valuesMapping[d.value] === true) {
          // eslint-disable-next-line no-param-reassign
          d.isSelected = true;
        }
      });
    }
  }, {
    key: "setNewOptionsFromValue",
    value: function setNewOptionsFromValue(values) {
      if (!values) {
        return;
      }
      var setNewOption = this.setNewOption.bind(this);
      var availableValuesMapping = {};
      this.options.forEach(function (d) {
        availableValuesMapping[d.value] = true;
      });
      values.forEach(function (d) {
        if (d && availableValuesMapping[d] !== true) {
          setNewOption(d);
        }
      });
    }
  }, {
    key: "setDropboxWrapperWidth",
    value: function setDropboxWrapperWidth() {
      if (this.showAsPopup) {
        return;
      }
      var width = this.dropboxWidth || "".concat(this.$wrapper.offsetWidth, "px");
      DomUtils.setStyle(this.$dropboxContainer, 'max-width', width);
    }
  }, {
    key: "setEleStyles",
    value: function setEleStyles() {
      var maxWidth = this.maxWidth;
      var styles = {};
      if (maxWidth) {
        styles['max-width'] = maxWidth;
      }
      DomUtils.setStyles(this.$ele, styles);
    }
  }, {
    key: "setDropboxStyles",
    value: function setDropboxStyles() {
      var dropboxWidth = this.dropboxWidth;
      var styles = {};
      var containerStyles = {
        'z-index': this.zIndex
      };
      if (dropboxWidth) {
        if (this.showAsPopup) {
          styles['max-width'] = dropboxWidth;
        } else {
          containerStyles.width = dropboxWidth;
        }
      }
      DomUtils.setStyles(this.$dropboxContainer, containerStyles);
      DomUtils.setStyles(this.$dropbox, styles);
    }
  }, {
    key: "setOptionAttr",
    value: function setOptionAttr() {
      var $visibleOptions = this.$visibleOptions;
      var options = this.options;
      var optionHeight = "".concat(this.optionHeight, "px");
      var setStyle = DomUtils.setStyle,
        getData = DomUtils.getData,
        setData = DomUtils.setData;
      if ($visibleOptions && $visibleOptions.length) {
        $visibleOptions.forEach(function ($option) {
          var optionDetails = options[getData($option, 'index')];
          setStyle($option, 'height', optionHeight);
          setData($option, 'value', optionDetails.value);
        });
      }
    }
  }, {
    key: "setValueTagAttr",
    value: function setValueTagAttr() {
      var $valueTags = this.$valueTags;
      if (!$valueTags || !$valueTags.length) {
        return;
      }
      var getData = DomUtils.getData,
        setData = DomUtils.setData;
      var options = this.options;
      $valueTags.forEach(function ($valueTag) {
        var index = getData($valueTag, 'index');
        if (typeof index !== 'undefined') {
          var optionDetails = options[index];
          setData($valueTag, 'value', optionDetails.value);
        }
      });
    }
  }, {
    key: "setScrollTop",
    value: function setScrollTop() {
      var selectedValues = this.selectedValues;
      if (this.showSelectedOptionsFirst || !this.focusSelectedOptionOnOpen || selectedValues.length === 0) {
        return;
      }
      var valuesMapping = {};
      var selectedOptionIndex;
      selectedValues.forEach(function (d) {
        valuesMapping[d] = true;
      });
      this.options.some(function (d) {
        if (valuesMapping[d.value]) {
          selectedOptionIndex = d.visibleIndex;
          return true;
        }
        return false;
      });
      if (selectedOptionIndex) {
        this.$optionsContainer.scrollTop = this.optionHeight * selectedOptionIndex;
      }
    }
    /** set methods - end */

    /** get methods - start */
  }, {
    key: "getVisibleOptions",
    value: function getVisibleOptions() {
      return this.visibleOptions || [];
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var value;
      if (this.multiple) {
        value = this.useGroupValue ? this.getGroupValue() : this.selectedValues;
      } else {
        value = this.selectedValues[0] || '';
      }
      return Utils.normalizeValues(value);
    }
  }, {
    key: "getGroupValue",
    value: function getGroupValue() {
      var selectedValues = [];
      var selectedGroups = {};
      this.options.forEach(function (d) {
        if (!d.isSelected) {
          return;
        }
        var value = d.value;
        if (d.isGroupTitle) {
          if (value) {
            selectedGroups[d.index] = true;
            selectedValues.push(value);
          }
        } else if (selectedGroups[d.groupIndex] !== true) {
          selectedValues.push(value);
        }
      });
      return selectedValues;
    }
  }, {
    key: "getInputValue",
    value: function getInputValue(preparedValue) {
      var value = preparedValue;
      if (value && value.length) {
        if (this.setValueAsArray && this.multiple) {
          value = JSON.stringify(value);
        }
      } else {
        value = this.emptyValue;
      }
      return value;
    }
  }, {
    key: "getFirstVisibleOptionIndex",
    value: function getFirstVisibleOptionIndex() {
      return Math.ceil(this.$optionsContainer.scrollTop / this.optionHeight);
    }
  }, {
    key: "getVisibleStartIndex",
    value: function getVisibleStartIndex() {
      var firstVisibleOptionIndex = this.getFirstVisibleOptionIndex();
      var startIndex = firstVisibleOptionIndex - this.halfOptionsCount;
      if (startIndex < 0) {
        startIndex = 0;
      }
      return startIndex;
    }
  }, {
    key: "getTooltipAttrText",
    value: function getTooltipAttrText(text) {
      var ellipsisOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var allowHtml = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var tootltipText = Utils.containsHTML(text) ? Utils.replaceDoubleQuotesWithHTML(text) : text;
      var data = {
        'data-tooltip': tootltipText || '',
        'data-tooltip-enter-delay': this.tooltipEnterDelay,
        'data-tooltip-z-index': this.zIndex,
        'data-tooltip-font-size': this.tooltipFontSize,
        'data-tooltip-alignment': this.tooltipAlignment,
        'data-tooltip-max-width': this.tooltipMaxWidth,
        'data-tooltip-ellipsis-only': ellipsisOnly,
        'data-tooltip-allow-html': allowHtml
      };
      return DomUtils.getAttributesText(data);
    }

    /**
     * @param {any} data
     * @returns {any}
     */
  }, {
    key: "getOptionObj",
    value: function getOptionObj(data) {
      if (!data) {
        return undefined;
      }
      var getString = Utils.getString;
      var secureText = this.secureText.bind(this);
      return {
        index: data.index,
        value: secureText(getString(data.value)),
        label: secureText(getString(data.label)),
        description: secureText(getString(data.description)),
        alias: this.getAlias(data.alias),
        isCurrentNew: data.isCurrentNew || false,
        isNew: data.isNew || false,
        isVisible: true
      };
    }
  }, {
    key: "getNewOption",
    value: function getNewOption() {
      var lastOption = this.options[this.lastOptionIndex];
      if (!lastOption || !lastOption.isCurrentNew) {
        return undefined;
      }
      return lastOption;
    }
  }, {
    key: "getOptionIndex",
    value: function getOptionIndex(value) {
      var index;
      this.options.some(function (d) {
        if (d.value === value) {
          index = d.index;
          return true;
        }
        return false;
      });
      return index;
    }
  }, {
    key: "getNewValue",
    value: function getNewValue() {
      var valuesMapping = {};
      this.newValues.forEach(function (d) {
        valuesMapping[d] = true;
      });
      var result = this.selectedValues.filter(function (d) {
        return valuesMapping[d] === true;
      });
      return this.multiple ? result : result[0];
    }
  }, {
    key: "getAlias",
    value: function getAlias(alias) {
      var result = alias;
      if (result) {
        if (Array.isArray(result)) {
          result = result.join(',');
        } else {
          result = result.toString().trim();
        }
        result = result.toLowerCase();
      }
      return result || '';
    }
  }, {
    key: "getDisplayValue",
    value: function getDisplayValue() {
      var displayValues = [];
      this.options.forEach(function (d) {
        if (d.isSelected) {
          displayValues.push(d.label);
        }
      });
      return this.multiple ? displayValues : displayValues[0] || '';
    }
  }, {
    key: "getSelectedOptions",
    value: function getSelectedOptions() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref3$fullDetails = _ref3.fullDetails,
        fullDetails = _ref3$fullDetails === void 0 ? false : _ref3$fullDetails,
        _ref3$keepSelectionOr = _ref3.keepSelectionOrder,
        keepSelectionOrder = _ref3$keepSelectionOr === void 0 ? false : _ref3$keepSelectionOr;
      var valueKey = this.valueKey,
        labelKey = this.labelKey,
        selectedValues = this.selectedValues;
      var selectedOptions = [];
      this.options.forEach(function (d) {
        if (d.isSelected && !d.isGroupTitle) {
          if (fullDetails) {
            selectedOptions.push(d);
          } else {
            var data = _defineProperty(_defineProperty({}, valueKey, d.value), labelKey, d.label);
            if (d.isNew) {
              data.isNew = true;
            }
            if (d.customData) {
              data.customData = d.customData;
            }
            selectedOptions.push(data);
          }
        }
      });
      if (keepSelectionOrder) {
        var valuesOrder = {};
        selectedValues.forEach(function (d, i) {
          valuesOrder[d] = i;
        });
        selectedOptions.sort(function (a, b) {
          return valuesOrder[a.value] - valuesOrder[b.value];
        });
      }
      return this.multiple || fullDetails ? selectedOptions : selectedOptions[0];
    }
  }, {
    key: "getDisabledOptions",
    value: function getDisabledOptions() {
      var valueKey = this.valueKey,
        labelKey = this.labelKey,
        disabledOptions = this.disabledOptions;
      var disabledOptionsValueMapping = {};
      var result = [];
      disabledOptions.forEach(function (value) {
        disabledOptionsValueMapping[value] = true;
      });
      this.options.forEach(function (_ref4) {
        var value = _ref4.value,
          label = _ref4.label;
        if (disabledOptionsValueMapping[value]) {
          result.push(_defineProperty(_defineProperty({}, valueKey, value), labelKey, label));
        }
      });
      return result;
    }
  }, {
    key: "getVisibleOptionGroupsMapping",
    value: function getVisibleOptionGroupsMapping(searchValue) {
      var options = this.options;
      var result = {};
      var isOptionVisible = this.isOptionVisible.bind(this);
      options = this.structureOptionGroup(options);
      options.forEach(function (d) {
        result[d.index] = d.options.some(function (e) {
          return isOptionVisible({
            data: e,
            searchValue: searchValue
          }).isVisible;
        });
      });
      return result;
    }
  }, {
    key: "getOptionsCount",
    value: function getOptionsCount(count) {
      var result;
      var requestedCount = parseInt(count) || 5;
      if (this.showAsPopup) {
        var availableHeight = window.innerHeight * 80 / 100 - dropboxCloseButtonFullHeight;
        if (this.hasSearchContainer) {
          availableHeight -= searchHeight;
        }
        result = Math.floor(availableHeight / this.optionHeight);
      } else {
        // For regular dropdown mode, also consider viewport constraints
        // Treat requestedCount as a maximum/hint, not a strict requirement
        var viewportHeight = window.innerHeight;
        var margin = this.offset || 5; // Space from viewport edge
        var searchContainerHeight = this.hasSearchContainer ? searchHeight : 0;

        // Calculate max available space (leaving some margin from viewport edges)
        // Use 90% of viewport as maximum to ensure some breathing room
        var maxAvailableHeight = viewportHeight * 0.9 - searchContainerHeight - margin * 2;
        var maxOptionsFromViewport = Math.floor(maxAvailableHeight / this.optionHeight);

        // Use the smaller of requested count or what viewport allows
        result = Math.min(requestedCount, maxOptionsFromViewport);

        // Ensure at least 3 options are shown
        result = Math.max(result, 3);
      }
      return result;
    }
  }, {
    key: "getOptionsHeight",
    value: function getOptionsHeight() {
      return "".concat(this.optionsCount * this.optionHeight, "px");
    }

    /** getting next/prev valid option element */
  }, {
    key: "getSibling",
    value: function getSibling($ele, direction) {
      var propName = direction === 'next' ? 'nextElementSibling' : 'previousElementSibling';
      var $sibling = $ele;
      do {
        if ($sibling) {
          $sibling = $sibling[propName];
        }
      } while (DomUtils.hasClass($sibling, 'disabled') || DomUtils.hasClass($sibling, 'group-title'));
      return $sibling;
    }
  }, {
    key: "getUniqueId",
    value: function getUniqueId() {
      var uniqueId = Utils.getRandomInt(10000);
      var isAlreadyUsed = document.querySelector("#vscomp-ele-wrapper-".concat(uniqueId));
      if (isAlreadyUsed) {
        return this.getUniqueId();
      }
      return uniqueId;
    }
    /** get methods - end */
  }, {
    key: "initDropboxPopover",
    value: function initDropboxPopover() {
      // Calculate max height based on options count and option height
      var optionHeight = parseInt(this.optionHeight) || 40;
      var searchHeight = this.search ? 40 : 0;
      var maxHeight = this.optionsCount * optionHeight + searchHeight;
      var data = _defineProperty(_defineProperty(_defineProperty(_defineProperty({
        ele: this.$ele,
        target: this.$dropboxContainer,
        position: this.position,
        zIndex: this.zIndex,
        margin: 4,
        transitionDistance: 0,
        borderRadiusOffset: this.borderRadiusOffset,
        maxHeight: maxHeight,
        showDuration: 0,
        hideDuration: 0,
        hideArrowIcon: true,
        disableManualAction: true,
        disableUpdatePosition: !this.hasDropboxWrapper,
        updatePositionThrottle: this.updatePositionThrottle
      }, "showDuration", this.showDuration), "hideDuration", this.hideDuration), "afterShow", this.afterShowPopper.bind(this)), "afterHide", this.afterHidePopper.bind(this));
      this.dropboxPopover = new PopoverComponent(data);
    }
  }, {
    key: "openDropbox",
    value: function openDropbox(isSilent) {
      var _this11 = this;
      // Set this instance as the last interacted one immediately
      VirtualSelect.lastInteractedInstance = this;
      var originalTransition = '';
      // Disable transitions for programmatic opening
      if (!isSilent) {
        // Store original transition
        originalTransition = this.$dropboxContainer.style.transition;
        this.$dropboxContainer.style.transition = 'none';
      }
      // Perform the open operation
      this.isSilentOpen = isSilent;

      // Close all other open instances first
      VirtualSelect.openInstances.forEach(function (instance) {
        if (instance !== _this11) {
          // Don't focus when closing due to another dropdown being opened
          var instanceObj = instance;
          instanceObj.shouldFocusWrapperOnClose = false;
          instanceObj.closeDropbox(true); // silent close
        }
      });

      // Add to open instances
      VirtualSelect.openInstances.add(this);
      DomUtils.setAttr(this.$dropboxWrapper, 'tabindex', '0');
      DomUtils.setAria(this.$dropboxWrapper, 'hidden', false);
      DomUtils.setAttr(this.$dropboxContainerTop, 'tabindex', '0');
      DomUtils.setAria(this.$dropboxContainerTop, 'hidden', false);
      DomUtils.setAttr(this.$dropboxContainerBottom, 'tabindex', '0');
      DomUtils.setAria(this.$dropboxContainerBottom, 'hidden', false);
      if (isSilent) {
        DomUtils.setStyle(this.$dropboxContainer, 'display', 'inline-flex');
      } else {
        DomUtils.dispatchEvent(this.$ele, 'beforeOpen');
        DomUtils.setAria(this.$wrapper, 'expanded', true);
      }
      this.setDropboxWrapperWidth();
      DomUtils.removeClass(this.$allWrappers, 'closed');
      DomUtils.changeTabIndex(this.$allWrappers, 0);
      if (!isSilent) {
        // Force synchronous layout and style calculation
        // Trigger reflow
        this.$dropboxContainer.offsetHeight; // eslint-disable-line no-unused-expressions
        // Restore transitions immediately after reflow
        this.$dropboxContainer.style.transition = originalTransition;
      }
      if (this.dropboxPopover && !isSilent) {
        var _this$dropboxPopover;
        this.dropboxPopover.show();

        // Set position class immediately after show() since resetPosition runs synchronously
        // This ensures correct border-radius styling from the start of the animation
        var resolvedPosition = (_this$dropboxPopover = this.dropboxPopover) === null || _this$dropboxPopover === void 0 || (_this$dropboxPopover = _this$dropboxPopover.popper) === null || _this$dropboxPopover === void 0 ? void 0 : _this$dropboxPopover.resolvedPosition;
        if (resolvedPosition) {
          DomUtils.removeClass(this.$allWrappers, 'position-top position-bottom position-left position-right');
          DomUtils.addClass(this.$allWrappers, "position-".concat(resolvedPosition));
        }
      } else {
        this.afterShowPopper();
      }
    }
  }, {
    key: "afterShowPopper",
    value: function afterShowPopper() {
      var _this12 = this;
      var isSilent = this.isSilentOpen;
      this.isSilentOpen = false;
      if (!isSilent) {
        this.moveSelectedOptionsFirst();
        this.setScrollTop();
        DomUtils.addClass(this.$allWrappers, 'focused');

        // Position class is set in openDropbox() right after show() returns
        // This is a fallback for edge cases where it wasn't set
        var hasPositionClass = ['top', 'bottom', 'left', 'right'].some(function (pos) {
          return DomUtils.hasClass(_this12.$allWrappers, "position-".concat(pos));
        });
        if (!hasPositionClass) {
          var _this$dropboxPopover2;
          var resolvedPosition = ((_this$dropboxPopover2 = this.dropboxPopover) === null || _this$dropboxPopover2 === void 0 || (_this$dropboxPopover2 = _this$dropboxPopover2.popper) === null || _this$dropboxPopover2 === void 0 ? void 0 : _this$dropboxPopover2.resolvedPosition) || 'bottom';
          DomUtils.addClass(this.$allWrappers, "position-".concat(resolvedPosition));
        }
        if (this.showAsPopup) {
          DomUtils.addClass(this.$body, 'vscomp-popup-active');
          this.isPopupActive = true;
        } else {
          this.focusElementOnOpen();
        }
        DomUtils.dispatchEvent(this.$ele, 'afterOpen');
      }
    }
  }, {
    key: "closeDropbox",
    value: function closeDropbox(isSilent) {
      this.isSilentClose = isSilent;

      // Remove from open instances
      VirtualSelect.openInstances["delete"](this);
      if (this.isOpened() === false) {
        return;
      }
      if (this.keepAlwaysOpen) {
        this.removeOptionFocus();
        return;
      }

      // Return focus to wrapper only when no other meaningful element currently has focus
      var active = document.activeElement;
      var withinComponent = active && this.$wrapper.contains(active) || this.hasDropboxWrapper && active && this.$dropboxWrapper.contains(active);
      var shouldRefocus = this.shouldFocusWrapperOnClose && VirtualSelect.lastInteractedInstance === this && !isSilent && (active === null || active === document.body || withinComponent);
      if (shouldRefocus) {
        this.$wrapper.focus();
      }
      if (isSilent) {
        DomUtils.setStyle(this.$dropboxContainer, 'display', '');
      } else {
        DomUtils.dispatchEvent(this.$ele, 'beforeClose');
        DomUtils.setAria(this.$wrapper, 'expanded', false);
        DomUtils.setAria(this.$wrapper, 'activedescendant', '');
        // Also clear aria-activedescendant on the listbox container
        DomUtils.setAria(this.$dropboxContainer, 'activedescendant', '');
      }
      if (this.dropboxPopover && !isSilent) {
        this.dropboxPopover.hide();
        DomUtils.setAttr(this.$dropboxWrapper, 'tabindex', '-1');
        DomUtils.setAria(this.$dropboxWrapper, 'hidden', true);
        DomUtils.setAttr(this.$dropboxContainerTop, 'tabindex', '-1');
        DomUtils.setAria(this.$dropboxContainerTop, 'hidden', true);
        DomUtils.setAttr(this.$dropboxContainerBottom, 'tabindex', '-1');
        DomUtils.setAria(this.$dropboxContainerBottom, 'hidden', true);
      } else {
        this.afterHidePopper();
      }
    }
  }, {
    key: "afterHidePopper",
    value: function afterHidePopper() {
      var isSilent = this.isSilentClose;
      this.isSilentClose = false;
      DomUtils.removeClass(this.$allWrappers, 'focused');

      // Remove all position classes from wrapper
      DomUtils.removeClass(this.$allWrappers, 'position-top position-bottom position-left position-right');
      this.removeOptionFocus();
      if (!isSilent && this.isPopupActive) {
        DomUtils.removeClass(this.$body, 'vscomp-popup-active');
        this.isPopupActive = false;
      }
      DomUtils.addClass(this.$allWrappers, 'closed');
      if (!isSilent) {
        DomUtils.dispatchEvent(this.$ele, 'afterClose');
      }

      // Reset for next close
      this.shouldFocusWrapperOnClose = true;

      // Restore accessibility attributes that were inadvertently removed
      DomUtils.setAttr(this.$dropboxWrapper, 'tabindex', '-1');
      DomUtils.setAria(this.$dropboxWrapper, 'hidden', true);
      DomUtils.setAttr(this.$dropboxContainerTop, 'tabindex', '-1');
      DomUtils.setAria(this.$dropboxContainerTop, 'hidden', true);
      DomUtils.setAttr(this.$dropboxContainerBottom, 'tabindex', '-1');
      DomUtils.setAria(this.$dropboxContainerBottom, 'hidden', true);
    }
  }, {
    key: "moveSelectedOptionsFirst",
    value: function moveSelectedOptionsFirst() {
      if (!this.$optionsContainer.scrollTop || !this.selectedValues.length) {
        this.setVisibleOptions();
      }
      if (!this.showSelectedOptionsFirst) {
        return;
      }
      this.setSortedOptions();
      this.scrollToTop();
      this.setVisibleOptions();
    }
  }, {
    key: "toggleDropbox",
    value: function toggleDropbox() {
      VirtualSelect.lastInteractedInstance = this;
      if (this.isOpened()) {
        this.closeDropbox();
      } else {
        this.openDropbox();
      }
    }
  }, {
    key: "updatePosition",
    value: function updatePosition() {
      if (!this.dropboxPopover || !this.isOpened()) {
        return;
      }
      this.$ele.updatePosition();
    }
  }, {
    key: "isOpened",
    value: function isOpened() {
      return !DomUtils.hasClass(this.$wrapper, 'closed');
    }
  }, {
    key: "focusSearchInput",
    value: function focusSearchInput() {
      var $ele = this.$searchInput;
      if ($ele) {
        $ele.focus();
      }
    }
  }, {
    key: "focusElementOnOpen",
    value: function focusElementOnOpen() {
      var $ele = this.$searchInput;
      var hasNoOptions = !this.options.length && !this.hasServerSearch;
      if ($ele) {
        if (hasNoOptions && !this.allowNewOption) {
          DomUtils.setAttr($ele, 'disabled', '');
          this.$noOptions.focus();
        } else {
          $ele.removeAttribute('disabled');
          $ele.focus();
        }
      } else {
        var $focusableEle = this.$dropbox.querySelector('[tabindex="0"]');
        var optIndex = DomUtils.getData($focusableEle, 'index');
        if (optIndex !== undefined) {
          this.focusOption({
            direction: 'next'
          });
        } else if ($focusableEle) {
          $focusableEle.focus();
        } else {
          this.focusFirstVisibleOption();
        }
      }
    }
  }, {
    key: "focusFirstVisibleOption",
    value: function focusFirstVisibleOption() {
      var $focusableEle = this.$optionsContainer.querySelector("[data-index='".concat(this.getFirstVisibleOptionIndex(), "']"));
      if ($focusableEle) {
        if (DomUtils.hasClass($focusableEle, 'group-title')) {
          $focusableEle = this.getSibling($focusableEle, 'next');
        }
        DomUtils.setAttr($focusableEle, 'tabindex', '0');
        this.$optionsContainer.scrollTop = this.optionHeight * this.getFirstVisibleOptionIndex();
        this.focusOption({
          focusFirst: true
        });
        $focusableEle.focus();
      } else {
        $focusableEle = this.$dropbox.querySelector('[tabindex="0"]');
        if ($focusableEle) {
          $focusableEle.focus();
        }
      }
    }
  }, {
    key: "focusOption",
    value: function focusOption() {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        direction = _ref5.direction,
        $option = _ref5.$option,
        focusFirst = _ref5.focusFirst;
      var $focusedEle = this.$dropboxContainer.querySelector('.vscomp-option.focused');
      var $newFocusedEle;
      if ($option) {
        $newFocusedEle = $option;
      } else if (!$focusedEle || focusFirst) {
        /* if no element on focus choose first visible one */
        var firstVisibleOptionIndex = this.getFirstVisibleOptionIndex();
        $newFocusedEle = this.$dropboxContainer.querySelector(".vscomp-option[data-visible-index=\"".concat(firstVisibleOptionIndex, "\"]"));
        if (DomUtils.hasClass($newFocusedEle, 'disabled') || DomUtils.hasClass($newFocusedEle, 'group-title')) {
          $newFocusedEle = this.getSibling($newFocusedEle, 'next');
        }
      } else {
        $newFocusedEle = this.getSibling($focusedEle, direction);
      }
      if ($newFocusedEle && $newFocusedEle !== $focusedEle) {
        if ($focusedEle) {
          this.toggleOptionFocusedState($focusedEle, false);
        }
        this.toggleOptionFocusedState($newFocusedEle, true);
        this.toggleFocusedProp(DomUtils.getData($newFocusedEle, 'index'), true);
        this.moveFocusedOptionToView($newFocusedEle);
      }
    }
  }, {
    key: "moveFocusedOptionToView",
    value: function moveFocusedOptionToView($ele) {
      var $focusedEle = $ele || this.$dropboxContainer.querySelector('.vscomp-option.focused');
      if (!$focusedEle) {
        return;
      }
      var newScrollTop;
      var containerRect = this.$optionsContainer.getBoundingClientRect();
      var optionRect = $focusedEle.getBoundingClientRect();
      var containerTop = containerRect.top;
      var containerBottom = containerRect.bottom;
      var containerHeight = containerRect.height;
      var optionTop = optionRect.top;
      var optionBottom = optionRect.bottom;
      var optionHeight = optionRect.height;
      var optionOffsetTop = $focusedEle.offsetTop;
      var optionsTop = DomUtils.getData(this.$options, 'top', 'number');

      /* if option hidden on top */
      if (containerTop > optionTop) {
        newScrollTop = optionOffsetTop + optionsTop;
      } else if (containerBottom < optionBottom) {
        /* if option hidden on bottom */
        newScrollTop = optionOffsetTop - containerHeight + optionHeight + optionsTop;
      }
      if (newScrollTop !== undefined) {
        this.$optionsContainer.scrollTop = newScrollTop;
      }
    }
  }, {
    key: "removeOptionFocus",
    value: function removeOptionFocus() {
      var $focusedEle = this.$dropboxContainer.querySelector('.vscomp-option.focused');
      if (!$focusedEle) {
        return;
      }
      this.toggleOptionFocusedState($focusedEle, false);
      this.toggleFocusedProp(null);
    }
  }, {
    key: "selectOption",
    value: function selectOption($ele) {
      var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        event = _ref6.event;
      if (!$ele) {
        return;
      }
      var isAdding = !DomUtils.hasClass($ele, 'selected');
      if (isAdding) {
        if (this.multiple && this.isMaxValuesSelected) {
          return;
        }
      } else if (!this.multiple) {
        /** on selecting same value in single select */
        this.closeDropbox();
        return;
      }
      var selectedValues = this.selectedValues;
      var selectedValue = DomUtils.getData($ele, 'value');
      var selectedIndex = DomUtils.getData($ele, 'index', 'number');
      var isNewOption = DomUtils.hasClass($ele, 'current-new');
      var shouldSelectRange = false;
      var lastSelectedOptionIndex = this.lastSelectedOptionIndex;
      this.lastSelectedOptionIndex = null;
      this.toggleSelectedProp(selectedIndex, isAdding);
      if (isAdding) {
        if (this.multiple) {
          selectedValues.push(selectedValue);
          this.toggleAllOptionsClass();
          this.toggleGroupOptionsParent($ele);
          if (event && event.shiftKey) {
            shouldSelectRange = true;
          }
        } else {
          if (selectedValues.length) {
            this.toggleSelectedProp(this.getOptionIndex(selectedValues[0]), false);
          }
          selectedValues = [selectedValue];
          var $prevSelectedOption = this.$dropboxContainer.querySelector('.vscomp-option.selected');
          if ($prevSelectedOption) {
            this.toggleOptionSelectedState($prevSelectedOption, false);
          }
          this.closeDropbox();
          if (!isNewOption) {
            this.setSearchValue('');
          }
        }
        this.lastSelectedOptionIndex = selectedIndex;
        this.toggleOptionSelectedState($ele);
      } else if (this.multiple) {
        this.toggleOptionSelectedState($ele);
        Utils.removeItemFromArray(selectedValues, selectedValue);
        this.toggleAllOptionsClass(false);
        this.toggleGroupOptionsParent($ele, false);
      }
      if (isNewOption) {
        this.beforeSelectNewValue();
      }
      this.setValue(selectedValues);
      if (shouldSelectRange) {
        this.selectRangeOptions(lastSelectedOptionIndex, selectedIndex);
      }
    }
  }, {
    key: "selectFocusedOption",
    value: function selectFocusedOption() {
      this.selectOption(this.$dropboxContainer.querySelector('.vscomp-option.focused'));
    }
  }, {
    key: "selectRangeOptions",
    value: function selectRangeOptions(lastSelectedOptionIndex, selectedIndex) {
      var _this13 = this;
      if (typeof lastSelectedOptionIndex !== 'number' || this.maxValues) {
        return;
      }
      var selectedValues = this.selectedValues,
        hasOptionGroup = this.hasOptionGroup;
      var groupIndexes = {};
      var startIndex;
      var endIndex;
      if (lastSelectedOptionIndex < selectedIndex) {
        startIndex = lastSelectedOptionIndex;
        endIndex = selectedIndex;
      } else {
        startIndex = selectedIndex;
        endIndex = lastSelectedOptionIndex;
      }
      this.options.forEach(function (d) {
        if (d.isDisabled || d.isGroupTitle || !d.isVisible || d.isSelected) {
          return;
        }
        var index = d.index;
        if (index > startIndex && index < endIndex) {
          if (hasOptionGroup) {
            var groupIndex = d.groupIndex;
            if (typeof groupIndex === 'number') {
              groupIndexes[groupIndex] = true;
            }
          }

          // eslint-disable-next-line no-param-reassign
          d.isSelected = true;
          selectedValues.push(d.value);
        }
      });
      this.toggleAllOptionsClass();
      this.setValue(selectedValues);
      groupIndexes = Object.keys(groupIndexes);
      if (groupIndexes.length) {
        var toggleGroupTitleProp = this.toggleGroupTitleProp.bind(this);
        groupIndexes.forEach(function (i) {
          toggleGroupTitleProp(parseInt(i));
        });
      }

      /** using setTimeout to fix the issue of dropbox getting closed on select */
      setTimeout(function () {
        _this13.renderOptions();
      }, 0);
    }
  }, {
    key: "toggleAllOptions",
    value: function toggleAllOptions(selectAll) {
      if (!this.multiple || this.disableSelectAll) {
        return;
      }
      var selectingAll = typeof isSelected === 'boolean' ? selectAll : !DomUtils.hasClass(this.$toggleAllCheckbox, 'checked');
      var selectedValues = [];
      var selectAllOnlyVisible = this.selectAllOnlyVisible;
      this.options.forEach(function (d) {
        var option = d;
        if (option.isDisabled || option.isCurrentNew) {
          return;
        }
        var isVisible = option.isVisible,
          isSelected = option.isSelected;

        /** unselected items are */
        if (/** when unselecting all, selectAllOnlyVisible feature disabled or visible items or already unselected items */
        !selectingAll && (!selectAllOnlyVisible || isVisible || !isSelected) || (/** when selecting all, selectAllOnlyVisible feature enabled and hidden items those are not already selected */
        selectingAll && selectAllOnlyVisible && !isVisible && !isSelected)) {
          option.isSelected = false;
        } else {
          option.isSelected = true;
          if (!option.isGroupTitle) {
            selectedValues.push(option.value);
          }
        }
      });
      this.toggleAllOptionsClass(selectingAll);
      this.setValue(selectedValues);
      this.renderOptions();
    }
  }, {
    key: "toggleAllOptionsClass",
    value: function toggleAllOptionsClass(isAllSelected) {
      if (!this.multiple) {
        return;
      }
      var valuePassed = typeof isAllSelected === 'boolean';
      var isAllVisibleSelected = false;
      if (!valuePassed) {
        // eslint-disable-next-line no-param-reassign
        isAllSelected = this.isAllOptionsSelected();
      }

      /** When all options not selected, checking if all visible options selected
       *  Also, in a search mode, validate that we still have visible items
      */
      if (!isAllSelected && this.selectAllOnlyVisible && this.searchValue !== '' && (this.visibleOptionsCount > 0 || this.searchValue === '')) {
        isAllVisibleSelected = this.isAllOptionsSelected(true);
      }
      DomUtils.toggleClass(this.$toggleAllCheckbox, 'checked', isAllSelected || isAllVisibleSelected);
      this.isAllSelected = isAllSelected;
    }
  }, {
    key: "isAllOptionsSelected",
    value: function isAllOptionsSelected(visibleOnly) {
      var isAllSelected = false;
      if (this.options.length && this.selectedValues.length) {
        isAllSelected = !this.options.some(
        /**
         * stop looping if any option is not selected
         * for selectAllOnlyVisible case hidden option need not to be selected
         */
        function (d) {
          return !d.isSelected && !d.isDisabled && !d.isGroupTitle && (!visibleOnly || d.isVisible);
        });
      }
      return isAllSelected;
    }
  }, {
    key: "isAllGroupOptionsSelected",
    value: function isAllGroupOptionsSelected(groupIndex) {
      var isAllSelected = false;
      if (this.options.length) {
        isAllSelected = !this.options.some(function (d) {
          return !d.isSelected && !d.isDisabled && !d.isGroupTitle && d.groupIndex === groupIndex;
        });
      }
      return isAllSelected;
    }
  }, {
    key: "toggleGroupOptionsParent",
    value: function toggleGroupOptionsParent($option, isSelected) {
      if (!this.hasOptionGroup || this.disableOptionGroupCheckbox || !$option) {
        return;
      }
      var groupIndex = DomUtils.getData($option, 'groupIndex');
      if (groupIndex !== undefined) {
        groupIndex = parseInt(groupIndex);
      }
      var $group = this.$options.querySelector(".vscomp-option[data-index=\"".concat(groupIndex, "\"]"));
      var isAllSelected = typeof isSelected === 'boolean' ? isSelected : this.isAllGroupOptionsSelected(groupIndex);
      this.toggleGroupTitleCheckbox($group, isAllSelected);
      this.toggleGroupTitleProp(groupIndex, isAllSelected);
    }
  }, {
    key: "toggleGroupTitleProp",
    value: function toggleGroupTitleProp(groupIndex, isSelected) {
      var isAllSelected = typeof isSelected === 'boolean' ? isSelected : this.isAllGroupOptionsSelected(groupIndex);
      this.toggleSelectedProp(groupIndex, isAllSelected);
    }
  }, {
    key: "toggleGroupOptions",
    value: function toggleGroupOptions($ele, isSelected) {
      var _this14 = this;
      if (!this.hasOptionGroup || this.disableOptionGroupCheckbox || !$ele) {
        return;
      }
      var groupIndex = DomUtils.getData($ele, 'index', 'number');
      var selectedValues = this.selectedValues,
        selectAllOnlyVisible = this.selectAllOnlyVisible;
      var valuesMapping = {};
      var removeItemFromArray = Utils.removeItemFromArray;
      selectedValues.forEach(function (d) {
        valuesMapping[d] = true;
      });
      this.options.forEach(function (d) {
        if (d.isDisabled || d.groupIndex !== groupIndex) {
          return;
        }
        var value = d.value;
        if (!isSelected || selectAllOnlyVisible && !d.isVisible) {
          // eslint-disable-next-line no-param-reassign
          d.isSelected = false;
          if (valuesMapping[value]) {
            removeItemFromArray(selectedValues, value);
          }
        } else {
          // eslint-disable-next-line no-param-reassign
          d.isSelected = true;
          if (!valuesMapping[value]) {
            selectedValues.push(value);
          }
        }
      });
      this.toggleAllOptionsClass(isSelected ? null : false);
      this.setValue(selectedValues);

      /** using setTimeout to fix the issue of dropbox getting closed on select */
      setTimeout(function () {
        _this14.renderOptions();
      }, 0);
    }
  }, {
    key: "toggleGroupTitleCheckbox",
    value: function toggleGroupTitleCheckbox($ele, isSelected) {
      if (!$ele) {
        return;
      }
      var selectedIndex = DomUtils.getData($ele, 'index', 'number');
      this.toggleSelectedProp(selectedIndex, isSelected);
      this.toggleOptionSelectedState($ele, isSelected);
    }
  }, {
    key: "toggleFocusedProp",
    value: function toggleFocusedProp(index) {
      var isFocused = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (this.focusedOptionIndex) {
        this.setOptionProp(this.focusedOptionIndex, 'isFocused', false);
      }
      this.setOptionProp(index, 'isFocused', isFocused);
      this.focusedOptionIndex = index;
    }
  }, {
    key: "toggleSelectedProp",
    value: function toggleSelectedProp(index) {
      var isSelected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.setOptionProp(index, 'isSelected', isSelected);
    }
  }, {
    key: "scrollToTop",
    value: function scrollToTop() {
      var scrollTop = this.$optionsContainer.scrollTop;
      if (scrollTop > 0) {
        this.$optionsContainer.scrollTop = 0;
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      var formReset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var disableChangeEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.options.forEach(function (d) {
        // eslint-disable-next-line no-param-reassign
        d.isSelected = false;
      });
      this.beforeValueSet(true);
      this.setValue(null, {
        disableEvent: disableChangeEvent,
        disableValidation: formReset
      });
      this.afterValueSet();
      if (formReset) {
        DomUtils.removeClass(this.$allWrappers, 'has-error');
      }
      DomUtils.dispatchEvent(this.$ele, 'reset');
    }
  }, {
    key: "addOption",
    value: function addOption(data, rerender) {
      if (!data) {
        return;
      }
      this.lastOptionIndex += 1;
      var newOption = this.getOptionObj(_objectSpread(_objectSpread({}, data), {}, {
        index: this.lastOptionIndex
      }));
      this.options.push(newOption);
      this.sortedOptions.push(newOption);
      if (rerender) {
        this.visibleOptionsCount += 1;
        this.afterSetOptions();
      }
    }
  }, {
    key: "removeOption",
    value: function removeOption(index) {
      if (!index && index !== 0) {
        return;
      }
      this.options.splice(index, 1);
      this.lastOptionIndex -= 1;
    }
  }, {
    key: "removeNewOption",
    value: function removeNewOption() {
      var newOption = this.getNewOption();
      if (newOption) {
        this.removeOption(newOption.index);
      }
    }
  }, {
    key: "sortOptions",
    value: function sortOptions(options) {
      return options.sort(function (a, b) {
        var aIsSelected = a.isSelected || a.isAnySelected;
        var bIsSelected = b.isSelected || b.isAnySelected;
        if (!aIsSelected && !bIsSelected) {
          return 0;
        }
        if (aIsSelected && (!bIsSelected || a.index < b.index)) {
          return -1;
        }
        return 1;
      });
    }
  }, {
    key: "sortOptionsGroup",
    value: function sortOptionsGroup(options) {
      var sortOptions = this.sortOptions.bind(this);
      var structuredOptions = this.structureOptionGroup(options);
      structuredOptions.forEach(function (d) {
        var childOptions = d.options;
        // eslint-disable-next-line no-param-reassign
        d.isAnySelected = childOptions.some(function (e) {
          return e.isSelected;
        });
        if (d.isAnySelected) {
          sortOptions(childOptions);
        }
      });
      sortOptions(structuredOptions);
      return this.destructureOptionGroup(structuredOptions);
    }
  }, {
    key: "isOptionVisible",
    value: function isOptionVisible(_ref7) {
      var data = _ref7.data,
        searchValue = _ref7.searchValue,
        hasExactOption = _ref7.hasExactOption,
        visibleOptionGroupsMapping = _ref7.visibleOptionGroupsMapping,
        searchGroup = _ref7.searchGroup,
        searchByStartsWith = _ref7.searchByStartsWith,
        searchIndexResults = _ref7.searchIndexResults;
      var value = data.value.toLowerCase();

      // Lazily compute and cache normalized label for diacritic-insensitive search
      var label;
      if (this.searchNormalize) {
        // Compute labelNormalized on first access (lazy)
        if (data.labelNormalized === undefined) {
          var rawLabel = (data.label || '').trim();
          // eslint-disable-next-line no-param-reassign
          data.labelNormalized = rawLabel ? Utils.normalizeString(rawLabel).toLowerCase() : '';
        }
        label = data.labelNormalized;
      } else {
        label = (data.label || '').trim().toLowerCase();
      }
      var description = data.description;

      // Lazily compute and cache normalized alias
      var alias;
      if (this.searchNormalize && data.alias) {
        if (data.aliasNormalized === undefined) {
          // eslint-disable-next-line no-param-reassign
          data.aliasNormalized = Utils.normalizeString(data.alias).toLowerCase();
        }
        alias = data.aliasNormalized;
      } else {
        alias = data.alias;
      }
      var isVisible;

      /** Use external search index results if available */
      if (searchIndexResults && searchIndexResults.length > 0) {
        var possibleDirect = searchIndexResults.find(function (x) {
          return (x.item.value || '').toString().toLowerCase() === value;
        });
        if (possibleDirect !== undefined) {
          isVisible = true;
        } else {
          var possibleGroup = searchIndexResults.find(function (x) {
            return x.item.options && x.item.options.find(function (y) {
              return (y.value || '').toString().toLowerCase() === value;
            }) !== undefined;
          });
          isVisible = possibleGroup !== undefined;
        }
      } else {
        isVisible = searchByStartsWith ? label.startsWith(searchValue) : label.includes(searchValue);
        if (data.isGroupTitle && (!searchGroup || !isVisible)) {
          isVisible = visibleOptionGroupsMapping[data.index];
        }
        if (!searchByStartsWith && alias && !isVisible) {
          isVisible = alias.includes(searchValue);
        }
        if (!searchByStartsWith && description && !isVisible) {
          // Lazily normalize description for search
          var descNormalized = this.searchNormalize ? Utils.normalizeString(description).toLowerCase() : description.toLowerCase();
          isVisible = descNormalized.includes(searchValue);
        }
      }

      // eslint-disable-next-line no-param-reassign
      data.isVisible = isVisible;
      if (!hasExactOption) {
        // eslint-disable-next-line no-param-reassign
        hasExactOption = label === searchValue || value === searchValue;
      }
      return {
        isVisible: isVisible,
        hasExactOption: hasExactOption
      };
    }
  }, {
    key: "structureOptionGroup",
    value: function structureOptionGroup(options) {
      var result = [];
      var childOptions = {};

      /** getting all group title */
      options.forEach(function (d) {
        if (d.isGroupTitle) {
          var childArray = [];
          // eslint-disable-next-line no-param-reassign
          d.options = childArray;
          childOptions[d.index] = childArray;
          result.push(d);
        }
      });

      /** getting all group options */
      options.forEach(function (d) {
        if (d.isGroupOption) {
          childOptions[d.groupIndex].push(d);
        }
      });
      return result;
    }
  }, {
    key: "destructureOptionGroup",
    value: function destructureOptionGroup(options) {
      var result = [];
      options.forEach(function (d) {
        result.push(d);
        result = result.concat(d.options);
      });
      return result;
    }
  }, {
    key: "serverSearch",
    value: function serverSearch() {
      DomUtils.removeClass(this.$allWrappers, 'has-no-search-results');
      DomUtils.addClass(this.$allWrappers, 'server-searching');
      this.setSelectedOptions();
      this.onServerSearch(this.searchValue, this);
    }
  }, {
    key: "removeValue",
    value: function removeValue($ele) {
      var selectedValues = this.selectedValues;
      var selectedValue = DomUtils.getData($ele, 'value');
      Utils.removeItemFromArray(selectedValues, selectedValue);
      this.setValueMethod(selectedValues);
    }
  }, {
    key: "focus",
    value: function focus() {
      this.$wrapper.focus();
    }
  }, {
    key: "enable",
    value: function enable() {
      this.$ele.disabled = false;
      this.$ele.removeAttribute('disabled');
      this.$hiddenInput.removeAttribute('disabled');
      DomUtils.setAria(this.$wrapper, 'disabled', false);
      DomUtils.changeTabIndex(this.$wrapper, 0);
    }
  }, {
    key: "disable",
    value: function disable() {
      this.$ele.disabled = true;
      this.$ele.setAttribute('disabled', '');
      this.$hiddenInput.setAttribute('disabled', '');
      DomUtils.setAria(this.$wrapper, 'disabled', true);
      DomUtils.changeTabIndex(this.$wrapper, -1);
      this.$wrapper.blur();
    }
  }, {
    key: "validate",
    value: function validate() {
      if (this.disableValidation) {
        return true;
      }
      var hasError = false;
      var selectedValues = this.selectedValues,
        minValues = this.minValues;
      if (this.required && (Utils.isEmpty(selectedValues) || (/** required minium options not selected */
      this.multiple && minValues && selectedValues.length < minValues))) {
        hasError = true;
      }
      DomUtils.toggleClass(this.$allWrappers, 'has-error', hasError);
      return !hasError;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var $ele = this.$ele;

      // Abort all event listeners using AbortController
      if (this.eventHandler) {
        this.eventHandler.abort();
      }
      $ele.virtualSelect = undefined;
      $ele.value = undefined;
      $ele.innerHTML = '';

      // Remove from open instances
      VirtualSelect.openInstances["delete"](this);

      // Reset the last interacted instance only if this is the last interacted instance
      if (this === VirtualSelect.lastInteractedInstance) {
        VirtualSelect.lastInteractedInstance = null;
      }

      // Clear any pending server search timeout to prevent memory leaks
      if (this.serverSearchTimeout) {
        clearTimeout(this.serverSearchTimeout);
        this.serverSearchTimeout = null;
      }

      /** Remove all event listeners to prevent memory leaks and ensure proper cleanup */
      this.removeEvents();
      if (this.hasDropboxWrapper) {
        this.$dropboxWrapper.remove();
      }
      if (this.dropboxPopover) {
        this.dropboxPopover.destroy();
      }

      // Remove global API reference if instanceId was set
      if (this.instanceId && window["vselectApi_".concat(this.instanceId)]) {
        delete window["vselectApi_".concat(this.instanceId)];
      }
      DomUtils.removeClass($ele, 'vscomp-ele');
    }
  }, {
    key: "createSecureTextElements",
    value: function createSecureTextElements() {
      this.$secureDiv = document.createElement('div');
      this.$secureText = document.createTextNode('');
      this.$secureDiv.appendChild(this.$secureText);
    }
  }, {
    key: "secureText",
    value: function secureText(text) {
      if (!text || !this.enableSecureText) {
        return text;
      }
      /** escape potentially harmful JavaScript so, label and value fields cannot trigger XSS */
      this.$secureText.nodeValue = Utils.replaceDoubleQuotesWithHTML(text);
      return this.$secureDiv.innerHTML;
    }
  }, {
    key: "toggleRequired",
    value: function toggleRequired(isRequired) {
      this.required = Utils.convertToBoolean(isRequired);
      this.$ele.required = this.required;
    }
  }, {
    key: "toggleOptionSelectedState",
    value: function toggleOptionSelectedState($ele, value) {
      var isSelected = value;
      if (typeof isSelected === 'undefined') {
        isSelected = !DomUtils.hasClass($ele, 'selected');
      }
      DomUtils.toggleClass($ele, 'selected', isSelected);
      DomUtils.setAria($ele, 'selected', isSelected);
    }
  }, {
    key: "toggleOptionFocusedState",
    value: function toggleOptionFocusedState($ele, isFocused) {
      if (!$ele) {
        return;
      }
      DomUtils.toggleClass($ele, 'focused', isFocused);
      DomUtils.setAttr($ele, 'tabindex', isFocused ? '0' : '-1');
      if (document.activeElement !== this.$searchInput) {
        $ele.focus();
      }
      if (isFocused) {
        DomUtils.setAria(this.$wrapper, 'activedescendant', $ele.id);
        // Also set aria-activedescendant on the listbox container for better screen reader support
        DomUtils.setAria(this.$dropboxContainer, 'activedescendant', $ele.id);
      }
    }

    /** static methods - start */
  }], [{
    key: "init",
    value: function init(options) {
      var $eleArray = options.ele;
      if (!$eleArray) {
        return undefined;
      }
      var singleEle = false;
      if (typeof $eleArray === 'string') {
        $eleArray = document.querySelectorAll($eleArray);
        var eleLength = $eleArray.length;
        if (eleLength === 0) {
          return undefined;
        }
        if (eleLength === 1) {
          singleEle = true;
        }
      }
      if ($eleArray.length === undefined || $eleArray.forEach === undefined) {
        $eleArray = [$eleArray];
        singleEle = true;
      }
      var instances = [];
      $eleArray.forEach(function ($ele) {
        /** skipping initialization on calling init method multiple times */
        if ($ele.virtualSelect) {
          instances.push($ele.virtualSelect);
          return;
        }

        // eslint-disable-next-line no-param-reassign
        options.ele = $ele;
        if ($ele.tagName === 'SELECT') {
          VirtualSelect.setPropsFromSelect(options);
        }
        instances.push(new VirtualSelect(options));
      });
      return singleEle ? instances[0] : instances;
    }
  }, {
    key: "getAttrProps",
    value: function getAttrProps() {
      var convertPropToDataAttr = DomUtils.convertPropToDataAttr;
      var result = {};
      nativeProps.forEach(function (d) {
        result[d] = d;
      });
      virtual_select_dataProps.forEach(function (d) {
        result[convertPropToDataAttr(d)] = d;
      });
      return result;
    }
  }, {
    key: "setPropsFromSelect",
    value: function setPropsFromSelect(props) {
      var $ele = props.ele;
      var disabledOptions = [];
      var selectedValue = [];
      var _getNativeOptions = function getNativeOptions($container) {
        var options = [];
        var $options = Array.from($container.children);
        $options.forEach(function ($option) {
          var value = $option.value;
          var option = {
            value: value
          };
          if ($option.tagName === 'OPTGROUP') {
            option.label = $option.getAttribute('label');
            option.options = _getNativeOptions($option);
          } else {
            option.label = $option.innerHTML;
          }
          options.push(option);
          if ($option.disabled) {
            disabledOptions.push(value);
          }
          if ($option.selected) {
            selectedValue.push(value);
          }
        });
        return options;
      };
      var optionsList = _getNativeOptions($ele);

      /** creating div element to initiate plugin and removing native element */
      var $newEle = document.createElement('div');
      DomUtils.setAttrFromEle($ele, $newEle, Object.keys(virtual_select_attrPropsMapping), valueLessProps);
      $ele.parentNode.insertBefore($newEle, $ele);
      $ele.remove();

      // eslint-disable-next-line no-param-reassign
      props.ele = $newEle;
      // eslint-disable-next-line no-param-reassign
      props.options = optionsList;
      // eslint-disable-next-line no-param-reassign
      props.disabledOptions = disabledOptions;
      // eslint-disable-next-line no-param-reassign
      props.selectedValue = selectedValue;
    }
  }, {
    key: "onFormReset",
    value: function onFormReset(e) {
      var $form = e.target.closest('form');
      if (!$form) {
        return;
      }
      $form.querySelectorAll('.vscomp-ele-wrapper').forEach(function ($ele) {
        $ele.parentElement.virtualSelect.reset(true);
      });
    }
  }, {
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      if (!VirtualSelect.validate(e.target.closest('form'))) {
        e.preventDefault();
      }
    }
  }, {
    key: "validate",
    value: function validate($container) {
      if (!$container) {
        return true;
      }
      var hasError = false;
      $container.querySelectorAll('.vscomp-ele-wrapper').forEach(function ($ele) {
        var result = $ele.parentElement.virtualSelect.validate();
        if (!hasError && !result) {
          hasError = true;
        }
      });
      return !hasError;
    }
  }, {
    key: "reset",
    value: function reset() {
      var formReset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var disableChangeEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.virtualSelect.reset(formReset, disableChangeEvent);
    }
  }, {
    key: "setValueMethod",
    value: function setValueMethod() {
      var _this$virtualSelect;
      (_this$virtualSelect = this.virtualSelect).setValueMethod.apply(_this$virtualSelect, arguments);
    }
  }, {
    key: "setOptionsMethod",
    value: function setOptionsMethod() {
      var _this$virtualSelect2;
      (_this$virtualSelect2 = this.virtualSelect).setOptionsMethod.apply(_this$virtualSelect2, arguments);
    }
  }, {
    key: "setDisabledOptionsMethod",
    value: function setDisabledOptionsMethod() {
      var _this$virtualSelect3;
      (_this$virtualSelect3 = this.virtualSelect).setDisabledOptionsMethod.apply(_this$virtualSelect3, arguments);
    }
  }, {
    key: "setEnabledOptionsMethod",
    value: function setEnabledOptionsMethod() {
      var _this$virtualSelect4;
      (_this$virtualSelect4 = this.virtualSelect).setEnabledOptionsMethod.apply(_this$virtualSelect4, arguments);
    }
  }, {
    key: "toggleSelectAll",
    value: function toggleSelectAll(isSelected) {
      this.virtualSelect.toggleAllOptions(isSelected);
    }
  }, {
    key: "isAllSelected",
    value: function isAllSelected() {
      return this.virtualSelect.isAllSelected;
    }
  }, {
    key: "addOptionMethod",
    value: function addOptionMethod(data) {
      this.virtualSelect.addOption(data, true);
    }
  }, {
    key: "getNewValueMethod",
    value: function getNewValueMethod() {
      return this.virtualSelect.getNewValue();
    }
  }, {
    key: "getDisplayValueMethod",
    value: function getDisplayValueMethod() {
      return this.virtualSelect.getDisplayValue();
    }
  }, {
    key: "getSelectedOptionsMethod",
    value: function getSelectedOptionsMethod(params) {
      return this.virtualSelect.getSelectedOptions(params);
    }
  }, {
    key: "getDisabledOptionsMethod",
    value: function getDisabledOptionsMethod() {
      return this.virtualSelect.getDisabledOptions();
    }
  }, {
    key: "openMethod",
    value: function openMethod() {
      return this.virtualSelect.openDropbox();
    }
  }, {
    key: "closeMethod",
    value: function closeMethod() {
      return this.virtualSelect.closeDropbox();
    }
  }, {
    key: "focusMethod",
    value: function focusMethod() {
      return this.virtualSelect.focus();
    }
  }, {
    key: "enableMethod",
    value: function enableMethod() {
      return this.virtualSelect.enable();
    }
  }, {
    key: "disableMethod",
    value: function disableMethod() {
      return this.virtualSelect.disable();
    }
  }, {
    key: "destroyMethod",
    value: function destroyMethod() {
      return this.virtualSelect.destroy();
    }
  }, {
    key: "validateMethod",
    value: function validateMethod() {
      return this.virtualSelect.validate();
    }
  }, {
    key: "toggleRequiredMethod",
    value: function toggleRequiredMethod(isRequired) {
      return this.virtualSelect.toggleRequired(isRequired);
    }
  }, {
    key: "onResizeMethod",
    value: function onResizeMethod() {
      document.querySelectorAll('.vscomp-ele-wrapper').forEach(function ($ele) {
        $ele.parentElement.virtualSelect.onResize();
      });
    }
    /** static methods - end */
  }]);
}();
document.addEventListener('reset', VirtualSelect.onFormReset);
document.addEventListener('submit', VirtualSelect.onFormSubmit);
window.addEventListener('resize', VirtualSelect.onResizeMethod);
virtual_select_attrPropsMapping = VirtualSelect.getAttrProps();
window.VirtualSelect = VirtualSelect;

// Static property for tracking open dropdowns
VirtualSelect.openInstances = new Set();

// Static property for tracking the last interacted instance
VirtualSelect.lastInteractedInstance = null;

/** polyfill to fix an issue in ie browser */
if (typeof NodeList !== 'undefined' && NodeList.prototype && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
/******/ })()
;