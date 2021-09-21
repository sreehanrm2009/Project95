//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCOgz84JR1j_E59enIJRPWRmxM5LlfjaTA",
      authDomain: "chat-app-b20d9.firebaseapp.com",
      databaseURL: "https://chat-app-b20d9-default-rtdb.firebaseio.com",
      projectId: "chat-app-b20d9",
      storageBucket: "chat-app-b20d9.appspot.com",
      messagingSenderId: "1057416048596",
      appId: "1:1057416048596:web:f9070b3134583895ca7041"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome " + username + "!";

function addRoom() {
      roomname = document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose: "adding room name"
      });
      localStorage.setItem("roomname", roomname);
      window.open("../Chat/index.html");
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room name - " + Room_names);
                  row = "<div class='roomname' id=" + Room_names + "onclick='redirectToRoomName(this.id)>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML = row;
            })
      })
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("roomname", name);
      window.open("../Chat/index.html");
}

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("rooname");
      window.location = "../Login/index.html";
}