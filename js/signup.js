const signupForm = document.querySelector('.signup-form');

async function createNewUser(username, password, email, firstName, lastName) {
  const response = await fetch("http://localhost:3000/users", {
    body: JSON.stringify(
      {
        "user":
        {
          "username": `${username}`,
          "email": `${email}`,
          "first_name": `${firstName}`,
          "last_name": `${lastName}`,
          "password": `${password}`,
        }
      }
    ),
    method: 'POST',
    mode: 'cors',
    headers: {
      "Content-type": "application/json"
    }
  });

  const data = await response.json();
  if (!response.ok) {
    alert(data.errors.message);
  } else {
    alert(`Welcome ${data.firstName}!`);
    window.user = data;
    localStorage.setItem("user", JSON.stringify(data));
    window.location.href = "myBoards.html";
  }
}

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  const email = document.querySelector('#email').value;
  const firstName = document.querySelector('#first-name').value;
  const lastName = document.querySelector('#last-name').value;
  createNewUser(username, password, email, firstName, lastName);
});