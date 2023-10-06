
// vi byter färg på Body-elementet i HTML till vit. clickFunction kopplas till button-elementet i index.html. 

function clickFunction(){
    let ourBody = document.querySelector("body");

    ourBody.style.backgroundColor = "white"
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    // Eftersom h inte kopplas till funktionen checkTime tänker vi att det inte kommer visas några nollor innan klockan 10.
    // FRÅGA DANIEL om ovan
    /*
     Daniels svar: 
     Det är helt korrekt, vill ni inte ha 0 framför!
    */

    /*
     Daniels svar:
     Ni har dubbla + i slutet, tror det är det som förstör sekundrarna!
    */
    document.getElementById('clock').innerHTML = h + ":" + m + ":" +  + s;
    setTimeout(startTime, 1000);
    // innerHTML - FRÅGA DANIEL

    /*
     Daniels svar:
     innerHTML fungerar bra, det som innerHTML gör är att ersätta all HTML inuti #clock, 
     medan innerText bara ersätter texten och sparar HTML.
    */
 }

 function checkTime(i) {
    if (i < 10) { i = "0" + i; };
    return i;
}
      // FRÅGA DANIEL: funktionen fungerar för minutrar men ej sekunder, vi kan ej hitta fel i koden. hjälp.
    // lägger till nollor till alla nummer under 10, för sekunder och minuter
    /*
        Daniels svar: 
        Se mitt svar på rad 26 och rad 27
    */
    function validateForm() {
        let x = document.forms["myForm"]["fname"].value;
        if (x == "") {
            alert("Namn måste var ifyllt");
            return false;
        }
    }