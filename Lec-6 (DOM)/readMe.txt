You will need all 3 files: html, css and js to understand this
Query: How to change html elements class properties in js
Query: concating in innerHTML in JS is not changing the structue on web


<body>
    <div>
        <img src="something.jpg"></img>
        <h2>This is Heading</h1>
        <p>This is paragraph</p>
        <div>Another div</div>
    </div>
    <script src="script.js"></script>
</body>

Parent Node --> body(for div and script); div(for img, h2, p and div)
Child Node --> div and script(parent: body); img, h2, p and div(parent: div)
Descendents --> img, h2, p and div (for body)
Siblings --> div and script(parent: body); img, h2, p and div(parent: div)

firstChild
lastChild
children

text node
comment node
element node


