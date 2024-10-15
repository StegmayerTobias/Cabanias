let lastScrollTop = 0;
let scrollTimeout;
const header = document.querySelector('header');
const hideDelay = 1500;

window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop === 0) {
    header.classList.remove('hidden');
  } else if (scrollTop > lastScrollTop) {
    // Si el usuario está scrolleando hacia abajo muestro el header
    header.classList.remove('hidden');
  } else if (scrollTop < lastScrollTop) {
    // Si el usuario está scrolleando hacia arriba oculto el header
    header.classList.remove('hidden');
  }

  clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(function () {
    if (scrollTop !== 0) {
      header.classList.add('hidden');
    }
  }, hideDelay);

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  document.addEventListener('mousemove', function (e) {
    if (e.clientY <= 50) {
      header.classList.remove('hidden');
    }
  });
});
