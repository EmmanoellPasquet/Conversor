
const inputFeet = document.getElementById("inputFeet");
const inputMeters = document.getElementById("inputMeters");
const inputInches = document.getElementById("inputInches");
const inputcm = document.getElementById("inputCentimeter");
const inputYards = document.getElementById("inputYards");
const inputKilometers = document.getElementById("inputKilometers");
const inputMiles = document.getElementById("inputMiles");
const container = document.querySelector('.inner.-container');
const allInputs = document.querySelectorAll('input');
const clearBtn = document.querySelector('.clear');


function lengthConverter() {

  container.addEventListener('keyup', (e) => {
    const el = e.target;

    switch (el) {
      case inputFeet:
        inputMeters.value = (el.value / 3.2808).toFixed(2);
        inputInches.value = (el.value * 12).toFixed(2);
        inputcm.value = (el.value / 0.032808).toFixed();
        inputYards.value = (el.value * 0.33333).toFixed(2);
        inputKilometers.value = (el.value / 3280.8).toFixed(5);
        inputMiles.value = (el.value * 0.00018939).toFixed(5);
        break;

      case inputMeters:

        inputFeet.value = (el.value * 3.2808).toFixed(2);
        inputInches.value = (el.value * 39.370).toFixed(2);
        inputcm.value = (el.value / 0.01).toFixed();
        inputYards.value = (el.value * 1.0936).toFixed(2);
        inputKilometers.value = (el.value / 1000).toFixed(5);
        inputMiles.value = (el.value * 0.00062137).toFixed(5);
        break;

      case inputInches:
        inputFeet.value = (el.value * 0.083333).toFixed(3);
        inputMeters.value = (el.value / 39.370).toFixed(3);
        inputcm.value = (el.value / 0.39370).toFixed(2);
        inputYards.value = (el.value * 0.027778).toFixed(3);
        inputKilometers.value = (el.value / 39370).toFixed(6);
        inputMiles.value = (el.value * 0.000015783).toFixed(6);
        break;

      case inputcm:
        inputFeet.value = (el.value * 0.032808).toFixed(3);
        inputMeters.value = (el.value / 100).toFixed(3);
        inputInches.value = (el.value * 0.39370).toFixed(2);
        inputYards.value = (el.value * 0.010936).toFixed(3);
        inputKilometers.value = (el.value / 100000).toFixed(6);
        inputMiles.value = (el.value * 0.0000062137).toFixed(6);
        break;

      case inputYards:
        inputFeet.value = (el.value * 3).toFixed();
        inputMeters.value = (el.value / 1.0936).toFixed(2);
        inputInches.value = (el.value * 36).toFixed();
        inputcm.value = (el.value / 0.010936).toFixed();
        inputKilometers.value = (el.value / 1093.6).toFixed(5);
        inputMiles.value = (el.value * 0.00056818).toFixed(5);
        break;

      case inputKilometers:
        inputFeet.value = (el.value * 3280.8).toFixed();
        inputMeters.value = (el.value * 1000).toFixed();
        inputInches.value = (el.value * 39370).toFixed();
        inputcm.value = (el.value * 100000).toFixed();
        inputYards.value = (el.value * 1093.6).toFixed();
        inputMiles.value = (el.value * 0.62137).toFixed(2);
        break;

      case inputMiles:
        inputFeet.value = (el.value * 5280).toFixed();
        inputMeters.value = (el.value / 0.00062137).toFixed();
        inputInches.value = (el.value * 63360).toFixed();
        inputcm.value = (el.value / 0.0000062137).toFixed();
        inputYards.value = (el.value * 1760).toFixed();
        inputKilometers.value = (el.value / 0.62137).toFixed(2);
        break;

      default:
        break;
    }
  });

  clearBtn.addEventListener('click', () => {
    allInputs.forEach(el => {
      el.value = '';
    });
  });
}

function footerAnimate() {
  const text1 = document.querySelector('.gitText');
  const text2 = document.querySelector('.linkedinText');
  const iconGit = document.querySelector('.iconGit');
  const iconLinkedin = document.querySelector('.iconLinkedin');
  const winSize = window.innerWidth;

  text1.innerHTML = text1.textContent.replace(/\S/g, "<span>$&</span>");
  text2.innerHTML = text2.textContent.replace(/\S/g, "<span>$&</span>");

  const element = document.querySelectorAll('span');

  for (let i = 0; i < element.length; i++) {
    element[i].style.transform = "rotate(" + i * 18 + "deg)"
  }

  const show = function showIcon(e) {
    const el = e.type;
    const test = this.children;

    if (el === 'mouseover' || el === 'mouseout') {
      for (let i = 0; i < test.length; i++) {
        test[i].classList.contains('hidden') ? test[i].classList.remove('hidden') : test[i].classList.add('hidden');
      }
    }
  }

  winSize < 600 ? text1.classList.remove('hidden') + text2.classList.remove('hidden') : '';

  iconGit.addEventListener('mouseover', show, false);
  iconLinkedin.addEventListener('mouseover', show, false);
  iconGit.addEventListener('mouseout', show, false);
  iconLinkedin.addEventListener('mouseout', show, false);
}

footerAnimate();
lengthConverter(this.IdleDeadline, this.value);