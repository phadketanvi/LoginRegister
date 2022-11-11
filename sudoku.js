(function( $ ){

    var listOfMethods = {
       init : function( options ) {
  
          return this.each(function() {  
              var settings = {
                  levels : [
                      {level: "Easy", numbers: 70},
                      {level: "Medium", numbers: 30},
                      {level: "Hard", numbers: 20}
                  ]
              };  
              var defaultValues = {
                  sudokuGrid : [],
                  dominantMatrix : [],
                  countRows : 9,
                  countCols : 9,
                  level : 40,
                  selected : null,
                  solutionSelected : null,
                  correctAnswer : {
                      "1" : 9,
                      "2" : 9,
                      "3" : 9,
                      "4" : 9,
                      "5" : 9,
                      "6" : 9,
                      "7" : 9,
                      "8" : 9,
                      "9" : 9
                  }
              }
                if ( options ) {
                    $.extend( settings, options );
                }
  
              var $this = $(this);
              $this.addClass('sudokuGrid');
              
              // Function to create the grid
              $this.loadMatrix = function() {
                  var sudokuGrid = new Array();
                  for(var row=0;row<9;row++){
                      sudokuGrid[row] = new Array();
                      for(var col=0;col<9;col++){
                          var number = col/1 + 1 + (row*3) + Math.floor(row/3)%3;
                          if(number>9) number = number % 9;
                          if(number==0) number=9;
                          sudokuGrid[row][col] = number;				
                      }			
                  }
                  // Function to reset rows
                  for(var reset=0;reset<9;reset+=3){
                      for(var no2=0;no2<3;no2++){
                          firstRow = Math.floor(Math.random()*3);	
                          secondRow = Math.floor(Math.random()*3);	
                          while(secondRow==firstRow){
                              secondRow = Math.floor(Math.random()*3);	
                          }
                          firstRow = firstRow + reset;
                          secondRow = secondRow + reset;			
                          var temp = new Array();
                          temp = sudokuGrid[firstRow];
                          sudokuGrid[firstRow] = sudokuGrid[secondRow];
                          sudokuGrid[secondRow] = temp; 				
                      }			
                  }
                  // Function to reset columns
                  for(var reset=0;reset<9;reset+=3){
                      for(var no2=0;no2<3;no2++){
                          firstCol = Math.floor(Math.random()*3);	
                          secondCol = Math.floor(Math.random()*3);	
                          while(secondCol==firstCol){
                              secondCol = Math.floor(Math.random()*3);	
                          }
                          firstCol = firstCol + reset;
                          secondCol = secondCol + reset;			
                          var temp = new Array();
                          for(var no3=0;no3<sudokuGrid.length;no3++){
                              temp = sudokuGrid[no3][firstCol];
                              sudokuGrid[no3][firstCol] = sudokuGrid[no3][secondCol];				
                              sudokuGrid[no3][secondCol] = temp;				
                          }
                      }	
                  }
                  return sudokuGrid;
              };
              
              // Function to create the sudoku table
              $this.loadTable = function() {
                  defaultValues.dominantMatrix = [];
                  defaultValues.table = $("<div class='sudokuGridEmpty sudokuBlank'></div>");
                  for (var row=0;row<defaultValues.countRows;row++) {
                      defaultValues.dominantMatrix[row] = [];
                      var tempRow = $("<div class='sudokuRow'></div>");
                      if (row == 2 || row == 5) tempRow.addClass("sdk-border"); 
                      for (var col=0;col<defaultValues.countCols;col++) {
                          defaultValues.dominantMatrix[row][col] = $("<div class='sudokuCol' data-row='"+row+"' data-col='"+col+"'></div>");
                          if (col == 2 || col == 5) defaultValues.dominantMatrix[row][col].addClass("sdk-border");
                          tempRow.append(defaultValues.dominantMatrix[row][col]);
                      }
                      defaultValues.table.append(tempRow);
                  }
                  defaultValues.table.append("<div class='sudokuGridEmpty-bk'></div>");
                  $this.append(defaultValues.table);
                  var items = defaultValues.level;
                  while (items > 0) {
                      var row = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
                      var col = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
                      if (defaultValues.dominantMatrix[row][col].children().length == 0) {
                          defaultValues.dominantMatrix[row][col].append("<div class='sudokuCorrectAnswer'>"+ defaultValues.sudokuGrid[row][col] +"</div>");
                          defaultValues.correctAnswer[defaultValues.sudokuGrid[row][col].toString()]--;
                          items--;
                      }
                  }
                  defaultValues.table.find(".sudokuCol").click(function () {
                      $this.find(".sudokuCorrectAnswer").removeClass("sdk-helper");
                      $this.find(".sudokuCol").removeClass("sdk-selected");
                      if ($(this).children().length == 0) {
                          defaultValues.dominantMatrix[$(this).attr("data-row")][$(this).attr("data-col")].addClass("sdk-selected");
                          defaultValues.selected = defaultValues.dominantMatrix[$(this).attr("data-row")][$(this).attr("data-col")];
                          defaultValues.solutionSelected = defaultValues.sudokuGrid[$(this).attr("data-row")][$(this).attr("data-col")]
                      } else {
                          $this.helpHighlighter(parseInt($(this).text()));
                      }
                  });
                  
                  $this.selectAnswer();
                                  
                  setTimeout(function () {
                      defaultValues.table.removeClass("sudokuBlank");
                  }, 300);
              };
              
              // Function to display all available answers
              $this.selectAnswer = function() {
                  // Function to create a container to store the answers
                  var optionsContainer = $("<div class='sudokuAnswerContainer'></div>");
                  for (var a in defaultValues.correctAnswer) {
                      if (defaultValues.correctAnswer[a] > 0) {
                          optionsContainer.append("<div class='sudokuButton'>"+a+"</div>");
                      } else {
                          optionsContainer.append("<div class='sudokuButton sudokuBlank'>"+a+"</div>");
                      }
                  }
                  optionsContainer.find(".sudokuButton").click(function () {
                      if (!$(this).hasClass("sudokuBlank") && defaultValues.selected != null && defaultValues.selected.children().length == 0 ) {
                          if ( defaultValues.solutionSelected == parseInt($(this).text()) ) {
                              defaultValues.correctAnswer[$(this).text()]--;
                              if (defaultValues.correctAnswer[$(this).text()] == 0) {
                                  $(this).addClass("sudokuBlank");
                              }
                              $this.find(".sudokuCol").removeClass("sdk-selected");
                              defaultValues.selected.append("<div class='sudokuCorrectAnswer'>"+ defaultValues.solutionSelected +"</div>");
                          }
                          
                      }
                  });
                  $this.append(optionsContainer);
                  
              };
              
              $this.helpHighlighter = function(number) {
                  for (var row=0;row<defaultValues.countRows;row++) {
                      for (var col=0;col<defaultValues.countCols;col++) {
                          if ( parseInt(defaultValues.dominantMatrix[row][col].text()) == number ) {
                              defaultValues.dominantMatrix[row][col].find(".sudokuCorrectAnswer").addClass("sdk-helper");
                          }
                      }
                  }
              };
              
              // Function that allows user to select the difficulty
              $this.difficultySelector = function() {
                  var picker = $("<div class='sudokuAnswerPicker sudokuBlank'></div>");
                  $(settings.levels).each(function (e) {
                      picker.append("<div class='sudokuButton' data-level='"+this.numbers+"'>"+this.level+"</div>");
                  });
                  $this.append(picker);
                  picker.find(".sudokuButton").click(function () {
                      picker.addClass("sudokuBlank");
                      defaultValues.level = parseInt($(this).attr("data-level"));
                      setTimeout(function () {
                          picker.remove();
                          $this.loadTable();
                      }, 2000);
                  });
                  setTimeout(function () {
                      picker.removeClass("sudokuBlank");
                  }, 500);
              };
              
              defaultValues.sudokuGrid = $this.loadMatrix();
              $this.difficultySelector();                    
           });
       }
    };   	 	
  
    $.fn.sudoku = function( method ) {
      
      if ( listOfMethods[method] ) {
        return listOfMethods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
      } else if ( typeof method === 'object' || ! method ) {
        return listOfMethods.init.apply( this, arguments );
      } else {
        $.error( 'Method ' +  method + ' does not exist on jQuery.sudoku' );
      }        
    };
  })( jQuery );