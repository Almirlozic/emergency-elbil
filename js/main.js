document.querySelector("#circle1").addEventListener("click", circle1);
document.querySelector(".info-text > h2").style.backgroundColor =("#000000");
document.querySelector(".info-text").style.backgroundColor =("#FFFFFF");
document.querySelector("#requirement").style.display = "none";
document.querySelector("#efficiency").style.display = "none";
document.querySelector(".placeholder").style.display = "none";

function circle1(){
    console.log("circle1")
    animateBoxes();
    document.querySelector(".info-text > h2").textContent = "En dag med fuld power";
    document.querySelector(".placeholder").style.display = "";
    document.querySelector(".placeholder").textContent = "Gør din morgen nemmere og mere bekymringsfri med en elbil. Når du oplader natten over, vågner du op til en bil der er klar til dagens eventyr. Uanset om du skal på arbejde eller hente børnene.";
    document.querySelector("#efficiency").style.display = "";
    document.querySelector("#efficiency").textContent = "Fordele: Ingen flere ture til tankstationen! Du kan nemt oplade derhjemme natten over, så bilen er klar, når du er. Det er som at vågne op til en fuld tank hver dag – uden besvær."
    
}

document.querySelector("#circle2").addEventListener("click", circle2);
function circle2(){
    console.log("circle2")
    animateBoxes();
    document.querySelector(".info-text > h2").textContent ="Et grønnere valg";
    document.querySelector(".placeholder").style.display = "";
    document.querySelector(".placeholder").textContent ="Når du kører elbil bidrager du til en renere fremtided mindre CO2. Elbiler udnytter energien mere effektivt end traditionelle biler og kan køre på vedvarende energi som sol og vind.";
    document.querySelector("#efficiency").style.display = "";
    document.querySelector("#efficiency").textContent = "Fordele: Elbiler udleder ingen CO₂ under kørslen, og med grøn strøm fra sol og vind bliver du en del af løsningen på klimakrisen. Hver køretur bliver et skridt i den rigtige retning."
   
}

document.querySelector("#circle3").addEventListener("click", circle3);
function circle3(){
    console.log("circle3")
    animateBoxes();
    document.querySelector(".info-text > h2").textContent ="Altid plads i byen";
    document.querySelector(".placeholder").style.display = "";
    document.querySelector(".placeholder").textContent = "Slip for fustrerende parkeringsjagt i byen. Med en elbil får du adgang til flere parkeringspladser, ofte tættere på din destination. Mange byer tilbyder fordele som gratis eller billigere parkering.";
    document.querySelector("#efficiency").style.display = "";
    document.querySelector("#efficiency").textContent = "Fordele: Du kan både lade bilen op og spare penge, mens du handler, arbejder eller er ude i byen. Elbiler giver dig simpelthen bedre muligheder, når det gælder parkering."
   
}

function cleanup(){
    console.log("cleanup");
    document.querySelector("#requirement").removeEventListener("animationend", cleanup);
    document.querySelector("#requirement").classList.remove("fadeIn");
    document.querySelector("#efficiency").classList.remove("fadeIn");
}

function animateBoxes(){
    document.querySelector("#efficiency").classList.remove("hide");
    document.querySelector("#efficiency").classList.add("fadeIn");
    document.querySelector("#requirement").classList.remove("hide");
    document.querySelector("#requirement").classList.add("fadeIn");
    document.querySelector("#requirement").addEventListener("animationend", cleanup)
}


