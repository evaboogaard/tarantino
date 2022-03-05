console.log("dogecoin to the moon")

var bodyElement = document.querySelector ("body")
var dressupGame = document.getElementById("dressupgame")

/* menu buttons ophalen */
var menuButton1Element = document.querySelector(".menubutton1")
var menuButton2Element = document.querySelector(".menubutton2")
var menuButton3Element = document.querySelector(".menubutton3")
var menuButton4Element = document.querySelector(".menubutton4")
var menuButton5Element = document.querySelector(".menubutton5")
var menuButton6Element = document.querySelector(".menubutton6")
var menuButton7Element = document.querySelector(".menubutton7")
var menuButtonSelected1Element = document.querySelector(".menubuttonselected1")
var menuButtonSelected2Element = document.querySelector(".menubuttonselected2")
var menuButtonSelected3Element = document.querySelector(".menubuttonselected3")
var menuButtonSelected4Element = document.querySelector(".menubuttonselected4")
var menuButtonSelected5Element = document.querySelector(".menubuttonselected5")
var menuButtonSelected6Element = document.querySelector(".menubuttonselected6")
var menuButtonSelected7Element = document.querySelector(".menubuttonselected7")
var randomizerElement = document.querySelector(".dosomething")

/* background buttons ophalen */
var backgroundElement = document.getElementById("background")

var backgroundButton1Element = document.getElementById("backgroundbutton1")
var backgroundButton2Element = document.getElementById("backgroundbutton2")
var backgroundButton3Element = document.getElementById("backgroundbutton3")
var backgroundButton4Element = document.getElementById("backgroundbutton4")
var backgroundButton5Element = document.getElementById("backgroundbutton5")
var backgroundButton6Element = document.getElementById("backgroundbutton6")
var showBackgroundButtons = document.getElementById("backgroundbuttons")


/* skintone buttons ophalen */
var skintoneElement = document.getElementById("skintone")

var skintone1ButtonElement = document.querySelector(".skintonebutton1")
var skintone2ButtonElement = document.querySelector(".skintonebutton2")
var skintone3ButtonElement = document.querySelector(".skintonebutton3")
var skintone4ButtonElement = document.querySelector(".skintonebutton4")
var skintone5ButtonElement = document.querySelector(".skintonebutton5")
var showSkintoneButtons = document.getElementById("skintonebuttons")

/* hairstyle buttons ophalen */
var hairElement = document.getElementById("hair")

var hairButton1Element = document.querySelector(".hairbutton1")
var hairButton2Element = document.querySelector(".hairbutton2")
var hairButton3Element = document.querySelector(".hairbutton3")
var hairButton4Element = document.querySelector(".hairbutton4")
var hairButton5Element = document.querySelector(".hairbutton5")
var showHairButtons = document.getElementById("hairbuttons")

/* top buttons ophalen */
var topElement = document.getElementById("top")

var topButton1Element = document.querySelector(".topbutton1")
var topButton2Element = document.querySelector(".topbutton2")
var topButton3Element = document.querySelector(".topbutton3")
var topButton4Element = document.querySelector(".topbutton4")
var showTopButtons = document.getElementById("topbuttons")

/* bottom buttons ophalen */
var bottomElement = document.getElementById("bottom")

var bottomButton1Element = document.querySelector(".bottombutton1")
var bottomButton2Element = document.querySelector(".bottombutton2")
var bottomButton3Element = document.querySelector(".bottombutton3")
var bottomButton4Element = document.querySelector(".bottombutton4")
var showBottomButtons = document.getElementById("bottombuttons")


/* shoes buttons ophalen */
var shoesElement = document.getElementById("shoes")

var shoesButton1Element = document.querySelector(".shoesbutton1")
var shoesButton2Element = document.querySelector(".shoesbutton2")
var shoesButton3Element = document.querySelector(".shoesbutton3")
var shoesButton4Element = document.querySelector(".shoesbutton4")
var showShoesButtons = document.getElementById("shoesbuttons")

/* accessory buttons ophalen */
var accessoryElement = document.getElementById("accessory")

var accessoryButton1Element = document.querySelector(".accessorybutton1")
var accessoryButton2Element = document.querySelector(".accessorybutton2")
var accessoryButton3Element = document.querySelector(".accessorybutton3")
var accessoryButton4Element = document.querySelector(".accessorybutton4")
var accessoryButton5Element = document.querySelector(".accessorybutton5")
var showAccessoryButtons = document.getElementById("accessorybuttons")

/* arrays voor alle elementen, voor de randomizer */
var backgroundElements = ["images/backgrounds/background1.png", "images/backgrounds/background2.png", "images/backgrounds/background3.png", "images/backgrounds/background4.png", "images/backgrounds/background5.png", "images/backgrounds/background6.png"]
var skintoneElements = ["images/body/skintone1.png", "images/body/skintone2.png", "images/body/skintone3.png", "images/body/skintone4.png", "images/body/skintone5.png"]
var hairElements = ["images/hair/hair1.png", "images/hair/hair2.png", "images/hair/hair3.png", "images/hair/hair4.png", "images/hair/hair5.png"]
var topElements = ["images/top/top1.png", "images/top/top2.png", "images/top/top3.png", "images/top/top4.png"]
var bottomElements = ["images/bottom/bottom1.png", "images/bottom/bottom2.png", "images/bottom/bottom3.png", "images/bottom/bottom4.png"]
var shoesElements = ["images/shoes/shoes1.png", "images/shoes/shoes2.png", "images/shoes/shoes3.png", "images/shoes/shoes4.png"]
var accessoryElements = ["images/accessory/accessory1.png", "images/accessory/accessory2.png", "images/accessory/accessory3.png", "images/accessory/accessory4.png", "images/accessory/accessory5.png"]

/* audio ophalen + functies aanmaken */

var audioClick = new Audio("audio/typewriter.wav")
var audioKillBill = new Audio("audio/siren.mp3")

function playClickSound(){
    audioClick.play()
}

function playKillBillSound(){
    audioKillBill.play()
}

function stopKillBillSound(){
    audioKillBill.pause()
    audioKillBill.currentTime = 0;
}


/* menu verbergen */

function hideEverything(){
    showSkintoneButtons.classList.add("hide")
    showHairButtons.classList.add("hide")
    showTopButtons.classList.add("hide")
    showBottomButtons.classList.add("hide")
    showShoesButtons.classList.add("hide")
    showAccessoryButtons.classList.add("hide")
    showBackgroundButtons.classList.add("hide")
}

hideEverything()

/* menu functies */

function showSkintones(){
    showSkintoneButtons.classList.remove("hide")
    disableHair()
    disableTop()
    disableBottom()
    disableShoes()
    disableAccessories()
    disableBackgrounds()
    playClickSound()
}

function disableSkintones(){
    showSkintoneButtons.classList.add("hide")
}

menuButton1Element.addEventListener("click", showSkintones)

function showHair(){
    showHairButtons.classList.remove("hide")
    disableSkintones()
    disableTop()
    disableBottom()
    disableShoes()
    disableAccessories()
    disableBackgrounds()
    playClickSound()
}

function disableHair(){
    showHairButtons.classList.add("hide")
}

menuButton2Element.addEventListener("click", showHair)

function showTop(){
    showTopButtons.classList.remove("hide")
    disableSkintones()
    disableHair()
    disableBottom()
    disableShoes()
    disableAccessories()
    disableBackgrounds()
    playClickSound()
}

function disableTop(){
    showTopButtons.classList.add("hide")
}

menuButton3Element.addEventListener("click", showTop)

function showBottom(){
    showBottomButtons.classList.remove("hide")
    disableSkintones()
    disableTop()
    disableHair()
    disableShoes()
    disableAccessories()
    disableBackgrounds()
    playClickSound()
}

function disableBottom(){
    showBottomButtons.classList.add("hide")
}

menuButton4Element.addEventListener("click", showBottom)

function showShoes(){
    showShoesButtons.classList.remove("hide")
    disableSkintones()
    disableTop()
    disableBottom()
    disableHair()
    disableAccessories()
    disableBackgrounds()
    playClickSound()
}

function disableShoes(){
    showShoesButtons.classList.add("hide")
}

menuButton5Element.addEventListener("click", showShoes)

function showAccessories(){
    showAccessoryButtons.classList.remove("hide")
    disableSkintones()
    disableTop()
    disableBottom()
    disableShoes()
    disableHair()
    disableBackgrounds()
    playClickSound()
}

