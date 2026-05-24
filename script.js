const menuToggle =
document.getElementById("menu-toggle");

const navMenu =
document.getElementById("nav-menu");

if(menuToggle && navMenu){

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}

// THUMBNAIL IMAGE SWITCHING

const mainImage =
document.getElementById("mainProductImage");

const thumbnails =
document.querySelectorAll(".thumb");

thumbnails.forEach((thumb) => {

    thumb.addEventListener("click", () => {

        const newImage =
        thumb.getAttribute("data-image");

        mainImage.src = newImage;

        thumbnails.forEach((item) => {
            item.classList.remove("active-thumb");
        });

        thumb.classList.add("active-thumb");

    });

});

// SIZE ACTIVE BUTTONS

const sizeButtons =
document.querySelectorAll(".size-btn");

sizeButtons.forEach((button) => {

button.addEventListener("click", () => {

const parent =
button.parentElement;

parent.querySelectorAll(".size-btn")
.forEach((btn) => {

btn.classList.remove("active-size");

});

button.classList.add("active-size");

});

});


// COLOR ACTIVE

const colors = document.querySelectorAll(".color");

colors.forEach((color) => {

    color.addEventListener("click", () => {

        colors.forEach((c) => {
            c.classList.remove("active-color");
        });

        color.classList.add("active-color");

    });

});

// STYLE CARD ACTIVE + LIVE SUMMARY

const styleCards =
document.querySelectorAll(".style-card");

styleCards.forEach((card) => {

    card.addEventListener("click", () => {

        const parent =
        card.closest(".flow-content");

        parent.querySelectorAll(".style-card")
        .forEach((item) => {

            item.classList.remove("active-style");

        });

        card.classList.add("active-style");

        const previewImage =
        card.getAttribute("data-preview");

        mainImage.src = previewImage;

        const type =
        card.getAttribute("data-type");

        const name =
        card.getAttribute("data-name");

        if(type === "collar"){

    document.getElementById("collarResult")
    .innerText = name;

    localStorage.setItem(
    "collarResult",
    name
    );

}

        
if(type === "cuff"){

    document.getElementById("cuffResult")
    .innerText = name;

    localStorage.setItem(
    "cuffResult",
    name
    );

}

        if(type === "sleeve"){

    document.getElementById("sleeveResult")
    .innerText = name;

    localStorage.setItem(
    "sleeveResult",
    name
    );

}

        if(type === "pocket"){

    document.getElementById("pocketResult")
    .innerText = name;

    localStorage.setItem(
    "pocketResult",
    name
    );

}

        if(type === "button"){

    document.getElementById("buttonResult")
    .innerText = name;

    localStorage.setItem(
    "buttonResult",
    name
    );

}

    });

});



// ACCORDION FLOW

const flowBoxes =
document.querySelectorAll(".flow-box");

flowBoxes.forEach((box) => {

    const top =
    box.querySelector(".flow-top");

    top.addEventListener("click", () => {

        box.classList.toggle("active-flow");

    });

});

// VISUAL CARD ACTIVE

const visualCards =
document.querySelectorAll(".visual-card");

visualCards.forEach((card) => {

    card.addEventListener("click", () => {

        const parent =
        card.closest(".visual-options");

        parent.querySelectorAll(".visual-card")
        .forEach((item) => {

            item.classList.remove("active-visual");

        });

        card.classList.add("active-visual");

    });

});

// FIT ACTIVE

const fitButtons =
document.querySelectorAll(".fit-options button");

fitButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const parent =
        button.closest(".fit-options");

        parent.querySelectorAll("button")
        .forEach((btn) => {

            btn.classList.remove("active-fit");

        });

        button.classList.add("active-fit");

        document.getElementById("fitResult")
        .innerText = button.innerText;

    });

});


// NUMBER SELECTORS

const plusButtons =
document.querySelectorAll(".plus-btn");

const minusButtons =
document.querySelectorAll(".minus-btn");

// PLUS

plusButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const numberValue =
        button.parentElement.querySelector(".number-value");

        let currentValue =
        parseInt(numberValue.innerText);

        currentValue++;

        const unit =
        numberValue.getAttribute("data-unit");

        numberValue.innerText = currentValue;

    });

});

// MINUS

minusButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const numberValue =
        button.parentElement.querySelector(".number-value");

        let currentValue =
        parseInt(numberValue.innerText);

        if(currentValue > 1){

            currentValue--;

        }

        numberValue.innerText = currentValue;

    });

});


