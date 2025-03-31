// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore, collection, doc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Your web app's Firebase configuration (fill in your actual keys)
const firebaseConfig = {
  apiKey: "AIzaSyDPYybt1-bo4cNjk2n93TnVJD0RkUV1cgw",
  authDomain: "test-login-page-6487c.firebaseapp.com",
  projectId: "test-login-page-6487c",
  storageBucket: "test-login-page-6487c.firebasestorage.app",
  messagingSenderId: "998941333585",
  appId: "1:998941333585:web:34704ab63e7fb8fdc7c070",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export these so other files can use them (optional if used elsewhere)
export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword };

// Set up our register function
function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!validate_email(email) || !validate_password(password)) {
    alert("Email or password is not formatted correctly");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const userData = {
        email: email,
        last_login: Date.now(),
      };

      // Save to Firestore
      setDoc(doc(db, "users", user.uid), userData)
        .then(() => {
          alert("User created successfully");
        })
        .catch((error) => {
          console.error("Error writing to Firestore:", error);
          alert("Error saving user data: " + error.message);
        });
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

// Set up our login function
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!validate_email(email) || !validate_password(password)) {
    alert("Email or password is incorrect");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const userData = {
        last_login: Date.now(),
      };

      // Update Firestore
      updateDoc(doc(db, "users", user.uid), userData)
        .then(() => {
          alert("User logged in");
          window.location.href = "/Subpages/dashboard.html";
        })
        .catch((error) => {
          console.error("Error updating Firestore:", error);
          alert("Error updating login time: " + error.message);
        });
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

// Validate Functions
function validate_email(email) {
  const expression = /^[^@]+@\w+(\.\w+)+\w$/;
  return expression.test(email);
}

function validate_password(password) {
  return password.length > 6 && password.length <= 25;
}

function validate_field(field) {
  return field != null && field.length > 0;
}

// Make these functions available globally
window.register = register;
window.login = login;