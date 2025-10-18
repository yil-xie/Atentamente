const openBtn = document.getElementById('openBtn');
const envelope = document.getElementById('envelope');
let isOpen = false;

openBtn.addEventListener('click', () => {
  isOpen = !isOpen;
  envelope.classList.toggle('open', isOpen);
  openBtn.textContent = isOpen ? "Close Letter" : "Open Letter";
});