// REVEAL ANIMATION

const revealItems =
document.querySelectorAll(".reveal");

window.addEventListener("load", () => {

    revealItems.forEach((item, index) => {

        setTimeout(() => {

            item.classList.add("active-reveal");

        }, index * 120);

    });

});




// FULLSCREEN AI OVERLAY

const generateFitBtn =
document.getElementById("generateFitBtn");

const aiOverlay =
document.querySelector(".ai-overlay");

const overlayFill =
document.querySelector(".overlay-progress-fill");

const overlayPercent =
document.getElementById("overlayPercent");

const overlayStatus =
document.getElementById("overlayStatus");

if(generateFitBtn){

    generateFitBtn.addEventListener("click", () => {

        aiOverlay.classList.add("active-overlay");

        let progress = 0;

        overlayFill.style.width = "0%";

        overlayPercent.innerText = "0%";

        const interval = setInterval(() => {

            progress += 5;

            overlayFill.style.width =
            progress + "%";

            overlayPercent.innerText =
            progress + "%";

            // STATUS TEXTS

            if(progress > 20){

                overlayStatus.innerText =
                "Analyzing shoulder posture";

            }

            if(progress > 45){

                overlayStatus.innerText =
                "Generating body profile";

            }

            if(progress > 70){

                overlayStatus.innerText =
                "Calculating ideal tailoring fit";

            }

            if(progress >= 100){

                clearInterval(interval);

                overlayStatus.innerText =
                "Measurements Generated";

                setTimeout(() => {

                    aiOverlay.classList.remove("active-overlay");

                    document.querySelector(".fit-result")
                    .classList.add("show-result");

                    document.querySelector(".fit-result")
                    .scrollIntoView({
                        behavior:"smooth"
                    });

                }, 1200);

            }

        }, 180);

    });

}



// AI FIT PAGE

const aiFitFill =
document.querySelector(".ai-fit-fill");

const aiFitPercent =
document.getElementById("aiFitPercent");

const aiFitStatus =
document.getElementById("aiLoadingText");

if(aiFitFill){

    let progress = 0;

    const interval = setInterval(() => {

        progress += 5;

        aiFitFill.style.width =
        progress + "%";

        aiFitPercent.innerText =
        progress + "%";

        // STATUS

        if(progress > 20){

            aiFitStatus.innerText =
            "Scanning body posture";

        }

        if(progress > 45){

            aiFitStatus.innerText =
            "Generating perfect measurements";

        }

        if(progress > 70){

            aiFitStatus.innerText =
            "Finalizing tailoring profile";

        }

        if(progress >= 100){

            clearInterval(interval);

            document.querySelector(".fit-success")
            .style.display = "flex";

            setTimeout(() => {

                const currentParams =
                window.location.search;

                window.location.href =
                "product-customize.html" + currentParams;

            }, 2200);

        }

    }, 180);

}


// SIZE GUIDE BUTTON

const calculateBtn =
document.getElementById("startSizeAI");

if(calculateBtn){

    calculateBtn.addEventListener("click", () => {

        const upperBody =

document.querySelectorAll(".size-section")[0]
.querySelector(".active-body p")
?.innerText || "";

const lowerBody =

document.querySelectorAll(".size-section")[1]
.querySelector(".active-body p")
?.innerText || "";

const activeHeight =

document.querySelectorAll(".size-section")[2]
.querySelector(".active-number")
?.innerText || "";

const activeShirtSize =

document.querySelectorAll(".size-section")[3]
.querySelector(".active-number")
?.innerText || "";

const shoulderType =

document.querySelectorAll(".size-section")[4]
.querySelector(".active-body p")
?.innerText || "";

const preferredFit =

document.querySelectorAll(".size-section")[5]
.querySelector(".active-body p")
?.innerText || "";

const savedSizes = {

upperBody,

lowerBody,

height: activeHeight,

shirtSize: activeShirtSize,

shoulderType,

preferredFit

};

localStorage.setItem(
"royydSavedSizes",
JSON.stringify(savedSizes)
);

        const currentParams =
           window.location.search;

           window.location.href =
           "ai-fit-loading.html" + currentParams;

    });

}

// GUIDE POPUP

const guideButtons =
document.querySelectorAll(".open-guide");

const guidePopup =
document.querySelector(".guide-popup");

