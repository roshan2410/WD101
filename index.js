document.addEventListener('DOMContentLoaded', function () {
    loadEntries();

    document.getElementById('registrationForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const dob = document.getElementById('dob').value;
        const acceptedTerms = document.getElementById('acceptedTerms').checked;

        if (!isValidAge(dob)) {
            alert('You must be between 18 and 55 years old to register.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        addEntryToStorage({ name, email, password, dob, acceptedTerms });

        const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow(table.rows.length);
        const cells = [name, email, password, dob, acceptedTerms ? 'Yes' : 'No'];
        
        for (let i = 0; i < cells.length; i++) {
            const cell = newRow.insertCell(i);
            cell.appendChild(document.createTextNode(cells[i]));
        }

      
        document.getElementById('registrationForm').reset();
    });

    function isValidAge(dateOfBirth) {
  
        const dobDate = new Date(dateOfBirth);
        const today = new Date();
        const age = today.getFullYear() - dobDate.getFullYear();


        return age >= 18 && age <= 55;
    }

    function isValidEmail(email) {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function addEntryToStorage(entry) {

        const entries = JSON.parse(localStorage.getItem('registrationEntries')) || [];


        entries.push(entry);


        localStorage.setItem('registrationEntries', JSON.stringify(entries));
    }

    function loadEntries() {
  
        const entries = JSON.parse(localStorage.getItem('registrationEntries')) || [];

        const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];

        entries.forEach(entry => {
            const newRow = table.insertRow(table.rows.length);
            const cells = [entry.name, entry.email, entry.password, entry.dob, entry.acceptedTerms ? 'Yes' : 'No'];

            for (let i = 0; i < cells.length; i++) {
                const cell = newRow.insertCell(i);
                cell.appendChild(document.createTextNode(cells[i]));
            }
        });
    }
});
