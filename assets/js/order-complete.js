const cart = JSON.parse(localStorage.getItem("cart")) || new Object();
// console.log(cart);
// console.log(JSON.stringify(cart));
const customer = JSON.parse(localStorage.getItem("customer")) || new Object();
// console.log(JSON.stringify(customer));

let discountValue = Number(customer.discountValue) || 0;
let discountCode = customer.discountCode || "";
// console.log(JSON.stringify(discountCode));
if (!customer.deliveryPrice) customer.deliveryPrice = 0;

const onlyPurchasedGoods = () => {
  const ids = Object.keys(cart);
  let xmlPurchasedGoods = "";
  ids.forEach(
    (id) =>
      (xmlPurchasedGoods +=
        cart[id].id.replace("product_", "") +
        "=" +
        Number(cart[id].quantity) +
        "&")
  );
  return xmlPurchasedGoods;
};

const customerinfoToSend = () => {
  let xmlCustomerinfoToSend = "";
  for (let key in customer) {
    if (customer.hasOwnProperty(key)) {
      // console.log(`${key} : ${customer[key]}`);
      xmlCustomerinfoToSend += `${key}=${customer[key]}&`;
    }
  }
  return xmlCustomerinfoToSend;
};

const cartEmpty = function () {
  return !Object.keys(cart).length;
};

const formSend = function () {
  if (cartEmpty()) return;

  // console.log(JSON.stringify(cart));
  var xhr = new XMLHttpRequest();
  var url = WPJS.ajaxUrl + "?action=send_email";

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onload = function () {
    const response = xhr.response.trim();
    // console.log("response = " + response);

    if (response == "success") {
      console.log("response succes");
      if (localStorage.getItem("rememberMeCheckbox") == "false") {
        console.log("resetCustomer");
        localStorage.removeItem("customer");
      } else console.log(localStorage.getItem("rememberMeCheckbox"));
      console.log("resetCart");
      localStorage.removeItem("cart");
    } else {
      //TODO some actions need to be done if not response from server
      console.log("not response");
    }
  };

  let infoToSend = onlyPurchasedGoods();
  infoToSend += customerinfoToSend();
  // infoToSend += "discountCode=" + discountCode;

  // infoToSend = infoToSend.substring(0, infoToSend.length - 1);

  console.log(infoToSend);
  xhr.send(infoToSend);

  // xhr.send("foo=bar&rem=sum&more=good");
};

formSend();
