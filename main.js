document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var fullName = document.getElementById("fullName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    var table = document.getElementById("contactsTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.innerHTML = fullName;
    cell2.innerHTML = phoneNumber;

    document.getElementById("fullName").value = "";
    document.getElementById("phoneNumber").value = "";
});