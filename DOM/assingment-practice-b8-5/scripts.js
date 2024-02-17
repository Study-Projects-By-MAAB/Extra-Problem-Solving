const productsContainer = document.getElementById('products-container')
const product = document.getElementsByClassName('product')
const totalPrice = document.getElementById('totalPrice')
const apply = document.getElementById('apply')
const inputCoupon = document.getElementById('inputCoupon')
const discount = document.getElementById('discount')
const total = document.getElementById('total')

for (const prdct of product) {
    prdct.addEventListener('click', function (e) {
        const productName = prdct.childNodes[3].childNodes[3].innerText;

        const productPriceText = prdct.childNodes[3].childNodes[5].childNodes[0].innerText;
        const productPrice = parseFloat(productPriceText)

        const li = document.createElement('li');
        li.innerText = productName
        const ol = document.getElementById('ol-list')
        ol.appendChild(li)


        let price = parseInt(totalPrice.innerText)
        // console.log(price);
        price = price + productPrice
        totalPrice.innerText = price
    })
}

apply.addEventListener('click', function () {
    const totalPriceValue = parseFloat(totalPrice.innerText)
    console.log(totalPriceValue);
    if (inputCoupon.value.toLowerCase() === 'sell200' && totalPriceValue >= 200) {
        const discountValue = totalPriceValue * 0.2
        discount.innerText = discountValue.toFixed(2)

        const discounted = totalPriceValue - discountValue
        total.innerText = discounted.toFixed(2)
        inputCoupon.value = ''
    }
    else {
        total.innerText = totalPriceValue
        discount.innerText = '0TK'
    }
})