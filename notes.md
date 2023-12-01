# Anika's Notes

## Midterm

### The Console (command line)
- **pwd** - see which directory you are in. (present working directory = pwd) also shos the absolute path of the directory.
- **ls** - list all of the files in the directory. even hidden ones are listed if you use -la as a parameter.
- **echo** - output thte parameters of the command. 
- **cd** - change directory
- **mkdir/rmdir** - make directory/remove directory
- **rm** - remove file(s)
- **mv** - move file(s)
- **cp** - copy file(s)
- **curl** - command line client url browser
- **grep** - regular expression search
- **find** - find files
- **top** - view running processes with CPU and memory usage
- **df** - view disk statistics
- **cat** - output contents of a file
- **less** - interactively output the contents of a file
- **wc** - word count
- **ps** - view the currently running processes
- **kill** - kill a currently running process
- **sudo** - execute a command as a super user (admin)
- **ssh** - create a secure shell on a remote computer
- **scp** - securely copy files to a remote computer
- **history** - show the history of commands
- **ping** - check if a website is up
- **tracert** - trace the connections to a website
- **dig** - show the DNS information for a domain
- **man** - look up a command in the manual
- **|** - pipe or pass output from the command on the left to the command on the right
- **>** - redirect output to a file...overwrite the file if it exists
- **>>** - redirect output to a file...append if it exists
- **Ctrl-R** - use type ahead to find previous commands
- **Ctrl-C** - kill the currently running command
- **nano** - text editor
- **wget** - command line file downloader
- **chmod** - change file permissions

### DNS
- Domain Name System
- domain names are converted to IP address by doing a lookup in the DNS
- dig is used to lookup the IP address for any domain name.
- an address (A) record is straight mapping from a domain name to IP address.
- a canonical name (CNAME) record maps one domain to another domain name (byu.com maps to byu.edu)
- name server (NS) record contains the names of the authoritative name servers that authorize you to place DNS records in this DNS server
- start of authority (SOA) record provides contact info about the owner of the domain name.

### Domain names
- Broken up into a root domain with one or more subdomain prefixes. root domain is represented by a secondary level domain and a top level. TLd = edu, com, org, click, etc.
- ex. [subdomain.]*secondary.top
- each subdomain may have a different IP address
- get info using whois

### Caddy
- handles creation and rotation of web certificates allowing us to easily support HTTPS
- serves up all of your static HTML, CSS, and JavaScript files.
- acts as a gateway for subdomain requests.
- port 443(https), 80(http), 22(ssh)

### HTTPS and TLS
- the secure version of HTTPS
- all data is encrypted using TLS protocol
- web certificate is required

 ### HTML
 - hypertext markup language
 - foundational content structure
 - one page - single page application (SPA)
 - group of hyperlinked pages - multi-page application (MPA)
 - **Elements** - represented with enclosing tags.
   - <p></p> = paragraph
   - html element represents the top page level structure
   - head element contains metadata about the page and page title
   - body element represents content
   - main element represents main content (as opposed to headers, footers, asides, and navigation)
   - script element is a JavaScript reference
   - meta element has metadata for the page (character set or viewport settings)
   - include element refers to external content
   - section element is a section of the main content
   - aside element is content aside from the main content
   - div elemen is a block of division of content
   - span an inline span of content
   - h1, h2, h3... h9 = text heading (1 is highest level, 9 is lowest level)
   - b bring attention
   - table table
   - tr table row
   - th table header
   - td table data
   - ol, ul, li, lists
   - a anchor to hyperlink
   - img graphical image reference
   - dialog interactive component
   - form is a collection of user input
   - input is a user input field
   - audio, video
   - svg is scalable vector graphic content
   - ifram is inline frame of another HTML page
- **Attributes** - describe the specific details of the element. (inside the element tag)
   - id - gives the element an ID to distinguish it from other elements (id="")
   - class - classifies the element into a named group of elements (class='')
- **Hyperlinks**
   - take you from one page to another with a click. represented with an anchor (a) element containing the address of the hyperlink reference (href)
   - ex. <a href="https://website.com">website</a>
- <!DOCTYPE html> tells the browser the type and version of the document.
- index.html is the default that will be shown
- **External Media** - media tags take a URL as an attribute. relative or full path. relative if it is in the same location as the HTML (src="")
- to display an image with a hyperlink in HTML, use the anchor tag to create the hyperlinke and the img tag to display the image within it.

