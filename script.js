document.addEventListener('DOMContentLoaded', function () {
  const faqsContainer = document.querySelector('.faq-container');
  const addButton = document.getElementById('addButton');
  const questionInput = document.getElementById('questionInput');
  const answerInput = document.getElementById('answerInput');


  function handleFaqToggle(faq) {
      const toggle = faq.querySelector('.faq-toggle');
      toggle.addEventListener('click', function () {
          if (faq.classList.contains('active')) {
              faq.remove();
          } else {
              faq.classList.add('active');
          }
      });
  }


  const existingFaqs = document.querySelectorAll('.faq');
  existingFaqs.forEach(handleFaqToggle);

  addButton.addEventListener('click', function () {

      const newFaq = document.createElement('div');
      newFaq.classList.add('faq');
      newFaq.innerHTML = `
          <h3 class="faq-title">${questionInput.value}</h3>
          <p class="faq-text">${answerInput.value}</p>
          <button class="faq-toggle">
              <i class="fas fa-chevron-down"></i>
              <i class="fas fa-times"></i>
          </button>
      `;


      handleFaqToggle(newFaq);


      faqsContainer.appendChild(newFaq);


      questionInput.value = '';
      answerInput.value = '';
  });
});
