CipherScript.message("Loading Console...")
CipherScript.wait(1000)
if (CipherScript.setup == true) {
  CipherScript.post("Console + Setup Success!")
  CipherScript.console = true;
  CipherScript.message("Console Enabled.")
  CipherScript.wait(1000)

  while (CipherScript.console == true) {
    var consoletext = prompt("Console:")

    var emptyerror = consoletext.charAt(0);
    if (consoletext == "" || emptyerror == " ") {
      CipherScript.error(2)
    }
    else {
      CipherScript.message(consoletext)
    }

    if (consoletext == "CipherScript.console") {
      CipherScript.message(CipherScript.console)
    }
    if (consoletext == "CipherScript.setup") {
      CipherScript.message(CipherScript.setup)
    }
    if (consoletext == "CipherScript.CipherScript") {
      CipherScript.message("ERROR")
    }
    if (consoletext == "CipherScript.off") {
      CipherScript.message("false")
    }
    if (consoletext == "CipherScript.on") {
      CipherScript.message("true")
    }
    if (consoletext == "CipherScript.debug") {
      CipherScript.message(CipherScript.debug)
    }
    if (consoletext == "CipherScript.temporary") {
      CipherScript.message(CipherScript.temporary)
    }
    if (consoletext == "CipherScript.fixmode") {
      CipherScript.message(CipherScript.fixmode)
    }

  }
}
else if (CipherScript.setup == false) {
  CipherScript.console = false;
  CipherScript.message("Console is unable to open as setup was unsuccessful.")
  CipherScript.error(1)
}
else {
  CipherScript.error(0)
}
