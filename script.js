//  variables
const form = document.querySelector("form");
const div = document.querySelectorAll(".bob");
const list = document.querySelector("ul");
const test = document.querySelectorAll('.test')


//Vérification si l'input est vide, si il ne l'est pas, on créer l'élement avec comment contenu l'input.value
form.addEventListener("submit", (e) => {
  if (item.value === '') {
    alert("Ecrivez vos tâches à réaliser")
  }
  else {
    e.preventDefault();
    create();
    data();
    item.value = "";
  }
  
});

//évenement au clique du bouton : nous permet de valdier la tache que nous venons de terminer et la supprimer quand elle est recliquéé

list.addEventListener("click", (e) => {
  const clickedItem = e.target;
  if (clickedItem.classList.contains('test')) {
    const parentDiv = clickedItem.parentNode;
    // parentNode nous permet d'avoir l'élement parent
    if (parentDiv.classList.contains("checked")) {
      parentDiv.remove();
      data();
    } else {
      parentDiv.classList.add("checked");
      clickedItem.textContent = 'Terminé'
      clickedItem.classList.add('rouge');
      data();
    }
  }
});

//  deux evenements quand on survole le bouton et quand la souris n'est plus dessus
list.addEventListener("mouseover", (e) => {
    const clickedItem = e.target;
    if(clickedItem.textContent === 'En cours'){
      clickedItem.textContent = 'Terminé ?'
    }
    else if(clickedItem.textContent === 'Terminé'){
      clickedItem.textContent = 'Supprimer ?'
    }
  });


list.addEventListener("mouseout", (e) => {
  const clickedItem = e.target;
  if(clickedItem.textContent === 'Terminé ?'){
    clickedItem.textContent = 'En cours'
  }
  else if(clickedItem.textContent === 'Supprimer ?'){
    clickedItem.textContent = 'Terminé'
  }
});


// fonction pour créer une div avec bouton et <li> 
function create(){
  const newDiv = document.createElement("div")
  newDiv.classList.add('bob')
  const newLi = document.createElement("li");
  const button = document.createElement("button")
  button.classList.add('test')
  newLi.textContent = `${item.value}`;
  button.textContent = 'En cours';
  newDiv.appendChild(newLi);
  newDiv.appendChild(button);
  list.appendChild(newDiv)
}

//LocalStorage de notre todolist

function data() {
  localStorage.setItem("data", list.innerHTML);
}

function task() {
  list.innerHTML = localStorage.getItem("data")
}
task();