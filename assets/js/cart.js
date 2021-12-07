(function () {
  const cartDOMElement = document.querySelector(".js-cart");

  if (!cartDOMElement) {
    return;
  }

  let totalQuantity;

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

    cart[id].quantity = quantity;
    cartItemQuantityDOMElement.value = quantity;
    cartItemPriceDOMElement.textContent = "$ " + quantity * cart[id].price;

    updateCart();
  };

  const increaseQuantity = (id, quantity) => {
    const newQuantity = Number(cart[id].quantity) + Number(quantity);

    if (newQuantity <= 99) {
      updateQuantity(id, newQuantity);
    } else updateQuantity(id, 99);
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

  const renderCartItem = ({ id, name, src, price, quantity, weight }) => {
    const cartItemDOMElement = document.createElement("div");
    const summitem = price * quantity;

    const cartItemTemplate = `
                    <div class="cart-item">
                    <a href=""><figure class="bg-cover js-btn-item-info" style="background-image: url(${src});"></figure></a>
                      <div class="cart-item-content">
                        <a class="name js-btn-item-info" href="">${name}</a>
                        <div class="cart-item-price-weight">
                          <p><span class="price js-cart-item-price">$ ${price}</span> <span class="weight">(${weight}gr)</span></p>
                          <p class="total-price">$ ${summitem}</p>
                        </div>
                        <div class="btn-wrap">
                          <div class="counter">
                            <button class="minus js-btn-product-decrease-quantity">-</button>
                            <input type="number" class="js-cart-item-quantity" value="${quantity}" min="1" max="99" readonly>
                            <button class="plus js-btn-product-increase-quantity">+</button>
                          </div>
                          <button class="btn-remove js-btn-cart-item-remove">Remove</button>
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
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const updateCartTotalPrice = () => {
    const totalPrice = Object.keys(cart).reduce((acc, id) => {
      const { quantity, price } = cart[id];
      return acc + price * quantity;
    }, 0);

    if (cartTotalPriceDOMElement) {
      cartTotalPriceDOMElement.textContent = "$ " + totalPrice;
    }
  };

  const updateCartTotalItemsCounter = () => {
    totalQuantity = Object.keys(cart).reduce((acc, id) => {
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
    totalQuantity = updateCartTotalItemsCounter();
    updateCartTotalPrice();
    saveCart();

    if (totalQuantity === 0 && $("body").hasClass("noscroll")) {
      $(".modal-cart-empty").addClass("active");
      $(".modal-cart-not-empty").removeClass("active");
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

      if (target.classList.contains("js-btn-item-info")) {
        e.preventDefault();
        const cartItemDOMElement = target.closest(".js-cart-item");
        const productID = cartItemDOMElement.getAttribute("data-product-id");
        console.log(productID);

        const modalCartNotEmpty = document.querySelector(".modal-cart-not-empty");
        modalCartNotEmpty.classList.remove("active");

        const modalShadow = document.querySelector(".modal-shadow");         
        modalShadow.classList.remove("active");
        modalShadow.style.display = "none";        

        document.body.classList.remove("noscroll");
        
        elementHtml = document.querySelector(".no-touchevents"); 
        elementHtml.classList.add("popup--opened");
        
        elementProductInfo = document.getElementById(productID);
        elementProductInfo.classList.remove("is-hidden");
        elementProductInfo.classList.add("is-active");
        
        document.body.style.overflow = "hidden";
      }

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

      if (target.classList.contains("js-btn-show-cart")) {
        // e.preventDefault();
        $("body").addClass("noscroll");
        $(".modal-shadow").fadeIn();
        $(".modal-shadow").addClass("active");

        if (totalQuantity > 0) $(".modal-cart-not-empty").addClass("active");
        else $(".modal-cart-empty").addClass("active");
      }

      if (target.classList.contains("js-btn-checkout")) {
        // e.preventDefault();
        location.href = "WPJS/checkout-customer";
      }
      ///
      ///
      ///
    });
  };

  cartInit();
})();
