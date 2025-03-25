document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', async function (e) {
            e.preventDefault(); // Prevent default form submission

            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            // Check if fields are empty
            if (!username || !password) {
                alert('Please enter both username and password.');
                return;
            }

            try {
                const response = await fetch('http://localhost:3000/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });

                const data = await response.json();

                if (data.success) {
                    localStorage.setItem('isLoggedIn', 'true');
                    alert('Login successful');
                    window.location.href = '/index.html';
                } else {
                    localStorage.removeItem('isLoggedIn');
                    alert(data.message || 'Invalid username or password');
                }
            } catch (error) {
                console.error('Error:', error);
                localStorage.removeItem('isLoggedIn');
                alert('An error occurred. Please try again.');
            }
        });
    }
});