function disableAccessories(){
    showAccessoryButtons.classList.add("hide")
}

menuButton6Element.addEventListener("click", showAccessories)

function showBackgrounds(){
    showBackgroundButtons.classList.remove("hide")
    disableSkintones()
    disableTop()
    disableBottom()
    disableShoes()
    disableAccessories()
    disableHair()
    playClickSound()
}

function disableBackgrounds(){
    showBackgroundButtons.classList.add("hide")
}

menuButton7Element.addEventListener("click", showBackgrounds)

/* background functies */

backgroundButton1Element.addEventListener("click", function() {
    changeBackground("background1")
    }, false)

backgroundButton2Element.addEventListener("click", function() {
     changeBackground("background2")
     }, false)

backgroundButton3Element.addEventListener("click", function() {
    changeBackground("background3")
    }, false)

backgroundButton4Element.addEventListener("click", function() {
    changeBackground("background4")
    }, false)

backgroundButton5Element.addEventListener("click", function() {
    changeBackground("background5")
    }, false)

backgroundButton6Element.addEventListener("click", function() {
    changeBackground("background6")
    }, false)

function changeBackground(background) {
    playClickSound()
    if (background == "background1") {
        backgroundElement.src = "images/backgrounds/background1.png"
    }

    else if (background == "background2") {
        backgroundElement.src = "images/backgrounds/background2.png"
    }

    else if (background == "background3") {
        backgroundElement.src = "images/backgrounds/background3.png"
    }

    else if (background == "background4") {
        backgroundElement.src = "images/backgrounds/background4.png"
    }

    else if (background == "background5") {
        backgroundElement.src = "images/backgrounds/background5.png"
    }

    else if (background == "background6") {
        backgroundElement.src = "images/backgrounds/background6.png"
    }
}

/* skintone functies */

skintone1ButtonElement.addEventListener("click", function(){
    changeSkintone("skintone1")
}, false)

skintone2ButtonElement.addEventListener("click", function(){
    changeSkintone("skintone2")
}, false)

skintone3ButtonElement.addEventListener("click", function(){
    changeSkintone("skintone3")
}, false)

skintone4ButtonElement.addEventListener("click", function(){
    changeSkintone("skintone4")
}, false)

skintone5ButtonElement.addEventListener("click", function(){
    changeSkintone("skintone5")
}, false)

function changeSkintone(skintone){
    playClickSound()

    if (skintone == "skintone1") {
    skintoneElement.src = "images/body/skintone1.png"
    }

    else if (skintone == "skintone2") {
    skintoneElement.src = "images/body/skintone2.png"
    }

    else if (skintone == "skintone3") {
    skintoneElement.src = "images/body/skintone3.png"
    }

    else if (skintone == "skintone4") {
    skintoneElement.src = "images/body/skintone4.png"
    }
    
    else if (skintone == "skintone5") {
    skintoneElement.src = "images/body/skintone5.png"
    }

}

/* hairstyles functies */

hairButton1Element.addEventListener("click", function(){
    changeHair("hair1")
}, false)

hairButton2Element.addEventListener("click", function(){
    changeHair("hair2")
}, false)

hairButton3Element.addEventListener("click", function(){
    changeHair("hair3")
}, false)

hairButton4Element.addEventListener("click", function(){
    changeHair("hair4")
}, false)

hairButton5Element.addEventListener("click", function(){
    changeHair("hair5")
}, false)

function changeHair(hair){
    playClickSound()
    killBill()
    
    if (hair == "hair1"){
    hairElement.src = "images/hair/hair1.png"
    killBill()
    }

    else if (hair == "hair2"){
    hairElement.src = "images/hair/hair2.png"
    killBill()
    }

    else if (hair == "hair3"){
    hairElement.src = "images/hair/hair3.png"
    killBill()
    }

    else if (hair == "hair4"){
    hairElement.src = "images/hair/hair4.png"
    killBill()
    }

    else if (hair == "hair5"){
    hairElement.src = "images/hair/hair5.png"
    killBill()
    }
        
}

/* top functies */

topButton1Element.addEventListener("click", function(){
    changeTop("top1")
}, false)

topButton2Element.addEventListener("click", function(){
    changeTop("top2")
}, false)

