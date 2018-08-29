/*
Copyright © Ditpowuh 2018 Copyright Holder All Rights Reserved | All comments are from me
*/

if (CipherScript.console === true) {
  CipherScript.popup(CipherScript.message("Loading Console..."));
  CipherScript.wait(1000);
  if (CipherScript.setup === true) {
    CipherScript.enableroles("password_a", "password_m");
    if (CipherScript.safemode === false) {
      CipherScript.post("Console + Setup Success!");
      CipherScript.console = true;
      CipherScript.popup(CipherScript.message("Console Loaded!"));
      CipherScript.wait(1000);

      while (CipherScript.console === true) {
        var consoletext = prompt("Console:");

        var emptyerror = consoletext.charAt(0);
        if (consoletext == "" || emptyerror == " ") {
          CipherScript.error(2, true);
          CipherScript.createfile("traceback.txt", "ERROR CODE: 2; Found Issue: You put a space at the start or you have left it empty.");
        }
        else {
          CipherScript.popup(CipherScript.message(consoletext));
        }

        var exit = consoletext.toUpperCase();
        if (exit == "EXIT") {
          CipherScript.popup(CipherScript.message("Exiting Console..."));
          CipherScript.setup = false;
          break;
        }

        if (consoletext == "CipherScript.CipherScript") {
          CipherScript.popup(CipherScript.message("ERROR"));
          CipherScript.error(3, true);
          CipherScript.createfile("traceback.txt", "ERROR CODE: 3; Found Issue: Default value is 'ERROR'.");
        }
        if (consoletext == "CipherScript.safemode") {
          CipherScript.popup(CipherScript.message("ERROR"));
          CipherScript.error(3, true);
          CipherScript.createfile("traceback.txt", "ERROR CODE: 3; Found Issue: Default value is 'ERROR'.");
        }
        if (consoletext == "CipherScript.console") {
          CipherScript.popup(CipherScript.message(CipherScript.console));
        }
        if (consoletext == "CipherScript.setup") {
          CipherScript.popup(CipherScript.message(CipherScript.setup));
        }
        if (consoletext == "CipherScript.off") {
          CipherScript.popup(CipherScript.message(CipherScript.off));
        }
        if (consoletext == "CipherScript.on") {
          CipherScript.popup(CipherScript.message(CipherScript.on));
        }
        if (consoletext == "CipherScript.debug") {
          CipherScript.popup(CipherScript.message(CipherScript.debug));
        }
        if (consoletext == "CipherScript.temporary") {
          CipherScript.popup(CipherScript.message(CipherScript.temporary));
        }
        if (consoletext == "CipherScript.fixmode") {
          CipherScript.popup(CipherScript.message(CipherScript.fixmode));
        }
        if (consoletext == "CipherScript.testmode") {
          CipherScript.popup(CipherScript.message(CipherScript.testmode));
        }
      }
    }
    else if (CipherScript.safemode === true) {
      CipherScript.warn("SAFE MODE ENABLED.");
      CipherScript.popup(CipherScript.message("Note: If you are entering safe mode because of certain things, please reinstall CipherScript."));
      CipherScript.adminrequired();
      if (CipherScript.administrator === true) {
        CipherScript.popup(CipherScript.message("DETECTED!: You are admin."));
      }
      CipherScript.modrequired();
      if (CipherScript.moderator === true) {
        CipherScript.popup(CipherScript.message("DETECTED!: You are mod."));
      }
    }
  }
  else if (CipherScript.setup === false) {
    CipherScript.console = false;
    CipherScript.popup(CipherScript.message("Console is unable to open as setup was unsuccessful."));
    CipherScript.error(1, true);
    CipherScript.createfile("traceback.txt", "ERROR CODE: 1; Found Issue: Setup value was set to false.");
  }
  else {
    CipherScript.error(0, true);
    CipherScript.createfile("traceback.txt", "ERROR CODE: 0; Found Issue: None. Unable to find cause.");
  }
}
else if (CipherScript.console === false) {
  CipherScript.popup(CipherScript.message("Alert!: CipherScript.console is set to 'false'."));
}
