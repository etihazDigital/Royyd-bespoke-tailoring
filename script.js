const menuToggle =
    document.getElementById("menu-toggle");

const navMenu =
    document.getElementById("nav-menu");

if (menuToggle && navMenu) {

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

        localStorage.setItem(
            "selectedSize",
            button.innerText
        );

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

        //mainImage.src = previewImage;

        const type =
            card.getAttribute("data-type");

        const name =
            card.getAttribute("data-name");

        if (type === "collar") {

            const collarResult =
                document.getElementById("collarResult");

            if (collarResult) {
                collarResult.innerText = name;
            }

            localStorage.setItem(
                "collarResult",
                name
            );

        }


        if (type === "cuff") {

            const cuffResult =
                document.getElementById("cuffResult");

            if (cuffResult) {
                cuffResult.innerText = name;
            }

            localStorage.setItem(
                "cuffResult",
                name
            );

        }

        if (type === "sleeve") {

            const sleeveResult =
                document.getElementById("sleeveResult");

            if (sleeveResult) {
                sleeveResult.innerText = name;
            }

            localStorage.setItem(
                "sleeveResult",
                name
            );

        }

        if (type === "pocket") {

            const pocketResult =
                document.getElementById("pocketResult");

            if (pocketResult) {
                pocketResult.innerText = name;
            }

            localStorage.setItem(
                "pocketResult",
                name
            );

        }

        if (type === "button") {

            const buttonResult =
                document.getElementById("buttonResult");

            if (buttonResult) {
                buttonResult.innerText = name;
            }

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

        localStorage.setItem(
            "selectedFit",
            button.innerText
        );

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

        if (currentValue > 1) {

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

if (generateFitBtn) {

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

            if (progress > 10) {
                aiFitStatus.innerText =
                    "Initializing ROYYD Precision Engine";
            }

            if (progress > 25) {
                aiFitStatus.innerText =
                    "Scanning Body Geometry";
            }

            if (progress > 40) {
                aiFitStatus.innerText =
                    "Analyzing Posture & Proportions";
            }

            if (progress > 55) {
                aiFitStatus.innerText =
                    "Calculating Bespoke Measurements";
            }

            if (progress > 70) {
                aiFitStatus.innerText =
                    "Building Your Tailoring Blueprint";
            }

            if (progress > 85) {
                aiFitStatus.innerText =
                    "Creating Your Signature Fit Profile";
            }

            if (progress > 95) {
                aiFitStatus.innerText =
                    "Finalizing Luxury Garment Specifications";
            }

            if (progress >= 100) {

                clearInterval(interval);

                overlayStatus.innerText =
                    "Measurements Generated";

                setTimeout(() => {

                    aiOverlay.classList.remove("active-overlay");

                    document.querySelector(".fit-result")
                        .classList.add("show-result");

                    document.querySelector(".fit-result")
                        .scrollIntoView({
                            behavior: "smooth"
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

if (aiFitFill) {

    let progress = 0;

    const interval = setInterval(() => {

        progress += 5;

        aiFitFill.style.width =
            progress + "%";

        aiFitPercent.innerText =
            progress + "%";

        // STATUS

        if (progress > 20) {

            aiFitStatus.innerText =
                "Scanning body posture";

        }

        if (progress > 45) {

            aiFitStatus.innerText =
                "Generating perfect measurements";

        }

        if (progress > 70) {

            aiFitStatus.innerText =
                "Finalizing tailoring profile";

        }

        if (progress >= 100) {

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

if (calculateBtn) {

    calculateBtn.addEventListener("click", () => {

        const upperBody =
            document.getElementById("upperBodySection")
                ?.querySelector(".active-body p")
                ?.innerText || "";

        const hipShape =
            document.getElementById("shirtHipSection")
                ?.querySelector(".active-body p")
                ?.innerText || "";

        const activeHeight =
            document.getElementById("heightSection")
                ?.querySelector(".active-number")
                ?.innerText || "";

        const activeShirtSize =
            document.getElementById("shirtSizeSection")
                ?.querySelector(".active-number")
                ?.innerText || "";

        const shoulderType =
            document.getElementById("shoulderSection")
                ?.querySelector(".active-body p")
                ?.innerText || "";

        const preferredFit =
            document.getElementById("preferredFitSection")
                ?.querySelector(".active-body p")
                ?.innerText || "";

        const activeTrouserWaist =
            document.getElementById("trouserSizeSection")
                ?.querySelector(".active-number")
                ?.innerText || "";

        const activeTrouserLength =
            document.getElementById("trouserLengthSection")
                ?.querySelector(".active-number")
                ?.innerText || "";

        const activeHipFit =
            document.getElementById("hipFitSection")
                ?.querySelector(".active-body p")
                ?.innerText || "";

        const activeThighFit =
            document.getElementById("thighFitSection")
                ?.querySelector(".active-body p")
                ?.innerText || "";

        const sizeType =
            localStorage.getItem("productSizeType");


        if (sizeType === "shirt") {

            if (
                !upperBody ||
                !hipShape ||
                !activeHeight ||
                !activeShirtSize ||
                !shoulderType ||
                !preferredFit
            ) {

                alert(
                    "Please complete all size questions."
                );

                console.log("VALIDATION STOPPED");

                return;
            }

        }

        const savedSizes = {

            upperBody,

            hipShape,

            height: activeHeight,

            shirtSize: activeShirtSize,

            shoulderType,

            preferredFit,

            trouserWaist: activeTrouserWaist,

            trouserLength: activeTrouserLength,

            hipFit: activeHipFit,

            thighFit: activeThighFit

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

if (closeGuide) {

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

// PRODUCT DATABASE

const productDatabase = {

    "Royal Linen Shirt": {
        fabric: "Premium Linen",
        weight: "180 GSM",
        origin: "Italy",
        description: "...",

        gallery: [
            "https://i.postimg.cc/8cgGjrfY/download-9.jpg",
            "https://i.postimg.cc/8cgGjrfY/download-9.jpg",
            "https://i.postimg.cc/8cgGjrfY/download-9.jpg",
            "https://i.postimg.cc/8cgGjrfY/download-9.jpg"
        ]
    },

    "Executive White Shirt": {
        fabric: "Egyptian Cotton",
        weight: "140 GSM",
        origin: "Egypt",
        description: "Timeless white shirt tailored for business and formal wear."
    },

    "Noble Straight Trouser": {
        fabric: "Wool Blend",
        weight: "260 GSM",
        origin: "Italy",
        description: "Straight-fit trouser designed for comfort and refinement."
    },

    "Premium Pleated Trouser": {
        fabric: "Italian Wool",
        weight: "280 GSM",
        origin: "Italy",
        description: "Luxury pleated trouser with elegant drape."
    }

};


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
            "productCategory",
            button.dataset.category
        );

        localStorage.setItem(
            "productSizeType",
            button.dataset.sizeType
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

const currentProduct =
    productDatabase[savedTitle] || {};




if (currentProduct) {

    const fabricName =
        document.getElementById("fabricName");

    const fabricWeight =
        document.getElementById("fabricWeight");

    const fabricOrigin =
        document.getElementById("fabricOrigin");

    const fabricDescription =
        document.getElementById("fabricDescription");

    if (fabricName) {

        fabricName.innerText =
            currentProduct.fabric || "Premium Fabric";

    }

    if (fabricWeight) {

        fabricWeight.innerText =
            currentProduct.weight || "Luxury Weight";

    }

    if (fabricOrigin) {

        fabricOrigin.innerText =
            currentProduct.origin || "Imported";

    }

    if (fabricDescription) {

        fabricDescription.innerText =
            currentProduct.description ||
            "Crafted using premium luxury fabrics with exceptional tailoring standards.";

    }

}

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

if (savedTitle && productTitleElement) {

    productTitleElement.innerText = savedTitle;

}

const productPriceElement =
    document.getElementById("productPrice");

if (savedPrice && productPriceElement) {

    productPriceElement.innerText =
        "₹ " + savedPrice;

}

const summaryPrice =
    document.getElementById("summaryPrice");

if (savedPrice && summaryPrice) {

    summaryPrice.innerText =
        "₹ " + savedPrice;

}

const mainProductImageElement =
    document.getElementById("mainProductImage");

if (mainProductImageElement) {

    mainProductImageElement.src =
        savedImage;

}

const thumb1Element =
    document.getElementById("thumb1");

const thumb2Element =
    document.getElementById("thumb2");

const thumb3Element =
    document.getElementById("thumb3");

if (thumb1Element) {
    thumb1Element.src =
        savedThumb1 || savedImage;

    thumb1Element.setAttribute(
        "data-image",
        savedThumb1 || savedImage
    );
}

if (thumb2Element) {
    thumb2Element.src =
        savedThumb2 || savedImage;

    thumb2Element.setAttribute(
        "data-image",
        savedThumb2 || savedImage
    );
}

if (thumb3Element) {
    thumb3Element.src =
        savedThumb3 || savedImage;

    thumb3Element.setAttribute(
        "data-image",
        savedThumb3 || savedImage
    );
}

// PASS PRODUCT DATA TO SIZE GUIDE

const sizeGuideBtn =
    document.getElementById("sizeGuideBtn");

if (sizeGuideBtn) {

    sizeGuideBtn.href =
        "size-guide.html" +
        window.location.search;

}

const sizeGuideBtn2 =
    document.getElementById("sizeGuideBtn2");

if (sizeGuideBtn2) {

    sizeGuideBtn2.href =
        "size-guide.html" +
        window.location.search;

}



const savedCollar =
    localStorage.getItem("collarResult");

const collarResultElement =
    document.getElementById("collarResult");

if (savedCollar && collarResultElement) {

    collarResultElement.innerText =
        savedCollar;

}

const savedCuff =
    localStorage.getItem("cuffResult");

const cuffResultElement =
    document.getElementById("cuffResult");

if (savedCuff && cuffResultElement) {

    cuffResultElement.innerText =
        savedCuff;

}

const savedSleeve =
    localStorage.getItem("sleeveResult");

const sleeveResultElement =
    document.getElementById("sleeveResult");

if (savedSleeve && sleeveResultElement) {

    sleeveResultElement.innerText =
        savedSleeve;

}

const savedPocket =
    localStorage.getItem("pocketResult");

const pocketResultElement =
    document.getElementById("pocketResult");

if (savedPocket && pocketResultElement) {

    pocketResultElement.innerText =
        savedPocket;

}

const savedButton =
    localStorage.getItem("buttonResult");

const buttonResultElement =
    document.getElementById("buttonResult");

if (savedButton && buttonResultElement) {

    buttonResultElement.innerText =
        savedButton;

}


const savedSizes =
    JSON.parse(
        localStorage.getItem("royydSavedSizes")
    );

if (savedSizes) {

    const upperBodyResult =
        document.getElementById("upperBodyResult");

    if (upperBodyResult) {

        upperBodyResult.innerText =
            savedSizes.upperBody || "—";

    }

    const hipShapeResult =
        document.getElementById("hipShapeResult");

    if (hipShapeResult) {

        hipShapeResult.innerText =
            savedSizes.hipShape || "—";

    }

    const heightResult =
        document.getElementById("heightResult");

    if (heightResult) {

        heightResult.innerText =
            savedSizes.height || "—";

    }

    const shirtSizeResult =
        document.getElementById("shirtSizeResult");

    if (shirtSizeResult) {

        shirtSizeResult.innerText =
            savedSizes.shirtSize || "—";

    }

    const shoulderResult =
        document.getElementById("shoulderResult");

    if (shoulderResult) {

        shoulderResult.innerText =
            savedSizes.shoulderType || "—";

    }

    const fitResult =
        document.getElementById("fitResult");

    if (fitResult) {

        fitResult.innerText =
            savedSizes.preferredFit || "—";

    }

    const trouserWaistResult =
        document.getElementById("trouserWaistResult");

    if (trouserWaistResult) {

        trouserWaistResult.innerText =
            savedSizes.trouserWaist || "—";

    }

    const trouserLengthResult =
        document.getElementById("trouserLengthResult");

    if (trouserLengthResult) {

        trouserLengthResult.innerText =
            savedSizes.trouserLength || "—";

    }

    const hipFitResult =
        document.getElementById("hipFitResult");

    if (hipFitResult) {

        hipFitResult.innerText =
            savedSizes.hipFit || "—";

    }

    const thighFitResult =
        document.getElementById("thighFitResult");

    if (thighFitResult) {

        thighFitResult.innerText =
            savedSizes.thighFit || "—";

    }

}


const cartButtons =
    document.querySelectorAll('.cart-btn');

cartButtons.forEach((button) => {

    button.addEventListener('click', () => {

        const productCard =
            button.closest('.product-card');

        const activeSize =
            productCard.querySelector('.size-btn.active-size');

        if (!activeSize) {

            alert('Please Select Size');

            return;

        }

        const product = {

            title: button.dataset.title,

            price: button.dataset.price,

            image: button.dataset.image,

            size: activeSize.innerText,

            quantity: 1,

            type: button.dataset.category

        };

        let cart =
            JSON.parse(localStorage.getItem('royydCart')) || [];

        const existingProduct =
            cart.find((item) => {

                return item.title === product.title
                    && item.size === product.size
                    && item.type === "Ready To Wear";

            });

        if (existingProduct) {

            existingProduct.quantity += 1;

        } else {

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

if (customCartBtn) {

    customCartBtn.addEventListener("click", () => {

        const savedSizes =
            JSON.parse(
                localStorage.getItem("royydSavedSizes")
            ) || {};

        const customProduct = {

            type: "Bespoke Custom",

            sizeType:
                localStorage.getItem("productSizeType"),

            title:
                localStorage.getItem("productTitle"),

            price:
                localStorage.getItem("productPrice"),

            image:
                localStorage.getItem("productImage"),

            size:
                localStorage.getItem("selectedSize") || "Custom",

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

            pleat:
                localStorage.getItem("pleatResult") || "—",

            waist:
                localStorage.getItem("waistResult") || "—",

            bottom:
                localStorage.getItem("bottomResult") || "—",

            lapel:
                localStorage.getItem("lapelResult") || "—",

            configuration:
                localStorage.getItem("configurationResult") || "—",

            vent:
                localStorage.getItem("ventResult") || "—",

            fit:
                savedSizes.preferredFit || "—",

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

    if (linkPage === currentPage) {

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

if (cartNavCount) {

    if (navbarCart.length > 0) {

        cartNavCount.innerText =
            `Cart (${navbarCart.length})`;

    } else {

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

if (accountNavLink) {

    if (currentUser) {

        accountNavLink.innerText =
            "Account";

        accountNavLink.href =
            "account.html";

    } else {

        accountNavLink.innerText =
            "Login";

        accountNavLink.href =
            "login.html";

    }

}

const savedSizeType =
    localStorage.getItem("productSizeType");

const customizationTitle =
    document.getElementById("customizationTitle");

if (customizationTitle) {

    if (savedSizeType === "shirt") {

        customizationTitle.innerText =
            "Customize Your Shirt";

    }

    if (savedSizeType === "trouser") {

        customizationTitle.innerText =
            "Customize Your Trouser";

    }

    const productCategory =
        localStorage.getItem("productCategory");

    if (savedSizeType === "full") {

        if (productCategory === "royyd-edit") {

            customizationTitle.innerText =
                "Customize Your ROYYD Edit";

        } else {

            customizationTitle.innerText =
                "Customize Your Suit";

        }

    }

}

const shirtHipSection =
    document.getElementById("shirtHipSection");

const shirtSizeSection =
    document.getElementById("shirtSizeSection");

const trouserSizeSection =
    document.getElementById("trouserSizeSection");

const trouserLengthSection =
    document.getElementById("trouserLengthSection");

const hipFitSection =
    document.getElementById("hipFitSection");

const thighFitSection =
    document.getElementById("thighFitSection");


const collarSection =
    document.getElementById("collarSection");

const cuffSection =
    document.getElementById("cuffSection");

const sleeveSection =
    document.getElementById("sleeveSection");

const pocketSection =
    document.getElementById("pocketSection");

const buttonSection =
    document.getElementById("buttonSection");

const pleatSection =
    document.getElementById("pleatSection");

const waistSection =
    document.getElementById("waistSection");

const bottomSection =
    document.getElementById("bottomSection");

const lapelSection =
    document.getElementById("lapelSection");

const configurationSection =
    document.getElementById("configurationSection");

const ventSection =
    document.getElementById("ventSection");





// CUSTOMIZATION DRAWER DYNAMIC

if (savedSizeType === "trouser") {

    if (collarSection) {
        collarSection.style.display = "none";
    }

    if (cuffSection) {
        cuffSection.style.display = "none";
    }

    if (sleeveSection) {
        sleeveSection.style.display = "none";
    }

    if (buttonSection) {
        buttonSection.style.display = "none";
    }



}

if (savedSizeType === "full") {

    if (collarSection) {
        collarSection.style.display = "none";
    }

    if (cuffSection) {
        cuffSection.style.display = "none";
    }

    if (sleeveSection) {
        sleeveSection.style.display = "none";
    }

}


// SHIRT

if (savedSizeType === "shirt") {

    if (trouserSizeSection) {

        trouserSizeSection.style.display =
            "none";

    }

    if (trouserLengthSection) {

        trouserLengthSection.style.display =
            "none";

    }

    if (hipFitSection) {

        hipFitSection.style.display =
            "none";

    }

    if (thighFitSection) {

        thighFitSection.style.display =
            "none";

    }

}


// TROUSER

if (savedSizeType === "trouser") {

    if (shirtSizeSection) {

        shirtSizeSection.style.display =
            "none";

    }

    const upperBodySection =
        document.getElementById("upperBodySection");

    if (upperBodySection) {

        upperBodySection.style.display =
            "none";

    }

    const shoulderSection =
        document.getElementById("shoulderSection");

    if (shoulderSection) {

        shoulderSection.style.display =
            "none";

    }

    const preferredFitSection =
        document.getElementById("preferredFitSection");

    if (preferredFitSection) {

        preferredFitSection.style.display =
            "none";

    }



}



// SHIRT DRAWER

if (savedSizeType === "shirt") {

    if (pleatSection) pleatSection.style.display = "none";
    if (waistSection) waistSection.style.display = "none";
    if (bottomSection) bottomSection.style.display = "none";

    if (lapelSection) lapelSection.style.display = "none";
    if (configurationSection) configurationSection.style.display = "none";
    if (ventSection) ventSection.style.display = "none";

}


// TROUSER DRAWER

if (savedSizeType === "trouser") {

    if (lapelSection) lapelSection.style.display = "none";
    if (configurationSection) configurationSection.style.display = "none";
    if (ventSection) ventSection.style.display = "none";

}


// SUIT / BLAZER DRAWER

if (savedSizeType === "full") {

    if (collarSection) collarSection.style.display = "none";
    if (cuffSection) cuffSection.style.display = "none";
    if (sleeveSection) sleeveSection.style.display = "none";
    if (buttonSection) buttonSection.style.display = "none";

    if (pleatSection) pleatSection.style.display = "none";
    if (waistSection) waistSection.style.display = "none";
    if (bottomSection) bottomSection.style.display = "none";

}

const upperBodySummary =
    document.getElementById("upperBodySummary");

const shoulderSummary =
    document.getElementById("shoulderSummary");

const fitSummary =
    document.getElementById("fitSummary");

const shirtSizeSummary =
    document.getElementById("shirtSizeSummary");

const trouserWaistSummary =
    document.getElementById("trouserWaistSummary");

const trouserLengthSummary =
    document.getElementById("trouserLengthSummary");

const hipFitSummary =
    document.getElementById("hipFitSummary");

const thighFitSummary =
    document.getElementById("thighFitSummary");

const collarSummary =
    document.getElementById("collarSummary");

const cuffSummary =
    document.getElementById("cuffSummary");

const sleeveSummary =
    document.getElementById("sleeveSummary");

const pocketSummary =
    document.getElementById("pocketSummary");

const buttonSummary =
    document.getElementById("buttonSummary");

// TROUSER SUMMARY

if (savedSizeType === "trouser") {

    if (upperBodySummary) {

        upperBodySummary.style.display =
            "none";

    }

    if (shoulderSummary) {

        shoulderSummary.style.display =
            "none";

    }

    if (fitSummary) {

        fitSummary.style.display =
            "none";

    }

    if (shirtSizeSummary) {

        shirtSizeSummary.style.display =
            "none";

    }

    if (collarSummary) {

        collarSummary.style.display =
            "none";

    }

    if (cuffSummary) {

        cuffSummary.style.display =
            "none";

    }

    if (sleeveSummary) {

        sleeveSummary.style.display =
            "none";

    }

    if (pocketSummary) {

        pocketSummary.style.display =
            "none";

    }

    if (buttonSummary) {

        buttonSummary.style.display =
            "none";

    }

}


// SHIRT SUMMARY

if (savedSizeType === "shirt") {

    if (trouserWaistSummary) {

        trouserWaistSummary.style.display =
            "none";

    }

    if (trouserLengthSummary) {

        trouserLengthSummary.style.display =
            "none";

    }

    if (hipFitSummary) {

        hipFitSummary.style.display =
            "none";

    }

    if (thighFitSummary) {

        thighFitSummary.style.display =
            "none";

    }

}

const openCustomizer =
    document.getElementById("openCustomizer");

const closeCustomizer =
    document.getElementById("closeCustomizer");

const customizerDrawer =
    document.getElementById("customizerDrawer");

if (openCustomizer) {

    openCustomizer.addEventListener("click", () => {

        customizerDrawer.classList.add("active");

    });

}

if (closeCustomizer) {

    closeCustomizer.addEventListener("click", () => {

        customizerDrawer.classList.remove("active");

    });

}


const saveDesignBtn =
    document.getElementById("saveDesignBtn");

if (saveDesignBtn) {

    saveDesignBtn.addEventListener("click", () => {

        const collar =
            document.querySelector('[data-type="collar"].active-style');

        const cuff =
            document.querySelector('[data-type="cuff"].active-style');

        const sleeve =
            document.querySelector('[data-type="sleeve"].active-style');

        const pocket =
            document.querySelector('[data-type="pocket"].active-style');

        const button =
            document.querySelector('[data-type="button"].active-style');

        const sizeType =
            localStorage.getItem("productSizeType");

        if (sizeType === "shirt") {

            if (
                !collar ||
                !cuff ||
                !sleeve ||
                !pocket ||
                !button
            ) {

                alert(
                    "Please select all customization options."
                );

                return;
            }

        }


        const pleat =
            document.querySelector('[data-type="pleat"].active-style');

        const waist =
            document.querySelector('[data-type="Waist"].active-style');

        const bottom =
            document.querySelector('[data-type="bottom"].active-style');

        if (sizeType === "trouser") {

            if (
                !pocket ||
                !pleat ||
                !waist ||
                !bottom
            ) {

                alert(
                    "Please select all customization options."
                );

                return;
            }

        }


        const lapel =
            document.querySelector('[data-type="lapel"].active-style');

        const configuration =
            document.querySelector('[data-type="configuration"].active-style');

        const vent =
            document.querySelector('[data-type="vent"].active-style');

        if (sizeType === "full") {

            if (
                !pocket ||
                !lapel ||
                !configuration ||
                !vent
            ) {

                alert(
                    "Please select all customization options."
                );

                return;
            }

        }

        localStorage.setItem(
            "collarResult",
            collar ? collar.dataset.name : "Not Selected"
        );

        localStorage.setItem(
            "cuffResult",
            cuff ? cuff.dataset.name : "Not Selected"
        );

        localStorage.setItem(
            "sleeveResult",
            sleeve ? sleeve.dataset.name : "Not Selected"
        );

        localStorage.setItem(
            "pocketResult",
            pocket ? pocket.dataset.name : "Not Selected"
        );

        localStorage.setItem(
            "buttonResult",
            button ? button.dataset.name : "Not Selected"
        );

        localStorage.setItem(
            "pleatResult",
            pleat ? pleat.dataset.name : "Not Selected"
        );

        localStorage.setItem(
            "waistResult",
            waist ? waist.dataset.name : "Not Selected"
        );

        localStorage.setItem(
            "bottomResult",
            bottom ? bottom.dataset.name : "Not Selected"
        );

        localStorage.setItem(
            "lapelResult",
            lapel ? lapel.dataset.name : "Not Selected"
        );

        localStorage.setItem(
            "configurationResult",
            configuration ? configuration.dataset.name : "Not Selected"
        );

        localStorage.setItem(
            "ventResult",
            vent ? vent.dataset.name : "Not Selected"
        );

        document
            .getElementById("customizerDrawer")
            .classList.remove("active");

        console.log("Customization Saved");

    });

}


const accordionHeaders =
    document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {

    header.addEventListener('click', () => {

        const content =
            header.nextElementSibling;

        const icon =
            header.querySelector('span');

        if (content.style.display === 'block') {

            content.style.display = 'none';

            icon.innerText = '+';

        } else {

            content.style.display = 'block';

            icon.innerText = '−';

        }

    });

});

document.querySelectorAll(".home-product").forEach((card) => {

    card.addEventListener("click", () => {

        localStorage.setItem(
            "productCategory",
            card.dataset.category
        );

        localStorage.setItem(
            "productSizeType",
            card.dataset.sizeType
        );

        localStorage.setItem(
            "productTitle",
            card.dataset.title
        );

        localStorage.setItem(
            "productPrice",
            card.dataset.price
        );

        localStorage.setItem(
            "productImage",
            card.dataset.image
        );

        localStorage.setItem(
            "thumb1",
            card.dataset.image
        );

        localStorage.setItem(
            "thumb2",
            card.dataset.image
        );

        localStorage.setItem(
            "thumb3",
            card.dataset.image
        );

        window.location.href =
            "product-customize.html";

    });

});

const completeLookSlider =
    document.getElementById("completeLookSlider");

if (completeLookSlider) {

    const productCategory =
        localStorage.getItem("productCategory");

    let relatedProducts = [];

    // SHIRT → SHOW TROUSERS + SUITS

    if (productCategory === "shirt") {

        relatedProducts = [

            {
                title: "Noble Straight Trouser",
                price: "3990",
                image: "https://i.postimg.cc/7ZYvPHqh/IMG-20260505-WA0032.jpg",
                category: "trouser",
                sizeType: "trouser"
            },

            {
                title: "Heritage Pleated Trouser",
                price: "4290",
                image: "https://i.postimg.cc/G2Lhb5VX/b59354aa1292776a993eadd2628050d2.jpg",
                category: "trouser",
                sizeType: "trouser"
            },

            {
                title: "Premium Pleated Trouser",
                price: "3990",
                image: "https://i.postimg.cc/t4C0Rq9Y/IMG-20260505-WA0031.jpg",
                category: "trouser",
                sizeType: "trouser"
            },

            {
                title: "Royal Pleated Trousers",
                price: "3490",
                image: "https://i.postimg.cc/029TLv7z/web-tailor-sufi-5.jpg",
                category: "trouser",
                sizeType: "trouser"
            },

            {
                title: "Midnight Royal Suit",
                price: "8990",
                image: "https://i.postimg.cc/cLv1hbcd/Custom-White-Two-Piece-Suit-Formal-Wedding-Outfit-groom-outfit.jpg",
                category: "suit",
                sizeType: "full"
            },

            {
                title: "Italian Double Breasted Suit",
                price: "10990",
                image: "https://i.postimg.cc/8z7k40b1/Luxury-Tweed-Double-Breasted-Suit-Slim-Fit-Elegant-Formal-Wear.jpg",
                category: "suit",
                sizeType: "full"
            },

            {
                title: "Executive Navy Blazer",
                price: "6990",
                image: "https://i.postimg.cc/0QY0S00t/Mens-navy-blue-pinstripe-double-breasted-blazer-with-white-pants-Custom-tailored-wedding-outfit.jpg",
                category: "royyd-edit",
                sizeType: "full"
            },

            {
                title: "Signature Navy Blazer",
                price: "7990",
                image: "https://i.postimg.cc/43hCckHq/b19546c3a348365051c80978ba2bb66f.jpg",
                category: "royyd-edit",
                sizeType: "full"
            }

        ];

    }

    // TROUSER → SHOW SHIRTS + SUITS

    if (productCategory === "trouser") {

        relatedProducts = [

            {
                title: "Royal Linen Shirt",
                price: "3490",
                image: "https://i.postimg.cc/8cgGjrfY/download-(9).jpg",
                category: "shirt",
                sizeType: "shirt"
            },

            {
                title: "Classic Oxford Shirt",
                price: "3490",
                image: "https://i.postimg.cc/W4JRZLqY/4d703c0ffa139481e12e379f0d14d213.jpg",
                category: "shirt",
                sizeType: "shirt"
            },

            {
                title: "Executive White Shirt",
                price: "3490",
                image: "https://i.postimg.cc/hG7FmWQ7/5713554e5f26e1d286810da1fae39f64.jpg",
                category: "shirt",
                sizeType: "shirt"
            },

            {
                title: "Summer Linen Shirt",
                price: "3490",
                image: "https://i.postimg.cc/7LTvz8J1/77c80727994ef4567d36898f7f3b2c0b.jpg",
                category: "shirt",
                sizeType: "shirt"
            },

            {
                title: "Midnight Royal Suit",
                price: "8490",
                image: "https://i.postimg.cc/cLv1hbcd/Custom-White-Two-Piece-Suit-Formal-Wedding-Outfit-groom-outfit.jpg",
                category: "suit",
                sizeType: "full"
            },

            {
                title: "Italian Double Breasted Suit",
                price: "9490",
                image: "https://i.postimg.cc/8z7k40b1/Luxury-Tweed-Double-Breasted-Suit-Slim-Fit-Elegant-Formal-Wear.jpg",
                category: "suit",
                sizeType: "full"
            },

            {
                title: "Executive Navy Blazer",
                price: "7490",
                image: "https://i.postimg.cc/0QY0S00t/Mens-navy-blue-pinstripe-double-breasted-blazer-with-white-pants-Custom-tailored-wedding-outfit.jpg",
                category: "royyd-edit",
                sizeType: "full"
            },

            {
                title: "Luxury Evening Jacket",
                price: "7490",
                image: "https://i.postimg.cc/tgV06QnM/55cd904c2b935d2af3180755948caa18.jpg",
                category: "royyd-edit",
                sizeType: "full"
            }

        ];
    }

    // SUIT → SHOW SHIRTS + TROUSERS

    if (
        productCategory === "suit" ||
        productCategory === "royyd-edit"
    ) {

        relatedProducts = [

            {
                title: "Royal Linen Shirt",
                price: "3490",
                image: "https://i.postimg.cc/8cgGjrfY/download-(9).jpg",
                category: "shirt",
                sizeType: "shirt"
            },

            {
                title: "Classic Oxford Shirt",
                price: "3490",
                image: "https://i.postimg.cc/W4JRZLqY/4d703c0ffa139481e12e379f0d14d213.jpg",
                category: "shirt",
                sizeType: "shirt"
            },

            {
                title: "Executive White Shirt",
                price: "3490",
                image: "https://i.postimg.cc/hG7FmWQ7/5713554e5f26e1d286810da1fae39f64.jpg",
                category: "shirt",
                sizeType: "shirt"
            },

            {
                title: "Summer Linen Shirt",
                price: "3490",
                image: "https://i.postimg.cc/7LTvz8J1/77c80727994ef4567d36898f7f3b2c0b.jpg",
                category: "shirt",
                sizeType: "shirt"
            },

            {
                title: "Noble Straight Trouser",
                price: "3490",
                image: "https://i.postimg.cc/7ZYvPHqh/IMG-20260505-WA0032.jpg",
                category: "trouser",
                sizeType: "trouser"
            },

            {
                title: "Heritage Pleated Trouser",
                price: "3490",
                image: "https://i.postimg.cc/G2Lhb5VX/b59354aa1292776a993eadd2628050d2.jpg",
                category: "trouser",
                sizeType: "trouser"
            },

            {
                title: "Premium Pleated Trouser",
                price: "3490",
                image: "https://i.postimg.cc/t4C0Rq9Y/IMG-20260505-WA0031.jpg",
                category: "trouser",
                sizeType: "trouser"
            },

            {
                title: "Royal Pleated Trousers",
                price: "3490",
                image: "https://i.postimg.cc/029TLv7z/web-tailor-sufi-5.jpg",
                category: "trouser",
                sizeType: "trouser"
            }

        ];
    }

    relatedProducts.forEach((product) => {

        completeLookSlider.innerHTML += `

    <div class="look-card related-product"

        data-category="${product.category}"
        data-size-type="${product.sizeType}"

        data-title="${product.title}"
        data-price="${product.price}"

        data-image="${product.image}">

        <img src="${product.image}">

        <h4>${product.title}</h4>

        <p>₹ ${product.price}</p>

    </div>

    `;

    });

    document.addEventListener("click", (e) => {

        const card =
            e.target.closest(".related-product");

        if (!card) return;

        localStorage.setItem(
            "productCategory",
            card.dataset.category
        );

        localStorage.setItem(
            "productSizeType",
            card.dataset.sizeType
        );

        localStorage.setItem(
            "productTitle",
            card.dataset.title
        );

        localStorage.setItem(
            "productPrice",
            card.dataset.price
        );

        localStorage.setItem(
            "productImage",
            card.dataset.image
        );

        localStorage.setItem(
            "thumb1",
            card.dataset.image
        );

        localStorage.setItem(
            "thumb2",
            card.dataset.image
        );

        localStorage.setItem(
            "thumb3",
            card.dataset.image
        );

        window.location.href =
            "product-customize.html";

    });

}

const youMayLikeSlider =
    document.getElementById("youMayLikeSlider");

if (youMayLikeSlider) {

    const products = [

        {
            title: "Royal Linen Shirt",
            price: "3490",
            image: "https://i.postimg.cc/8cgGjrfY/download-(9).jpg",
            category: "shirt",
            sizeType: "shirt"
        },

        {
            title: "Executive White Shirt",
            price: "3490",
            image: "https://i.postimg.cc/hG7FmWQ7/5713554e5f26e1d286810da1fae39f64.jpg",
            category: "shirt",
            sizeType: "shirt"
        },

        {
            title: "Noble Straight Trouser",
            price: "3490",
            image: "https://i.postimg.cc/7ZYvPHqh/IMG-20260505-WA0032.jpg",
            category: "trouser",
            sizeType: "trouser"
        },

        {
            title: "Premium Pleated Trouser",
            price: "3490",
            image: "https://i.postimg.cc/t4C0Rq9Y/IMG-20260505-WA0031.jpg",
            category: "trouser",
            sizeType: "trouser"
        },

        {
            title: "Midnight Royal Suit",
            price: "8490",
            image: "https://i.postimg.cc/cLv1hbcd/Custom-White-Two-Piece-Suit-Formal-Wedding-Outfit-groom-outfit.jpg",
            category: "suit",
            sizeType: "full"
        },

        {
            title: "Italian Double Breasted Suit",
            price: "9490",
            image: "https://i.postimg.cc/8z7k40b1/Luxury-Tweed-Double-Breasted-Suit-Slim-Fit-Elegant-Formal-Wear.jpg",
            category: "suit",
            sizeType: "full"
        },

        {
            title: "Executive Navy Blazer",
            price: "7490",
            image: "https://i.postimg.cc/0QY0S00t/Mens-navy-blue-pinstripe-double-breasted-blazer-with-white-pants-Custom-tailored-wedding-outfit.jpg",
            category: "royyd-edit",
            sizeType: "full"
        },

        {
            title: "Luxury Evening Jacket",
            price: "7490",
            image: "https://i.postimg.cc/tgV06QnM/55cd904c2b935d2af3180755948caa18.jpg",
            category: "royyd-edit",
            sizeType: "full"
        }

    ];

    products.forEach((product) => {

        youMayLikeSlider.innerHTML += `

        <div class="look-card related-product"

            data-category="${product.category}"
            data-size-type="${product.sizeType}"

            data-title="${product.title}"
            data-price="${product.price}"

            data-image="${product.image}">

            <img src="${product.image}">

            <h4>${product.title}</h4>

            <p>₹ ${product.price}</p>

            <a class="mini-customize">
            Customize →
        </a>

        </div>

        `;

    });

}

document.querySelectorAll(".faq-question").forEach((question) => {

    question.addEventListener("click", () => {

        const answer =
            question.nextElementSibling;

        const icon =
            question.querySelector("span");

        if (answer.style.display === "block") {

            answer.style.display = "none";

            icon.innerText = "+";

        }

        else {

            answer.style.display = "block";

            icon.innerText = "−";

        }

    });

});