window.onload = function() {

//SHOW DIALOG FOR SIGNIN BUTTON
  var dialog = document.getElementById("SignInDialog");
  var showDialogButton = document.getElementById("show-dialog-Signin");
  if (! dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
  }
  showDialogButton.addEventListener('click', function() {
    dialog.showModal();
  });
  dialog.querySelector('.close').addEventListener('click', function() {
    dialog.close();
  });

//SHOW DIALOG FOR SIGNUP BUTTON
  var dialogSignUp = document.getElementById("SignUpDialog");
  var showDialogButtonSignUp = document.getElementById("show-dialog-Signup");
  if (! dialogSignUp.showModal) {
    dialogPolyfill.registerDialog(dialogSignUp);
  }
  showDialogButtonSignUp.addEventListener('click', function() {
    dialogSignUp.showModal();
  });
  dialogSignUp.querySelector('.close').addEventListener('click', function() {
    dialogSignUp.close();
  });

  //SHOW DIALOG FOR SIGNIN BUTTON ZOOM
  var showDialogButtonSignInZoom = document.getElementById("show-dialog-Signin-zoom");
  if (! dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
  }
  showDialogButtonSignInZoom.addEventListener('click', function() {
    dialog.showModal();
  });
  dialog.querySelector('.close').addEventListener('click', function() {
    dialog.close();
  });

  //SHOW DIALOG FOR SIGNUP BUTTON ZOOM
  var showDialogButtonSignUpZoom = document.getElementById("show-dialog-SignUp-zoom");
  if (! dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
  }
  showDialogButtonSignUpZoom.addEventListener('click', function() {
    dialog.showModal();
  });
  dialog.querySelector('.close').addEventListener('click', function() {
    dialog.close();
  });

};
