//botones
const btnSave = document.querySelector('#btn-save');
const btnEdit = document.querySelector('#btn-edit');
const btnDelete = document.querySelector('#btn-delete');
const btnCancel = document.querySelector('#btn-cancel');

//inputs
let inputUsername = document.querySelector('#username');
let inputEmail = document.querySelector('#email');
let inputFirstName = document.querySelector('#first-name');
let inputLastName = document.querySelector('#last-name');

//data user
const user = JSON.parse(localStorage.getItem('user'));

const showUserData = () => {
  inputUsername.value = user.username;
  inputEmail.value = user.email;
  inputFirstName.value = user.firstName;
  inputLastName.value = user.lastName;
}

function removeClassDisable() {
  document.querySelectorAll('.form-input').forEach(el => {
    if (el.classList.contains('disable')) {
      el.classList.remove('disable');
    } else {
      console.log("I don't have the class disable");
    }
  });
}

async function updateUser(params) {
  const response = await fetch(`http://localhost:3000/users/${user.id}`, {
    body: JSON.stringify(
      {
        "user":
        {
          "username": `${inputUsername.value}`,
          "email": `${inputEmail.value}`,
          "first_name": `${inputFirstName.value}`,
          "last_name": `${inputLastName.value}`,
        }
      }
    ),
    method: 'PATCH',
    mode: 'cors',
    headers: {
      "Content-type": "application/json",
      "Authorization": `Token token=${user.token}`,
    }
  });

  const data = await response.json();
  if (!response.ok) {
    alert(data.errors.message);
  } else {
    alert(`${data.firstName}, you have updated your data corectly!`);
    // window.user = data;
    localStorage.setItem("user", JSON.stringify(data));
    window.location.href = "profile.html";
  }
}

async function deleteUser() {
  await fetch(`http://localhost:3000/users/${user.id}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      "Authorization": `Token token=${user.token}`,
    }
  });
  localStorage.clear();
  window.location.href = "login.html";
}

async function closeSession() {
  await fetch("http://localhost:3000/logout", {
    method: 'POST',
    mode: 'cors',
    headers: {
      "Authorization": `Token token=${user.token}`,
    }
  });
  localStorage.clear();
  window.location.href = "login.html";
}

btnEdit.addEventListener('click', (event) => {
  event.preventDefault();
  btnSave.classList.remove('hide');
  btnEdit.classList.add('hide');
  btnCancel.classList.remove('hide');
  btnDelete.classList.add('hide');
  removeClassDisable();
});

btnSave.addEventListener('click', async event => {
  event.preventDefault();
  await updateUser();
});

btnDelete.addEventListener('click', event => {
  event.preventDefault();
  const check = confirm('Are you sure do you want delete your user account?');
  if (check) deleteUser();
});

document.querySelector('#logout').addEventListener('click', event => {
  event.preventDefault();
  const check = confirm('Do you want logout?');
  if (check) closeSession();
});

showUserData();