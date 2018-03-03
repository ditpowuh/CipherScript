CipherScript.popup(CipherScript.message("Loading Console..."))
CipherScript.wait(1000)
if (CipherScript.setup == true) {
  CipherScript.post("Console + Setup Success!")
  CipherScript.console = true;
  CipherScript.popup(CipherScript.message("Console Loaded!"))
  CipherScript.wait(1000)

  while (CipherScript.console == true) {
    var consoletext = prompt("Console:")

    var emptyerror = consoletext.charAt(0);
    if (CipherScript.booleancheck(consoletext == "" || emptyerror == " ") == true) {
      CipherScript.popup(CipherScript.error(2))
    }
    else {
      CipherScript.popup(CipherScript.message(consoletext))
    }

    if (consoletext == "CipherScript.console") {
      CipherScript.popup(CipherScript.message(CipherScript.console))
    }
    if (consoletext == "CipherScript.setup") {
      CipherScript.popup(CipherScript.message(CipherScript.setup))
    }
    if (consoletext == "CipherScript.CipherScript") {
      CipherScript.popup(CipherScript.message("ERROR"))
    }
    if (consoletext == "CipherScript.off") {
      CipherScript.popup(CipherScript.message(CipherScript.off))
    }
    if (consoletext == "CipherScript.on") {
      CipherScript.popup(CipherScript.message(CipherScript.on))
    }
    if (consoletext == "CipherScript.debug") {
      CipherScript.popup(CipherScript.message(CipherScript.debug))
    }
    if (consoletext == "CipherScript.temporary") {
      CipherScript.popup(CipherScript.message(CipherScript.temporary))
    }
    if (consoletext == "CipherScript.fixmode") {
      CipherScript.popup(CipherScript.message(CipherScript.fixmode))
    }

  }
}
else if (CipherScript.setup == false) {
  CipherScript.console = false;
  CipherScript.popup(CipherScript.message("Console is unable to open as setup was unsuccessful."))
  CipherScript.popup(CipherScript.error(1))
}
else {
  CipherScript.popup(CipherScript.error(0))
}
