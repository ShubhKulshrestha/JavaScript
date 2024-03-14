//DOM Manipulation in JS...
// Selecting With id
document.getElementById("myId");

// Selecting With class 
document.getElementByClassName("className");

// Selecting With tag
document.getElementByTagName("tagName");

// Query Selector
document.querySelector("myId/.myClass/tag"); // Returns first Elements
document.querySelectorAll("myId/.myClass/tag"); // Returns a Nodelist

//Attributes
getAttribute(attr)// to get the attribute value
setAttribute(attr,value)// to set attribute value

// node style 
Node.style 

// Insert Elements
node.append(el) //adds at the end of node(inside)
node.prepend(el) //adds at the start of node(inside)
node.before(el) //adds before the node(outside)
node.after(el) //adds after the node(outside)

//Delete Element
node.remove() //remove the node
