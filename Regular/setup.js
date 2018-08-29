/*
Copyright © Ditpowuh 2018 Copyright Holder All Rights Reserved | All comments are from me
*/

var CipherScript = new Object();
CipherScript.CipherScript = "ERROR";
CipherScript.setup = true;

if (CipherScript.setup === true) {
  CipherScript.off = false;
  CipherScript.on = true;
}
else if (CipherScript.setup === false) {
  CipherScript.off = true;
  CipherScript.on = false;
}
else {
  CipherScript.setup = "ERROR";
  CipherScript.off = "ERROR";
  CipherScript.on = "ERROR";
}

if (CipherScript.on === true && CipherScript.off === false) {

  CipherScript.console = true;
  CipherScript.htmlroles = false;

  CipherScript.debug = false;
  CipherScript.temporary = false;
  CipherScript.fixmode = false;
  CipherScript.testmode = false;
  CipherScript.safemode = false;

  CipherScript.message = function (text) {
    if (CipherScript.console === true) {
      console.log(text);
    }
    return (text);
  };
  CipherScript.post = function (text) {
    if (CipherScript.console === false) {
      console.log("Exception!: CipherScript.post can log on console without any interruptions.");
    }
    console.log(text);
  };
  CipherScript.wait = function (milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  };
  CipherScript.warn = function (text) {
    if (CipherScript.console === true) {
      console.log("Warned.");
    }
    alert("WARNING!");
    var warntext = confirm(text);
  };
  CipherScript.error = function (errorcode, popup) {
    if (CipherScript.console === false) {
      console.log("Exception!: CipherScript.error can log on console without any interruptions.");
    }
    console.log("ERROR DETECTED.");
    if (errorcode === 0) {
      console.log("Error Code: 0;");
      console.log("Unknown Cause.");
      if (popup === true) {
        alert("An error was detected. Unknown cause.");
      }
    }
    if (errorcode === 1) {
      console.log("Error Code: 1;");
      console.log("Setup Unsuccessful.");
      if (popup === true) {
        alert("An error was detected. Cause: Setup Unsuccessful.");
      }
    }
    if (errorcode === 2) {
      console.log("Error Code: 2;");
      console.log("Empty or Space at the front.");
      if (popup === true) {
        alert("An error was detected. Cause: Empty or Space at front.");
      }
    }
    if (errorcode === 3) {
      console.log("Error Code: 3;");
      console.log("Blocked.");
      if (popup === true) {
        alert("An error was detected. Cause: Blocked.");
      }
    }
  };
  CipherScript.findlength = function (string) {
    return string.length;
  };
  CipherScript.popup = function (text) {
    alert(text);
  };
  CipherScript.round = function (number) {
    if (typeof number == "number") {
      return Math.round(number);
    }
    else {
      return "ERROR";
    }
  };
  CipherScript.random = function (number) {
    if (typeof number == "number") {
      return Math.floor(Math.random() * number) + 1;
    }
    else {
      return "ERROR";
    }
  };
  CipherScript.squareroot = function (number) {
    if (typeof number == "number") {
      return Math.sqrt(number);
    }
    else {
      return "ERROR";
    }
  };
  CipherScript.powers = function (number1, number2) {
    if (typeof number1 == "number" && typeof number2 == "number") {
      return Math.pow(number1, number2);
    }
    else {
      return "ERROR";
    }
  };
  CipherScript.beforeunload = function () {
    if (CipherScript.console === false) {
      console.log("Exception!: CipherScript.beforeunload can log on console without any interruptions.");
    }
    console.log("CipherScript.beforeunload: This is used for 'Are you sure you want to leave?' prompt.");
    return "ERROR";
  };
  CipherScript.checkstate = function (input) {
    if (typeof input == "number") {
      return "number";
    }
    else if (typeof input == "string") {
      return "string";
    }
    else if (typeof input == "boolean") {
      return "boolean";
    }
    else if (typeof input == "object") {
      return "object";
    }
    else {
      return "ERROR";
    }
  };
  CipherScript.enableroles = function (adminpassword, modpassword) {
    if (CipherScript.htmlroles === false) {
      CipherScript.htmlroles = true;
      if (CipherScript.console === true) {
        console.log("CipherScript.enableroles: Sucess!");
      }
      CipherScript.administrator = adminpassword;
      CipherScript.moderator = modpassword;
      if (CipherScript.console === true) {
        console.log("Admin Password Set!: " + adminpassword);
        console.log("Mod Password Set!: " + modpassword);
      }
    }
    else if (CipherScript.htmlroles === true) {
      if (CipherScript.console === true) {
        console.log("CipherScript.htmlroles: Already set!");
      }
    }
  };
  CipherScript.adminrequired = function () {
    if (CipherScript.htmlroles === true) {
      alert("ADMINISTRATOR REQUIRED!")
      var checkpassword = prompt("Password?:")
      if (checkpassword == CipherScript.administrator) {
        alert("Correct!");
        CipherScript.administrator = true;
      }
      else {
        alert("Incorrect!");
        if (CipherScript.console === true) {
          console.log("CipherScript.adminrequire: Wrong password!");
        }
      }
    }
    else if (CipherScript.htmlroles == false) {
      if (CipherScript.console === true) {
        console.log("CipherScript.htmlroles: Roles have not been set up!");
      }
    }
  };
  CipherScript.modrequired = function () {
    if (CipherScript.htmlroles === true) {
      alert("MODERATOR REQUIRED!");
      var checkpassword = prompt("Password?:");
      if (checkpassword == CipherScript.moderator) {
        alert("Correct!")
        CipherScript.moderator = true;
      }
      else {
        alert("Incorrect!")
        if (CipherScript.console === true) {
          console.log("CipherScript.modrequire: Wrong password!");
        }
      }
    }
    else if (CipherScript.htmlroles === false) {
      if (CipherScript.console === true) {
        console.log("CipherScript.htmlroles: Roles have not been set up!");
      }
    }
  };
  CipherScript.resetroles = function (adminpassword, modpassword) {
    if (CipherScript.htmlroles === true) {
      CipherScript.administrator = adminpassword;
      CipherScript.moderator = modpassword;
      if (CipherScript.console === true) {
        console.log("CipherScript.htmlroles: Roles have been resetted!");
      }
    }
    else if (CipherScript.htmlroles === false) {
      if (CipherScript.console === true) {
        console.log("CipherScript.htmlroles: Roles have not been set up!");
      }
    }
  };
  CipherScript.createfile = function (title, text) {
    var element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
    element.setAttribute("download", title);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    if (CipherScript.console === true) {
      console.log("Created and Downloaded file: " + title);
    }
  };

}
