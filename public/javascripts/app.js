/*
Student Name - Vidhi Patel
Student ID - 301290703
Date - 21-10-2022
*/
//testing script

console.log('Testing My WebSite !!');

//delete
"use strict";
(function () {
    function confirmDelete() {
        $("a.delete").on("click", function (event) {
            if (!confirm("Are you sure?")) {
                event.preventDefault();
                location.href = '/list';
            }
        });
    }
    function Start() {
        console.log("App Started");
        confirmDelete();
    }
    window.addEventListener("load", Start);
})();

if(getTitle == "Inventory List")
{
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                // Cancels the action
                event.preventDefault();
            }
        });
    }
}