topButton3Element.addEventListener("click", function(){
    changeTop("top3")
}, false)

topButton4Element.addEventListener("click", function(){
    changeTop("top4")
}, false)

function changeTop(top){
    playClickSound()

    if(top == "top1"){
        topElement.src = "images/top/top1.png"
        killBill()
    }

    else if(top == "top2"){
        topElement.src = "images/top/top2.png"
        killBill()
    }

    else if(top == "top3"){
        topElement.src = "images/top/top3.png"
        killBill()
    }

    else if(top == "top4"){
        topElement.src = "images/top/top4.png"
        killBill()
    }
}

/* bottom functies */

bottomButton1Element.addEventListener("click", function(){
    changeBottom("bottom1")
}, false)

bottomButton2Element.addEventListener("click", function(){
    changeBottom("bottom2")
}, false)

bottomButton3Element.addEventListener("click", function(){
    changeBottom("bottom3")
}, false)

bottomButton4Element.addEventListener("click", function(){
    changeBottom("bottom4")
}, false)

function changeBottom(bottom){
    playClickSound()

    if(bottom == "bottom1"){
        bottomElement.src = "images/bottom/bottom1.png"
        killBill()
    }

    else if(bottom == "bottom2"){
        bottomElement.src = "images/bottom/bottom2.png"
        killBill()
    }

    else if(bottom == "bottom3"){
        bottomElement.src = "images/bottom/bottom3.png"
        killBill()
    }

    else if(bottom == "bottom4"){
        bottomElement.src = "images/bottom/bottom4.png"
        killBill()
    }
}

/* shoes functies */

shoesButton1Element.addEventListener("click", function(){
    changeShoes("shoes1")
}, false)

shoesButton2Element.addEventListener("click", function(){
    changeShoes("shoes2")
}, false)

shoesButton3Element.addEventListener("click", function(){
    changeShoes("shoes3")
}, false)

shoesButton4Element.addEventListener("click", function(){
    changeShoes("shoes4")
}, false)

function changeShoes(shoes){
    playClickSound()

    if (shoes == "shoes1"){
    shoesElement.src = "images/shoes/shoes1.png"
    killBill()
    }

    else if (shoes == "shoes2"){
    shoesElement.src = "images/shoes/shoes2.png"
    killBill()
    }

    else if (shoes == "shoes3"){
    shoesElement.src = "images/shoes/shoes3.png"
    killBill()
    }

    else if (shoes == "shoes4"){
    shoesElement.src = "images/shoes/shoes4.png"
    killBill()
    }
}

/* accessory functies */

accessoryButton1Element.addEventListener("click", function(){
    changeAccessory("accessory1")
}, false)

accessoryButton2Element.addEventListener("click", function(){
    changeAccessory("accessory2")
}, false)

accessoryButton3Element.addEventListener("click", function(){
    changeAccessory("accessory3")
}, false)

accessoryButton4Element.addEventListener("click", function(){
    changeAccessory("accessory4")
}, false)

accessoryButton5Element.addEventListener("click", function(){
    changeAccessory("accessory5")
}, false)

function changeAccessory(accessory){
    playClickSound()
    killBill()

    if(accessory == "accessory1"){
    accessoryElement.src = "images/accessory/accessory1.png"
    killBill()
    }

    else if (accessory == "accessory2"){
    accessoryElement.src = "images/accessory/accessory2.png"
    killBill()
    }

    else if (accessory == "accessory3"){
    accessoryElement.src = "images/accessory/accessory3.png"
    killBill()
    }

    else if (accessory == "accessory4"){
    accessoryElement.src = "images/accessory/accessory4.png"
    killBill()
    }

    else if (accessory == "accessory5"){
    accessoryElement.src = "images/accessory/accessory5.png"
    killBill()
    } 
    
}

/* if else stuff */

