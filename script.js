const products = [
    {
        id: 1,
        name: "Laptop",
        price: 899,
        image: "https://via.placeholder.com/250",
        description: "Powerful laptop for work and study."
    },
    {
        id: 2,
        name: "Phone",
        price: 599,
        image: "https://via.placeholder.com/250",
        description: "Modern smartphone with great camera."
    },
    {
        id: 3,
        name: "Headphones",
        price: 99,
        image: "https://via.placeholder.com/250",
        description: "Wireless headphones."
    },
    {
        id: 4,
        name: "Keyboard",
        price: 49,
        image: "https://via.placeholder.com/250",
        description: "Mechanical keyboard."
    },
    {
        id: 5,
        name: "Mouse",
        price: 29,
        image: "https://via.placeholder.com/250",
        description: "Wireless mouse."
    },
    {
        id: 6,
        name: "Monitor",
        price: 249,
        image: "https://via.placeholder.com/250",
        description: "24-inch Full HD monitor."
    }
];

function addToCart(id){

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(id);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert("Product added to cart");
}

function removeFromCart(index){

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index,1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    location.reload();
}

const productsContainer =
document.getElementById("productsContainer");

if(productsContainer){

    products.forEach(product=>{

        productsContainer.innerHTML += `
            <div class="product-card">
                <img src="${product.image}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>

                <a href="product.html?id=${product.id}">
                    View Details
                </a>

                <br>

                <button onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `;
    });
}

const details =
document.getElementById("productDetails");

if(details){

    const params =
    new URLSearchParams(window.location.search);

    const id =
    Number(params.get("id"));

    const product =
    products.find(p => p.id === id);

    if(product){

        details.innerHTML = `
            <div class="product-card">
                <img src="${product.image}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>$${product.price}</p>

                <button onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `;
    }
}

const cartContainer =
document.getElementById("cartContainer");

if(cartContainer){

    const cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    if(cart.length === 0){

        cartContainer.innerHTML =
        "<p>Cart is empty.</p>";

    } else {

        cart.forEach((id,index)=>{

            const product =
            products.find(p => p.id === id);

            cartContainer.innerHTML += `
                <div class="product-card">
                    <h3>${product.name}</h3>
                    <p>$${product.price}</p>

                    <button onclick="removeFromCart(${index})">
                        Remove
                    </button>
                </div>
            `;
        });
    }
}

const form =
document.getElementById("contactForm");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const name =
        document.getElementById("name").value.trim();

        const email =
        document.getElementById("email").value.trim();

        const message =
        document.getElementById("message").value.trim();

        const result =
        document.getElementById("formMessage");

        if(
            name === "" ||
            email === "" ||
            message === ""
        ){
            result.textContent =
            "Please fill all fields.";
            return;
        }

        result.textContent =
        "Message sent successfully.";

        form.reset();
    });
}