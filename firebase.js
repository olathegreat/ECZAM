import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";
import { getFirestore, collection, addDoc, Timestamp} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";
// import bcryptjs from "https://cdn.jsdelivr.net/npm/bcryptjs@2.4.3/dist/bcrypt.min.js"
// const firebaseConfig = {
//   apiKey: "AIzaSyBPEJXZpaojtGqWP4aLggnSm2k5MB012is",
//   authDomain: "eczam-1c57f.firebaseapp.com",
//   projectId: "eczam-1c57f",
//   storageBucket: "eczam-1c57f.appspot.com",
//   messagingSenderId: "178424308332",
//   appId: "1:178424308332:web:d40c0e098953ece76dae49",
//   measurementId: "G-VJC4HRKXWG"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBeSY_HbooW2xZBbP-54f1pUKY_UmVXbJI",
  authDomain: "new-test-4d819.firebaseapp.com",
  projectId: "new-test-4d819",
  storageBucket: "new-test-4d819.appspot.com",
  messagingSenderId: "388049770797",
  appId: "1:388049770797:web:fc9b3bfcf8f0f8a996dba4",
  measurementId: "G-KNMG9K1J9R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore()
// const auth = getAuth();

async function signUp (firstname, lastname , matricNumber) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      firstname,
      lastname,
      matricNumber
    });
    console.log(docRef)
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

(function() {
  'use strict';
  window.addEventListener('load', function() {
    var form = document.querySelector("#sign-up");
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        form.classList.add('was-validated');
        const firstNameInput = document.querySelector(`input[name="fname"]`)?.value
        const lastNameInput = document.querySelector(`input[name="lname"]`)?.value
        const password = document.querySelector(`input[name="lname"]`)?.password
        signUp(
          firstNameInput, 
          lastNameInput, 
          "CSC/0000/034",
          password
        )
    }, false);
  }, false);
})();

