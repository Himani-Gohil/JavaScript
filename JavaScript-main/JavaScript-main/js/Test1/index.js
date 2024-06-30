var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];

function AddRow() {
    var AddRow = document.getElementById('show');
    var NewRow = AddRow.insertRow(-1); // Insert new row at the end

    // Extract values from input fields
    list1.push(document.getElementById("Name").value);
    list2.push(document.getElementById("Role").value);
    list3.push(document.getElementById("Department").value);
    list4.push(document.getElementById("Salary").value);
    list5.push(document.getElementById("Email").value);
    list6.push(document.getElementById("Experience").value);

    // Insert values into table cells
    var cel1 = NewRow.insertCell(0);
    cel1.innerHTML = list1[list1.length - 1]; // Get the last added value
    var cel2 = NewRow.insertCell(1);
    cel2.innerHTML = list2[list2.length - 1];
    var cel3 = NewRow.insertCell(2);
    cel3.innerHTML = list3[list3.length - 1];
    var cel4 = NewRow.insertCell(3);
    cel4.innerHTML = list4[list4.length - 1];
    var cel5 = NewRow.insertCell(4);
    cel5.innerHTML = list5[list5.length - 1];
    var cel6 = NewRow.insertCell(5);
    cel6.innerHTML = list6[list6.length - 1];
    var cel7 = NewRow.insertCell(6);
    cel7.innerHTML = list6[list6.length - 1] > 5 ? "Senior" : "Junior"; // Set role based on experience
    var cel8 = NewRow.insertCell(7);
    cel8.innerHTML = '<button class="delete-button" onclick="deleteRow(this)">Delete</button>';

    updateEmployeeCount();
}

function deleteRow(row) {
    var i = row.parentNode.parentNode.rowIndex;
    document.getElementById('show').deleteRow(i);
    updateEmployeeCount();
}

function updateEmployeeCount() {
    var rowCount = 0;
    var table = document.getElementById('show');
    for (var i = 0; i < table.rows.length; i++) {
        if (table.rows[i].style.display !== "none") {
            rowCount++;
        }
    }
    document.getElementById('employeeCount').innerText = rowCount - 1;
}
