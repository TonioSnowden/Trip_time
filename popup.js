import scraper from "./scraper";

// Function to save data
function saveAddress() {
    var address = document.getElementById("addressB").value;
    chrome.storage.local.set({ "savedAddress": address }, function() {
        console.log('Address saved: ' + address);
    });
}

// Load saved address when popup opens
window.onload = function() {
    chrome.storage.local.get("savedAddress", function(items) {
        if (items.savedAddress) {
            document.getElementById("addressB").value = items.savedAddress;
        }
    });
}

// Event listener for input change
document.getElementById("addressB").addEventListener("input", saveAddress);

// This function swaps the values of the two address input fields
function swapLocations() {
    var addressA = document.getElementById('addressA').value;
    var addressB = document.getElementById('addressB').value;

    document.getElementById('addressA').value = addressB;
    document.getElementById('addressB').value = addressA;
}

// This event listener calls the swapLocations function when the button is clicked
document.addEventListener('DOMContentLoaded', function() {
    var swapButton = document.getElementById('swapButton');
    swapButton.addEventListener('click', swapLocations);
});


//Sender

// Function to send data
async function sendData() {
    var addressA = document.getElementById('addressA').value;
    var addressB = document.getElementById('addressB').value;

    // Construct the data you want to send
    var dataToSend = {
        addressA: addressA,
        addressB: addressB
    };

    // Make the POST request
    await fetch('https://jbccc.pythonanywhere.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        data.durations.forEach((element, i) => {
            document.getElementById('duration' + i).innerHTML = element;
        });
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle errors here
    });
    
}

// Add event listener for the send button
document.addEventListener('DOMContentLoaded', function() {
    var sendButton = document.getElementById('sendButton');
    sendButton.addEventListener('click', sendData);
    // ... [other event listeners] ...
});



//Sender

// Function to send data
async function sendData() {
    var addressA = document.getElementById('addressA').value;
    var addressB = document.getElementById('addressB').value;

    // Construct the data you want to send
    var dataToSend = {
        addressA: addressA,
        addressB: addressB
    };

    // Make the POST request
    await fetch('https://jbccc.pythonanywhere.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        data.durations.forEach((element, i) => {
            document.getElementById('duration' + i).innerHTML = element;
        });
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle errors here
    });
    
}

// Add event listener for the send button
document.addEventListener('DOMContentLoaded', function() {
    var sendButton = document.getElementById('sendButton');
    sendButton.addEventListener('click', sendData);
    // ... [other event listeners] ...
});


function testScraper() {
    const currentUrl = window.location.href;
    const isFlatfox = currentUrl.includes("flatfox.ch");
    if (!isFlatfox) {
        console.log("Not on flatfox.ch");
        return "Not on flatfox.ch";
    }
    console.log(google);
    const id = currentUrl.split("/").pop();
    console.log("id: " + id);
    const data = scraper.flatfox(id);
    console.log(data);
    document.getElementsByTagName("p")[0].innerHTML = "oui";
    return data;
}

// Event listener for test button
document.getElementById("testButton").addEventListener("click", testScraper);