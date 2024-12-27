function home() {
    window.location.href = "index.html";
}

 let cart = [];
        let totalPrice = 0;

        function updateCart() {
            const cartContainer = document.getElementById('cart');
            const totalPriceSpan = document.getElementById('total-price');
            
            cartContainer.innerHTML = '';
            
            cart.forEach((item, index) => {
                const div = document.createElement('div');
                div.className = 'cart-item';
                div.innerHTML = `
                    ${item.name} - $${item.price}
                    <button onclick="removeItem(${index})">Remove</button>
                `;
                cartContainer.appendChild(div);
            });
            
            totalPriceSpan.textContent = totalPrice;
        }
        
        function removeItem(index) {
            totalPrice -= cart[index].price; 
            cart.splice(index, 1);
            updateCart(); 
        }
        document.querySelectorAll('.buy-now').forEach(button => {
            button.addEventListener('click', function() {
                const price = parseFloat(this.dataset.price);
                const name = this.dataset.name;
                cart.push({ name, price });
                totalPrice += price;
                alert(`${name} has been added to your cart!`);
                updateCart();
            });
        });



