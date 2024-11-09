let staticLength = 0;
function search() {
    const docType = document.getElementById('docType').value;
    const zipCode = document.getElementById('zipCode').value;
    const insuranceType = document.getElementById('insuranceType').value;

    if (!docType || !zipCode || !insuranceType) {
        alert("Please fill out all fields.");
        return;
    }

    // Replace 'YOUR_WEB_APP_URL' with the actual URL of your deployed Google Apps Script
    const url = `https://script.google.com/macros/s/AKfycbwV5lQK_NGwWf5v2V26k2hSBcetwgHS4-0BkSfrp9-1PpUbrT1AoO-IqNmSdaogLelOhg/exec?docType=${encodeURIComponent(docType)}&zipCode=${encodeURIComponent(zipCode)}&insuranceType=${encodeURIComponent(insuranceType)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            staticLength = data.length;
            displayResults(data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    
}
let currentIndex = 0; // Keep track of the current doctor being displayed
let doctorCounter = 1;
let likeCounter = 0;

function displayResults(data) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous content

    if(data.length === 0){
        resultsContainer.innerHTML = "<p>Sorry, no doctors fit the critera. Please try again!</p>"
        return;
    }
    if (currentIndex >= data.length) {
        data.forEach(row => {
        // const resultItem = document.createElement('div');
        doctorCounter = 1;
        likeCounter = 0;
        staticLength = data.length;
        resultItem.style.backgroundColor = '#f2f2f2';
        resultItem.style.borderRadius = '2em';
        resultItem.style.padding = '20px';
        resultItem.style.boxShadow = '0 8px 8px rgba(0, 0, 0, 0.2)';
        resultItem.classList.add('result-item');
        resultsContainer.innerHTML = `
        // <p class = "counter"><strong>${doctorCounter}/${staticLength} Doctors | Doctors Selected: ${likeCounter}</strong></p>
        <p style = "font-size: 2em;"><strong>${row[0]}</strong></p>
        <p><strong>Title:</strong> ${row[1]}</p>
        <p><strong>Office Address:</strong> ${row[2]}</p>
        <p><strong>Postal Code:</strong> ${row[3]}</p>
        <p><strong>Phone:</strong> ${row[4]}</p>
        <p><strong>Email:</strong> ${row[5]}</p>
        <p><strong>Specialty:</strong> ${row[6]}</p>
        <p><strong>Insurance Providers:</strong> ${row[7]}</p>
        <button id ="likeButton" style = "zoom:250%; margin-right: 2em; border-radius: 65%" background-color: #4CAF50; ><i class="fa-solid fa-check" style="color: #fcfcfd;"></i></button>
        <button id="dislikeButton" style = "zoom:250%; border-radius: 65%"background-color: #f44336;><i class="fa-solid fa-xmark" style="color: #ffffff;"></i></button>
        `;
        resultsContainer.appendChild(resultItem);
    });
        return;
    }

    // Create the card for the current doctor
    const row = data[currentIndex];
    const resultItem = document.createElement('div');
    resultItem.style.backgroundColor = '#f2f2f2';
    resultItem.style.borderRadius = '2em';
    resultItem.style.padding = '20px';
    resultItem.style.boxShadow = '0 8px 8px rgba(0, 0, 0, 0.2)';
    resultItem.classList.add('result-item');
    resultItem.innerHTML = `
        <p class = "counter"><strong>${doctorCounter}/${staticLength} Doctors | Doctors Selected: ${likeCounter}</strong></p>
        <p style = "font-size: 2em;"><strong>${row[0]}</strong></p>
        <p><strong>Title:</strong> ${row[1]}</p>
        <p><strong>Office Address:</strong> ${row[2]}</p>
        <p><strong>Postal Code:</strong> ${row[3]}</p>
        <p><strong>Phone:</strong> ${row[4]}</p>
        <p><strong>Email:</strong> ${row[5]}</p>
        <p><strong>Specialty:</strong> ${row[6]}</p>
        <p><strong>Insurance Providers:</strong> ${row[7]}</p>
        <button id ="likeButton" style = "zoom:250%; margin-right: 2em; border-radius: 65%" background-color: #4CAF50; ><i class="fa-solid fa-check" style="color: #fcfcfd;"></i></button>
        <button id="dislikeButton" style = "zoom:250%; border-radius: 65%"background-color: #f44336;><i class="fa-solid fa-xmark" style="color: #ffffff;"></i></button>
    `;
    document.getElementById('form-container').style.marginBottom = "5em";
    resultsContainer.appendChild(resultItem);
    document.getElementById('likeButton').addEventListener('click', () => {
        doctorCounter++;
        currentIndex++;
        likeCounter++;
        displayResults(data);
    });

    document.getElementById('dislikeButton').addEventListener('click', () => {
        doctorCounter++;
        data.splice(currentIndex, 1);
        displayResults(data);
    });
}


// Initialize display with the first doctor


// function displayResults(data) {
//     // Function to display the results on your webpage (implement as needed)
//     const resultsContainer = document.getElementById('results');
//     resultsContainer.innerHTML = ''; // Clear previous results

//     data.forEach(row => {
//         const resultItem = document.createElement('div');
//         resultItem.classList.add('result-item');
//         resultItem.innerHTML = `
//             <p><strong>Doctor Name:</strong> ${row[0]}</p>
//             <p><strong>Doctor Type:</strong> ${row[1]}</p>
//             <p><strong>Office Address:</strong> ${row[2]}</p>
//             <p><strong>Postal Code:</strong> ${row[3]}</p>
//             <p><strong>Phone:</strong> ${row[4]}</p>
//             <p><strong>Email:</strong> ${row[5]}</p>
//             <p><strong>Specialty:</strong> ${row[6]}</p>
//             <p><strong>Insurance Providers:</strong> ${row[7]}</p>
//         `;
//         resultsContainer.appendChild(resultItem);
//     });
// }

