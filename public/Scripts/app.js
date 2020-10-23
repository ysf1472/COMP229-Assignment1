// const { Button } = require("bootstrap");
// const { event } = require("jquery");

// IIFE -- Immediately Invoked Function Expression
// (function(){

//     function Start()
//     {
//         console.log("App Started...");

//         let deleteButtons = document.querySelectorAll('.btn-danger');
        
//         for(button of deleteButtons)
//         {
//             button.addEventListener('click', (event)=>{
//                 if(!confirm("Are you sure?")) 
//                 {
//                     event.preventDefault();
//                     window.location.assign('/book-list');
//                 }
//             });
//         }
//     }

//     window.addEventListener("load", Start);

// })();
(function () {
    function Start() {
      console.log("App Started...");
      let dangerButtons = document.getElementsByClassName("btn-danger");
      // Adds conformation for deleting buttons
      for (const button of dangerButtons) {
        button.addEventListener("click", (event) => {
          if (!confirm("Are you sure?")) {
            event.preventDefault();
            location.href = "/book-list";
          }
        });
      }
    }
    window.addEventListener("load", Start);
  })();
//document.getElementById("nextBtn").addEventListener("click", check, false);