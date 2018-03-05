$(document).ready(function () {
    var w;
    var h;
    var color = '#000';
    var selector = $('#pixel-canvas');
    var dragPixelColoring = false;
    var hideDesignArea = hideDesignArea;
    var buildPreview = buildPreview;
    var buildCanvas = buildCanvas;
    var enableCanvasBuild = enableCanvasBuild;

    // Previewing pixel canvas
    var colorPixels = colorPixels;
    var start = 0;
    var end = 5;

    /* Given a table element, builds it from provided width and height. */
    var buildPreview = function (selector, w, h, pixelColoring) {
        for (var r = 0; r < h; r++) {

            // Initialize the row
            var newRow = '<tr>';

            for (var c = 0; c < w; c++) {

                newRow += '<td></td>';
            }

            newRow += '</tr>';
            selector.append(newRow);

            console.log("A individual pixel dimension: (" + r + ", " + c + ")");
        }

        //Used for preview of coloring pixels
        if (pixelColoring) {
            colorPixels();
        }

    };

    /* Displays or hides the design area */
    var hideDesignArea = function (hide) {
        var designArea = $('.design-area');

        if (hide) {
            designArea.hide();
        } else {
            designArea.show();
        }
    }

    /* Builds and displays pixel canvas fullscreen for editing */
    var buildCanvas = function () {
        $('.preview-area').first().removeClass('col-md-8');
        $('.preview-area').find('.section-title').css('display', 'none');

        //var table = $('#pixel-canvas');
        //selector = table; // Store for building live pixel canvas

        // This differeiante a preview canvas from the live canvas
        $('#pixel-canvas').addClass('active');
        w = $('#canvas-width').val();
        h = $('#canvas-height').val();

        buildPreview($('#pixel-canvas'), w, h);
        $('.preview-area').prepend('<br><button class="btn reset-canvas" id="start-over-button" data-toggle="modal" data-target="#confirmStartOverModal" style="width: 80%">Start Over</button>');

        // May be best to move this to CSS file.
        $('body').css('cursor', 'cell');
    }

    var enableCanvasBuild = function () {
        if (w && h) {
            console.log('enable live build');
            $('#preview').removeAttr('disabled');
            $('#build').removeAttr('disabled');
        } else {
            console.log('disable live build');
            $('#preview').attr('disabled', true);
            $('#build').attr('disabled', true);
        }
    };

    /* Color pixels by generating a random index from a list of table cells */
  function colorPixels() {
        var cells = selector.find('td');

        var randomIndices = setInterval(function () {

            var index = cells.length == 1 ? 0 : Math.floor((Math.random() * cells.length) + 1);

            if (!(start < end)) {
                clearInterval(randomIndices); // If I want to keep coloring cells remove this
                start = 1
            }

            $(cells[index]).css('background-color', color);

            start++;
        }, 1000);

    }

    /* Listeners */

    /* Builds a preview of pixel canvas. Event handler for when user submits canvas dimensions. */
    $('#canvas-dimensions').on('submit', function (evt) {
        evt.preventDefault();

        // Disable the preview and dimension buttons otherwise table will build on top of old tables
        $('.dimension-control-group').attr('disabled', 'true');

        var table = $('#pixel-canvas');
        selector = table; // Store for building live pixel canvas

        w = $('#canvas-width').val();
        h = $('#canvas-height').val();

        buildPreview(table, w, h, true);
    });

    /* Builds the live pixel canvas. */
    $('#build').on('click', function (v, h) {
        // First remove any existing preview and go live fullscreen
        $('#pixel-canvas').empty();
        hideDesignArea(true);

        buildCanvas();
    });

    /* Manages the color picker */
    $('#color-picker').on('input', function () {
        console.log('color picker choose: ', $('#color-picker').val());
        color = $('#color-picker').val();
    });

    /* Resets the live canvas and returns user to initial design state */
    $('#start-over').on('click', function () {
        $('#confirmStartOverModal').modal('hide');

        // Ckear the pixel canvas table of it's cells
        $('#pixel-canvas').empty();

        // Reset preview area
        $('.preview-area').find('.section-title').css('display', 'initial');
        $('.preview-area').first().addClass('col-md-8');
        $('#start-over-button').remove();

        hideDesignArea(false);

        $('#reset').trigger("click");
    });

    /* Resets preview and live pixel canvas when reset button is clicked*/
    $('body').on('click', '#reset', function () {
        w = undefined;
        h = undefined;
        selector = undefined;
        color = '#000';

        // Update the view
        $('.dimension-control-group').removeAttr('disabled');
        $('#pixel-canvas').removeClass('active');
        $('#color-picker').val('#000');
        $('body').css('cursor', 'unset');
      
        enableCanvasBuild();

        $('#pixel-canvas').empty();
    });

    /* Colors pixels by listening for cell activity when pixel canvas is set to active */
    // Listen for the cell that is being tapped
    $('body').on('click', '.active td', function (evt) {
        var target = $(evt.target);

        // Keep track of colored/uncolored pixels by presence of 'colored' class
        if (target.hasClass('colored')) {
            target.css('background-color', '#FFF');
            target.removeClass('colored');
        } else {
            target.css('background-color', color);
            target.addClass('colored');
        }     
    });
 
  /* Allows coloring of multiple pixels at once */
  $('body').on("mousedown", '.active td', function (evt5) {

    /* We color the cells by manually triggering their clicking */
    dragPixelColoring = true;
    
    // As we enter new cells, color them
    if (dragPixelColoring) {
      $('.active td').on('mouseenter', function(evt2) {
        $(evt2.target).trigger('click');
      });

      // Terminates the coloring of new cell, by by removing the listener
      $('.active td').on('mouseup', function(evt3) {
          //$(evt3.target).css('background-color', 'purple'); // Color last cell dragged to. Just a little extra magic
          $('.active td').off('mouseenter');
          dragPixelColoring = false;
      });
    }
  });

    /* Updates width of canvas based on user input changes */
    $('#canvas-width').on('input', function (evt) {
        var target = $(evt.target);
        w = target.val();

        enableCanvasBuild();
    });

    /* Updates height of canvas based on user input changes */
    $('#canvas-height').on('input', function (evt) {
        var target = $(evt.target);
        h = target.val();

        enableCanvasBuild();
    });

});