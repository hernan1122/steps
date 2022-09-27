const steps = document.querySelectorAll('.step');
const barra = document.getElementById('barra');
const prevButtom = document.getElementById('prev');
const nextButtom = document.getElementById('next');
const text = document.getElementById('text');

let currentStep = 1;

nextButtom.addEventListener('click', () => {
  if (currentStep < steps.length) {
    currentStep++;
    updateProgress();
  }
});

prevButtom.addEventListener('click', () => {
  if (currentStep > 1) {
    currentStep--;
    updateProgress();
  }
});

// funcion de actualizar los pasos
function updateProgress() {
  //actualizar los steps
  steps.forEach((step, index) => {
    if (index < currentStep) {
      //si la posicion es menor al nro de la pelotita
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });

  // actualizar la barra
  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;
  barra.style.width = progress + '%';

  // activar o desactivar botones
  if (currentStep === steps.length) {
    nextButtom.disabled = true;
  } else if (currentStep === 1) {
    prevButtom.disabled = true;
  } else {
    prevButtom.disabled = nextButtom.disabled = false;
  }

  addTexts();
}

function addTexts() {
  switch (currentStep) {
    case 2:
      text.innerText = "Text two";
      console.log('hola');
      break;
    case 3:
      text.innerText = "Text three";
      break;
    case 4:
      text.innerText = "Text four";
      break;
    case 5:
      text.innerText = "Text five";
      break;
    case 1:
      text.innerText = "Text one";
      break;
  }
}