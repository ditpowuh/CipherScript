module.exports = {

  CipherScript: "ERROR",
  setup: true,
  off: false,
  on: true,
  csconsole: true,
  htmlroles: false,

  message: function(text) {
    if (csconsole === true) {
      console.log(text);
    }
    return (text);
  },
  post: function(text) {
    if (csconsole === false) {
      console.log("Exception!: CipherScript.post can log on console without any interruptions.");
    }
    console.log(text);
  },
  wait: function(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  },
  warn: function(text) {
    if (csconsole === true) {
      console.log("Warned.");
    }
    alert("WARNING!");
    var warntext = confirm(text);
  },
  error: function(errorcode, popup) {
    if (csconsole === false) {
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
  },
  findlength: function (string) {
    return string.length;
  },
  popup: function(text) {
    alert(text);
  },
  round: function(number) {
    if (typeof number == "number") {
      return Math.round(number);
    }
    else {
      return "ERROR";
    }
  },
  random: function(number) {
    if (typeof number == "number") {
      return Math.floor(Math.random() * number) + 1;
    }
    else {
      return "ERROR";
    }
  };
  squareroot: function(number) {
    if (typeof number == "number") {
      return Math.sqrt(number);
    }
    else {
      return "ERROR";
    }
  },
  powers: function(number1, number2) {
    if (typeof number1 == "number" && typeof number2 == "number") {
      return Math.pow(number1, number2);
    }
    else {
      return "ERROR";
    }
  },
  beforeunload: function() {
    if (csconsole === false) {
      console.log("Exception!: CipherScript.beforeunload can log on console without any interruptions.");
    }
    console.log("CipherScript.beforeunload: This is used for 'Are you sure you want to leave?' prompt.");
    return "ERROR";
  };
  checkstate: function(input) {
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
  enableroles: function(adminpassword, modpassword) {
    if (htmlroles === false) {
      htmlroles = true;
      if (csconsole === true) {
        console.log("CipherScript.enableroles: Sucess!");
      }
      administrator = adminpassword;
      moderator = modpassword;
      if (csconsole === true) {
        console.log("Admin Password Set!: " + adminpassword);
        console.log("Mod Password Set!: " + modpassword);
      }
    }
    else if (htmlroles === true) {
      if (csconsole === true) {
        console.log("CipherScript.htmlroles: Already set!");
      }
    }
  },
  adminrequired: function() {
    if (htmlroles === true) {
      alert("ADMINISTRATOR REQUIRED!")
      var checkpassword = prompt("Password?:")
      if (checkpassword == administrator) {
        alert("Correct!");
        administrator = true;
      }
      else {
        alert("Incorrect!");
        if (csconsole === true) {
          console.log("CipherScript.adminrequire: Wrong password!");
        }
      }
    }
    else if (htmlroles == false) {
      if (csconsole === true) {
        console.log("CipherScript.htmlroles: Roles have not been set up!");
      }
    }
  },
  modrequired: function() {
    if (htmlroles === true) {
      alert("MODERATOR REQUIRED!");
      var checkpassword = prompt("Password?:");
      if (checkpassword == moderator) {
        alert("Correct!")
        moderator = true;
      }
      else {
        alert("Incorrect!")
        if (csconsole === true) {
          console.log("CipherScript.modrequire: Wrong password!");
        }
      }
    }
    else if (htmlroles === false) {
      if (csconsole === true) {
        console.log("CipherScript.htmlroles: Roles have not been set up!");
      }
    }
  },
  resetroles: function(adminpassword, modpassword) {
    if (htmlroles === true) {
      administrator = adminpassword;
      moderator = modpassword;
      if (csconsole === true) {
        console.log("CipherScript.htmlroles: Roles have been resetted!");
      }
    }
    else if (htmlroles === false) {
      if (csconsole === true) {
        console.log("CipherScript.htmlroles: Roles have not been set up!");
      }
    }
  },
  createfile: function(title, text) {
    var element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
    element.setAttribute("download", title);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    if (csconsole === true) {
      console.log("Created and Downloaded file: " + title);
    }
  }

}
