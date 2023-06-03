const modalContainer = document.getElementById("modalContainer");
const modalButton = document.getElementById("modalButton");


modalButton.addEventListener('click', () => { 
    console.log('clicked!')
    modalContainer.classList.toggle("active");
})


