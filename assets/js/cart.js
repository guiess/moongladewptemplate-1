//todo убрать последнее подчеркивание у тьоваров в корзине IT APPEARS THAT YOUR CART // IS CURRENTLY EMPTY!
//todo пустая корзина надо будет выводить текст котоырй дизайнеры придумали
//todo при инит выполнить проверку есть ли товары в корзине через локалстор и в зависимости от этого поменять .. data-toggle-popup="popup-cart .. через cartItemDOMElement.classList.add("..."); cartItemDOMElement.classList ...del... ("...");
//todo сделать в корзине поле инпут лиссенер для того, чтобы менять кол-во через это поле. пока не стал делать. добавил readonly

(function () {
  const cartDOMElement = document.querySelector(".js-cart");

  if (!cartDOMElement) {
    return;
  }

  const cart = JSON.parse(localStorage.getItem("cart")) || {}; //если значение в localStorage отсутствует - сохдаём новый пустой объект

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
    const cartItemInputPriceDOMElement = cartItemDOMElement.querySelector(
      ".js-cart-input-price"
    );
    const cartItemInputQuantityDOMElement = cartItemDOMElement.querySelector(
      ".js-cart-input-quantity"
    );

    cart[id].quantity = quantity;
    cartItemQuantityDOMElement.value = quantity;
    cartItemPriceDOMElement.textContent = "$ " + quantity * cart[id].price;
    cartItemInputPriceDOMElement.value = quantity * cart[id].price;
    cartItemInputQuantityDOMElement.value = quantity;

    updateCart();
  };

  const increaseQuantity = (id, quantity) => {
    const newQuantity = Number(cart[id].quantity) + Number(quantity);
    updateQuantity(id, newQuantity);
  };

  const decreaseQuantity = (id) => {
    const newQuantity = cart[id].quantity - 1;
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    }
  };

  const getProductData = (productDOMElement) => {
    const id = productDOMElement.getAttribute("data-product-id");

    const name = productDOMElement.getAttribute("data-product-name");
    const price = productDOMElement.getAttribute("data-product-price");
    const weight = productDOMElement.getAttribute("data-product-weight");
    const src = productDOMElement.getAttribute("data-product-src");
    const quantity = productDOMElement.querySelector("input").value;

    return { name, price, src, quantity, id, weight };
  };

  const cartItemsCounterDOMElement = document.querySelector(
    ".js-cart-total-count-items"
  );
  const cartItemsCounterCornerDOMElement = document.querySelector(
    ".js-cart-total-count-items-corner"
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
    //! скорее всего надо будет чикнуть инпута эти. их необходимо вставить на третьей странице оформления заказа
    const cartItemTemplate = `
    <div class="cart-popup__product border-b border-black-100">
      <div class="cart-product uppercase flex items-start">
        <div class="cart-product__visual overflow-hidden flex-shrink-0">
          <picture><img class="w-full max-w-full" src="${src}" alt="image description" /></picture>
        </div>
        <div class="flex-grow">
          <h4 class="cart-product__title laptop:w-8/12">${name}</h4>
           
            <input type="hidden" name="${id}-Product" value="${name}">
            <input class="js-cart-input-quantity" type="hidden" name="${id}-Quantity" value="${quantity}">
            <input class="js-cart-input-price" type="hidden" name="${id}-Price" value="${summitem}">
          <div class="cart-product__info-line flex justify-between items-baseline">
            <div class="cart-product__info-item">
              <span>$ ${price}</span><span class="opacity-50 weight js-cart-item-weight">(${weight}<span class="lowercase">gr</span>)</span>
            </div>
            <div class="cart-product__info-item"><span class="js-cart-item-price">$ ${summitem}</span></div>
          </div>
          <div class="flex justify-between items-center">
            <div class="cart-product__info-item">
              <div class="stepper" data-component="stepper" data-min="1" data-max="100" data-step="1">
                <div class="stepper__control stepper__control--decrease" data-decrement=""><i class="icon-minus js-btn-product-decrease-quantity"></i></div>
                <input class="stepper__input js-cart-item-quantity" type="number" data-input="" readonly value="${quantity}" />
                <div class="stepper__control stepper__control--increase" data-increment=""><i class="icon-plus js-btn-product-increase-quantity"></i></div>
              </div>
            </div>
            <div class="cart-product__info-item flex"><span class="link link--underline opacity-30 js-btn-cart-item-remove">remove</span></div>
          </div>
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

  const updateCartTotalPrice = () => {
    const totalPrice = Object.keys(cart).reduce((acc, id) => {
      const { quantity, price } = cart[id];
      return acc + price * quantity;
    }, 0);

    if (cartTotalPriceDOMElement) {
      cartTotalPriceDOMElement.textContent = "$ " + totalPrice;
    }

    if (cartTotalPriceInputDOMElement) {
      cartTotalPriceInputDOMElement.value = totalPrice;
    }
  };

  const updateCartTotalItemsCounter = () => { 
    const totalQuantity = Object.keys(cart).reduce((acc, id) => {
      const { quantity } = cart[id];
      return acc + Number(quantity);
    }, 0);

    if (cartItemsCounterDOMElement) {
      cartItemsCounterDOMElement.textContent = `YOUR CART (${totalQuantity})`;
      cartItemsCounterCornerDOMElement.textContent = totalQuantity;
    }

    return totalQuantity;
  };

  const updateCart = () => {
    const totalQuantity = updateCartTotalItemsCounter();
    updateCartTotalPrice();
    saveCart();

    itemWrapFull = document.getElementById("js-cart-wrapper-full");
    itemWrapEmpty = document.getElementById("js-cart-wrapper-empty");

    if (totalQuantity === 0) {
      //
      itemWrapFull.classList.add("is-empty");
      itemWrapEmpty.classList.remove("is-empty");
    } else {
      itemWrapFull.classList.remove("is-empty");
      itemWrapEmpty.classList.add("is-empty");
      //
    }
  };

  const deleteCartItem = (id) => {
    const cartItemDOMElement = cartDOMElement.querySelector(
      `[data-product-id="${id}"]`
    );

    cartDOMElement.removeChild(cartItemDOMElement);
    delete cart[id];
    updateCart();
  };

  const addCartItem = (data) => {
    const { id } = data; // const id = data.id;
    if (cart[id]) {
      increaseQuantity(id, data.quantity);
      return;
    }

    cart[id] = data;

    renderCartItem(data);

    updateCart();
  };

  const renderCart = () => {
    const ids = Object.keys(cart);

    ids.forEach((id) => renderCartItem(cart[id]));
  };

  const cartInit = () => {
    renderCart();
    updateCart();

    document.querySelector("body").addEventListener("click", (e) => {
      const target = e.target;

      if (target.classList.contains("js-btn-add-to-cart")) {
        e.preventDefault();
        const productDOMElement = target.closest(".js-product");

        const data = getProductData(productDOMElement);
        addCartItem(data);
      }

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
        e.preventDefault();
        const cartItemDOMElement = target.closest(".js-cart-item");
        const productID = cartItemDOMElement.getAttribute("data-product-id");
        decreaseQuantity(productID);
      }
      ///
      ///
      ///
    });
  };

  cartInit();
})();
