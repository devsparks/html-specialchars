
var html_specialchars = require("../index.js");

describe("escape", function() {

    it('converts ampersand (&) into &amp;', function() {
        var escaped = html_specialchars.escape('&');
        expect(escaped).toEqual('&amp;');
    });
    
    it('converts less-than sign (<) into &lt;', function() {
        var escaped = html_specialchars.escape('<');
        expect(escaped).toEqual('&lt;');
    });
    
    it('converts greater-than sign (>) into &gt;', function() {
        var escaped = html_specialchars.escape('>');
        expect(escaped).toEqual('&gt;');
    });
    
    it('converts quotation mark (") into &quot;', function() {
        var escaped = html_specialchars.escape('"');
        expect(escaped).toEqual('&quot;');
    });
    
    it("converts apostrophe (') into &apos;", function() {
        var escaped = html_specialchars.escape("'");
        expect(escaped).toEqual('&apos;');
    });
    
    it('converts backtick (`) into &#96;', function() {
        var escaped = html_specialchars.escape('`');
        expect(escaped).toEqual('&#96;');
    });
    
    it('converts slash (/) into &#47;', function() {
        var escaped = html_specialchars.escape('/');
        expect(escaped).toEqual('&#47;');
    });

});

describe('unescape', function() {

    it('converts &amp; into ampersand (&)', function() {
        var unescaped = html_specialchars.unescape('&amp;');
        expect(unescaped).toEqual('&');
    });
    
    it('converts &#38; into ampersand (&)', function() {
        var unescaped = html_specialchars.unescape('&#38;');
        expect(unescaped).toEqual('&');
    });
    
    it('converts &lt; into less-than sign (<)', function() {
        var unescaped = html_specialchars.unescape('&lt;');
        expect(unescaped).toEqual('<');
    });
    
    it('converts &#60; into less-than sign (<)', function() {
        var unescaped = html_specialchars.unescape('&#60;');
        expect(unescaped).toEqual('<');
    });
    
    it('converts &gt; into greater-than sign (>)', function() {
        var unescaped = html_specialchars.unescape('&gt;');
        expect(unescaped).toEqual('>');
    });
    
    it('converts &#62; into greater-than sign (>)', function() {
        var unescaped = html_specialchars.unescape('&#62;');
        expect(unescaped).toEqual('>');
    });
    
    it('converts &quot; into quotation mark (")', function() {
        var unescaped = html_specialchars.unescape('&quot;');
        expect(unescaped).toEqual('"');
    });
    
    it('converts &#34; into quotation mark (")', function() {
        var unescaped = html_specialchars.unescape('&#34;');
        expect(unescaped).toEqual('"');
    });
    
    it("converts &apos; into apostrophe (')", function() {
        var unescaped = html_specialchars.unescape('&apos;');
        expect(unescaped).toEqual("'");
    });
    
    it("converts &#39; into apostrophe (')", function() {
        var unescaped = html_specialchars.unescape('&#39;');
        expect(unescaped).toEqual("'");
    });
    
    it('converts &DiacriticalGrave; into backtick (`)', function() {
        var unescaped = html_specialchars.unescape('&DiacriticalGrave;');
        expect(unescaped).toEqual("`");
    });
    
    it('converts &#96; into backtick (`)', function() {
        var unescaped = html_specialchars.unescape('&#96;');
        expect(unescaped).toEqual("`");
    });
    
    it('converts &sol; into slash (/)', function() {
        var unescaped = html_specialchars.unescape('&sol;');
        expect(unescaped).toEqual('/');
    });
    
    it('converts &#47; into slash (/)', function() {
        var unescaped = html_specialchars.unescape('&#47;');
        expect(unescaped).toEqual('/');
    });

});
