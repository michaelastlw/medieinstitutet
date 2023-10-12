// Skapa en variabel för varje button
const hideButton = document.getElementById("hideButton1");

const widthButton = document.getElementById("widthButton1");

const changeImageButton = document.getElementById("changeImage");

const kitten = document.getElementById("image1");

// En funktion för att visa bilden
function showHideImage() {

    // Vi refaktoriserar funktionen pga ändrat uppdrag

    // Skapa en variabel som berättar om bilden syns eller ej
    const kittenIsVisible = kitten.style.display === "block";

    /* if(kitten.style.display === "block"){
        kittenIsVisible = true;
    } else {
        kittenIsVisible = false;
    } */

    // Skapa en if-sats som gör motsatsen till syns eller dold.
    if (kittenIsVisible) {
        // Dölj katten
        kitten.style.display = "none";
    } else {
        // Visa katten
        kitten.style.display = "block";
    }
}

// En funktion för att ändra bildens bredd
function changeWidthImage() {
    const kitten = document.querySelector("img");

    // Ändra bredden på bilden
    kitten.width = 350;
}

//En funktion som byter ut bilden
function changeImageFunction() {

    // Skapa en array med object som innehåller information
    // om bildens src.
    const allImages = [
        {
            src: "hund.jpg",
            alt: "Svart hund",
            getSrc: function () {
                return this.src;
            },
            headLineText: "Gullig hund",
            descriptionText: "Här är ett svartvitt porträtt på en svart hund",
            button: {
                backgroundColor: "lightpink"
            },
            container: {
                border: "3px dotted lightpink"
            },
            getSrcAsBackground: function() {
                // url("hund.jpg")
                return "url(" + this.src + ")";
            }
        },
        {
            src: "lama.jpg",
            alt: "Söta lamor",
            getSrc: function () {
                return this.src;
            },
            headLineText: "Fluffiga lamor ",
            descriptionText: "Vi ser två fluffiga lamor på ett fält",
            button: {
                backgroundColor: "green"
            },
            container: {
                border: "5px solid green"
            },
            getSrcAsBackground: function() {
                // url("hund.jpg")
                return "url(" + this.src + ")";
            }
        },
        {
            src: "lamm.jpg",
            alt: "Gulligt lamm",
            getSrc: function () {
                return this.src;
            },
            headLineText: "Sött lamm",
            descriptionText: "Ett lamm i blå pyjamas",
            button: {
                backgroundColor: "lightblue"
            },
            container: {
                border: "3px dotted lightblue"
            },
            getSrcAsBackground: function() {
                // url("hund.jpg")
                return "url(" + this.src + ")";
            }
        }
    ];

    // Tar ett slumpmässigt tal mellan 0 och 1, gångrar med max
    // rundar siffran till ett heltal, nedåt.
    const getRandomInt = function (max) {
        return Math.floor(Math.random() * max);
    }
    console.log(getRandomInt(3));

    // Hämta en av dom på random
    const choosenImage = allImages[getRandomInt(allImages.length)];

    // Sätt kitten.src till den valda objectets src
    kitten.src = choosenImage.getSrc();
    kitten.alt = choosenImage.alt;

    // Skapa en variabel för h1 och p
    const headline = document.getElementById("headline");
    const description = document.getElementById("description");

    // Sätta texten till det valda objektets headline och description
    headline.innerText = choosenImage.headLineText;
    description.innerText = choosenImage.descriptionText;

    const allButtons = document.querySelectorAll("button");

    // Loopa igenom alla buttons och sätt bakgrundsfärgen
    // till choosenImage.button.backgroundColor.
    allButtons.forEach(function (button) {
        button.style.backgroundColor = choosenImage.button.backgroundColor;
    });
    // const cointainer = document.querySelector("div");
    // cointainer.style.border = choosenImage.container.border;
    document.querySelector("div").style.border = choosenImage.container.border;

    // Ändra bakgrunden i body-taggen till den bild vi har valt
    const bodyElement = document.querySelector("body");
    bodyElement.style.backgroundImage = choosenImage.getSrcAsBackground();

    bodyElement.style.backgroundSize = "50%";
}

const timer = setInterval(showHideImage, 1000);
function stopTimer() {
    clearInterval(timer);
}

document.querySelector("#headline").addEventListener("click", stopTimer);

// Koppla en eventListener till varje button
hideButton.addEventListener("click", showHideImage);

widthButton.addEventListener("click", changeWidthImage);

changeImageButton.addEventListener("click", changeImageFunction);