function validateForm() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const department = document.getElementById("department").value;

  if (username === "" || password === "" || department === "") {
    document.getElementById("error").innerText = "Please fill all fields.";
    return false;
  }

  alert("Login Successful!\nWelcome " + username + " from " + department + " department.");
  return true;
}
