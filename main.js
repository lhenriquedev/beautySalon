// Abre e fecha o menu quando clicar o ícone.
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');
for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

// Clicar em um item do menu, esconder o menu.
const links = document.querySelectorAll('#header nav ul li a');
for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  });
}

// Mudar o header da página quando der scroll
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;
const changeHeaderWhenScroll = () => {
  if (window.scrollY >= navHeight) {
    // scroll é maior do que a altura do header
    header.classList.add('scroll');
  } else {
    // scroll é menor do que a altura do header
    header.classList.remove('scroll');
  }
};

// Testimonial slider swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});

// ScrollReveal: mostrar elementos quando der scroll na página!

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});

scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
);

// Botão voltar para o topo.

const backToTopButton = document.querySelector('.back-to-top');
const backToTop = () => {
  if (window.scrollY >= 560) backToTopButton.classList.add('show');
  else backToTopButton.classList.remove('show');
};

// Menu ativo conforme a seção visível na tela
const sections = document.querySelectorAll('main section[id]');

const activateMenuAtCurrentSection = () => {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active');
    }
  }
};

// When Scroll
window.addEventListener('scroll', function () {
  activateMenuAtCurrentSection();
  backToTop();
  changeHeaderWhenScroll();
});
