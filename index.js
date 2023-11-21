document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const acceptedTerms = document.getElementById('acceptedTerms').checked;

   
    const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);
    const cells = [name, email, password, dob, acceptedTerms ? 'Yes' : 'No'];
    
    for (let i = 0; i < cells.length; i++) {
        const cell = newRow.insertCell(i);
        cell.appendChild(document.createTextNode(cells[i]));
    }

  
    document.getElementById('registrationForm').reset();
});
