const listImage1 = [{
    url: "./images/esports/1500x1080_KV_AMD_STAR1.png",
    name: "MAJA - Theo đuổi ước mơ",
}, ];
const listImage2 = [{
    url: "./images/img4.jpg",
    name: "Comptoir - Mùa hè bỏng cháy",
}, ];
const listImage3 = [{
        url: "./images/esports/KV-SHOWMATCH_INTEL_2022.jpg",
        name: "MAJA - Theo đuổi ước mơ",
    },
    {
        url: "./images/esports/KV_ASUS_WR_PHONE61.png",
        name: "MAJA - Theo đuổi ước mơ",
    },
    {
        url: "./images/esports/KV_DIY.jpg",
        name: "MAJA - Theo đuổi ước mơ",
    },
    {
        url: "./images/others/mockupposm.jpg",
        name: "MAJA - Theo đuổi ước mơ",
    },
    {
        url: "./images/others/stationary_mockup.jpg",
        name: "MAJA - Theo đuổi ước mơ",
    },
];

window.onload = () => {
    const imageSlide1 = document.getElementById("imageSlide1");
    const imageSlide2 = document.getElementById("imageSlide2");
    const imageSlide3 = document.getElementById("imageSlide3");

    listImage1.forEach((img) => {
        const imageContainer = document.createElement("div");
        imageContainer.className =
            "w-full flex justify-start items-start flex-col mb-24";
        imageContainer.innerHTML = `<img class="w-full" src="${img.url}" alt=""><span class="text-xl my-2">${img.name}</span>`;
        imageContainer.setAttribute("data-aos", "fade-up");
        imageContainer.setAttribute("data-aos-duration", "600");
        imageContainer.setAttribute("data-aos-easing", "ease-in-sine");
        imageSlide1.appendChild(imageContainer);
    });

    listImage2.forEach((img) => {
        const imageContainer = document.createElement("div");
        imageContainer.className =
            "w-full flex justify-start items-start flex-col mb-24 cursor-pointer";
        imageContainer.innerHTML = `<img class="w-full" src="${img.url}" alt=""><span class="text-xl my-2">${img.name}</span>`;
        imageContainer.setAttribute("data-aos", "fade-up");
        imageContainer.setAttribute("data-aos-duration", "600");
        imageContainer.setAttribute("data-aos-easing", "ease-in-sine");

        imageContainer.addEventListener("click", (e) => {
            toggleVideoView();
        });
        imageSlide2.appendChild(imageContainer);
    });

    listImage3.forEach((img) => {
        const imageContainer = document.createElement("div");
        imageContainer.className =
            "w-full flex justify-start items-start flex-col mb-24 cursor-pointer";
        imageContainer.innerHTML = `<img class="w-full" src="${img.url}" alt=""><span class="text-xl my-2">${img.name}</span>`;
        imageContainer.setAttribute("data-aos", "fade-up");
        imageContainer.setAttribute("data-aos-duration", "1000");
        imageContainer.setAttribute("data-aos-delay", "300");
        imageContainer.setAttribute("data-aos-offset", "0");
        imageContainer.setAttribute("data-aos-easing", "ease-in-sine");


        imageContainer.addEventListener("click", (e) => {
            toggleVideoView();
        });
        imageSlide3.appendChild(imageContainer);
    });
};
let isVideoViewOpen = false;

function toggleVideoView(imageObject = null) {
    // const mainWindow = document.getElementById("mainContainer");
    // const videoViewContainer = document.getElementById("videoViewContainer");
    // isVideoViewOpen = !isVideoViewOpen;
    // if (isVideoViewOpen) {
    //     mainWindow.classList.add("hidden");
    //     videoViewContainer.classList.remove("hidden");
    // } else {
    //     mainWindow.classList.remove("hidden");
    //     videoViewContainer.classList.add("hidden");
    // }
}
let isTop = true;

addEventListener("scroll", (event) => {
    var scrollHeightOffset =
        window.pageYOffset || document.documentElement.scrollTop;
    if (scrollHeightOffset >= 40) {
        if (isTop) {
            nextText();
            isTop = false;
        }
    } else {
        if (!isTop) {
            backText();
            isTop = true;
        }
    }
});

function nextText() {
    const text1 = document.getElementById("textOriginalLine1");
    const text2 = document.getElementById("textOriginalLine2");

    text1.style.transform = "translateX(-150%)";
    text2.style.transform = "translateX(-150%)";
}

function backText() {
    const text1 = document.getElementById("textOriginalLine1");
    const text2 = document.getElementById("textOriginalLine2");

    text1.style.transform = "translateX(0%)";
    text2.style.transform = "translateX(0%)";
}