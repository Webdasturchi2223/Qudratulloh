const submit = document.getElementById('submit');
const username = document.getElementById('username');
const password = document.getElementById('password');

submit.addEventListener('click', (btn) => {
  btn.preventDefault();
  if (username.value === 'admin' && password.value === '1234') {
    alert('Siz muvaffaqiyatli kirdingiz!');
    window.location.href = './index.html';
  } else {
    alert('Foydalanuvchi nomi yoki parol noto\'g\'ri');
  }
});
