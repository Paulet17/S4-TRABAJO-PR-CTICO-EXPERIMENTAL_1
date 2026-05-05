const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  let valid = true;

  const nombre = document.getElementById('nombre');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const telefono = document.getElementById('telefono');

  if (nombre.value.trim().length < 3) {
    document.getElementById('errorNombre').style.display = 'block';
    valid = false;
  } else document.getElementById('errorNombre').style.display = 'none';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    document.getElementById('errorEmail').style.display = 'block';
    valid = false;
  } else document.getElementById('errorEmail').style.display = 'none';

  if (password.value.length < 6) {
    document.getElementById('errorPass').style.display = 'block';
    valid = false;
  } else document.getElementById('errorPass').style.display = 'none';

  const telRegex = /^[0-9]{10}$/;
  if (!telRegex.test(telefono.value)) {
    document.getElementById('errorTel').style.display = 'block';
    valid = false;
  } else document.getElementById('errorTel').style.display = 'none';

  if (valid) {
    alert('Formulario enviado correctamente');
    form.reset();
  }
});
