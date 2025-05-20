document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const fullName = document.getElementById("fullname").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const role = document.getElementById("role").value;
    const rememberMe = document.getElementById("rememberMe").checked;
    const message = document.getElementById("message");
  
    // Sample validation
    if (username === "admin" && password === "1234" && role === "admin") {
      message.style.color = "green";
      message.textContent = `Welcome, ${fullName} (Admin)!`;
    } else {
      message.style.color = "red";
      message.textContent = "Invalid login credentials. Try again!";
    }
  
    // Optionally store in localStorage if 'rememberMe' checked
    if (rememberMe) {
      localStorage.setItem("username", username);
    }
  });
  