const createHeading = (type, text) => {
    const heading = document.createElement(type);
    heading.textContent = text;
    return heading;
}

const createDiv = (myClass) => {
    const div = document.createElement("div");
    div.classList.add(myClass);
    return div;
}

const createMenuPage = () => {
    const content = document.querySelector("#content");
    content.appendChild(createHeading("h1", "Menu"));

    const menus = createDiv("menus");
    content.appendChild(menus);

    const mainDish = createDiv("menu");
    menus.appendChild(mainDish);
    mainDish.appendChild(createHeading("h2", "Main Dishes"));
    mainDish.appendChild(createHeading("h3", "Nasi goreng"));
    mainDish.appendChild(createHeading("p", "A fragrant and flavorful Indonesian fried rice, loaded with rich spices and succulent pieces of meat."));
    mainDish.appendChild(createHeading("h3", "Mie goreng"));
    mainDish.appendChild(createHeading("p", "Savory stir-fried noodles, bursting with vibrant vegetables and tender morsels of meat, perfect for any meal."));
    mainDish.appendChild(createHeading("h3", "Bakso"));
    mainDish.appendChild(createHeading("p", "Juicy and tender meatballs swimming in a savory broth, an irresistible comfort food."));
    mainDish.appendChild(createHeading("h3", "Kwetiau"));
    mainDish.appendChild(createHeading("p", "Delightfully chewy rice noodles stir-fried with fresh veggies and savory meat in a rich, flavorful sauce."));

    const sideDish = createDiv("menu");
    menus.appendChild(sideDish);
    sideDish.appendChild(createHeading("h2", "Side Dishes"));
    sideDish.appendChild(createHeading("h3", "Dimsum"));
    sideDish.appendChild(createHeading("p", "Steamed to perfection, these delicate dumplings are filled with a savory blend of meats and spices."));
    sideDish.appendChild(createHeading("h3", "Tempe goreng"));
    sideDish.appendChild(createHeading("p", "Crispy fried tempeh, offering a crunchy texture and a nutty, savory flavor."));
    sideDish.appendChild(createHeading("h3", "Tahu goreng"));
    sideDish.appendChild(createHeading("p", "Golden fried tofu, crispy on the outside and soft on the inside, paired with a tangy dipping sauce."));
    sideDish.appendChild(createHeading("h3", "Risol"));
    sideDish.appendChild(createHeading("p", "Crispy pastry rolls stuffed with a delicious mix of meats and vegetables, fried to golden perfection."));

    const beverages = createDiv("menu");
    menus.appendChild(beverages);
    beverages.appendChild(createHeading("h2", "Beverages"));
    beverages.appendChild(createHeading("h3", "Water"));
    beverages.appendChild(createHeading("p", "Refreshing and pure, the perfect thirst-quencher for any meal."));
    beverages.appendChild(createHeading("h3", "Sweet tea"));
    beverages.appendChild(createHeading("p", "Iced tea sweetened to perfection, offering a refreshing and delightful sip."));
    beverages.appendChild(createHeading("h3", "Lemon tea"));
    beverages.appendChild(createHeading("p", "A tangy and refreshing blend of tea and fresh lemon, perfect for cooling off."));
    beverages.appendChild(createHeading("h3", "Avocado juice"));
    beverages.appendChild(createHeading("p", "Creamy and luscious avocado blended into a smooth, velvety drink that's both nutritious and delicious."));
}

export {createMenuPage};