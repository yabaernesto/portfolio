const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
   card.onclick = function() {
      const videoId = card.getAttribute('id')
      modalOverlay.classList.add('active')
      modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoId}`
   }
}

const close = document.querySelector('.close-modal')
close.onclick = function() {
   modalOverlay.classList.remove('active')
   modalOverlay.querySelector('iframe').src = ''
}
