const submit = document.getElementById('submit');
const email = document.getElementById('email');
const password = document.getElementById('password');

submit.addEventListener('click', (btn) => {
  btn.preventDefault();
  if (email.value === 'webdasturchi2223@gmail.com' && password.value === '22442432423') {
    alert('Siz muvaffaqiyatli kirdingiz!');
    window.location.href = './index.html';
  } else {
    alert('Foydalanuvchi nomi yoki parol noto\'g\'ri');
  }
});
