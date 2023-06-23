//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const rememberCheckbox = document.getElementById('checkbox');
  const submitButton = document.getElementById('submit');
  const existingButton = document.getElementById('existing');

  // Check if there are saved details in local storage
  if (localStorage.getItem('username') && localStorage.getItem('password')) {
    existingButton.style.display = 'block';
  }

  // Event listener for submit button
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (rememberCheckbox.checked) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }

    alert('Logged in as ' + username);
  });

  // Event listener for existing user button
  existingButton.addEventListener('click', () => {
    const savedUsername = localStorage.getItem('username');
    alert('Logged in as ' + savedUsername);
  });
});
