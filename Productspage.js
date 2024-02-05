const product = [
    {
        id: 0,
        image: 'image/PizzaChicken.png',
        title: 'Pizza Chicken',
        price: 100,
    },
    {
        id: 1,
        image: 'image/Pizza4cheese.png',
        title: 'Pizza 4cheese',
        price: 90,
    },
    {
        id: 2,
        image: 'image/BlinelecuCiuperci.png',
        title: 'Blinele cu ciuperci',
        price: 230,
    },
    {
        id: 3,
        image: 'image/aa-1.jpg',
        title: 'Headphones',
        price: 100,
    },
    {
        id: 4,
        image: 'image/bb-1.jpg',
        title: 'Audio Microphone',
        price: 230,
    },
    {
        id: 5,
        image: 'image/cc-1.jpg',
        title: 'Smart Watch',
        price: 100,
    },
    {
        id: 6,
        image: 'image/PizzaChicken.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 100,
    },
    {
        id: 7,
        image: 'image/cc-3.jpg',
        title: 'Air Pods Pro',
        price: 60,
    },
    {
        id: 8,
        image: 'image/ee-3.jpg',
        title: '250D DSLR Camera',
        price: 230,
    },
    {
        id: 9,
        image: 'image/aa-1.jpg',
        title: 'Headphones',
        price: 100,
    },
    {
        id: 10,
        image: 'image/bb-1.jpg',
        title: 'Audio Microphone',
        price: 230,
    },
    {
        id: 11,
        image: 'image/cc-1.jpg',
        title: 'Smart Watch',
        price: 100,
    },
];

const categories = [...new Set(product.map((item) => { return item }))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
});

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { image, title, price } = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
                <div class='bottom'>
                    <p>${title}</p>
                    <h2> ${price}.00 lei</h2>
                <button>Add to cart</button>
                </div>
            </div>`
        )
    }).join('')
};
displayItem(categories);

/*click popup and close popup */

const boxes = document.querySelectorAll('.box');
const popup = document.querySelector('.popup');
const x = document.querySelector('.popup .close h1');
var topic = document.querySelector('.topic h1');
var title = document.querySelectorAll('.box p');

boxes.forEach(box => {
    box.addEventListener('click', () =>{
    popup.classList.add('showpop');
    topic.innerHTML = title.innerHTML;
    });
    x.addEventListener('click', () =>{
    popup.classList.remove('showpop');
    });
});

