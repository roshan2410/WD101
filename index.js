document.getElementById('my-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const userEmail = document.getElementById('userEmail').value;
    const userPassword = document.getElementById('userPassword').value;
    const userDob = document.getElementById('userDob').value;
    const acceptTerms = document.getElementById('acceptTerms').checked;

    const userDetails = {
        fullName,
        userEmail,
        userPassword,
        userDob,
        acceptTerms
    };
    addEntryToTable(userDetails);
    document.getElementById('my-form').reset();
});

function addEntryToTable(userDetails) {
    const tableBody = document.getElementById('user-details');
    const newRow = tableBody.insertRow();

    const cells = [
        userDetails.fullName,
        userDetails.userEmail,
        userDetails.userPassword,
        userDetails.userDob,
        userDetails.acceptTerms ? 'Yes' : 'No'
    ];

    cells.forEach((cellText) => {
        const cell = newRow.insertCell();
        cell.appendChild(document.createTextNode(cellText));
    });
}
