const fades = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
  fades.forEach(fade => {
    const position = fade.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if(position < screenPosition) {
      fade.classList.add('show');
    }
  });
});

function showAnswer(button, text) {
  const card = button.closest('.quiz-card');
  const answer = card.querySelector('.answer');

  answer.textContent = text;
  answer.classList.add('show');
}