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
const CHARS = {
  '&': ['&amp;', '&#38;'],
  '<': ['&lt;', '&#60;'],
  '>': ['&gt;', '&#62;'],
  '"': ['&quot;', '&#34;'],
  "'": ['&apos;', '&#39;'],
  '`': ['&#96;', '&DiacriticalGrave;'],
  '/': ['&#47;', '&sol;']
}

/**
 * Populates a temporary variable that holds
 * the character reference to char mappings
 * @private
 */
let tmp = {};
for (let c in CHARS) {
  for (let e of CHARS[c]) {
    tmp[e] = c;
  }
}
/** @constant
    @private
    @type {Object}
*/
const REFERENCES = tmp;

/**
 * Static class for escaping special chars in strings to their
 * corresponding entity character references as well as unescaping 
 * from entity and  numeric character references back to chars
 * @class
 */
class HtmlSpecialchars {
  /**
   * Returns a regular expression for matching chars to escape
   * @private
   * @returns {RegExp}
   */
  static getRegexEscape() {
    let c = Object.keys(CHARS);
    return new RegExp('[' + c.join('') + ']', 'g');
  }
  /**
   * Returns a regular expression for matching references to unescape
   * @private
   * @returns {RegExp}
   */
  static getRegexUnescape() {
    let r = Object.keys(REFERENCES);
    return new RegExp('\&(' + r.map(this.stripFirstLast).join('|') + ');', 'g');
  }
  /**
   * Remove first and last character from a string
   * @private
   * @param {String} s
   * @returns {String}
   */
  static stripFirstLast(s) {
    return s.substring(1, s.length-1);
  }
  /**
   * Returns an entity character reference for a matched input char
   * @private
   * @param {String} match - The char to be escaped
   * @param {...String} data - Additional parameters, not used at the moment
   * @returns {String} Corresponding entity character reference
   */
  static lookupEscape (match, ...data) {
    return CHARS[match][0] || match;
  }
  /**
   * Returns a char for a matched entity character reference or
   * numeric character reference
   * @private
   * @param {String} match - The character reference to be unescaped
   * @param {...String} data - Additional parameters, not used at the moment
   * @returns {String} Corresponding char
   */
  static lookupUnescape (match, ...data) {
    return REFERENCES[match] || match;
  }
  /**
   * Escape special chars within a string
   * @param {String} s
   * @returns {String} Escaped string
   */
  static escape (s) {
    return s.replace(this.getRegexEscape(), this.lookupEscape);
  }
  /**
   * Unescape entity character references and numeric character references 
   * within a string
   * @param {String} s
   * @returns {String} Unescaped string
   */
  static unescape (s) {
    return s.replace(this.getRegexUnescape(), this.lookupUnescape);
  }
}

export default HtmlSpecialchars;
