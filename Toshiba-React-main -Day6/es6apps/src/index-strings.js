//variable declaration, values  //var is es 5 keyword, let is es 6 keyword
//var vs let

var firstName = "Subramanian";
let lastName = 'Murugan';
console.log(" Name " + firstName + " " + lastName);
console.log(" Name ", firstName, " ", lastName);
console.log(`Name ${firstName} ${lastName}`);
let title = 'Google'
let doc = "<html>" +
    "<head>" +
    "<title>" + title + "</title>" +
    "</head>" +
    "<body>" +
    "<h1>Hello</h1>" +
    "</body>";
console.log(doc)
let docOne = `<html>
           <head>
            <title>${title}</title>
            </head>
          <body>
            <h1>Hello</h1>
          </body>
        `;
console.log(docOne)