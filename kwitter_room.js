// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWq4LktcLnjChta3l76DQYGYTzDTmAlbU",
  authDomain: "kwitter-webapp-2e578.firebaseapp.com",
  projectId: "kwitter-webapp-2e578",
  storageBucket: "kwitter-webapp-2e578.appspot.com",
  messagingSenderId: "312036625024",
  appId: "1:312036625024:web:54cfe17a6811273b74f465",
  measurementId: "G-QMW9YX0T05"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localstorage.getItem("username");
document.getElementById("user_name").innerHTML = "welcome "+user_name+"1";

function addRoom() 
{
  Room_names=document.getElementById("room_name").value;
  
  localstorage.setItem("roomname", room_name);
  
  window.location="kwitter_page.html";

  firebase.database().rel("/").child(room_name).update({ purpose: "Adding Room Name"
});

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
