auth.onAuthStateChanged(user=>{
    console.log(
        user
    )
})

const signupForm = document.querySelector("#signup-form");
 if (signupForm) {
   signupForm.addEventListener("submit", e => {
     e.preventDefault();
     const email = signupForm["signup-email"].value;
     const password = signupForm["signup-password"].value;
     //   console.log(email, password);

     auth.createUserWithEmailAndPassword(email, password).then(cred => {
       console.log(cred.user);
       // const modal = document.querySelector('#modal-signup');
       // M.Modal.getInstance(modal).close();
       // signupForm.reset();
     });
   });
 }

const loginForm = document.querySelector("#lonin-form");
if (loginForm) {
  loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = signupForm["signup-email"].value;
    const password = signupForm["signup-password"].value;
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        alert()
      console.log(cred.user);
    });
  });
}
const logout = document.querySelector("#logOut");

if (logout) {
logout.addEventListener("click", e => {
  e.preventDefault();
  
  auth.signOut().then(()=>{
      console.log('log')
  })
});
}