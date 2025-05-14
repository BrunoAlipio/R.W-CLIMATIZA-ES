const slide = document.getElementById('carousel-slide');
  const images = slide.getElementsByTagName('video');
  let index = 0;

  setInterval(() => {
    index++;
    if (index >= images.length) index = 0;
    slide.style.transform = `translateX(-${index * 100}%)`;
  }, 3500);

  function logado() {
    const apagado = document.getElementById('apagado')

    apagado.classList.add('janela')
  }
