async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  }
}

function redirectToSignupPage(event) {
    document.location.replace("/signup/");
}

document.querySelector(".login-form").addEventListener("submit", loginFormHandler);
document.querySelector("#signupButton").addEventListener("click", redirectToSignupPage);