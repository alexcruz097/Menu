const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "steak king",
        category: "dinner",
        price: 32.99,
        img: "./images/item-10.jpeg",
        desc: `steak fams dskfj x authenctic migas everyday carry microdosing. as everyday carry squid palo santo le`,
    },
];
// get all buttons
const buttons = [document.querySelector(".all"),
document.querySelector(".breakfast"),
document.querySelector(".lunch"),
document.querySelector(".shakes"),
document.querySelector(".dinner")];


const foodContainer = document.querySelector(".foodContainer");
const foods = document.querySelector(".food");



// show all the data from the array 
function makeElement() {

    menu.forEach(food => {
        foods.innerHTML += `
    <div class="foodContainer">
      <img src= ${food.img} alt="#">
      <h1 class="title">${food.title}</h1>
      <p class="price">$ ${food.price}</p>
  <hr>
      <p class="description">${food.desc}</p>
      </div>
      `
    });
}
function showSpecificElements(type) {

    menu.forEach(food => {
        if (food.category === type) {
            foods.innerHTML += `
            <div class="foodContainer">
            <img src= ${food.img} alt="#">
            <h1 class="title">${food.title}</h1>
            <p class="price">$ ${food.price}</p>
            
            <p class="description">${food.desc}</p>
            </div>
  `
        }

    });

}

makeElement()

// show the diffrent display
buttons.forEach((button) => {

    button.addEventListener("click", function (e) {
        if (e.currentTarget.className === "all") {
            foods.innerHTML = "";

            makeElement()
        }
        else if (e.currentTarget.className === "breakfast") {
            foods.innerHTML = "";
            showSpecificElements("breakfast");

        }
        else if ((e.currentTarget.className === "lunch")) {
            foods.innerHTML = "";
            showSpecificElements("lunch")
        }
        else if ((e.currentTarget.className === "shakes")) {
            foods.innerHTML = "";
            showSpecificElements("shakes")
        }
        else {
            foods.innerHTML = "";
            showSpecificElements("dinner")
        }
    })

});
