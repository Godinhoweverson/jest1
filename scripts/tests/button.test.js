const buttonClick = require("../button");

beforeEach(() =>{
    // document.body.innerHTML = "<p id='par'></p>";
    // we used for get all elements in html file
    let fs = require('fs') //allow us read, open, write 
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
test("expects p content to change", () => {
    buttonClick();
    expect(document.getElementById('par').innerHTML).toEqual("You Clicked");
});
test("h1 should exist", () => {
    expect(document.getElementsByTagName("h1").length).toBe(1);
})
})