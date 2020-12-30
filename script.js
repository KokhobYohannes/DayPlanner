var clock = document.getElementById('clock');
var storageInput = document.querySelectorAll('.storage');
var text = document.querySelectorAll('.row');
var button = document.querySelectorAll('.input-group-append');
var storedInput = localStorage.getItem('textinput');


setInterval(() => {
    var now = moment();
    var viewTime = now.format("dddd, MMMM Do YYYY");
    clock.textContent = viewTime;
}, 1000);


//function to change colors//

const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
    let
        rowIdString = row.id,
        rowHour;
    if (rowIdString) {
        rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
        // Compares row id to current hour and sets color accordingly
        if (currentHour === rowHour) {
            setColor(row, "salmon");
        } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
            setColor(row, "lightgreen");
        } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
            setColor(row, "lightgrey");
        } else {
            setColor(row, "white");
        }
    }
});

function setColor(element, color) {
    element.style.backgroundColor = color;
}




if (storedInput) {
    text.textContent = storedInput
}

// console.log(storedInput)
// console.log(storageInput)
// storageInput.addEventListener('input', text => {
//     text.textContent = text.target.value
// })

text.textContent= 1
console.log(text.textContent, "1")
// saves task data when entered in input field
var saveToLocalStorage = (e) => {    
    var id = e.target.getAttribute('data-id');   
    if( id == null )
        id = e.target.parentElement.getAttribute('data-id');
        
    if( id == null)
        return;

    var value = document.getElementById(id).value;
//
    console.log(id, value);
    localStorage.setItem("plan_" + id, value);
}

console.log("button", button)

button.forEach( i => { 
    i.addEventListener("click", event => saveToLocalStorage(event)); 
});
// get user plan data from local stroage betwen 09 ~ 17
for(i = 9; i < 18; i++)
{
    var id = i + "";
    if( id < 10 )
        id = "0" + i;

    var text = localStorage.getItem("plan_" + id);
    console.log(id, text);
    document.getElementById(id).value = text;
}



console.log(storageInput, "testing")
storageInput.forEach( storage => { 
    storage.addEventListener("click", event => saveToLocalStorage(event))
})