const onSignUp = (e) => {
  e.preventDefault();
  let userInfo = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    password: document.getElementById("passwd").value,
    confirmPassword: document.getElementById("confirm-passwd").value,
  };

  if (isValid(userInfo)) {
    let data = JSON.parse(localStorage.getItem("userInfo"));
    if (!data) {
      data = [];
    }
    data.push(userInfo);
    localStorage.setItem("userInfo", JSON.stringify(data));
    //userInfoArray.push(userInfo);
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
    document.getElementById("passwd").value = "";
    document.getElementById("confirm-passwd").value = "";
    alert("your Account has beem created");
    hideLoginForm();
    return;
  }
};

function isValid(userInfo) {
  let { name, email, phone, address, password, confirmPassword } = userInfo;
  let valid = false;

  if (name) {
    valid = true;
  } else {
    valid = false;
  }

  if (email) {
    valid = true;
  } else {
    valid = false;
  }

  if (phone.length === 10) {
    valid = true;
  } else {
    alert("Phone no should be 10 digits long.");
    valid = false;
    return;
  }

  if (address) {
    valid = true;
  } else {
    valid = false;
  }
  if (password != confirmPassword) {
    alert("passwords do not match.");
    valid = false;
    return;
  } else {
    valid = true;
  }

  if (confirmPassword) {
    valid = true;
  } else {
    valid = false;
  }
  if (
    name === "" ||
    email === "" ||
    phone === "" ||
    address === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("please fill all inputs");
    valid = false;
    return;
  } else {
    valid = true;
  }

  return valid;
}

const onLogin = (e) => {
  e.preventDefault();

  let name = document.getElementById("login-name").value;
  let password = document.getElementById("login-passwd").value;

  if (name === "" && password === "") {
    alert("please fill all inputs.");
    return;
  }
  let user = JSON.parse(localStorage.getItem("userInfo"));
  if (!user) {
    return;
  }
  for (let i = 0; i < user.length; i++) {
    console.log(user[i]);
    if (user[i].name === name && user[i].password === password) {
      alert("Login Successful.");
      var output = document.getElementById("show-name");
      output.innerHTML = `
      <h1>Hello ${name}</h1>
      `;
      showOutput();
      return;
    }
  }

  // if (loginValidation(userData)) {
  //   let user = JSON.parse(localStorage.getItem("userInfo"));
  //   if (!user) {
  //     user = [];
  //   }
  //   user.push(userData);
  // }

  return;
};

function loginValidation(userData, user) {
  if (userData.name === user.name || userData.password === user.password) {
    alert("user exists");
    return;
  } else {
    alert("user does not exists");
  }
}

function showSignUpForm() {
  document.getElementById("container-signup").style.display = "block";
  document.getElementById("logout").style.display = "none";
  document.getElementById("container-login").style.display = "none";
}
function hideLoginForm() {
  document.getElementById("container-signup").style.display = "none";
  document.getElementById("container-login").style.display = "block";
  document.getElementById("logout").style.display = "none";
}

function showOutput() {
  document.getElementById("output").style.display = "block";
  document.getElementById("container-login").style.display = "none";
  document.getElementById("container-signup").style.display = "none";
}

function onLogout() {
  document.getElementById("logout").style.display = "none";
  document.getElementById("container-login").style.display = "none";
  document.getElementById("container-signup").style.display = "block";
  document.getElementById("output").style.display = "none";
}
