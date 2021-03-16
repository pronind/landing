var gallery = document.querySelector(".gallery-thumbs--js");
var iframe = document.querySelector(".iframe");
var allIframes = document.getElementsByTagName("iframe");
var iframesArray = Array.from(allIframes);
var allPrev = document.querySelectorAll(".video");
var prevArray = Array.from(allPrev);
var lastClicked = prevArray[0];

function addClass() {
    console.log("add");
    lastClicked.classList.remove("active");
    this.classList.add("active");
    lastClicked = this;

}


for (let i = 0; i < prevArray.length; i += 1) {

    prevArray[i].addEventListener("click", function stopVideo() {
        if (!prevArray[i].classList.contains("active")) {
            console.log("do");

            for (let i = 0; i < iframesArray.length; i += 1) {

                iframesArray[i].src = iframesArray[i].src;

            }

            console.log("add");
            lastClicked.classList.remove("active");
            this.classList.add("active");
            lastClicked = this;


        }

    })

}