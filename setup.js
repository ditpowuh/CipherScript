var CipherScript = new Object();
CipherScript.CipherScript = "ERROR";
CipherScript.setup = true;

if (CipherScript.setup == true) {
  CipherScript.off = false;
  CipherScript.on = true;
}
else if (CipherScript.setup == false) {
  CipherScript.off = true;
  CipherScript.on = false;
}
else {
  CipherScript.setup = "ERROR";
  CipherScript.off = "ERROR";
  CipherScript.on = "ERROR";
}

if (CipherScript.on == true && CipherScript.off == false) {

  CipherScript.debug = false;
  CipherScript.temporary = false;
  CipherScript.fixmode = false;

  CipherScript.message = function (text) {
    alert(text)
    console.log(text);
  };
  CipherScript.post = function (text) {
    console.log(text);
  };
  CipherScript.wait = function (milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  };
  CipherScript.warn = function (text) {
    alert("WARNING!")
    var warntext = confirm(text)
  };
  CipherScript.error = function (errorcode) {
    console.log("ERROR DETECTED.")
    if (errorcode == 0) {
      alert("An error was detected. Unknown cause.")
      console.log("Error Code: 0;")
      console.log("Unknown Cause.")
    }
    if (errorcode == 1) {
      alert("An error was detected. Cause: Setup Unsuccessful.")
      console.log("Error Code: 1;")
      console.log("Setup Unsuccessful.")
    }
    if (errorcode == 2) {
      alert("An error was detected. Cause: Empty or Space at front.")
      console.log("Error Code: 2;")
      console.log("Empty or Space at the front.")
    }
  };

}
