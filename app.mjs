import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,  signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { collection, addDoc, getFirestore, onSnapshot, deleteDoc, doc, updateDoc  } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";  
const firebaseConfig = {
    apiKey: "AIzaSyAT0YVJNwknSosC1Qz0PcnzK4Ui_AcpgbY",
    authDomain: "smit-project-934e8.firebaseapp.com",
    projectId: "smit-project-934e8",
    storageBucket: "smit-project-934e8.appspot.com",
    messagingSenderId: "112854163095",
    appId: "1:112854163095:web:0bdd7e00fd5af613ae53d2"
  };

  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);





window.signUp = function () {
    
  let signUpEmail = document.getElementById("signupemail").value
  let signUpPassword = document.getElementById("signuppassword").value
  
  createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    Swal.fire('User Created Successfully')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    swal.fire(errorMessage)
    // ..
  });

}

window.logIn = function () {
    let logInEmail = document.getElementById("loginemail").value
    let logInPassword = document.getElementById("loginpassword").value
    signInWithEmailAndPassword(auth, logInEmail, logInPassword)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      Swal.fire('Login Successfull')
      window.location.href = "./dashboard.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire(errorMessage);
    });
  
}

window.addpost = async() => {
   
 let postTitle = document.getElementById("author-name")
 let postText = document.getElementById("post-text")
 let date = new Date()
  try {
      const docRef = await addDoc(collection(db, "post"), {
        postTitle: postTitle.value,
        postText: postText.value,
        time: date.toLocaleString()
      });
    
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }