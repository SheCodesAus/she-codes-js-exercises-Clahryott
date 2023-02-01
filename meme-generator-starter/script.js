function getImage() {
    let imageURL = document.getElementById("image-url").value;
    //console.log(imageURL);

// "meme-image" id
let imageBox = document.createElement("img");
imageBox.id = "meme-image";
imageBox.src = imageURL;

// append "meme-image-wrapper"
let wrapper = document.getElementById("meme-image-wrapper");
wrapper.appendChild(imageBox);

document.getElementById("meme-builder").style.display = "block";
}

function addTopText() {
    let TopText = document.getElementById("top-text-input").value;
    document.getElementById("top-text").innerText = TopText;
}