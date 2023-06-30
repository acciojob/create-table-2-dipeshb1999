function createTable() {
  // Prompt for the number of rows
  var numRows = parseInt(prompt("Input number of rows"));

  // Prompt for the number of columns
  var numColumns = parseInt(prompt("Input number of columns"));

  var table = document.getElementById("myTable");

  // Clear any existing table content
  table.innerHTML = "";

  // Create the table rows and cells
  for (var i = 0; i < numRows; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < numColumns; j++) {
      var cell = document.createElement("td");
      cell.textContent = "Row-" + i + " Column-" + j;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}
