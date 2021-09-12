(function () {
  const cartDOMElement = document.querySelector(".js-cart");

  if (!cartDOMElement) {
    return;
  }

  const cart = JSON.parse(localStorage.getItem("cart"));
  const customer = JSON.parse(localStorage.getItem("customer")) || new Object();

  const updateQuantity = (id, quantity) => {
    const cartItemDOMElement = cartDOMElement.querySelector(
      `[data-product-id="${id}"]`
    );
    const cartItemQuantityDOMElement = cartItemDOMElement.querySelector(
      ".js-cart-item-quantity"
    );
    const cartItemPriceDOMElement = cartItemDOMElement.querySelector(
      ".js-cart-item-price"
    );
    const cartItemInputQuantityDOMElement = cartItemDOMElement.querySelector(
      ".js-cart-input-quantity"
    );

    cart[id].quantity = quantity;
    cartItemQuantityDOMElement.value = quantity;
    cartItemPriceDOMElement.textContent = "$ " + quantity * cart[id].price;

    updateCart();
  };

  const increaseQuantity = (id, quantity) => {
    const newQuantity = Number(cart[id].quantity) + Number(quantity);
    if (newQuantity <= 99) {
      updateQuantity(id, newQuantity);
    }
  };

  const decreaseQuantity = (id) => {
    const newQuantity = cart[id].quantity - 1;
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    }
  };

  const cartSubtotalPriceDOMElement = document.querySelector(
    ".js-cart-subtotal-price"
  );
  const cartTotalPriceDOMElement = document.querySelector(
    ".js-cart-total-price"
  );
  const cartTotalPriceInputDOMElement = document.querySelector(
    ".js-cart-total-price-input"
  );

  const renderCartItem = ({ id, name, src, price, quantity, weight }) => {
    const cartItemDOMElement = document.createElement("div");
    const summitem = price * quantity;

    const cartItemTemplate = `
      <div class="cart-product uppercase flex items-start">
        <div class="cart-product__visual overflow-hidden flex-shrink-0">
          <picture>
          <img class="w-full max-w-full transition-opacity duration-300 entered loaded" data-component="lazyload" data-animate="data-animate" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E" data-srcset="${src}" alt="image description" data-ll-status="loaded" srcset="${src}">
          </picture>
        </div>
        <div class="flex-grow">
          <h4 class="cart-product__title laptop:w-8/12">${name}</h4>
          <div class="cart-product__info-line flex justify-between items-baseline">
            <div class="cart-product__info-item">
              <span>$ ${price}</span><span class="opacity-50 weight">(${weight}<span class="uppercase">GR</span>)</span>
            </div>
            <div class="cart-product__info-item"><span class="js-cart-item-price">$ ${summitem}</span></div>
          </div>
          <div class="flex justify-between items-center">
            <div class="cart-product__info-item">
              <div class="stepper" data-component="stepper" data-min="1" data-max="99" data-step="1">
                <div class="stepper__control stepper__control--decrease" data-decrement=""><i class="icon-minus js-btn-product-decrease-quantity"></i></div>
                <input class="stepper__input js-cart-item-quantity" readonly type="number" data-input="" value="${quantity}" />
                <div class="stepper__control stepper__control--increase" data-increment=""><i class="icon-plus js-btn-product-increase-quantity"></i></div>
              </div>
            </div>
            <div class="cart-product__info-item flex"><span class="link link--underline opacity-30 js-btn-cart-item-remove"">remove</span></div>
          </div>
        </div>
      </div>
    `;

    cartItemDOMElement.innerHTML = cartItemTemplate;
    cartItemDOMElement.setAttribute("data-product-id", id);
    cartItemDOMElement.classList.add("js-cart-item");

    cartDOMElement.appendChild(cartItemDOMElement);
  };

  const saveCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart)); //преобразуем в строку JSON
  };

  const saveCustomer = () => {
    localStorage.setItem("customer", JSON.stringify(customer)); //преобразуем в строку JSON
  };

  const updateCartTotalPrice = () => {
    if (!cart) {
      return;
    }
    const totalPrice = Object.keys(cart).reduce((acc, id) => {
      const { quantity, price } = cart[id];
      return acc + price * quantity;
    }, 0);

    if (cartSubtotalPriceDOMElement) {
      cartSubtotalPriceDOMElement.textContent = "$ " + totalPrice;
    }
    //TODO тут должно добавиться - купон + доставка
    if (cartTotalPriceDOMElement) {
      cartTotalPriceDOMElement.textContent = "$ " + totalPrice;
    }

    if (cartTotalPriceInputDOMElement) {
      cartTotalPriceInputDOMElement.value = totalPrice;
    }
  };

  const updateCart = () => {
    updateCartTotalPrice();
    saveCart();

    itemWrapFull = document.getElementById("js-cart-wrapper-full");
    itemWrapEmpty = document.getElementById("js-cart-wrapper-empty");

    //! сделать пустую корзину
    // if (totalQuantity === 0) {
    //   //
    //   itemWrapFull.classList.add("is-empty");
    //   itemWrapEmpty.classList.remove("is-empty");
    // } else {
    //   itemWrapFull.classList.remove("is-empty");
    //   itemWrapEmpty.classList.add("is-empty");
    //   //
    // }
  };

  const countItemsInCart = () => {
    const count = Object.keys(cart).length;
    return count;
  };

  const deleteCartItem = (id) => {
    if (countItemsInCart() === 1) {
      return;
    }

    const cartItemDOMElement = cartDOMElement.querySelector(
      `[data-product-id="${id}"]`
    );

    cartDOMElement.removeChild(cartItemDOMElement);
    delete cart[id];
    updateCart();
  };

  const renderCart = () => {
    if (cart) {
      const ids = Object.keys(cart);
      ids.forEach((id) => renderCartItem(cart[id]));
    }
  };

  const saveDataCustomer = (customerForm) => {
    const email = customerForm.elements.customerShippingEmail.value;
    const address = customerForm.elements.customerShippingAddress.value;
    const shippingMethod =
      customerForm.elements.customerSelectShippingMethod.value;

    const typeOfCreditСard =
      customerForm.elements.customerSelectCreditСard.value;
    const nameOnCard = customerForm.customerNameOnCard.value;
    const cardExpiration = customerForm.customerCardExpiration.value;
    const cardSecurityCode = customerForm.customerCardSecurityCode.value;
    //!тут проверка на Remember me

    customer.shippingEmail = email;
    customer.shippingAddress = address;
    customer.shippingMethod = shippingMethod;

    customer.typeOfCreditСard = typeOfCreditСard;
    customer.nameOnCard = nameOnCard;
    customer.cardExpiration = cardExpiration;
    customer.cardSecurityCode = cardSecurityCode;

    saveCustomer();

    // location.href = "WPJS/checkout-payment";
  };

  const renderForm = () => {
    if (customer) {
      const customerForm = document.forms.customerinfo;

      customer.email
        ? (customerForm.customerShippingEmail.value = customer.email)
        : (customerForm.customerShippingEmail.value = "");

      customer.shippingAddress
        ? (customerForm.customerShippingAddress.value =
            customer.shippingAddress)
        : (customerForm.customerShippingAddress.value = "");

      customer.shippingMethod
        ? (customerForm.elements.customerSelectShippingMethod.value =
            customer.shippingMethod)
        : (customerForm.elements.customerSelectShippingMethod.value = "");
    }
  };

  const cartInit = () => {
    renderForm();
    renderCart();
    updateCart();

    document.querySelector("body").addEventListener("click", (e) => {
      const target = e.target;

      if (target.classList.contains("js-btn-cart-item-remove")) {
        e.preventDefault();
        const cartItemDOMElement = target.closest(".js-cart-item");
        const productID = cartItemDOMElement.getAttribute("data-product-id");
        deleteCartItem(productID);
      }

      if (target.classList.contains("js-btn-product-increase-quantity")) {
        e.preventDefault();
        const cartItemDOMElement = target.closest(".js-cart-item");
        const productID = cartItemDOMElement.getAttribute("data-product-id");
        increaseQuantity(productID, 1);
      }

      if (target.classList.contains("js-btn-product-decrease-quantity")) {
        // e.preventDefault();
        const cartItemDOMElement = target.closest(".js-cart-item");
        const productID = cartItemDOMElement.getAttribute("data-product-id");
        decreaseQuantity(productID);
      }

      if (target.classList.contains("js-btn-paynow")) {
        e.preventDefault();

        const customerForm = document.forms.customerinfo;

        if (!checkValidityOurFunc(customerForm)) {
          return;
        } else {
          saveDataCustomer(customerForm);
        }
      }
    });
  };

  cartInit();
})();

const checkValidityOurFunc = (customerForm) => {
  if (!customerForm.customerShippingEmail.checkValidity()) {
    alert("Please check your Email spelling");
    return;
  }

  if (!customerForm.customerShippingAddress.checkValidity()) {
    alert("Please check your Shipping Address spelling");
    return;
  }

  if (!customerForm.customerCardNumber.checkValidity()) {
    alert("Please check your Card Number spelling");
    return;
  }

  if (!customerForm.customerNameOnCard.checkValidity()) {
    alert("Please check your Name On Card spelling");
    return;
  }

  if (!customerForm.customerCardExpiration.checkValidity()) {
    alert("Please check your Card Expiration spelling");
    return;
  }

  if (!customerForm.customerCardSecurityCode.checkValidity()) {
    alert("Please check your Card Security Code spelling");
    return;
  }

  // if (!customerForm.customerInfoPhone.checkValidity()) {
  //   alert("Please check your Phone spelling");
  //   return;
  // }

  return true;
};
