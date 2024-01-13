// Function to save data
function saveAddress() {
    var address = document.getElementById("addressA").value;
    chrome.storage.local.set({ "savedAddress": address }, function() {
        console.log('Address saved: ' + address);
    });
}

// Load saved address when popup opens
window.onload = function() {
    chrome.storage.local.get("savedAddress", function(items) {
        if (items.savedAddress) {
            document.getElementById("addressA").value = items.savedAddress;
        }
    });
}

// Event listener for input change
document.getElementById("addressA").addEventListener("input", saveAddress);

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
