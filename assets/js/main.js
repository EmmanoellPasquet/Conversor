const input1 = document.querySelector('.-first');
const input2 = document.querySelector('.-second');
const combo1 = document.querySelector('.combo1');
const combo2 = document.querySelector('.combo2');
const focus = document.querySelector('.focus');

const focusEv = focus.querySelectorAll('input').forEach(item => {
  item.addEventListener('focusin', () => {
    input1.classList.add('focused')
    input2.classList.add('focused')
  });
  item.addEventListener('focusout', () => {
    input1.classList.remove('focused')
    input2.classList.remove('focused')
  })
});

const mt = 1;
const ft = 3;

function multiply(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

function getValue1() {
  input1.addEventListener('keyup', () => {
    input2.value = (input1.value * 3.28).toFixed(2)
  });
}

function getValue2() {
  input2.addEventListener('keyup', () => {
    input1.value = (input2.value / 3.28).toFixed(2)
  });
}
getValue1();
getValue2();




