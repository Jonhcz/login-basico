const data = {
  user: "admin",
  password: 123,
};

let sing = document.getElementById("sing-in");

sing.addEventListener("click", () => {
  let user = document.getElementById("login-user").value;
  let pass = document.getElementById("login-password").value;

  if (user === data.user && pass == data.password) {
    alert(`Welcome ${user}!`);
  } else {
    alert("Password incorrect");
  }
});
