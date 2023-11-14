//YOUR FIREBASE LINKS
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
      room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();



function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}



function send()
{
      peeps=document.getElementById("peeps").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:peeps,
            likes:0
      })

      document.getElementById("peeps").value="";
}



