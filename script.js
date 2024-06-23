console.log("Dobroe vecherogo mi z Ukraini");

const insideLeft = document.getElementById("insideLeft");
const insideRight = document.getElementById("insideRight");
const insideLeftText = document.getElementById("insideLeftTextParagraph");
const slika1 = document.getElementById("prva");
const slika2 = document.getElementById("vtora");
const slika3 = document.getElementById("treta");
const CVtext = document.getElementById("CVText");
const mapata = document.getElementById("mapata");

let save = "empty";
let realSave = "empty";

let Contact = false;

function leaveHome(){

    if(save !== insideLeftText.innerHTML){
        setTimeout(
            function(){
                insideLeftText.innerHTML = save;

                insideLeft.style.opacity = 1;
                insideRight.style.opacity = 1;
                return true;
                //DA SE POJAVE STRANATA
            }, 500
        )
        insideLeft.style.opacity = 0;
        insideRight.style.opacity = 0;
    }
    // insideLeftText.innerHTML = save;

}
function leaveAbout(){

    // insideLeftText.innerHTML = save;

    if(save !== insideLeftText.innerHTML){
        setTimeout(
            function(){
                insideLeftText.innerHTML = save;

                insideLeft.style.opacity = 1;
                insideRight.style.opacity = 1;
                return true;
                //DA SE POJAVE STRANATA
            }, 500
        )
        insideLeft.style.opacity = 0;
        insideRight.style.opacity = 0;
    }
}

function clickHome(){
    save = "Welcome to Mihail Naskov's personal website!";
    Contact = false;
    slika1.style.display = "none";
    slika2.style.display = "none";
    slika3.style.display = "none";
    CVtext.style.display = "none";
    mapata.style.display="none";
}
function clickAbout(){
    save = "I am 19 years old student from Vinica studying Software Engineering in the Faculty of Informatics and Computer Science in Skopje!\n My passions include programming, handball and playing video games.";
    Contact = false;
    slika1.style.display = "none";
    slika2.style.display = "none";
    slika3.style.display = "none";
    mapata.style.display="inline-block";
    CVtext.style.display = "none";
}

function hoverHome(){

    insideRight.style.width = 30+"%";
    insideLeft.style.width = 60+"%";
    save = insideLeftText.innerHTML;
    setTimeout(
        function(){
            insideLeftText.innerHTML = "Welcome to Mihail Naskov's personal website!";

            insideLeft.style.opacity = 1;
            insideRight.style.opacity = 1;
            return true;
            //DA SE POJAVE STRANATA
        }, 500
    )
    insideLeft.style.opacity = 0;
    insideRight.style.opacity = 0;
    slika1.style.display = "none";
    slika2.style.display = "none";
    slika3.style.display = "none";
}
function hoverAbout(){
    insideRight.style.width = 30+"%";
    insideLeft.style.width = 60+"%";
    save = insideLeftText.innerHTML;
    setTimeout(
        function(){
            insideLeftText.innerHTML = "I am 19 years old student from Vinica studying Software Engineering in the Faculty of Informatics and Computer Science in Skopje!\n My passions include programming, handball and playing video games.";

            insideLeft.style.opacity = 1;
            insideRight.style.opacity = 1;
            return true;
            //DA SE POJAVE STRANATA
        }, 500
    )
    insideLeft.style.opacity = 0;
    insideRight.style.opacity = 0;
    slika1.style.display = "none";
    slika2.style.display = "none";
    slika3.style.display = "none";
}

function hoverContact(){
    slika1.style.display = "inline-block";
    slika2.style.display = "inline-block";
    slika3.style.display = "inline-block";
    save = insideLeftText.innerHTML;
    insideLeftText.innerHTML = "Contact me at:";
    insideRight.style.width = 0;
    insideLeft.style.width = 90+"%";

}

function hoverClick(){
    Contact=true;
    CVtext.style.display = "none";
    mapata.style.display="none";
}


function hoverLeave(){
    if(Contact===false){
        insideRight.style.width = 30+"%";
        insideLeft.style.width = 60+"%";
        slika1.style.display = "none";
        slika2.style.display = "none";
        slika3.style.display = "none";
    }
}
function hoverCV(){
    save = insideLeftText.innerHTML;
    insideRight.style.width = 0;
    insideLeft.style.width = 90+"%";
}
function CVClick(){
    Contact=true;
    slika1.style.display = "none";
    slika2.style.display = "none";
    slika3.style.display = "none";
    insideLeftText.innerHTML = "Get my CV at: ";
    CVtext.style.display = "inline-block";
    CVtext.style.marginLeft = "45%";
    mapata.style.display="none";
}

function CVLeave(){
    if(Contact===false){
        insideRight.style.width = 30+"%";
        insideLeft.style.width = 60+"%";
    }
}
function odnesiInstagram(){
    window.open("https://www.instagram.com/miiihail_",'_blank');
}
function odnesiFacebook(){
    window.open("https://www.instagram.com/MikiiiiN_",'_blank');
}
function odnesiGmail(){
    window.open("https://www.gmail.com");
    alert("My Gmail is mihailnaskov22@gmail.com");

}