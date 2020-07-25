function aboutPage() {
    $("#buttons").fadeToggle(500,function(){
        document.getElementById("sect").innerHTML =
    `<div id='about'>
        <div class="information">
            <h1>About Me!</h1>
            <p class='content'>My name is Eric Zhou, and I am a sophomore at the University of Wisconsin-Madison. I graduated from the Commonwealth
                School, located in Boston, Massachusetts.
            </p>
            <div class="return button" onclick="returnToHomepage('about')">
                Home
            </div>
        </div>
    </div>"`;
        document.getElementById("sect").style.display = "inline"; 
    })
}

function projectsPage() {
    $("#buttons").fadeToggle(500,function(){
        document.getElementById("sect").innerHTML =
    `<div id='projects'>
        <div class="information">
            <h1>Projects!</h1>
            <p class='content'>I have worked on...</p>
            <div class="return button" onclick="returnToHomepage('projects')">
                Home
            </div>
        </div>
    </div>`;
    document.getElementById("sect").style.display = "inline"
    })
}

function contactPage() {
    $("#buttons").fadeToggle(500,function(){
        document.getElementById("sect").innerHTML =
    `<div id="contacts">
        <div class="information">
            <h1>Contact Me!</h1>
            <p class='content'>My email is ezhou22@wisc.edu, and my github is...</p>
            <div class="return button" onclick="returnToHomepage('contacts')">
                Home
            </div>
        </div>
    </div>`;
    document.getElementById("sect").style.display = "inline"
    })
}

function returnToHomepage() {
    $("#sect").fadeToggle(500, function(){
        $("#sect").fadeOut(500);
        document.getElementById("sect").innerHTML ="";
        $("#buttons").fadeIn();
    })
}