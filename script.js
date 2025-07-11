const buttonReturnHome = document.getElementById("home-return")
const buttonGaming = document.getElementById("gaming")
const buttonProject = document.getElementById("project")
const contentDiv = document.getElementById("content-center-js")



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
    `   <h1>
                Current Projects
        </h1>
        <div class="content-text">
            <p>
                I'm challenging myself to actually make a game for <a href="https://itch.io/jam/godot-wild-jam-83">this</a> Gamejam.
            </p>
            <p>
                So far I'm mostly trying to come up with a small concept for the thematic "Consume".
            </p>
            <p>
                I will continue to write about my little journey of programming a little game for the Jam when I have time inbetween :3
            </p>
            <p>
                Stay tuned! :)
            </p>
        </div>
    `;
});

document.onload = function(){
    loadStandardContent();
    changeInfoGaming();
    changeInfoProject();
};