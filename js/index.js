const carouselContainer = document.querySelector(".carousel__track-container");
if (carouselContainer)
    var swiper = new Swiper(".carousel__track-container", {
        slidesPerView: 3,
        spaceBetween: 42,
        slidesPerGroup: 3,
        loop: true,
        centerSlide: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            520: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            950: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
        },
    });

const credit = document.querySelector("#credit-card");
if (credit)
    credit.addEventListener("click", function (e) {
        // console.log("first");
        const creditInputs = document.querySelector("#credit-inputs");
        // creditInputs.classList.toggle("hidden");
    });

const creditInputs = document.querySelector("#credit-inputs");
const payment = document.querySelector(".subscription__checkout-pay__button");
const price = document.querySelector(".subscription__checkout-new_price");
payment.innerText = `Pay ${price.innerText.slice(0, -3)} AED`;

creditInputs.classList.remove("hidden");

const navMenu = document.querySelector(".nav__menu");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");

if (navMenu)
    navMenu.addEventListener("click", function (e) {
        // console.log("first");
        mobileMenu.classList.remove("hidden");
        overlay.classList.remove("hidden");
    });

if (overlay)
    overlay.addEventListener("click", function (e) {
        mobileMenu.classList.add("hidden");
        overlay.classList.add("hidden");
    });
