
const buttonGaming = document.getElementById("gaming")
const buttonProject = document.getElementById("project")
const contentDiv = document.getElementById("scrollbar-js")




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
    changeInfoGaming();
    changeInfoProject();
};