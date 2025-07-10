const buttonReturnHome = document.getElementById("home-return")
const buttonGaming = document.getElementById("gaming")
const buttonProject = document.getElementById("project")
const contentDiv = document.getElementById("scrollbar-js")



document.addEventListener("DOMContentLoaded", function loadStandardContent() {
    contentDiv.innerHTML = 
    `
        <img src="/images/animegirl-pfp.jpg">  
        <img src="/images/catgirl-pfp.jpg">
    `;
});

buttonReturnHome.addEventListener("click", function returnHome() {
    document.location.href = 'https://neko-lily.neocities.org/'
});

buttonGaming.addEventListener("click", function changeInfoGaming () {
    contentDiv.innerHTML = 
    ` 
        <img src="/images/animegirl-pfp.jpg">  
        <img src="/images/catgirl-pfp.jpg">
    `;                  
});

buttonProject.addEventListener("click", function changeInfoProject(){
    contentDiv.innerHTML = 
    `
        <p>Exciting Project XYZ WOOOOOOOOOOW</p>
    `;
});

document.onload = function(){
    loadStandardContent();
    changeInfoGaming();
    changeInfoProject();
};