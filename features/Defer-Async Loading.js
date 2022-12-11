// The script tag attributes async and defer are features that tackle page load time issues for heavy scripts; both will download the file during HTML parsing, allowing faster load times. Both do not interrupt the parser.

// The script with the async attribute will be executed once downloaded, irrespective of the order in which they are written. Therefore, the order of execution isn’t guaranteed. 
// On the other hand, the script with defer attribute will be executed after completing the DOM parsing, respecting the order in which script tags are mentioned. Therefore scripts loaded with defer attributes maintain the order in which they appear on the DOM.
// Use <script async> when the script is independent(has no dependency). When the script depends, use <script defer>.

// The best solution regarding dependency would be to add the <script> at the bottom of the body. There will be no issue with blocking or rendering.

// Typically, we put out script tags at the bottom of the body(left image). This allows the HTML to parse before scripts are loaded, which is vital because your JS has to plug into the existing HTML. If you put your scripts in the head, they will load faster, but the script won’t attach itself to the HTML since the HTML parsing was interrupted to load the script.