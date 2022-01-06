var modals = document.querySelectorAll('.modal');
let spans = document.querySelectorAll('.close');
let btn = document.querySelectorAll("button.modal-button");
let imgModal = document.getElementById("img-modal");
var img = document.querySelector("#tedx-img");
var modalImg = document.getElementById("img01");


// Opens image modal
img.addEventListener("click", Event => {
   imgModal.style.display = "block";
   modalImg.src = Event.target.src;
})

// Opens other modals
for (let i = 0; i < btn.length; i++) {
   btn[i].addEventListener("click", Event => {
      let modal = document.querySelector(Event.target.getAttribute("href"));
      modal.style.display = "block";
   })
}
   
// When the user clicks on <span> (x), close the modal
for (let i = 0; i < spans.length; i++) {
 spans[i].addEventListener("click", () => {
    for (let j = 0; j < modals.length; j++) {
      modals[j].style.display = "none";    
    }
 })
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", Event => {
    console.log(Event.target.classList);
    if (Event.target.classList.contains('modal')) {
     for (let j = 0; j < modals.length; j++) {
         modals[j].style.display = "none";    
       }
    }
})
