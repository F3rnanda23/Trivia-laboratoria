const boton1 = document.querySelector('.boton1 input');
const container = document.querySelector('#primerapantalla');
const preguntas = document.querySelector('#segundapantalla');
const resultados = document.querySelector('.resultados');
const numCorrectas = document.querySelector('#num-correctas');
const botonHombres = document.querySelector('.primary-botton-hombre');

botonHombres.addEventListener('click', function() {
  window.location.href = 'https://profound-truffle-35a116.netlify.app/';
});

boton1.addEventListener('click', function() {
  container.style.display = 'none';  // al hacer click se va oculta.
  preguntas.style.display = 'block';
  
})

const boton = document.getElementById('boton');
boton.addEventListener('click', function() {
  const respuesta1 = document.querySelector('input[name="q1"]:checked'); // te trae el imput seleccionado (check)
  const respuesta2 = document.querySelector('input[name="q2"]:checked');
  const respuesta3 = document.querySelector('input[name="q3"]:checked'); 

  document.getElementById('ada').style.color = 'green';  // cuando es chequeado se pone green
  document.getElementById('nueva').style.color = 'green';
  document.getElementById('marie').style.color = 'green';
 


  
  let correctas = 0;

  if (respuesta1 && respuesta1.hasAttribute('data-correct')) {
    correctas++;
  
  } else {
    document.getElementById(respuesta1.id).style.color = 'red';

  }

  if (respuesta2 && respuesta2.hasAttribute('data-correct')) {
    correctas++;
  } else {
    document.getElementById(respuesta2.id).style.color = 'red';
  }
  
  if (respuesta3 && respuesta3.hasAttribute('data-correct')) { 
    correctas++;
  } else {
    document.getElementById(respuesta3.id).style.color = 'red';
  }



  if (correctas === 3) { // Cambio de 2 a 3
    alert('Amiga, todas las respuestas son correctas!');
  } else if (correctas === 2) {
    alert('Amiga, acertaste dos respuestas');
  } else if (correctas === 1) {
    alert('Amiga, solo acertaste una respuesta');
  } else {
    alert('Amiga, no acertaste ninguna respuesta');
  }

  numCorrectas.textContent = `Tuviste ${correctas} respuestas correctas`;

  //preguntas.style.display = 'none';
  resultados.style.display = 'block';
  
});