### CSS
- style attribute, link to sheet in the head element
- elements inherite the rules of their parents. rules at a lower level override the rules at a higher level
- **Box Model** - everything is defined as a box. applying stles applies them to a rectangular box. within an element's box there are internal boxes
   - innermost - content (text or image)
   - next - padding (inherits things like background color)
   - border - color thickness, line style
   - margin - considered external and only represents whitespace.
- **Selectors**
   - element type selector (use the name of the element) (body)
   - combinators - descendant combinator (element within an element) (section h2), child (section > p), general sibling (p ~ div), adjacent sibling (p + div)
   - class selector (.summary) (.[class])
   - ID selector (#ID)
   - attribute selector (a[href]) (p[class='summary'])
   - Pseudo selector (section:hover) positional relationships, mouse interactions, hyperlink visitation states, and attributes.
 - you could use a span tag with a class or ID and style it using CSS to change the color of specific text.
 - default property value for a span element is inline.
 - **Display** - change how an html element is displayed (none, block (p or div), inline (b or span), flex, grid)
 - **Viewport meta tag** - tells the browser not to automatically scale the page
 - **Float** - moves an element to the left or the right of its container element and allows inline elements to wrap around it.
 - **Media Queries** - @media selector dynamically detects the size and orientation of the device and applies CSS rules that accommodates the size. takes one boolean argument (orientation, height, width, etc)
 - **Grid** - useful when displaying a group of child elements. Start with a container element and a lot of child elements. display: grid lets it be displayed in grid flow
 - **Flex** - partition app into areas that move around based on window size/orientation. display: flex lets it be displayed in flex flow. flex-direction changes the way that it's oriented. flex: 0 80 px 0 means it won't grow and has a height of 80 pixels. fixed size box. flex:1 it gets one fractional unit of growth.

### JavaScript
- log is to output a message.
- timers (time and timeEnd) will output the duration between time and timeEnd. wrap the code with the calls
- count will show you how many times a block of code is called.
- declare variables with let and const. let allows you to change the value. const doesn't
- variable types include null, undefined, boolean, number, BigInt, string, and symbol Boolean, Number, and String are commonly used.
- there are also object types including object, function, date, array, map, JSON
- variables can change types. important to use === or !== if you want to skip type conversion when computing equality.
- conditionals include if, else, and if else (just like in c++) compact if else a === 1 ? console.log(1) : console.log('not 1');
- boolean operators (&& || !)
- loops include for, for in, for of, while, do while, and switch.
- **Strings** - sequence of characters surrounded with single quotes, double quotes, or backticks. backtick defines a string literal that may contain JavaScript that is evaluated in place & concatenated into the string. replacement specifier is declared with a dollar sign followed by a curly brace pair. Content inside curly braces is evaluated as JavaScript.
   - length - number of characters
   - indexof() - starting index of a given substring
   - split() - split the string into an array on the given delimiter
   - startsWith() - True if the string has a given prefix
   - endsWith() - True if the string has a given suffix
   - toLowerCase() - Converts all characters to lowercase
- **Functions** - first class objects meaning they can be assigned a name, passed as a parameter, returned as a result, and referenced from an object or array. Begins with the function keyword and is followed by zero or more parameters and a body with zero of more return statements.
   - **Paramenters** - if a parameter is not provided, the value is undefined when the function executes.
   - the function can define a default value. assign a value to the parameter in the function delaration.
   - **Anonymous functions** - assign a function to a variable so that they can be passed as a parameter or stored as an object property.
   - **Inner functions** - functions declared inside other functions.
- **Arrow functions** - arrow syntax makes code more complex. no need for the function keyword. just use => after the parameter declaration. () => 3
   - **return values** - return keyword optional if no curly braces are provided and the function contains a single expression. The result of the expressio is automatically returned. If curly braces are provided, it behaves just like a standard function.
   - **This pointer** - inherit the this pointer from where it is created. makes a closure. allows the function to continue referencing its creation scope, even after it has passed out of that scope. Closures can remember the values of variables when the function was created instead of what they are when they are executed.
   - **debounce** - only execute a specified function once within a given time window. window.addEventListener
- **Arrays** - basically just a list :)
   - push() - Add an item to the end of the array a.push(4)
   - pop() - Remove an item from the end of the array x = a.pop()
   - slice() - Return a sub-array a.slice(1, -1)
   - sort() - Run a function to sort an array in place a.sort((a,b) => b-a)
   - value() - Creates an iterator for use with a for of loop for (i of a.values()) {...}
   - find() - Find the first item satistfied by a test function a.find(i => 1 < 2)
   - forEach() - Run a function on each array item a.forEach(console.log)
   - reduce() - Run a function to reduce each array item to a single item a.reduce((a,c) => a + c)
   - map() - Run a function to map an array to a new array a.map(i => i+i)
   - filter() - Run a function to remove items a.filter(i => i%2)
   - every() - Run a function to test if all items match a.every(i => i < 3)
   - some() - Run a function to test if any items match a.some(i => 1 < 1)
