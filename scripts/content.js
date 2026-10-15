let duckImages = [
    chrome.runtime.getURL("public/images/1.webp"),
    chrome.runtime.getURL("public/images/2.webp"),
    chrome.runtime.getURL("public/images/3.webp"),
    chrome.runtime.getURL("public/images/4.webp"),
    chrome.runtime.getURL("public/images/5.webp"),
    chrome.runtime.getURL("public/images/6.webp"),
    chrome.runtime.getURL("public/images/7.webp"),
    chrome.runtime.getURL("public/images/8.webp"),
    chrome.runtime.getURL("public/images/9.webp"),
    chrome.runtime.getURL("public/images/10.webp"),
    chrome.runtime.getURL("public/images/11.webp"),
    chrome.runtime.getURL("public/images/12.webp"),
    chrome.runtime.getURL("public/images/13.webp"),
    chrome.runtime.getURL("public/images/14.webp"),
    chrome.runtime.getURL("public/images/15.webp"),
    chrome.runtime.getURL("public/images/16.webp"),
    chrome.runtime.getURL("public/images/17.webp"),
    chrome.runtime.getURL("public/images/18.webp"),
    chrome.runtime.getURL("public/images/19.webp"),
    chrome.runtime.getURL("public/images/20.webp"),
    chrome.runtime.getURL("public/images/21.webp"),
    chrome.runtime.getURL("public/images/22.webp"),
    chrome.runtime.getURL("public/images/23.webp"),
    chrome.runtime.getURL("public/images/24.webp"),
    chrome.runtime.getURL("public/images/25.webp"),
    chrome.runtime.getURL("public/images/26.webp"),
    chrome.runtime.getURL("public/images/27.webp"),
    chrome.runtime.getURL("public/images/28.webp"),
    chrome.runtime.getURL("public/images/29.webp"),
    chrome.runtime.getURL("public/images/30.webp"),
    chrome.runtime.getURL("public/images/31.webp"),
    chrome.runtime.getURL("public/images/32.webp"),
    chrome.runtime.getURL("public/images/33.webp"),
    chrome.runtime.getURL("public/images/34.webp"),
    chrome.runtime.getURL("public/images/35.webp"),  
    chrome.runtime.getURL("public/images/36.webp"),
    chrome.runtime.getURL("public/images/37.webp"),
    chrome.runtime.getURL("public/images/38.webp"),
    chrome.runtime.getURL("public/images/39.webp"),
    chrome.runtime.getURL("public/images/40.webp"),
    chrome.runtime.getURL("public/images/41.webp"),
    chrome.runtime.getURL("public/images/42.webp"),
    chrome.runtime.getURL("public/images/43.webp"),
    chrome.runtime.getURL("public/images/44.webp"),
    chrome.runtime.getURL("public/images/45.webp"),
    chrome.runtime.getURL("public/images/46.webp"),
    chrome.runtime.getURL("public/images/47.webp"),
    chrome.runtime.getURL("public/images/48.webp"),
    chrome.runtime.getURL("public/images/49.webp"),
];


function cambiarImagenesYUP() {
    const imgs = document.querySelectorAll("img, yt-image, ytd-thumbnail");

    for (const image of imgs) {
        if (image.dataset.swapped === "true") continue;

        const randomDuck = duckImages[Math.floor(Math.random() * duckImages.length)];
        
        if (image.tagName === 'IMG') {
            image.src = randomDuck;
            image.srcset = randomDuck;
        } else {
            image.style.backgroundImage = `url("${randomDuck}")`;
            image.style.backgroundSize = "cover";
            image.style.backgroundPosition = "center";
        }
        image.dataset.swapped = "true";
    }
}

const observer = new MutationObserver((mutations) => {
    cambiarImagenesYUP();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
cambiarImagenesYUP();
