let modalBg = document.querySelector('.modal-bg');
let modalClose = document.querySelector('.close-button')

let modalOpen = document.querySelectorAll('.order');
for (let i = 0; i < modalOpen.length; i++) {
  modalOpen[i].addEventListener('click', function () {
    modalBg.classList.add('bg-active');
  });

    modalClose.addEventListener('click', function () {
      modalBg.classList.remove('bg-active');
    
    })
}