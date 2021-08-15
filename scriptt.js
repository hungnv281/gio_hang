const sanpham = [
    {
        id: 0,
        name: "pepsi",
        soluong: 0,
        exchange_rate: 9500,
        img: "./images/nuoc-giai-khat-co-ga-pepsi-lon.jpeg",
      },
      {
        id: 1,
        name: "sprite",
        soluong: 0,
        exchange_rate: 8500,
        img: "./images/nuoc-giai-khat-co-gas-sprite-lon.jpeg",
      },
      {
        id: 2,
        name: "Fanta cam",
        soluong: 0,
        exchange_rate: 8100,
        img: "./images/nuoc-giai-khat-co-gas-fanta-cam-lon.jpeg",
      },
      {
        id: 3,
        name: "Fanta Xá Xị",
        soluong: 0,
        exchange_rate: 6900,
        img: "./images/nuoc-ngot-fanta-huong-xa-xi-chai-390ml.jpeg",
      },
      {
        id: 4,
        name: "7 up 1.5l",
        code: "DOGE",
        soluong: 0,
        exchange_rate: 16000,
        img: "./images/nuoc-ngot-co-gas-7-up-chai.jpeg",
      },
      {
        id: 5,
        name: "coca cola",
        soluong: 0,
        exchange_rate: 9500,
        img: "./images/nuoc-giai-khat-co-gas-coca-cola-light-sleek.jpeg",
      },
      {
        id: 6,
        name: "mirinda cam",
        soluong: 0,
        exchange_rate: 6900,
        img: "./images/nuoc-ngot-mirinda-huong-cam-chai-390ml.jpeg",
      },
      {
        id: 7,
        name: "moutain dew",
        soluong: 0,
        exchange_rate: 6900,
        img: "./images/nuoc-ngot-moutain-dew-chai-390ml.jpeg",
      },
];

let cart = [];

const renderCart = () =>{
    const cartItem = cart.map((product,index) => {
        return  `<tr class = "cart-item">
            <td> ${index+1}</td>
            <td> ${product.name}</td>         
            <td> <img src="${product.img}" alt=""></td>
            <td>
                <button class="minus" data-id="${index}">-</button>
                <input class="input" value="${product.soluong}" max="100" min="1" type="number" data-id="${index}">
                <button class="plus" data-id="${index}">+</button></td>
            <td id="tien${index}" > ${product.exchange_rate*product.soluong}</td>
            <td><button class="btnDelete">DELETE</button></td>
        </tr>`;
    })    
    const count = cart.reduce((total,product) => {
        return total + product.exchange_rate*product.soluong;
    },0)
    const total = `<p> tổng giá : ${count} đ</p>`;
    console.log(count);
    const html = cartItem.join('');
    const item = document.querySelector(".cart");
    item.innerHTML = `${html}+${total}`;
    const handleDelete = document.querySelectorAll(".cart-item .btnDelete");
    handleDelete.forEach((btn, index) => {
        btn.addEventListener("click",(event) => {
            cart.splice(index,1);
            renderCart();
        })
    })

    const handlePlus = document.querySelectorAll(".cart-item .plus");
    handlePlus.forEach((btn, index) => {
        const id = index;
        btn.addEventListener("click",(event) => {
            cart[event.target.dataset.id].soluong += 1;
            document.querySelector(`#tien${id}`).textContent = `${cart[id].exchange_rate*cart[id].soluong}`;
            renderCart();
        })
    })

    const handleMinus = document.querySelectorAll(".cart-item .minus");
    handleMinus.forEach((btn, index) => {
        const id = index;
        btn.addEventListener("click",(event) => {
            cart[event.target.dataset.id].soluong -= 1;
            document.querySelector(`#tien${id}`).textContent = `${cart[id].exchange_rate*cart[id].soluong}`;
            renderCart();
        })
    })

    const handleInput = document.querySelectorAll(".cart-item input");
    handleInput.forEach((inputValue,index) => {
        const id = index;
        inputValue.addEventListener("keyup",(event)=>{
            const currentValue = event.target.value;
            cart[id].soluong = currentValue;
            document.querySelector(`#tien${id}`).textContent = `${cart[id].exchange_rate*cart[id].soluong}`;
            // console.log(currentValue);
            // renderCart();
            // console.log(event.target.dataset.id);
        })
    })
}

var abc = () => {
        const renderSP = sanpham.map((product,index)=>{
        return `<tr class = "product-item">
            <td> ${index+1}</td>
            <td> ${product.name}</td>
            <td> <img src="${product.img}" alt=""></td>
            <td> ${product.exchange_rate}</td>
            <td><button>Buy</button></td>
        </tr>`;
        
    })

    const html = renderSP.join('');

    const product = document.querySelector(".product");
    console.log(product)
    product.innerHTML = html;
}


abc();

const handleClickBuy = document.querySelectorAll(".product-item button");
handleClickBuy.forEach((btn,index)=>{
    const indexItem = index; 
    const itemPush = sanpham[indexItem];
    btn.addEventListener("click",(event)=>{
        const find = cart.findIndex((item) => {
            return item.name === itemPush.name;
        });
        if (find === -1){
            itemPush.soluong++;
            cart.push(itemPush);
            renderCart();
        } 
        if (find !== -1){
            itemPush.soluong ++;
            renderCart();
        }
    })
})


localStorage.setItem('name','nguyen van hung')




