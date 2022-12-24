const myImage = document.querySelector("img");

myImage.onclick = () =>
{
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/rice.jpg")
    {
        myImage.setAttribute("src", "images/rice-cooker.png");
    } else
    {
        myImage.setAttribute("src", "images/rice.jpg");
    }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName()
{
    const myName = prompt("Please enter your name:");
    localStorage.setItem("name", "myName");
    myHeading.textContent = '${myName}, you must love rice';
}
if (!localStorage.getItem("name"))
{
    setUserName();
}   else
{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = '${myName}, you must love rice';
}

myButton.onclick = () =>
{
    setUserName();
}

