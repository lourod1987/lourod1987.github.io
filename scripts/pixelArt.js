/* functionality to add:
- A reset button ----- Completed!
- Alternative selection mode (like a brush that allows you to fill sections just by hovering over)
- Undo/Redo functionality (would need to save states?)
*/

//set a bool value to check if the grid has been previously created
var ranAlready = false;
//console.log(ranAlready);
//var isDown = false;

/*call functions on document load, this call click event on submit button calling event as an arg to prevent default functionality*/
$(document).ready($("#submit").click(function (evt) {
    
    //prevent default functionality of submit button
    evt.preventDefault();
//    console.log("click worked");
    
    //call reset function and pass in ranAlready arg to reset grid
    reset(ranAlready);
    
    //get height and width values of grid set by user
    var height = $("#inputHeight").val();
    var width = $("#inputWidth").val();
    
    //call makeGrid function and pass in height and width as args
    makeGrid(height, width);
    
    //after makeGrid function has run set ranAlready to true
    ranAlready = true;
    
//    console.log(ranAlready);
//    console.log("this is the height: " + height);
//    console.log("this is the width: " + width);    
}));

/*reset function used to check if makeGrid has been ran and if true clear grid before making a new one set ranAlready to false after*/
function reset(ran) {
    if (ranAlready === true) {
        $('tr').remove();
        $('td').remove();
        ranAlready = false;
    }
}

$('#reset').on('click', function() {
    reset(ranAlready);
});

 $(document).mousedown(function() {
    isDown = true;      // When mouse goes down, set isDown to true
  })

//make grid takes in two parameters for height and width of grid
function makeGrid(rowCount, colCount) {
//    console.log(" make grid call worked");
//    console.log("this is the height within makeGrid: " + rowCount);
//    console.log("this is the width within makeGrid: " + colCount);
    
    /*check to see if grid is equal to 1 and if so run code to create a single box else run code for specified terms*/
    if (colCount <= 1 && rowCount <= 1) {
        $('#pixelCanvas').append('<tr></tr>');
        $('tr').append('<td></td>');
    } else {
        //loop over until height is reached appending tr tags each iteration
        for (var row = 1; row <= rowCount; row++) {
            console.log("Row count: " + row);
            $('#pixelCanvas').append('<tr></tr>');
            $('td').remove();
            //loop over until width is reached appending td tags each iteration
            for (var column = 1; column <= colCount; column++) {
                console.log("Column count: " + column);
                $('tr').append('<td></td>');
            }    
        }
    }
}

//calling an event on click of the table based on the cell with a callback
$('#pixelCanvas').on('click', 'td', function() {
//    console.log("click in color is working");
    //get color selected by user
    var colorVal = $("#colorPicker").val();
      
    console.log("this is colorVal on click: " + colorVal);
    //set background color of td cell clicked to currently selected color
    $(this).css('background-color', colorVal) ;
});

//var brush = $('#pixelCanvas').on('mouseover', 'td', function(isDown) {
//    
//    var colorVal = $("#colorPicker").val();
//      
//    if (isDown === true) {
//        $(this).css('background-color', colorVal) ;
//    }
//});
//
//
//
//$('#default').on('click', 'td', function() {
//    normal();
//});
//
//$('#brush').on('click', 'td', function() {
//    brush();
//})
