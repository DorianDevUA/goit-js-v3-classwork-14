/*
 * Сhatty events
 * Прийоми throttling та debouncing з Lodash
 */

/*
 * Mousemove та throttle
 */
// =======================================================================

// const coordsOutputRef = document.querySelector('.js-coords');
// let mouseMoveCbInvocationCounter = 0;

// window.addEventListener('mousemove', _.throttle(onMouseMove, 300));
// // window.addEventListener('mousemove', _.debounce(onMouseMove, 300));

// const onMouseMove = evt => {
//   mouseMoveCbInvocationCounter += 1;
//   console.log(`Спрацювання події: ${mouseMoveCbInvocationCounter}`);

//   coordsOutputRef.textContent = `
//     К-сть викликів onMouseMove: ${mouseMoveCbInvocationCounter},
//     X: ${evt.clientX},
//     Y: ${evt.clientY}
//   `;
// };

// =======================================================================

/*
 * Input та debounce
 */
const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');
let inputCbInvocationCounter = 0;

inputRef.addEventListener('input', _.debounce(onInputChange, 300));

function onInputChange(evt) {
  inputCbInvocationCounter += 1;
  console.log(`Спрацювання події: ${inputCbInvocationCounter}`);

  outputRef.textContent = `
    К-сть викликів onInputChange: ${inputCbInvocationCounter},
    Значення: ${evt.target.value}
  `;
}
