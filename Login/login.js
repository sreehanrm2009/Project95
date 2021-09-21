function addUser() {
      username = document.getElementById("username").value;
      localStorage.setItem("username", username);
      window.open("../Room/index.html");
}