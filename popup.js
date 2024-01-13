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