const closeGuide =
document.querySelector(".close-guide");

guideButtons.forEach((button) => {

    button.addEventListener("click", () => {

        guidePopup.style.display = "flex";

    });

});

if(closeGuide){

    closeGuide.addEventListener("click", () => {

        guidePopup.style.display = "none";

    });

}



// SIZE GUIDE ACTIVE STATES

const bodyCards =
document.querySelectorAll(".body-card");

bodyCards.forEach((card) => {

    card.addEventListener("click", () => {

        const parent =
        card.parentElement;

        parent.querySelectorAll(".body-card")
        .forEach((item) => {

            item.classList.remove("active-body");

        });

        card.classList.add("active-body");

    });

});


// NUMBER GRID ACTIVE

const numberBoxes =
document.querySelectorAll(".number-box");

numberBoxes.forEach((box) => {

    box.addEventListener("click", () => {

        const parent =
        box.parentElement;

        parent.querySelectorAll(".number-box")
        .forEach((item) => {

            item.classList.remove("active-number");

        });

        box.classList.add("active-number");

    });

});


// DYNAMIC PRODUCT DATA

const customizeButtons =
document.querySelectorAll(".customize-btn");

customizeButtons.forEach((button) => {

    button.addEventListener("click", () => {
        
        localStorage.removeItem("collarResult");

        localStorage.removeItem("cuffResult");

        localStorage.removeItem("sleeveResult");

        localStorage.removeItem("pocketResult");

        localStorage.removeItem("buttonResult");


        localStorage.setItem(
        "productTitle",
        button.dataset.title
        );

        localStorage.setItem(
        "productPrice",
        button.dataset.price
        );

        localStorage.setItem(
        "productImage",
        button.dataset.image
        );

        localStorage.setItem(
        "thumb1",
        button.dataset.thumb1
        );

        localStorage.setItem(
        "thumb2",
        button.dataset.thumb2
        );

        localStorage.setItem(
        "thumb3",
        button.dataset.thumb3
        );

    });

});

const savedTitle =
localStorage.getItem("productTitle");

const savedPrice =
localStorage.getItem("productPrice");

const savedImage =
localStorage.getItem("productImage");

const savedThumb1 =
localStorage.getItem("thumb1");

const savedThumb2 =
localStorage.getItem("thumb2");

const savedThumb3 =
localStorage.getItem("thumb3");

const productTitleElement =
document.getElementById("productTitle");

if(savedTitle && productTitleElement){

    productTitleElement.innerText = savedTitle;

}

const productPriceElement =
document.getElementById("productPrice");

if(savedPrice && productPriceElement){

    productPriceElement.innerText =
    "₹ " + savedPrice;

}

const summaryPrice =
document.getElementById("summaryPrice");

if(savedPrice && summaryPrice){

    summaryPrice.innerText =
    "₹ " + savedPrice;

}

const mainProductImageElement =
document.getElementById("mainProductImage");

if(savedImage && mainProductImageElement){

    mainProductImageElement.src = savedImage;

}

const thumb1Element =
document.getElementById("thumb1");

if(savedThumb1 && thumb1Element){

    thumb1Element.src = savedThumb1;

    thumb1Element.setAttribute(
    "data-image",
    savedThumb1
    );

}

const thumb2Element =
document.getElementById("thumb2");

if(savedThumb2 && thumb2Element){

    thumb2Element.src = savedThumb2;

    thumb2Element.setAttribute(
    "data-image",
    savedThumb2
    );

}

const thumb3Element =
document.getElementById("thumb3");

if(savedThumb3 && thumb3Element){

    thumb3Element.src = savedThumb3;

    thumb3Element.setAttribute(
    "data-image",
    savedThumb3
    );

}
// PASS PRODUCT DATA TO SIZE GUIDE

const sizeGuideBtn =
document.getElementById("sizeGuideBtn");

if(sizeGuideBtn){

    sizeGuideBtn.href =
    "size-guide.html" +
    window.location.search;

}

const sizeGuideBtn2 =
document.getElementById("sizeGuideBtn2");

if(sizeGuideBtn2){

    sizeGuideBtn2.href =
    "size-guide.html" +
    window.location.search;

}



const savedCollar =
localStorage.getItem("collarResult");

const collarResultElement =
document.getElementById("collarResult");

if(savedCollar && collarResultElement){

    collarResultElement.innerText =
    savedCollar;

}

