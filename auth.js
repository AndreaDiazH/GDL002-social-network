const welcomeScreen= document.getElementById("welcomeScreen");
const homeScreen= document.getElementById("homeScreen");
//listen for auth status changes
function status(){
auth.onAuthStateChanged(user => {

  if(user){
        //console.log('user logged in', user);
      welcomeScreen.style.display ="none";
      homeScreen.style.display= "block";
    } else {
       // console.log('user logged out');
      welcomeScreen.style.display = "block";
  })
}
const alertVerificationEmail = document.querySelector('#alert');

  // signup
  const signupForm = document.querySelector('#signup-form');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
  
    // sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
      // close the signup modal & reset form
      const modal = document.querySelector('#modal-signup');
      sendVerification();
      $('.alert').alert();
      M.Modal.getInstance(modal).close();
      signupForm.reset();
    });
  });
  
  // logout
  /*const logout = document.querySelector('#logout');
  logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
  });*/
  
  // login
  const loginForm = document.querySelector('#login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
  
    // log the user in
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
      // close the signup modal & reset form
      const modal = document.querySelector('#modal-login');
    //  M.Modal.getInstance(modal).close();
      loginForm.reset();
      status();
    });
   
  });
  
    // obtener el usuario que accedio
    const user= auth.currentUser;
    // var cred;
  
      if(user){
        console.log("user is signed in");
      } else {
        console.log("no user is signed in."); 
      }
  
  
      // user.reauthenticateAndRetrieveDataWithCredential(cred).then(function() {
      //   // User re-authenticated.
      // }).catch(function(error) {
      //   // An error happened.
      // });
  
  // email verification
  function sendVerification () {
    const user = auth.currentUser;
  
    user.sendEmailVerification().then(cred => {
      console.log("Se envio email de verificación");
    }).catch(function(error) {
      // An error happened.
    });
  } 
