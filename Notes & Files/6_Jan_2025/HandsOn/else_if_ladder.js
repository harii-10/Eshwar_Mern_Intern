function emoji(input) {

    const emojiDiv = document.createElement("div");
    emojiDiv.style.fontSize = "300px"; 
    emojiDiv.style.textAlign = "center"; 
    emojiDiv.style.marginTop = "20px"; 

    if (input === "smile") {
        emojiDiv.innerHTML = "😊";
    } else if (input === "angry") {
        emojiDiv.innerHTML = "😡";
    } else if (input === "cry") {
        emojiDiv.innerHTML = "😭";
    } else if (input === "laugh") {
        emojiDiv.innerHTML = "😂";
    } else {
        emojiDiv.innerHTML = "Choose a correct one";
        emojiDiv.style.fontSize = "30px"; 
    }

    document.body.appendChild(emojiDiv);
}

var input = prompt("Enter Any expressions")
emoji(input)
