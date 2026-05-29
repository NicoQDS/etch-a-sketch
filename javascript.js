let dimGrid = 16
let rowDivs = new Array();
let arrDivs = new Array();
const gridContainer = document.querySelector("#grid-container");



// Function to populate the div-container with divs
function createGrid(num){
    rowDivs = []
    arrDivs = []
    // Creating an array containing the number of divs according to the parameter received
    for (let i = 0; i < num; i++) { 
        for (let j = 0; j < num; j++){
            rowDivs.push(document.createElement("div"))
        }
        arrDivs.push(rowDivs)
        rowDivs = []
    }

    // Lets populate #grid-container
    while(true){
        // do something
    }
}

// Running the function
createGrid(dimGrid)
