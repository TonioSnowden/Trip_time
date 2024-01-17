// So that we can easily change to local, sync or session
let chromeStorage = chrome.storage.sync;

// Function to save data
function saveAddress() {
    var address = document.getElementById("addressB").value;
    chromeStorage.set({ "savedAddress": address }, function() {
        console.log('Address saved: ' + address);
    });
}

// Load saved address when popup opens
window.onload = function() {
    chromeStorage.get("savedAddress", function(items) {
        if (items.savedAddress) {
            document.getElementById("addressB").value = items.savedAddress;
        }
    });
}


// This function swaps the values of the two address input fields
function swapLocations() {
    const addressA = document.getElementById('addressA').value;

    document.getElementById('addressA').value = document.getElementById('addressB').value;
    document.getElementById('addressB').value = addressA;
}

// This event listener calls the swapLocations function when the button is clicked
document.addEventListener('DOMContentLoaded', function() {
    document
        .getElementById('swapButton')
        .addEventListener('click', swapLocations);
});


//Sender

// Function to send data
async function sendData() {
    const addressA = document.getElementById('addressA').value;
    const addressB = document.getElementById('addressB').value;

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
            document.getElementById(`duration${i}`).innerHTML = element;
        });
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle errors here
    });
    
}

// Add event listener for the send button
document.addEventListener('DOMContentLoaded', () => {
    document
        .getElementById('sendButton')
        .addEventListener('click', sendData);
    document
        .getElementById("addressB")
        .addEventListener("input", saveAddress);
    });

