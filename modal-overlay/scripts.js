const modalContainer = document.getElementById("modalContainer");
const modalButton = document.getElementById("modalButton");
const closeModal = document.getElementById("closeModalButton")
const bodyContainer = document.getElementById("bodyContainer")
const acceptedButton = document.getElementById("acceptOffer")
const accepted = document.getElementById("AcceptedStatement")


modalButton.addEventListener('click', () => { 
    console.log('clicked!')
    modalContainer.classList.toggle("active");
});

closeModal.addEventListener('click', () =>{
    console.log('closed!')
    modalContainer.classList.toggle("active");
});



bodyContainer.addEventListener('click', (e) =>{
    if (e.target === modalContainer){
    console.log('clicked on modal')
    } else {
        console.log('clicked outside modal')
        modalContainer.classList.toggle("inactive");
    }
});






