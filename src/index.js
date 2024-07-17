import { createContactPage } from "./createContactPage";
import { createHomepage } from "./createHomepage";
import { createMenuPage } from "./createMenuPage";
import restaurantImage from "./images/Barbieri_-_ViaSophia25668.jpg";
import "./style.css";

function removeContent() {
    const content = document.querySelector("#content");
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

function changePage(button) {
    switch (button.id) {
        case "home":
            createHomepage(restaurantImage);
            break;
        case "menu":
            createMenuPage();
            break;
        case "contact":
            createContactPage();
            break;
    };
}

function addButtonListener() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            removeContent();
            changePage(button);
        });
    });
}

createHomepage(restaurantImage);
addButtonListener();
