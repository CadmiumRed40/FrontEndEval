const modalContainer = document.getElementById("modalContainer");
const modalButton = document.getElementById("modalButton");
const closeModalButton = document.getElementById("closeModalButton");
const acceptOfferButton = document.getElementById("acceptOfferButton");
const acceptedStatement = document.getElementById("acceptedStatement");

modalButton.addEventListener('click', () => { 
    modalContainer.style.display = 'block';
});

closeModalButton.addEventListener('click', () =>{
    modalContainer.style.display = 'none';
});

modalContainer.addEventListener('click', (e) =>{
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
});

acceptOfferButton.addEventListener('click', () => {
    modalButton.style.display = 'none';
    acceptedStatement.style.display = 'block';
});


