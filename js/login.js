// login form
const loginForm = document.querySelector('.login-form');
// const username = document.querySelector('#username');
// const password = document.querySelector('#password');

async function getUser(username, password) {
  const response = await fetch('http://localhost:3000/login/', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });

  const data = await response.json();
  if (!response.ok) {
    // console.error(data);
    alert(data.errors.message);
  } else {
    window.user = data;
    localStorage.setItem('user', JSON.stringify(data));
    window.location.href = './myBoards.html';
  }
}

loginForm.addEventListener('submit', async event => {
  event.preventDefault();
  const username = event.target[0].value;
  const password = event.target[1].value;
  await getUser(username, password);
});
