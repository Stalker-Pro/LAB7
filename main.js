'use strict'; ///строгий режим в js

const container = document.querySelector('.place'); /// input.value чтобы получить значения с input
const input = document.querySelector('.input');

const triangleBtn = document.querySelector('.triangle');
const squareBtn = document.querySelector('.square');
const circleBtn = document.querySelector('.circle');



const drawSquare = `
  <div class="addSquare"></div>
`;

const drawTriangle = `
  <div class="addTriangle"></div>
`;

const drawCircle = `
  <div class="addCircle"></div>
`;

triangleBtn.addEventListener('click', (e) => {
  const count = Number(input.value);

  if (!count) return;

  for (let i = 0; i < count; i++) {
    container.insertAdjacentHTML("beforeend",drawTriangle);
  }
})


squareBtn.addEventListener('click', (e) => {
  const count = Number(input.value);

  if (!count) return;

  for (let i = 0; i < count; i++) {
    container.insertAdjacentHTML("beforeend",drawSquare);
  }
})


circleBtn.addEventListener('click', (e) => {
  const count = Number(input.value);

  if (!count) return;

  for (let i = 0; i < count; i++) {
    container.insertAdjacentHTML("beforeend",drawCircle);
  }
})


// const button1 = document.querySelector('.button--1');
// const button2 = document.querySelector('.button--2');
// const button3 = document.querySelector('.button--3');
// const dog = document.querySelector('.dog');
// const cat = document.querySelector('.cat');
// const imageDog = document.querySelector('.image-dog');
// const imageCat = document.querySelector('.image-cat');


// button1.addEventListener('click', () => {
//   cat.classList.remove('active');
//   dog.classList.remove('active');
//   imageDog.classList.remove('active');
//   imageCat.classList.remove('active');

//   imageCat.classList.remove('none');
//   cat.classList.remove('none');
//   dog.classList.remove('right');
// });

// button2.addEventListener('click', () => {
//   cat.classList.add('active');
//   dog.classList.add('active');
//   imageDog.classList.add('active');
//   imageCat.classList.add('active');

//   imageCat.classList.remove('none');
//   cat.classList.remove('none');
//   dog.classList.remove('right');
// })

// button3.addEventListener('click', () => {
//   cat.classList.add('none');

//   dog.classList.add('right');

//   imageDog.classList.add('active');
//   imageCat.classList.add('none');
// })
