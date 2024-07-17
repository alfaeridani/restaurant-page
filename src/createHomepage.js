const createHomepage = (restaurantImage) => {
    const content = document.querySelector("#content");

    const title = document.createElement("h1");
    title.textContent = "Luscious Restaurant";

    const image = document.createElement("img");
    image.id = "restaurantImage";
    image.src = restaurantImage;

    const header = document.createElement("h2");
    header.textContent = "Savor Simplicity, Taste Perfection.";

    const paragraph = document.createElement("p");
    paragraph.textContent = "Our restaurant specializes in celebrating the beauty of simplicity in every dish we serve. From farm-fresh ingredients to expertly crafted flavors, each meal is a testament to our commitment to quality and taste. Whether you're craving a hearty brunch, a light lunch, or a sumptuous dinner, our menu offers something delightful for every palate. Join us and discover how simplicity can be the ultimate sophistication in dining."

    content.appendChild(title);
    content.appendChild(image);
    content.appendChild(header);
    content.appendChild(paragraph);
    }

export {createHomepage};