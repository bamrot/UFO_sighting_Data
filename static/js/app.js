// from data.js
var tableData = data;

// YOUR CODE HERE!
var ufotbody = d3.select("tbody");

// Select the table
var table = d3.select("table");

// table class to `table table-striped`
table.attr("class", "table table-striped");

// Create function, which builds the table with provided data
function buildTable(tableData) {

    ufotbody.html("");
    tableData.forEach((uforecord) => {

        var row = ufotbody.append("tr");
        // Populate each row of UFO table
        Object.entries(uforecord).forEach(([key, value]) => {
          // populate each column for current row
          var cell = row.append("td");      
          cell.text(value);
        });
       
    })};
    
    // Initially build the UFO sighting table with all data from data.js
    buildTable(tableData);
    
    
    
    // Filter UFO table entries by user requested date
    // Select the submit button
    var submit = d3.select("#filter-btn"); 
    
    // Select the input element
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");
    
    // User clicks the button to filter data
    submit.on("click", function() {
    
      // Prevent the page from refreshing
      d3.event.preventDefault();
    
      // Get the value property of the input element
      var inputValue = inputDate.property("value");
    
      console.log(inputValue);
    
      // Create Filtered dataset based on InputValue entered by user
      var tableDataFiltered = tableData.filter(ufoRecord => ufoRecord.datetime === inputValue);
      console.log(tableDataFiltered);
     
      // Build new UFO Table with the filtered subset of UFO Sighting data
      buildTable(tableDataFiltered);
    
    });
    