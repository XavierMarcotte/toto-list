const inputElement = document.querySelector('input');
const form = document.querySelector("#form");
const todo = document.querySelector('.todo')

form.addEventListener("submit", function(event) {
  event.preventDefault();
});

function ajouter() {
  const nouveauxTitres = document.querySelectorAll('.todo h2');
  nouveauxTitres.forEach(titre => {
    titre.addEventListener('click', () => {
      titre.classList.toggle('checked');
    });
  });
}

inputElement.addEventListener('keydown', function(event) {
  if (event.key === "Enter") {
    event.preventDefault;
    const inputValue = event.target.value; 
    const note = document.createElement('h2');
    note.textContent = inputValue;
    todo.appendChild(note)
    ajouter();
    event.target.value ='';
  }
});





