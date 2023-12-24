/////////////////////////////////////////////////////////

//Made Debouncer = not sendiing the request quickly 

let timeout;

function debounced(){
clearTimeout(timeout)
timeout=setTimeout(()=>{
    populateDiv()
},2000)
}

 /////////////////////////////////////////////////////////

async function populateDiv() {
    const a = parseFloat(document.getElementById("firstNumber").value);
    const b = parseFloat(document.getElementById("secondNumber").value);

    // Fetch data from the server
    const response = await fetch(`http://localhost:3000/sum?a=${a}&b=${b}`);
    const data = await response.text();

    // Update the div with the result
    const element = document.getElementById("finalSum");
    element.innerText = `Sum: ${data}`;
}

document.getElementById("firstNumber").addEventListener("input", debounced); 
document.getElementById("secondNumber").addEventListener("input", debounced);