- **JSON** - JavaScript Object Notation. simple and effective way to share and store data. easily convertable to and from JavaScript objects. Always encoded with UTF-8. JSON document contains one of the following data types:
   - string
   - number
   - boolean
   - array
   - object (kinda like a dictionary or a map). The most common data type a JSON document contains. Strings are always delimited with double quotes. commas delimit arrays. curly braces delimit and object.
   - null
   - JSON.parse & JSON.stringify
 - **Regular Expressions** - support built into Javascript. match, replace, search, and split accept regex. for a quick test to see if there is a match use the object's test function.
 - **Rest** - have a function take in an unknown number of parameters. rest sytax is basically a parameter that contains the rest of the parameters. last parameter of any function, prefix it with three periods. Combines the parameters into an array.
 - **Spread** - does the opposite of rest. takes an iterable (array or string) and expandis it into a function's parameters.
 - **Exceptions** - try catch and throw syntax. triggered whenever your code generates an exception using the throw keyword or runtime... wrap a code block with try, follow try block with catch block. If an exception is thrown in the try block, the rest of the code is ignored and the catch block is called. finally block is always called whenever the try block is exited.
 - **Fallbacks** - implemented using exception handling. normal feature path in try block, fallback implementation in the catch block.
 - **Desctructuring** - process of pulling individual items out of an existing one or removing structure. done with arrays or objects. kind of looks like declaring an array with the syntax on the left side of the expression. Same with objects. specify the properties you want to pull from the source object. you can also map names to new variables. default value provided for missing ones.
 - **Object** - collection of name value pairs referred to as properties. name has to be String or symbol, value can be any type. have common object-oriented functionality (constructors, this pointer, static properties, functions, inheritance). Can be created with the "new" operator. causes the constructor to be called. You can add properties by referencing the property name in assignment. properties can be referenced with dot or brack notation... obj.prop or obj['prop']
 - **Object-literals** - declare a variable of object type.
 - **Object-functions** - entries: returns an array of key value pairs. keys: returns an array of keys. values: returns an array of values.
 - **Constructor** - any function that returns an object
 - **This pointer** - in the context of an object, it's a pointer to the object.
 - **Classes** - used to define objects. clarifies the intent to create a reusable component rather than a one-off object. similar to declaring an object but have an explicit constructor and assumed function declarations (?). you can make properties and functions private by putting # before them.
 - **Inheritance** - extends keyword used to define inheritance. super function passes parameters to the parent class. the parent function can be accessed using super.
 - **Scope** - global, module, function, block
   - Global this - when this is referenced outside a function or object it refers to the browser's window object
   - Function this - refers to the object that owns the function. either an object you defined or global This
   - object this - refers to the object.
   - array
   - Closure is a function and its surrounding state
   - arrow functions inherit the this pointer of their creation context.
- **Modules** - allow for paritioning and sharing of code. Node.js modules are called CommonJS modules. JavaScript modules are called ES modules. create a file-based scope. you must export the objects from one file and import them into another. Modules can only be called from other modules, not from the global scope. in HTML  script type="module" leak it into the global scope by attaching an event handler or by adding it to the global window object.
- **DOM** - object representation of HTML elements. global variable name is document. for everything in the HTML there is a node in the DOM (elements, attributes, text, comments) DOM is a big tree. DOM element interface: iterate child elements, access parent element, manipulate element attributes. querySelectorAll select elements from the documents. textContent contains all of the element's text. innerHTML is the textual representation of an element's HTML content. insert, modify, delete elements in the DOM. create element (.createElement()) on the document, insert the new element by appending it to an existing element (.appendChild()). Event listeners: clipboard (cut, copied, pasted), focus (an element gets focus), keyboard (keys are pressed), mouse (click events), text selection (when text is selected)
- **Local storage** - ability to store and retrive data on a user's browser across user sessions. setItem(name, value), getItem(name), removeItem(name), clear(), string, number, or boolean. object or array convert to string with stringify(). parse it back with .parse() when retrieved.
-  **Promises** - single threaded application, one piece of code at a time. Promise object can be pending, fulfilled, or rejected.
-  .grid = class #title = ID
-  getelementbyID('byu').style.color = green
-  switch (expression) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // code
}
