function handleLogin(event) {
    event.preventDefault();
    const id = document.getElementById('login-id').value;
    const password = document.getElementById('login-password').value;
    
    alert(`로그인 정보:\n아이디: ${id}\n비밀번호: ${password}`);
}

function handleRegister(event) {
    event.preventDefault();
    const id = document.getElementById('register-id').value;
    const password = document.getElementById('register-password').value;
    const email = document.getElementById('register-email').value;
    
    alert(`회원가입 정보:\n아이디: ${id}\n비밀번호: ${password}\n이메일: ${email}`);
}

function showRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}
