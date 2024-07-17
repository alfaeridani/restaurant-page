const createHeading = (type, text, myClass) => {
    const heading = document.createElement(type);
    heading.textContent = text;
    if (myClass) {
        heading.classList.add(myClass);
    }
    return heading;
}

const createContactPage = () => {
    const content = document.querySelector("#content");
    
    content.appendChild(createHeading("h1", "Contact Us", ""));
    
    const contacts = createHeading("div", "", "contacts");
    content.appendChild(contacts);

    const contact1 = createHeading("div", "", "contact");
    contacts.appendChild(contact1);
    contact1.appendChild(createHeading("h2", "Jane Doe", ""));
    contact1.appendChild(createHeading("p", "Manager", ""));
    contact1.appendChild(createHeading("p", "0812-3456-789", ""));
    contact1.appendChild(createHeading("p", "lunaticblue@kmail.com"));

    const contact2 = createHeading("div", "", "contact");
    contacts.appendChild(contact2);
    contact2.appendChild(createHeading("h2", "John Doe", ""));
    contact2.appendChild(createHeading("p", "Waiter", ""));
    contact2.appendChild(createHeading("p", "0812-5432-987", ""));
    contact2.appendChild(createHeading("p", "radicalpessimist@kmail.com"));
}

export {createContactPage};