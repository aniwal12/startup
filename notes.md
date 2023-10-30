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
- 
