/**
 * html-specialchars
 * https://github.com/devsparks/html-specialchars
 *
 * Copyright (c) 2015 Michael Kortstiege
 * Licensed under the MIT license.
 */

/** @constant
    @private
    @type {Object}
*/
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var CHARS = {
  '&': ['&amp;', '&#38;'],
  '<': ['&lt;', '&#60;'],
  '>': ['&gt;', '&#62;'],
  '"': ['&quot;', '&#34;'],
  '\'': ['&apos;', '&#39;'],
  '`': ['&#96;', '&DiacriticalGrave;'],
  '/': ['&#47;', '&sol;']
};

/**
 * Populates a temporary variable that holds
 * the character reference to char mappings
 * @private
 */
var tmp = {};
for (var c in CHARS) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = CHARS[c][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var e = _step.value;

      tmp[e] = c;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
/** @constant
    @private
    @type {Object}
*/
var REFERENCES = tmp;

/**
 * Static class for escaping special chars in strings to their
 * corresponding entity character references as well as unescaping 
 * from entity and  numeric character references back to chars
 * @class
 */

var HtmlSpecialchars = (function () {
  function HtmlSpecialchars() {
    _classCallCheck(this, HtmlSpecialchars);
  }

  _createClass(HtmlSpecialchars, null, [{
    key: 'getRegexEscape',

    /**
     * Returns a regular expression for matching chars to escape
     * @private
     * @returns {RegExp}
     */
    value: function getRegexEscape() {
      var c = Object.keys(CHARS);
      return new RegExp('[' + c.join('') + ']', 'g');
    }
  }, {
    key: 'getRegexUnescape',

    /**
     * Returns a regular expression for matching references to unescape
     * @private
     * @returns {RegExp}
     */
    value: function getRegexUnescape() {
      var r = Object.keys(REFERENCES);
      return new RegExp('&(' + r.map(this.stripFirstLast).join('|') + ');', 'g');
    }
  }, {
    key: 'stripFirstLast',

    /**
     * Remove first and last character from a string
     * @private
     * @param {String} s
     * @returns {String}
     */
    value: function stripFirstLast(s) {
      return s.substring(1, s.length - 1);
    }
  }, {
    key: 'lookupEscape',

    /**
     * Returns an entity character reference for a matched input char
     * @private
     * @param {String} match - The char to be escaped
     * @param {...String} data - Additional parameters, not used at the moment
     * @returns {String} Corresponding entity character reference
     */
    value: function lookupEscape(match) {
      return CHARS[match][0] || match;
    }
  }, {
    key: 'lookupUnescape',

    /**
     * Returns a char for a matched entity character reference or
     * numeric character reference
     * @private
     * @param {String} match - The character reference to be unescaped
     * @param {...String} data - Additional parameters, not used at the moment
     * @returns {String} Corresponding char
     */
    value: function lookupUnescape(match) {
      return REFERENCES[match] || match;
    }
  }, {
    key: 'escape',

    /**
     * Escape special chars within a string
     * @param {String} s
     * @returns {String} Escaped string
     */
    value: function escape(s) {
      return s.replace(this.getRegexEscape(), this.lookupEscape);
    }
  }, {
    key: 'unescape',

    /**
     * Unescape entity character references and numeric character references 
     * within a string
     * @param {String} s
     * @returns {String} Unescaped string
     */
    value: function unescape(s) {
      return s.replace(this.getRegexUnescape(), this.lookupUnescape);
    }
  }]);

  return HtmlSpecialchars;
})();

exports['default'] = HtmlSpecialchars;
module.exports = exports['default'];