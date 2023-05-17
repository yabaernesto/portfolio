const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
   card.onclick = function() {
      const videoId = card.getAttribute('id')
      window.location.href = `/video?id=${videoId}`
   }
}
