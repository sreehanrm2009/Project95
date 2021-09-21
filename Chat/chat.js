// Your web app's Firebase configuration
const firebaseConfig = {
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
roomname = localStorage.getItem("roomname");
username = localStorage.getItem("username");

function send() {
      message = document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
            user: username,
            message: message,
            likes: 0
      });
      document.getElementById("msg").value = "";
}