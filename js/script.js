const login = document.querySelector('.btn-login');

async function init() {
  return fetch("http://localhost:3000/login/", {
    method: 'POST',
    mode: "cors",
    body: JSON.stringify({
      "username": "codeable",
      "password": "123456",
    }),
    headers: {
      "Content-type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => data);
}


login.addEventListener('click', async (event) => {
  const data = await (init());
  console.log(data.token)
});