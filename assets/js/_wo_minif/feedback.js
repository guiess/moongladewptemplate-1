(function () {
  const feedbackDOMElementThanks = document.querySelector(".js-feedback-thanks"); 
  const feedbackDOMElementError = document.querySelector(".js-feedback-error"); 

  feedbackDOMElementThanks.hidden = true;
  feedbackDOMElementError.hidden = true;

  const sendfeedbackForm = (feedbackForm) => {
    var xhr = new XMLHttpRequest();
    var url = WPJS.ajaxUrl + "?action=feedback_send";

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onload = function () {
      const response = xhr.response.trim();

      if (response == "error") {
        console.log("response false");        
        feedbackDOMElementError.hidden = false;
        return;
      } else if (response == "success") {
        console.log("response success");
        feedbackForm.feedbackSenderName.value = "";
        feedbackForm.feedbackSenderEmail.value = "";
        feedbackForm.feedbackSenderMessage.value = "";
        feedbackDOMElementThanks.hidden = false;
      }
      // else return;
    };

    fbname = feedbackForm.feedbackSenderName.value;
    fbemail = feedbackForm.feedbackSenderEmail.value;
    fbmessage = feedbackForm.feedbackSenderMessage.value;

    request =
      "fbname=" + fbname + "&fbemail=" + fbemail + "&fbmessage=" + fbmessage;
    // console.log(request);

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
      e.preventDefault();

      const feedbackForm = document.forms.feedbackUserForm;

      if (!checkValidityOurFunc(feedbackForm)) {
        // console.log("checkValidityOurFunc not ok");
        return;
      } else {
        // console.log("checkValidityOurFunc ok");
        sendfeedbackForm(feedbackForm);
      }
    }
  });
})();
