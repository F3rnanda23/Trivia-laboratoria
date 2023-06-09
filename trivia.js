const boton1 = document.querySelector('.boton1 input');
const container = document.querySelector('#primerapantalla');
const preguntas = document.querySelector('#segundapantalla');
const resultados = document.querySelector('.resultados');
const numCorrectas = document.querySelector('#num-correctas');
const botonHombres = document.querySelector('.primary-botton-hombre');
const nombreInput = document.querySelector('#nombre');


botonHombres.addEventListener('click', function() {
  window.location.href = 'https://profound-truffle-35a116.netlify.app/';
});

boton1.addEventListener('click', function() {
  container.style.display = 'none';  // al hacer click se va oculta.
  preguntas.style.display = 'block';
  const nombre = nombreInput.value;
  alert(`Hola ${nombre}!, vamos a jugar!!`);
})

const boton = document.getElementById('boton');
boton.addEventListener('click', function() {
  const respuesta1 = document.querySelector('input[name="q1"]:checked'); // te trae el imput seleccionado (check)
  const respuesta2 = document.querySelector('input[name="q2"]:checked');
  const respuesta3 = document.querySelector('input[name="q3"]:checked'); 

 
  let cantCorrectas = 0;                                               

  if(respuesta1 && respuesta2 && respuesta3)                            // SI LAS VARIABLES RESPUESTAS SON POSITIVAS SE HAN SELECCIONADO TODAS LAS ALTERNATIVAS
  {
    if (respuesta1 && respuesta1.hasAttribute('data-correct')) {
      cantCorrectas++;
    } else {
      document.getElementById(respuesta1.id).style.color = 'red';
    }

    if (respuesta2 && respuesta2.hasAttribute('data-correct')) {
      cantCorrectas++;
    } else {
      document.getElementById(respuesta2.id).style.color = 'red';
    }
    
    if (respuesta3 && respuesta3.hasAttribute('data-correct')) { 
      cantCorrectas++;
    } else {
      document.getElementById(respuesta3.id).style.color = 'red';
    }

    document.getElementById('ada').style.color = 'green';         
    document.getElementById('nueva').style.color = 'green';
    document.getElementById('marie').style.color = 'green';  

    if (cantCorrectas === 3) { 
      alert('Amiga, todas las respuestas son correctas!');
    } else if (cantCorrectas === 2) {
      alert('Amiga, acertaste dos respuestas');
    } else if (cantCorrectas === 1) {
      alert('Amiga, solo acertaste una respuesta');
    } else {
      alert('Amiga, no acertaste ninguna respuesta');
    }

    numCorrectas.innerHTML = `Tuviste ${cantCorrectas} respuestas correctas`;
    resultados.style.display = 'block';                                // MUESTRA MENSAJE PARA VOLVER A JUGAR

  }else{
    alert("Debes seleccionar todas las alternativas")
  }

});
  
  

