# html-specialchars
A small library providing utility methods to `escape` special characters
to their HTML entities  
as well as `unescape` their corresponding entity/numeric character 
references back to chars.

## The escaped (&#8594;) and unescaped (&#8592;)

### 1. Syntax characters
There are three characters that should always appear in content as escapes, 
so that they do not interact with the syntax of the markup. These are part 
of the language for all documents based on XML and for HTML.

`&` &#8596; `&amp;`  
`<` &#8596; `&lt;`  
`>` &#8596; `&gt;`  

`&` &#8592; `&#38;`  
`<` &#8592; `&#60;`  
`>` &#8592; `&#62;`  


### 2. Quotations 
`"` &#8596; `&quot;`  
`'` &#8596; `&apos;`  
&nbsp;\`&nbsp; &#8596; `&#96;`  

`"` &#8592; `&#34;`  
`'` &#8592; `&#39;`  
&nbsp;\`&nbsp; &#8592; `&DiacriticalGrave;`  

There is still (2015) information around, that 
> [...] `&apos;` not recommended because its not in the HTML spec -  
> for this reason the XHTML specification recommends instead the  
> use of `&#39;` [...]

This refers to HTML 4.01 and should be obsolete with todays HTML 5.


### 3. OWASP Recommendation
You'll find further clarification in the [OWASP XSS (Cross Site Scripting) Prevention Cheat Sheet](https://www.owasp.org/index.php/XSS_%28Cross_Site_Scripting%29_Prevention_Cheat_Sheet#RULE_.231_-_HTML_Escape_Before_Inserting_Untrusted_Data_into_HTML_Element_Content)

`/` &#8596; `&#47;`  
`/` &#8592; `&sol;`  


## Installation
```shell
  npm install html-specialchars --save
```


## Usage
```javascript
  var html_specialchars = require('html-specialchars');

  var unsafeUserInput = 'Oh yes, <script>while(1);</script> 
                         I really enjoyed your party!';
  
  var safeString = html_specialchars.escape(unsafeUserInput);
  
  var plainTextAgain = html_specialchars.unescape(safeString);

  console.log('User input: ' + unsafeUserInput);
  console.log('Escaped: ' + safeString);
  console.log('Unescaped: ' + plainTextAgain);
```

## Development
If you want to contribute, do tests etc. please 
read the [devnotes](https://github.com/devsparks/html-specialchars/devnotes.md).

## Release History
* 1.0.0 Initial release
