
//ADD YOUR FIREBASE LINKS HERE

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA91LzntHG-WeJrBwSRLgNXLWKeWtBZ1XM",
  authDomain: "flame-social.firebaseapp.com",
  databaseURL: "https://flame-social-default-rtdb.firebaseio.com",
  projectId: "flame-social",
  storageBucket: "flame-social.appspot.com",
  messagingSenderId: "1062836449157",
  appId: "1:1062836449157:web:f8bbd033e3cc15cfa31eec"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="heelo"+user_name+"!!!!!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)>#'"+Room_names+"</div></hr>";

      //End code
      });});}
getData();


function addRoom()
{
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"We want a new room because of reasons"
      });

      localStorage.setItem("room_name", room_name);

      window.location="kwitter_page.html";
}



function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html"
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}





