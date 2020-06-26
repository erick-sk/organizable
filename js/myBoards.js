// local storage

// Board section
const modal = document.querySelector('#myModal');
const modalBtn = document.querySelector('.boards__modal-button');
const span = document.getElementsByClassName('close')[0];

modalBtn.onclick = function() {
  modal.style.display = 'block';
};

span.onclick = function() {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

const boardBtn = document.getElementById('board__create-button');
boardBtn.addEventListener('click', createBoard);

function createBoard() {
  const boardTitle = document.getElementById('modal__title');
  const board = document.createElement('div');
  board.classList.add('board');
  board.innerHTML = `
    <h1 id="board-title">${boardTitle.value}</h1>
    <div class="board__star-container">
      <img class="board__star" src="assets/star.svg" alt="" />
    </div>
  `;
  document.querySelector('.boards-container').prepend(board);
}
