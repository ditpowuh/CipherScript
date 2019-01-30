module.exports = {

  CipherScript: "ERROR",
  setup: true,
  off: false,
  on: true,
  csconsole: true,

  message: function(text) {
    console.log(text);
    return (text);
  },
  post: function(text) {
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
    console.log("Warned.");
    alert("WARNING!");
    var warntext = confirm(text);
  },
  error: function(errorcode, popup) {
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
  },
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
    console.log("CipherScript.beforeunload: This is used for 'Are you sure you want to leave?' prompt.");
    return "ERROR";
  },
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
  },
  var: function(input1, input2) {
    if (!input1 && !input2) {
      return "ERROR";
    }
    else {
      eval(input1 + " = \"" + input2 + "\"");
    }
  },
  createdata: function(input1, input2) {
    if (!input1 && !input2) {
      return "ERROR";
    }
    else {
      eval('CipherScript' + '.' + input + ' = ' + input2);
    }
  },
  run: function(input) {
    if (!input) {
      return "ERROR";
    }
    else {
      try {
        eval(input);
      }
      catch (e) {
        return "ERROR" + ":" + " " + e;
      }
    }
  }

};
