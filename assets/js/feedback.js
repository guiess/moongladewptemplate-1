(function () {
  const sendfeedbackForm = (feedbackForm) => {
    var xhr = new XMLHttpRequest();
    var url = WPJS.ajaxUrl + "?action=feedback_send";

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onload = function () {
      const response = xhr.response;
      console.log(response);

      if (response === "error") {
        console.log("response false");
        return;
      } else if (response === "success") {
        console.log("response success");
        //TODO чистим форму. вывод сообщения об успехе?
      } 
      // else return;
    };

    fbname = feedbackForm.feedbackSenderName.value;
    fbemail = feedbackForm.feedbackSenderEmail.value;
    fbmessage = feedbackForm.feedbackSenderMessage.value;

    request =
      "fbname=" + fbname + "&fbemail=" + fbemail + "&fbmessage=" + fbmessage;
    console.log(request);

    xhr.send(request);
  };

  const checkValidityOurFunc = (feedBackForm) => {
    if (!feedBackForm.feedbackSenderEmail.checkValidity()) {
      feedBackForm.feedbackSenderEmail.setCustomValidity(
        "Сheck this field. Something is wrong with him"
      );
      return;
    }

    return true;
  };

  document.querySelector("body").addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("js-feedback-button")) {
      // e.preventDefault();

      const feedbackForm = document.forms.feedbackUserForm;

      if (!checkValidityOurFunc(feedbackForm)) {
        console.log("checkValidityOurFunc not ok");
        return;
      } else {
        console.log("checkValidityOurFunc ok");

        sendfeedbackForm(feedbackForm);
      }
    }
  });
})();