const savedCuff =
localStorage.getItem("cuffResult");

const cuffResultElement =
document.getElementById("cuffResult");

if(savedCuff && cuffResultElement){

    cuffResultElement.innerText =
    savedCuff;

}

const savedSleeve =
localStorage.getItem("sleeveResult");

const sleeveResultElement =
document.getElementById("sleeveResult");

if(savedSleeve && sleeveResultElement){

    sleeveResultElement.innerText =
    savedSleeve;

}

const savedPocket =
localStorage.getItem("pocketResult");

const pocketResultElement =
document.getElementById("pocketResult");

if(savedPocket && pocketResultElement){

    pocketResultElement.innerText =
    savedPocket;

}

const savedButton =
localStorage.getItem("buttonResult");

const buttonResultElement =
document.getElementById("buttonResult");

if(savedButton && buttonResultElement){

    buttonResultElement.innerText =
    savedButton;

}


const cartButtons =
document.querySelectorAll('.cart-btn');

cartButtons.forEach((button) => {

button.addEventListener('click', () => {

const productCard =
button.closest('.product-card');

const activeSize =
productCard.querySelector('.size-btn.active-size');

if(!activeSize){

alert('Please Select Size');

return;

}

const product = {

title: button.dataset.title,

price: button.dataset.price,

image: button.dataset.image,

size: activeSize.innerText,

quantity: 1,

type: "Ready To Wear"

};

let cart =
JSON.parse(localStorage.getItem('royydCart')) || [];

const existingProduct =
cart.find((item) => {

return item.title === product.title
&& item.size === product.size
&& item.type === "Ready To Wear";

});

if(existingProduct){

existingProduct.quantity += 1;

}else{

cart.push(product);

}

localStorage.setItem(
'royydCart',
JSON.stringify(cart)
);

alert('Product Added To Cart');

});

});


const customCartBtn =
document.getElementById("customCartBtn");

if(customCartBtn){

customCartBtn.addEventListener("click", () => {

const customProduct = {

type: "Bespoke Custom",

title:
localStorage.getItem("productTitle"),

price:
localStorage.getItem("productPrice"),

image:
localStorage.getItem("productImage"),

collar:
localStorage.getItem("collarResult") || "—",

cuff:
localStorage.getItem("cuffResult") || "—",

sleeve:
localStorage.getItem("sleeveResult") || "—",

pocket:
localStorage.getItem("pocketResult") || "—",

buttons:
localStorage.getItem("buttonResult") || "—",

fit:
document.getElementById("fitResult")
?.innerText || "—",

quantity: 1

};

let cart =
JSON.parse(localStorage.getItem("royydCart")) || [];

cart.push(customProduct);

localStorage.setItem(
"royydCart",
JSON.stringify(cart)
);

alert("Custom Bespoke Product Added");

});

}



const sizeSelectors =
document.querySelectorAll('.size-selector');

sizeSelectors.forEach(selector => {

const buttons =
selector.querySelectorAll('.size-btn');

buttons.forEach(button => {

button.addEventListener('click', () => {

buttons.forEach(btn => {

btn.classList.remove('active-size');

});

button.classList.add('active-size');

const cartButton =
selector.parentElement.querySelector('.cart-btn');

cartButton.setAttribute(
'data-size',
button.innerText
);

});

});

});

const currentPage =
window.location.pathname
.split("/")
.pop();

const navLinks =
document.querySelectorAll(
".nav-links a"
);

navLinks.forEach((link) => {

const linkPage =
link.getAttribute("href");

if(linkPage === currentPage){

link.classList.add("active-nav");

}

});



const cartNavCount =
document.getElementById(
"cartNavCount"
);

const navbarCart =
JSON.parse(
localStorage.getItem("royydCart")
) || [];

if(cartNavCount){

if(navbarCart.length > 0){

cartNavCount.innerText =
`Cart (${navbarCart.length})`;

}else{

cartNavCount.innerText =
"Cart";

}

}

const accountNavLink =
document.getElementById(
"accountNavLink"
);

const currentUser =
JSON.parse(
localStorage.getItem(
"royydCurrentUser"
)
);

if(accountNavLink){

if(currentUser){

accountNavLink.innerText =
"Account";

accountNavLink.href =
"account.html";

}else{

accountNavLink.innerText =
"Login";

accountNavLink.href =
"login.html";

}

}
