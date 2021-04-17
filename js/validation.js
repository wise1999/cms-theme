var appAjax = (function () {
  "use strict";

  var myRequest = function (formData, tourl) {
    // return new Promise(function(resolve, reject) {
    // setTimeout(function(){ resolve('Jest OK'); }, 3000);
    // });

    // $.ajax(options).done(resolve).fail(reject);
    return new Promise(function (resolve, reject) {
      $.ajax({
        method: "POST",
        dataType: "json",
        url: tourl,
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
      })
        .done((result) => {
          resolve(result);
        })
        .fail((jqXHR, textStatus, error) => {
          //$('#buticonupload').removeClass('fas fa-spinner fa-pulse').addClass('fas fa-file-upload');
          alert("BĹÄd wywolania ajax: " + textStatus);
          reject(textStatus);
          console.log(textStatus);
        });
    });
  };

  return {
    myRequest: myRequest,
  };
})();

var appModule = (function () {
  "use strict";

  var emailIsValid = function (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  var myBootboxSuccess = function (message, totitle = "OK...") {
    Swal.fire({
      icon: "success",
      title: totitle,
      html: message,
      animation: false,
    });
  };

  var myBootboxError = function (message, totitle = "BĹÄdy formularza...") {
    Swal.fire({
      icon: "error",
      title: totitle,
      html: message,
      animation: false,
    });
  };

  var myBootstrapAlerts = function (
    message,
    type = "danger",
    totitle = "BĹÄdy formularza..."
  ) {
    const toAlert =
      '<div class="alert alert-' +
      type +
      '"><h4>' +
      totitle +
      "</h4>" +
      message +
      "</div>";
    $("#tosysteminfo").html(toAlert);
  };

  var appLogin = function () {
    $("form#loginsignin").submit(function (event) {
      let arrInfo = [];
      let ishaslonieok = false;
      if (
        $("#username")
          .val()
          .match(/^[-a-zA-Z0-9]{5,30}$/) == null
      ) {
        arrInfo.push("Login od 5 do 30 znakĂłw bez polskich liter i spacji");
      }

      if ($("#password").val().length < 8 || $("#password").val().length > 30) {
        ishaslonieok = true;
      }

      if (ishaslonieok) {
        let hasloinfo = "HasĹo od 8 do 30 znakĂłw bez spacji";
        arrInfo.push(hasloinfo);
      }

      if (arrInfo.length > 0) {
        myBootboxError(arrInfo.join("<br>"));
        return false;
      }

      $("#buticon")
        .removeClass("fas fa-unlock-alt")
        .addClass("fas fa-spinner fa-pulse");
      $("#smybutton").attr("disabled", "disabled");
      return true;
    });
  };

  var appAddComment = function () {
    $("form#toaddcomment").submit(function (event) {
      let arrInfo = [];
      event.preventDefault();

      if (typeof userData.username == "undefined") {
        arrInfo.push("W celu publikacji komentarza musisz byÄ zalogowany!");
      }

      if (arrInfo.length > 0) {
        myBootboxError(arrInfo.join("<br>"));
        return false;
      }

      $("#buticon")
        .removeClass("fas fa-unlock-alt")
        .addClass("fas fa-spinner fa-pulse");
      $("#smybutton").attr("disabled", "disabled");
      return true;
    });
  };

  var appRegistration = function () {
    $("form#appactionusercreate").submit(function (event) {
      let arrInfo = [];

      if (
        $("#userlogin")
          .val()
          .match(/^[-a-zA-Z0-9]{5,30}$/) == null
      ) {
        arrInfo.push(
          "Login konta od 5 do 30 znakĂłw z zakresu [a-zA-Z0-9]<br>Login bez polskich liter i spacji"
        );
      }

      if ($("#userlemial").val() == "") {
        arrInfo.push("Puste pole e-mial konta");
      } else {
        if (emailIsValid($("#userlemial").val()) == false) {
          arrInfo.push("E-mail jest nieprawidĹowy");
        }
      }

      if (
        $("#userpassword").val().length < 8 ||
        $("#userpassword").val().length > 30
      ) {
        arrInfo.push("HasĹo do konta od 8 do 30 znakĂłw");
      } else {
        if ($("#userpassword").val() != $("#userpassword2").val()) {
          arrInfo.push("HasĹo i powtĂłrzone hasĹo jest rĂłĹźne");
        }
      }

      if ($("#usercaptchatoken").val().length < 5) {
        arrInfo.push("Kod tokena catptha 5 znakĂłw");
      }

      if ($("#regulations").is(":checked") == false) {
        arrInfo.push(
          "Do rejestracji konta wymagana jest akceptacja regulaminu serwisu"
        );
      }

      if (arrInfo.length > 0) {
        //myBootstrapAlerts(arrInfo.join("<br>"),'danger');
        myBootboxError(arrInfo.join("<br>"));
        return false;
      }

      $("#buticon")
        .removeClass("fas fa-unlock-alt")
        .addClass("fas fa-spinner fa-pulse");
      $("#smybutton").attr("disabled", "disabled");
      return true;
    });

    $("#timenow").val(Date.now());
    console.log(odlFormData.userlogin);

    if (odlFormData.userlogin === undefined) {
      setTimeout(() => {
        $("#userlogin").val("");
        $("#userlemial").val("");
        $("#userpassword").val("");
        $("#userpassword2").val("");
        console.log(".... czyszcze isEmpty ");
      }, 50);
    }
  };

  var appUserLogin = function () {
    $("form#appactionuserlogin").submit(function (event) {
      let arrInfo = [];

      event.preventDefault();

      if (
        $("#userlogin")
          .val()
          .match(/^[-a-zA-Z0-9]{5,30}$/) == null
      ) {
        arrInfo.push(
          "Login konta od 5 do 30 znakĂłw z zakresu [a-zA-Z0-9]<br>Login bez polskich liter i spacji"
        );
      }

      if (
        $("#userpassword").val().length < 8 ||
        $("#userpassword").val().length > 30
      ) {
        arrInfo.push("HasĹo do konta od 8 do 30 znakĂłw");
      }

      if (arrInfo.length > 0) {
        //myBootstrapAlerts(arrInfo.join("<br>"),'danger');
        myBootboxError(arrInfo.join("<br>"));
        return false;
      }

      $("#buticon")
        .removeClass("fas fa-paper-plane")
        .addClass("fas fa-spinner fa-pulse");
      $("#smybutton").attr("disabled", "disabled");
    });

    $("#timenow").val(Date.now());
  };

  var appSendMessage = function () {
    $("form#appactionsendmail").submit(function (event) {
      let arrInfo = [];

      if ($("#fullname").val().length < 5 || $("#fullname").val().length > 30) {
        arrInfo.push("ImiÄ i nazwisko nadawcy od 5 do 30");
      }

      if ($("#email").val() == "") {
        arrInfo.push("Puste pole e-mial nadawcy");
      } else {
        if (emailIsValid($("#email").val()) == false) {
          arrInfo.push("E-mail jest nieprawidĹowy");
        }
      }

      if ($("#message").val().length < 50 || $("#message").val().length > 500) {
        arrInfo.push("TreĹÄ waidomosci od 50 do 500");
      }

      if ($("#captchatoken").val().length < 5) {
        arrInfo.push("Kod tokena antyspamu 5 znakĂłw");
      }

      if ($("#acceptrodo").is(":checked") == false) {
        arrInfo.push("Wymagana jest akceptacja polityki prywatnoĹci serwisu");
      }

      if (arrInfo.length > 0) {
        myBootboxError(arrInfo.join("<br>"));
        return false;
      }

      $("#buticon")
        .removeClass("fas fa-paper-plane")
        .addClass("fas fa-spinner fa-pulse");
      $("#smybutton").attr("disabled", "disabled");
      $("#timenow").val(Date.now());
    });
  };

  var appIncludeMap = function () {
    var myMap = L.map("leafletjsmaps").setView(
      [arrCompany.companylatitude, arrCompany.companylongitude],
      12
    );
    myMap.scrollWheelZoom.disable();
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(myMap);
    L.marker([arrCompany.companylatitude, arrCompany.companylongitude])
      .addTo(myMap)
      .bindPopup(
        "<strong>" +
          arrCompany.companyname +
          "</strong>	<br>" +
          arrCompany.companyadress +
          "</br>" +
          arrCompany.companypostcode +
          " " +
          arrCompany.companycity +
          "<br>" +
          arrCompany.companywoje +
          ""
      )
      .openPopup();
  };

  var articleComments = function () {
    console.log("Komentrze");
  };

  var toLikeComment = function (comid) {
    $.ajax({
      cache: false,
      method: "GET",
      dataType: "json",
      url: "/ajaxpublic/likecomment/" + comid,
    })
      .done((data, textStatus, xhr) => {
        $("#commentid" + comid).text(data.commentlike);
        if (xhr.status == 201) {
          myBootboxSuccess("TwĂłj gĹos zostaĹ zapisany!");
        } else {
          myBootboxError("GĹosowaÄ moĹźna tylko raz!");
        }
      })
      .fail((jqXHR, textStatus, error) => {
        alert("BĹÄd wywolania ajax");
        console.log(textStatus);
      });
  };

  return {
    appLogin: appLogin,
    appAddComment: appAddComment,
    appSendMessage: appSendMessage,
    appIncludeMap: appIncludeMap,
    articleComments: articleComments,
    appRegistration: appRegistration,
    appUserLogin: appUserLogin,
    toLikeComment: toLikeComment,
  };
})();

$(document).ready(function () {
  console.log("MyCMS version: 1.1");

  window.LikeComment = appModule.toLikeComment;

  if ($("form#loginsignin").length > 0) {
    appModule.appLogin();
  }
  if ($("form#toaddcomment").length > 0) {
    appModule.appAddComment();
  }
  if ($("form#appactionsendmail").length > 0) {
    appModule.appSendMessage();
  }
  if ($("form#appactionusercreate").length > 0) {
    appModule.appRegistration();
  }
  if ($("form#appactionuserlogin").length > 0) {
    appModule.appUserLogin();
  }
  if ($("div#leafletjsmaps").length > 0) {
    appModule.appIncludeMap();
  }
  if ($("div#articlecomments").length > 0) {
    appModule.articleComments();
  }

  $("#torefresh").click(function () {
    var newSrc = $("#imgcaptha").attr("src").split("?");
    newSrc = newSrc[0] + "?" + new Date().getTime();
    $("#imgcaptha").attr("src", newSrc);
  });

  $(".fancybox").fancybox();
});
