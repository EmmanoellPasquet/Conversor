// // Capturar evento de submit do formulário
// const form = document.querySelector('#formulario');

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   const inputPeso = e.target.querySelector('#peso');
//   const inputAltura = e.target.querySelector('#altura');

//   const peso = Number(inputPeso.value);
//   const altura = Number(inputAltura.value);

//   if (!peso) {
//     setResultado('Peso inválido', false);
//     return;
//   }

//   if (!altura) {
//     setResultado('Altura inválida', false);
//     return;
//   }

//   const imc = getImc(peso, altura);
//   const nivelImc = getNivelImc(imc);

//   const msg = `Seu IMC é ${imc} (${nivelImc}).`;

//   setResultado(msg, true);
// });

// function getNivelImc(imc) {
//   const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
//     'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

//   if (imc >= 39.9) return nivel[5];
//   if (imc >= 34.9) return nivel[4];
//   if (imc >= 29.9) return nivel[3];
//   if (imc >= 24.9) return nivel[2];
//   if (imc >= 18.5) return nivel[1];
//   if (imc < 18.5) return nivel[0];
// }

// function getImc(peso, altura) {
//   const imc = peso / altura ** 2;
//   return imc.toFixed(2);
// }

// function criaP() {
//   const p = document.createElement('p');
//   return p;
// }

// function setResultado(msg, isValid) {
//   const resultado = document.querySelector('#resultado');
//   resultado.innerHTML = '';

//   const p = criaP();

//   if (isValid) {
//     p.classList.add('paragrafo-resultado');
//   } else {
//     p.classList.add('bad');
//   }

//   p.innerHTML = msg;
//   resultado.appendChild(p);
// }

// const elementos = [
//   { tag: 'p', texto: 'Frase 1' },
//   { tag: 'div', texto: 'Frase 2' },
//   { tag: 'footer', texto: 'Frase 3' },
//   { tag: 'section', texto: 'Frase 4' }
// ];

// const container = document.querySelector('.container');
// const div = document.createElement('div')


// for (let i = 0; i < elementos.length; i++) {
//   let { tag, texto } = elementos[i];
//   let bloco = document.createElement(tag);
//   bloco.innerHTML = texto;
//   div.appendChild(bloco);
// }

// container.appendChild(div);


// const frutas = ['Pera', 'Maçã', 'Uva'];

// for (let i in frutas) {
//   console.log(frutas[i])
// }

// const carro = {
//   marca: 'Ford',
//   modelo: 'Fiesta',
//   cor: 'Verde',
//   ano: '2022',
//   motor: '2.0'
// };

// for (let i in carro) {
//   console.log(i, carro[i])
// }

// const paragrafos = document.querySelector('.paragrafos');
// const ps = paragrafos.querySelectorAll('p');

// const bodyStyles = getComputedStyle(document.body);
// const backColor = bodyStyles.backgroundColor;


// for (let i of ps) {
//   console.log(ps, 'Inside')
//   i.style.backgroundColor = backColor;
//   i.style.color = "white"
// }




// maiorNumero = (n1, n2) => (n1 > n2) ? n1 : n2;

// ePaisagem = (lar, alt) => (lar > alt);

// console.log(ePaisagem(100, 20));

// fizzBuzz = (n) => {
//   if (n % 3 === 0 && n % 5 === 0) return '- FizzBuzz';
//   if (n % 3 === 0) return '- Fizz';
//   if (n % 5 === 0) return '- Buzz';
//   return n;
// }

// for (let i = 0; i < 100; i++) {
//   console.log(i, fizzBuzz(i));
// }


function mostraHora() {
  let data = new Date();
  return data.toLocaleTimeString('pt-BR', {
    hour12: false
  });
}
const timer = setInterval(function () {
  console.log(mostraHora());
}, 1000);
setTimeout(function () {
  clearInterval(timer);
}, 3000);
setTimeout(function () {
  console.log('Olá mundo!');
}, 5000);