function killBill(){
if (accessoryElement.getAttribute("src") == "images/accessory/accessory1.png"
    && bottomElement.getAttribute("src") == "images/bottom/bottom2.png"
    && shoesElement.getAttribute("src") == "images/shoes/shoes2.png"
    && topElement.getAttribute("src") == "images/top/top2.png"
    && hairElement.getAttribute("src") == "images/hair/hair2.png"){

    bodyElement.classList.add("killbill")

    document.querySelector(".base").src = "images/killbillbase.png"

    randomizerElement.src = "images/buttons/dosomethingbuttonkillbill.png"

    menuButton1Element.src = "images/buttons/menubuttonkillbill1.png"
    menuButton2Element.src = "images/buttons/menubuttonkillbill2.png"
    menuButton3Element.src = "images/buttons/menubuttonkillbill3.png"
    menuButton4Element.src = "images/buttons/menubuttonkillbill4.png"
    menuButton5Element.src = "images/buttons/menubuttonkillbill5.png"
    menuButton6Element.src = "images/buttons/menubuttonkillbill6.png"
    menuButton7Element.src = "images/buttons/menubuttonkillbill7.png"

    menuButtonSelected1Element.src = "images/buttons/menubuttonselectedkillbill1.png"
    menuButtonSelected2Element.src = "images/buttons/menubuttonselectedkillbill2.png"
    menuButtonSelected3Element.src = "images/buttons/menubuttonselectedkillbill3.png"
    menuButtonSelected4Element.src = "images/buttons/menubuttonselectedkillbill4.png"
    menuButtonSelected5Element.src = "images/buttons/menubuttonselectedkillbill5.png"
    menuButtonSelected6Element.src = "images/buttons/menubuttonselectedkillbill6.png"
    menuButtonSelected7Element.src = "images/buttons/menubuttonselectedkillbill7.png"

    playKillBillSound()

} else {
    bodyElement.classList.remove("killbill")

    document.querySelector(".base").src = "images/base.png"

    randomizerElement.src = "images/buttons/dosomethingbutton.png"

    menuButton1Element.src = "images/buttons/menubutton1.png"
    menuButton2Element.src = "images/buttons/menubutton2.png"
    menuButton3Element.src = "images/buttons/menubutton3.png"
    menuButton4Element.src = "images/buttons/menubutton4.png"
    menuButton5Element.src = "images/buttons/menubutton5.png"
    menuButton6Element.src = "images/buttons/menubutton6.png"
    menuButton7Element.src = "images/buttons/menubutton7.png"

    menuButtonSelected1Element.src = "images/buttons/menubuttonselected1.png"
    menuButtonSelected2Element.src = "images/buttons/menubuttonselected2.png"
    menuButtonSelected3Element.src = "images/buttons/menubuttonselected3.png"
    menuButtonSelected4Element.src = "images/buttons/menubuttonselected4.png"
    menuButtonSelected5Element.src = "images/buttons/menubuttonselected5.png"
    menuButtonSelected6Element.src = "images/buttons/menubuttonselected6.png"
    menuButtonSelected7Element.src = "images/buttons/menubuttonselected7.png"

    stopKillBillSound()
    }
}

 /* randomizer */

function randomBackground(){
    var randomNummer = Math.random()*6
    randomNummer = Math.floor(randomNummer)
    backgroundElement.src = backgroundElements[randomNummer]
}

function randomSkintone(){
    var randomNummer = Math.random()*5
    randomNummer = Math.floor(randomNummer)
    skintoneElement.src = skintoneElements[randomNummer]
}

function randomHair(){
    var randomNummer = Math.random()*5
    randomNummer = Math.floor(randomNummer)
    hairElement.src = hairElements[randomNummer]
}

function randomTop(){
    var randomNummer = Math.random()*4
    randomNummer = Math.floor(randomNummer)
    topElement.src = topElements[randomNummer]
}

function randomBottom(){
    var randomNummer = Math.random()*4
    randomNummer = Math.floor(randomNummer)
    bottomElement.src = bottomElements[randomNummer]
}

function randomShoes(){
    var randomNummer = Math.random()*4
    randomNummer = Math.floor(randomNummer)
    shoesElement.src = shoesElements[randomNummer]
}

function randomAccessory(){
    var randomNummer = Math.random()*5
    randomNummer = Math.floor(randomNummer)
    accessoryElement.src = accessoryElements[randomNummer]
}

function randomizer(){
    randomBackground()
    randomSkintone()
    randomTop()
    randomHair()
    randomShoes()
    randomBottom()
    randomAccessory()
    playClickSound()
    killBill()
}

randomizerElement.addEventListener("click", randomizer)
