const product = [
    {
        id: 0,
        image:'https://img.phonandroid.com/2021/05/galaxy-z-flip-3-4.jpg',
        title: 'Z FLIP FOLDABLE z',
        price: 120,
    },
    {
        id: 1,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ifJK4JaWYZK8dYqNYQHikfFBekarvpBq9Q&usqp=CAU',
        title: 'AIR PODS PHONES',
        price: 60,
    },
    {
        id: 2,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxlacdO-KEg-f6WGFYW3YlTVsqjv-Rtcp7wg&usqp=CAU',
        title: '250D DSLR CAMERA',
        price: 230,
    },
    {
        id: 3,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MWv8eA8StT55T1QjuyiKdQV_w27mfJJQBw&usqp=CAU',
        title: 'HEAD PHONES',
        price: 100,
    }
];
const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src= ${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>${price}.00</h2> ` +
        "<button onclick='addtocart(" + (i++) + ")' >add to cart</button>" +
        `</div>
       </div>`
    )
}).join('')

var cart = [];
function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart();
}

function displaycart(a) {
    let j = 0; total=0;
    document.getElementById("count").innerHTML=cart.length;
    if (cart.length == 0) {
        document.getElementById('cartitem').innerHTML = "your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+" .00";
    }
    else {
        document.getElementById("cartitem").innerHTML = cart.map((items) =>
         {
            var { image, title, price } = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+" .00";
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src= ${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>$ ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }
}