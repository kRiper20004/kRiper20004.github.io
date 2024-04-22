const boxes = Array.from(document.querySelectorAll(".box"));

boxes.forEach((box) => {
    box.addEventListener("click",boxHandler);
});

function boxHandler(e) {
    e.preventDefault();
    let currentBox = e.target.closest(".box");
    let currentContent = e.target.nextElementSibling;
    currentBox.classList.toggle("active2");
    if (currentBox.classList.contains("active2")) {
        currentContent.style.maxHeight = currentContent.scrollHeight + "px";
        
    }
    else {
            currentContent.style.maxHeight = 0;
        }
}
