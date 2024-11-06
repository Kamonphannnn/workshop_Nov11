const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});



document.getElementById('loginForm').addEventListener('submit', submitLogin);

function submitLogin(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Application-Key': 'TUa446489ced783d84f0dcf6912b335af7ffec95e1ee07c930d03d8142475b2ee76dd1afa5d3ecde5d2d2c8de394f2e088'
    },
    body: JSON.stringify({ 
      UserName : username, 
      PassWord : password 
    })
  })
  .then(response => response.json())
  .then(data => {
    const messageElement = document.getElementById('message');
    if(data.message === 'Success'){
      messageElement.innerHTML = `
        <p>Login status: ${data.message}</p>
        <p>Hello ${data.displayname_en}</p>
        <p>Username: ${data.username}</p>
        <p>Email: ${data.email}</p>
        <p>Faculty: ${data.faculty}</p>
        <p>Department: ${data.department}</p>
      `;
    } else {
      messageElement.innerText = 'Login status: ' + data.message;
    }
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('message').innerText = 'An error occurred: ' + error.message;
  });
}

function call_REST_API_Hello() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const url = (
        'http://localhost:8080/hello?' +
        new URLSearchParams({ myName: username, lastName: password}).toString()
      );
    
    fetch(url)
    .then(response => response.text())
    .then(text => {
        document.getElementById('message').innerText = text;
    })
    .catch(error => console.error('Error:', error));
}

