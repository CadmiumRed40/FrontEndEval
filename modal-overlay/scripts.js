const modalContainer = document.getElementById("modalContainer");
const modalButton = document.getElementById("modalButton");
const closeModal = document.getElementById("closeModalButton")


modalButton.addEventListener('click', () => { 
    console.log('clicked!')
    modalContainer.classList.toggle("active");
})

closeModal.addEventListener('click', () =>{
    console.log('closed!')
    modalContainer.classList.toggle("inactive");
})




