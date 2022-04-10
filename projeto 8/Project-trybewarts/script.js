const email = document.getElementById('email');
const senha = document.getElementById('senha');
const botao = document.getElementById('botao');
const botao2 = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');

function login() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
botao2.disabled = true;

function botaoid() {
  if (checkbox.checked === false) {
    botao2.disabled = true;
  } else {
    botao2.disabled = false;
  }
}

botao.addEventListener('click', login);
document.getElementById('agreement').addEventListener('click', botaoid);
