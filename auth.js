function login(){
  // We need to get the input values
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');

  // now we check with firebase if login is valid
  btnLogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => window.alert(e.message));
    loginTimeout();
  });

  // Login Event if Enter is Pressed  --> THE KEY
  var btnDown = document.getElementById("txtPassword");
  btnDown.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => window.alert(e.message));
    loginTimeout();
  }
});

  // const auth = firebase.auth();
  // // to log user in with email and Password
  // auth.signInWithEmailAndPassword(email, pass); // provide email and pass
  // // will sign in an exisiting user and return a promise that can resolve that user
  // // .then waits for promise to finish and is then run
  //
  // // if we do not have a user and want to create an account
  // auth.createUserWithEmailAndPassword(email,pass);
  // // both return promises to simmutanenously resolve the data
}


// Login Timer
function loginTimeout() {
  var timer = setTimeout(confirmedLogin, 1000);
}
