const inputElement = document.querySelector('input');

function recuperer() {
    inputElement.addEventListener('keyup', function(event) {
      const inputValue = event.target.value; 
      console.log(inputValue); 
    });
}