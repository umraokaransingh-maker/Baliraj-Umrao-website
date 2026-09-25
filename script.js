function openImage(imageSrc) {
    const popup = document.createElement("div");

    popup.className = "image-popup";

    popup.innerHTML = `
        <span class="close-popup">&times;</span>
        <img src="${imageSrc}" alt="बलिराज उमराव">
    `;

    document.body.appendChild(popup);

    popup.querySelector(".close-popup").onclick = function () {
        popup.remove();
    };

    popup.onclick = function (event) {
        if (event.target === popup) {
            popup.remove();
        }
    };
}