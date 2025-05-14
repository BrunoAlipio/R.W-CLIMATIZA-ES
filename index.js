const slide = document.getElementById('carousel-slide');
const images = slide.getElementsByTagName('img');
  let index = 0;

  setInterval(() => {
    index++;
    if (index >= images.length) index = 0;
    slide.style.transform = `translateX(-${index * 100}%)`;
  }, 1500);


  const avaliacoes = document.querySelectorAll('.avaliacao');
let offset = 0;
let passos = 0;
const deslocamento = 450; // distância por movimento
const maxPassos = 6;

setInterval(() => {
  if (passos < maxPassos) {
    offset += deslocamento;
    passos++;
  } else {
    offset = 0;
    passos = 0;
  }

  avaliacoes.forEach(avaliacao => {
    avaliacao.style.transform = `translateX(-${offset}px)`;
  });
}, 3000);
