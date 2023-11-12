// Create JavaScript to control the Sudoku Board

// Define as global variable to be used with multipe functions
var activeInput = "";   // Current Active Element
var disabledInputs = 0;  // Number of disabled Input fields
var enabledInputs = 0;   // Number of enabled Input fields

// Click on an input field to get its Element Id; this input field becomes the Active Element (selected element)
// This element's id name is saved to the activeInput global variable
// This global variable will be used with several functions
function getActivePosition() {
    activeInput = document.activeElement.id;
}


// Define the functions that respond when a button is clicked. 
// After selecting an input field, press the button (1-9) that corresponds with the number (1-9) that will
//   be entered into the ActiveElement (active input field)
function button1_Function() {
    document.getElementById(activeInput).value = document.getElementById("button1").value;
    verifyNumberEntered();
}

function button2_Function() {
    document.getElementById(activeInput).value = document.getElementById("button2").value;
    verifyNumberEntered();
}

function button3_Function() {
    document.getElementById(activeInput).value = document.getElementById("button3").value;
    verifyNumberEntered();
}

function button4_Function() {
    document.getElementById(activeInput).value = document.getElementById("button4").value;
    verifyNumberEntered();
}

function button5_Function() {
    document.getElementById(activeInput).value = document.getElementById("button5").value;
    verifyNumberEntered(); 
}

function button6_Function() {
    document.getElementById(activeInput).value = document.getElementById("button6").value;
    verifyNumberEntered();
}

function button7_Function() {
    document.getElementById(activeInput).value = document.getElementById("button7").value;
    verifyNumberEntered();
}

function button8_Function() {
    document.getElementById(activeInput).value = document.getElementById("button8").value;
    verifyNumberEntered();
}

function button9_Function() {
    document.getElementById(activeInput).value = document.getElementById("button9").value;
    verifyNumberEntered();
}


// Since the first element in an array starts at position 0, position 0 will always be a blank spqace
// Position 1 begins the first space in the game grid for the initial game board
const board_1_Array = ["","6","","1","","4","5","8","9","","7","","3","","2","1","","5","","8","","4","","7","","","2","3",
"4","","3","","7","","2","","6","","1","9","6","4","","","","","7","","8","","1","2","","","","","6","9","","","","7",
"","","","","2","","","","9","","4","","8","7","2","","6","5","3",""];

const board_2_Array = ["","5","","9","","4","8","7","6","","","8","1","2","","3","9","","","","6","2","5","","7","1","","","9",
"1","","","7","3","2","","4","8","","4","5","","2","","","","2","7","","9","","","","","8","","8","","6","","","","2",
"","","5","","4","","7","","","","7","2","","8","","1","","5","4"];

const board_3_Array = ["","4","2","","","1","9","7","","8","","","8","","7","","","","","","7","","8","","4","3","","","",
"3","","9","","","2","7","","1","","7","2","","5","","","","","","9","7","","","1","","8","","4","","","","5","","9",
"","","","","7","","","","3","","","9","2","4","","3","5","1",""];

const board_4_Array = ["","9","","3","6","8","","2","5","","","2","7","","","","","8","3","6","5","","4","","2","9","1","","",
"9","1","","","","3","","","","","","","4","","","","","","","","5","","1","2","9","6","","7","9","","6","2","","",
"","","3","2","","","8","","6","","8","","5","","7","","","2","9"];


// hese arrays represent the number positions for the completed boards. This array is used to verify to verify
// a the numbers entered by the player.
const completed_board_1_Array = ["","6","2","1","3","4","5","8","9","7","7","9","3","8","2","1","4","5","6","8","5","4","6","7","9","1","2","3",
"4","5","3","9","7","8","2","1","6","2","1","9","6","4","5","3","7","8","7","6","8","3","1","2","9","4","5","1","6","9","5","3","4","7",
"8","2","5","3","2","1","8","7","9","6","4","4","8","7","2","9","6","5","3","1"];

const completed_board_2_Array = ["","5","3","9","1","4","8","7","6","2","7","8","1","2","6","3","9","4","5","4","6","2","5","9","7","1","8","3","9",
"1","6","8","7","3","2","5","4","8","3","4","5","1","2","6","7","9","2","7","5","9","4","6","3","1","8","4","8","1","6","9","5","3","2",
"7","3","5","6","4","2","7","1","9","8","7","2","9","8","3","1","6","5","4"];

const completed_board_3_Array = ["","4","2","3","6","1","9","7","5","8","6","1","8","5","7","3","9","2","4","9","7","5","8","2","4","3","6","1","5",
"3","6","9","8","1","2","7","4","1","8","7","2","4","5","3","6","9","2","4","9","7","3","6","1","5","8","3","4","7","1","6","5","8","9",
"2","8","5","1","7","9","2","4","3","6","6","9","2","4","8","3","5","1","7"];

const completed_board_4_Array = ["","9","1","3","6","8","7","2","5","4","4","2","7","9","1","5","6","8","3","6","5","8","4","3","2","9","1","7","8",
"9","1","7","2","6","3","4","5","2","5","6","3","4","9","8","7","1","7","4","3","5","8","1","2","9","6","4","7","9","1","6","2","5","3",
"8","1","3","2","5","9","8","7","6","4","8","6","5","3","7","4","1","2","9"];


function startGame() {
// Process the game chosen by its index number from the dropdown list
// Call the fillBoard function to display the selected game board
    var gameNumb = document.getElementById("selectGame").selectedIndex;

    switch (gameNumb) {
        case 0:
            alert("Select a game");
            break;
        case 1:  
            fillBoard(board_1_Array);
            disableInputFields();
            enableInputFields();
            break;
        case 2:  
            fillBoard(board_2_Array);
            disableInputFields();
            enableInputFields();
            break;
        case 3:  
            fillBoard(board_3_Array);
            disableInputFields();
            enableInputFields();
            break;
        case 4:  
            fillBoard(board_4_Array);
            disableInputFields();
            enableInputFields();
            break;
        default:
            break;
    }
}

 // This function displays an image of the selected Suduko Board when completed
function viewGameBoard() {
        var gameNumb = document.getElementById("selectGame").selectedIndex;

        switch (gameNumb) {
            case 0:
                // Nothing to display
                break;
            case 1:  
                window.open("./assets/images/completed_Suduko_Game1.jpeg", "Sudoku Game 1", "width=600, height=600");
                break;
            case 2:  
                window.open("./assets/images/completed_Suduko_Game2.jpeg", "Sudoku Game 2", "width=600, height=600"); 
                break;
            case 3:  
                window.open("./assets/images/completed_Suduko_Game3.jpeg", "Sudoku Game 3", "width=600, height=600");
                break;
            case 4:  
                window.open("./assets/images/completed_Suduko_Game4.jpeg", "Sudoku Game 4", "width=600, height=600");
                break;
            default:
                break;
        }
    }

// This function opens a .pdf file obtained from GoldStarPuzzles.com that has tips and rules for how to play Suduko
function viewRules() {
    window.open("./assets/Classic Sudoku Instructions.pdf", "Sudoku Instructions");
} 

// This function fills the Suduko board with the numbers needed at the start of the game
// The numbers are obtained from arrays defined for a specific game
function fillBoard(arry) { 
    document.getElementById("top_left_position1").value = arry[1];
    document.getElementById("top_left_position2").value = arry[2];
    document.getElementById("top_left_position3").value = arry[3];
    document.getElementById("top_left_position4").value = arry[4];
    document.getElementById("top_left_position5").value = arry[5];
    document.getElementById("top_left_position6").value = arry[6];
    document.getElementById("top_left_position7").value = arry[7];
    document.getElementById("top_left_position8").value = arry[8];
    document.getElementById("top_left_position9").value = arry[9];
    document.getElementById("top_center_position1").value = arry[10];
    document.getElementById("top_center_position2").value = arry[11];
    document.getElementById("top_center_position3").value = arry[12];
    document.getElementById("top_center_position4").value = arry[13];
    document.getElementById("top_center_position5").value = arry[14];
    document.getElementById("top_center_position6").value = arry[15];
    document.getElementById("top_center_position7").value = arry[16];
    document.getElementById("top_center_position8").value = arry[17];
    document.getElementById("top_center_position9").value = arry[18];
    document.getElementById("top_right_position1").value = arry[19];
    document.getElementById("top_right_position2").value = arry[20];
    document.getElementById("top_right_position3").value = arry[21];
    document.getElementById("top_right_position4").value = arry[22];
    document.getElementById("top_right_position5").value = arry[23];
    document.getElementById("top_right_position6").value = arry[24];
    document.getElementById("top_right_position7").value = arry[25];
    document.getElementById("top_right_position8").value = arry[26];
    document.getElementById("top_right_position9").value = arry[27];
    document.getElementById("middle_left_position1").value = arry[28];
    document.getElementById("middle_left_position2").value = arry[29];
    document.getElementById("middle_left_position3").value = arry[30];
    document.getElementById("middle_left_position4").value = arry[31];
    document.getElementById("middle_left_position5").value = arry[32];
    document.getElementById("middle_left_position6").value = arry[33];
    document.getElementById("middle_left_position7").value = arry[34];
    document.getElementById("middle_left_position8").value = arry[35];
    document.getElementById("middle_left_position9").value = arry[36];
    document.getElementById("middle_center_position1").value = arry[37];
    document.getElementById("middle_center_position2").value = arry[38];
    document.getElementById("middle_center_position3").value = arry[39];
    document.getElementById("middle_center_position4").value = arry[40];
    document.getElementById("middle_center_position5").value = arry[41];
    document.getElementById("middle_center_position6").value = arry[42];
    document.getElementById("middle_center_position7").value = arry[43];
    document.getElementById("middle_center_position8").value = arry[44];
    document.getElementById("middle_center_position9").value = arry[45];
    document.getElementById("middle_right_position1").value = arry[46];
    document.getElementById("middle_right_position2").value = arry[47];
    document.getElementById("middle_right_position3").value = arry[48];
    document.getElementById("middle_right_position4").value = arry[49];
    document.getElementById("middle_right_position5").value = arry[50];
    document.getElementById("middle_right_position6").value = arry[51];
    document.getElementById("middle_right_position7").value = arry[52];
    document.getElementById("middle_right_position8").value = arry[53];
    document.getElementById("middle_right_position9").value = arry[54];
    document.getElementById("bottom_left_position1").value = arry[55];
    document.getElementById("bottom_left_position2").value = arry[56];
    document.getElementById("bottom_left_position3").value = arry[57];
    document.getElementById("bottom_left_position4").value = arry[58];
    document.getElementById("bottom_left_position5").value = arry[59];
    document.getElementById("bottom_left_position6").value = arry[60];
    document.getElementById("bottom_left_position7").value = arry[61];
    document.getElementById("bottom_left_position8").value = arry[62];
    document.getElementById("bottom_left_position9").value = arry[63];
    document.getElementById("bottom_center_position1").value = arry[64];
    document.getElementById("bottom_center_position2").value = arry[65];
    document.getElementById("bottom_center_position3").value = arry[66];
    document.getElementById("bottom_center_position4").value = arry[67];
    document.getElementById("bottom_center_position5").value = arry[68];
    document.getElementById("bottom_center_position6").value = arry[69];
    document.getElementById("bottom_center_position7").value = arry[70];
    document.getElementById("bottom_center_position8").value = arry[71];
    document.getElementById("bottom_center_position9").value = arry[72];
    document.getElementById("bottom_right_position1").value = arry[73];
    document.getElementById("bottom_right_position2").value = arry[74];
    document.getElementById("bottom_right_position3").value = arry[75];
    document.getElementById("bottom_right_position4").value = arry[76];
    document.getElementById("bottom_right_position5").value = arry[77];
    document.getElementById("bottom_right_position6").value = arry[78];
    document.getElementById("bottom_right_position7").value = arry[79];
    document.getElementById("bottom_right_position8").value = arry[80];
    document.getElementById("bottom_right_position9").value = arry[81];
}

// This function will traverse a new game board and disable input fields that contain a number
// This prevents players from changing these fields. They should only change blank fields.
function enableInputFields() {
    markEnabled(document.getElementById("top_left_position1").value, "top_left_position1");
    markEnabled(document.getElementById("top_left_position2").value , "top_left_position2");
    markEnabled(document.getElementById("top_left_position3").value , "top_left_position3");
    markEnabled(document.getElementById("top_left_position4").value , "top_left_position4");
    markEnabled(document.getElementById("top_left_position5").value , "top_left_position5");
    markEnabled(document.getElementById("top_left_position6").value , "top_left_position6");
    markEnabled(document.getElementById("top_left_position7").value , "top_left_position7");
    markEnabled(document.getElementById("top_left_position8").value , "top_left_position8");
    markEnabled(document.getElementById("top_left_position9").value , "top_left_position9");
    markEnabled(document.getElementById("top_center_position1").value, "top_center_position1");
    markEnabled(document.getElementById("top_center_position2").value , "top_center_position2");
    markEnabled(document.getElementById("top_center_position3").value , "top_center_position3");
    markEnabled(document.getElementById("top_center_position4").value , "top_center_position4");
    markEnabled(document.getElementById("top_center_position5").value , "top_center_position5");
    markEnabled(document.getElementById("top_center_position6").value , "top_center_position6");
    markEnabled(document.getElementById("top_center_position7").value , "top_center_position7");
    markEnabled(document.getElementById("top_center_position8").value , "top_center_position8");
    markEnabled(document.getElementById("top_center_position9").value , "top_center_position9");
    markEnabled(document.getElementById("top_right_position1").value , "top_right_position1");
    markEnabled(document.getElementById("top_right_position2").value , "top_right_position2");
    markEnabled(document.getElementById("top_right_position3").value , "top_right_position3");
    markEnabled(document.getElementById("top_right_position4").value , "top_right_position4");
    markEnabled(document.getElementById("top_right_position5").value , "top_right_position5");
    markEnabled(document.getElementById("top_right_position6").value , "top_right_position6");
    markEnabled(document.getElementById("top_right_position7").value , "top_right_position7");
    markEnabled(document.getElementById("top_right_position8").value , "top_right_position8");
    markEnabled(document.getElementById("top_right_position9").value , "top_right_position9");
    markEnabled(document.getElementById("middle_left_position1").value , "middle_left_position1");
    markEnabled(document.getElementById("middle_left_position2").value , "middle_left_position2");
    markEnabled(document.getElementById("middle_left_position3").value , "middle_left_position3");
    markEnabled(document.getElementById("middle_left_position4").value , "middle_left_position4");
    markEnabled(document.getElementById("middle_left_position5").value , "middle_left_position5");
    markEnabled(document.getElementById("middle_left_position6").value , "middle_left_position6");
    markEnabled(document.getElementById("middle_left_position7").value , "middle_left_position7");
    markEnabled(document.getElementById("middle_left_position8").value , "middle_left_position8");
    markEnabled(document.getElementById("middle_left_position9").value , "middle_left_position9");
    markEnabled(document.getElementById("middle_center_position1").value , "middle_center_position1");
    markEnabled(document.getElementById("middle_center_position2").value , "middle_center_position2");
    markEnabled(document.getElementById("middle_center_position3").value , "middle_center_position3");
    markEnabled(document.getElementById("middle_center_position4").value , "middle_center_position4");
    markEnabled(document.getElementById("middle_center_position5").value , "middle_center_position5");
    markEnabled(document.getElementById("middle_center_position6").value , "middle_center_position6");
    markEnabled(document.getElementById("middle_center_position7").value , "middle_center_position7");
    markEnabled(document.getElementById("middle_center_position8").value , "middle_center_position8");
    markEnabled(document.getElementById("middle_center_position9").value , "middle_center_position9");
    markEnabled(document.getElementById("middle_right_position1").value , "middle_right_position1");
    markEnabled(document.getElementById("middle_right_position2").value , "middle_right_position2");
    markEnabled(document.getElementById("middle_right_position3").value , "middle_right_position3");
    markEnabled(document.getElementById("middle_right_position4").value , "middle_right_position4");
    markEnabled(document.getElementById("middle_right_position5").value , "middle_right_position5");
    markEnabled(document.getElementById("middle_right_position6").value , "middle_right_position6");
    markEnabled(document.getElementById("middle_right_position7").value , "middle_right_position7");
    markEnabled(document.getElementById("middle_right_position8").value , "middle_right_position8");
    markEnabled(document.getElementById("middle_right_position9").value , "middle_right_position9");
    markEnabled(document.getElementById("bottom_left_position1").value , "bottom_left_position1");
    markEnabled(document.getElementById("bottom_left_position2").value , "bottom_left_position2");
    markEnabled(document.getElementById("bottom_left_position3").value , "bottom_left_position3");
    markEnabled(document.getElementById("bottom_left_position4").value , "bottom_left_position4");
    markEnabled(document.getElementById("bottom_left_position5").value , "bottom_left_position5");
    markEnabled(document.getElementById("bottom_left_position6").value , "bottom_left_position6");
    markEnabled(document.getElementById("bottom_left_position7").value , "bottom_left_position7");
    markEnabled(document.getElementById("bottom_left_position8").value , "bottom_left_position8");
    markEnabled(document.getElementById("bottom_left_position9").value , "bottom_left_position9");
    markEnabled(document.getElementById("bottom_center_position1").value , "bottom_center_position1");
    markEnabled(document.getElementById("bottom_center_position2").value , "bottom_center_position2");
    markEnabled(document.getElementById("bottom_center_position3").value , "bottom_center_position3");
    markEnabled(document.getElementById("bottom_center_position4").value , "bottom_center_position4");
    markEnabled(document.getElementById("bottom_center_position5").value , "bottom_center_position5");
    markEnabled(document.getElementById("bottom_center_position6").value , "bottom_center_position6");
    markEnabled(document.getElementById("bottom_center_position7").value , "bottom_center_position7");
    markEnabled(document.getElementById("bottom_center_position8").value , "bottom_center_position8");
    markEnabled(document.getElementById("bottom_center_position9").value , "bottom_center_position9");
    markEnabled(document.getElementById("bottom_right_position1").value , "bottom_right_position1");
    markEnabled(document.getElementById("bottom_right_position2").value , "bottom_right_position2");
    markEnabled(document.getElementById("bottom_right_position3").value , "bottom_right_position3");
    markEnabled(document.getElementById("bottom_right_position4").value , "bottom_right_position4");
    markEnabled(document.getElementById("bottom_right_position5").value , "bottom_right_position5");
    markEnabled(document.getElementById("bottom_right_position6").value , "bottom_right_position6");
    markEnabled(document.getElementById("bottom_right_position7").value , "bottom_right_position7");
    markEnabled(document.getElementById("bottom_right_position8").value , "bottom_right_position8");
    markEnabled(document.getElementById("bottom_right_position9").value , "bottom_right_position9");
}

// This function will traverse a new game board and disable input fields that contain a number.
// This prevents players from changing these fields. They should only change blank fields.
function disableInputFields() {
    markDisabled(document.getElementById("top_left_position1").value, "top_left_position1");
    markDisabled(document.getElementById("top_left_position2").value , "top_left_position2");
    markDisabled(document.getElementById("top_left_position3").value , "top_left_position3");
    markDisabled(document.getElementById("top_left_position4").value , "top_left_position4");
    markDisabled(document.getElementById("top_left_position5").value , "top_left_position5");
    markDisabled(document.getElementById("top_left_position6").value , "top_left_position6");
    markDisabled(document.getElementById("top_left_position7").value , "top_left_position7");
    markDisabled(document.getElementById("top_left_position8").value , "top_left_position8");
    markDisabled(document.getElementById("top_left_position9").value , "top_left_position9");
    markDisabled(document.getElementById("top_center_position1").value, "top_center_position1");
    markDisabled(document.getElementById("top_center_position2").value , "top_center_position2");
    markDisabled(document.getElementById("top_center_position3").value , "top_center_position3");
    markDisabled(document.getElementById("top_center_position4").value , "top_center_position4");
    markDisabled(document.getElementById("top_center_position5").value , "top_center_position5");
    markDisabled(document.getElementById("top_center_position6").value , "top_center_position6");
    markDisabled(document.getElementById("top_center_position7").value , "top_center_position7");
    markDisabled(document.getElementById("top_center_position8").value , "top_center_position8");
    markDisabled(document.getElementById("top_center_position9").value , "top_center_position9");
    markDisabled(document.getElementById("top_right_position1").value , "top_right_position1");
    markDisabled(document.getElementById("top_right_position2").value , "top_right_position2");
    markDisabled(document.getElementById("top_right_position3").value , "top_right_position3");
    markDisabled(document.getElementById("top_right_position4").value , "top_right_position4");
    markDisabled(document.getElementById("top_right_position5").value , "top_right_position5");
    markDisabled(document.getElementById("top_right_position6").value , "top_right_position6");
    markDisabled(document.getElementById("top_right_position7").value , "top_right_position7");
    markDisabled(document.getElementById("top_right_position8").value , "top_right_position8");
    markDisabled(document.getElementById("top_right_position9").value , "top_right_position9");
    markDisabled(document.getElementById("middle_left_position1").value , "middle_left_position1");
    markDisabled(document.getElementById("middle_left_position2").value , "middle_left_position2");
    markDisabled(document.getElementById("middle_left_position3").value , "middle_left_position3");
    markDisabled(document.getElementById("middle_left_position4").value , "middle_left_position4");
    markDisabled(document.getElementById("middle_left_position5").value , "middle_left_position5");
    markDisabled(document.getElementById("middle_left_position6").value , "middle_left_position6");
    markDisabled(document.getElementById("middle_left_position7").value , "middle_left_position7");
    markDisabled(document.getElementById("middle_left_position8").value , "middle_left_position8");
    markDisabled(document.getElementById("middle_left_position9").value , "middle_left_position9");
    markDisabled(document.getElementById("middle_center_position1").value , "middle_center_position1");
    markDisabled(document.getElementById("middle_center_position2").value , "middle_center_position2");
    markDisabled(document.getElementById("middle_center_position3").value , "middle_center_position3");
    markDisabled(document.getElementById("middle_center_position4").value , "middle_center_position4");
    markDisabled(document.getElementById("middle_center_position5").value , "middle_center_position5");
    markDisabled(document.getElementById("middle_center_position6").value , "middle_center_position6");
    markDisabled(document.getElementById("middle_center_position7").value , "middle_center_position7");
    markDisabled(document.getElementById("middle_center_position8").value , "middle_center_position8");
    markDisabled(document.getElementById("middle_center_position9").value , "middle_center_position9");
    markDisabled(document.getElementById("middle_right_position1").value , "middle_right_position1");
    markDisabled(document.getElementById("middle_right_position2").value , "middle_right_position2");
    markDisabled(document.getElementById("middle_right_position3").value , "middle_right_position3");
    markDisabled(document.getElementById("middle_right_position4").value , "middle_right_position4");
    markDisabled(document.getElementById("middle_right_position5").value , "middle_right_position5");
    markDisabled(document.getElementById("middle_right_position6").value , "middle_right_position6");
    markDisabled(document.getElementById("middle_right_position7").value , "middle_right_position7");
    markDisabled(document.getElementById("middle_right_position8").value , "middle_right_position8");
    markDisabled(document.getElementById("middle_right_position9").value , "middle_right_position9");
    markDisabled(document.getElementById("bottom_left_position1").value , "bottom_left_position1");
    markDisabled(document.getElementById("bottom_left_position2").value , "bottom_left_position2");
    markDisabled(document.getElementById("bottom_left_position3").value , "bottom_left_position3");
    markDisabled(document.getElementById("bottom_left_position4").value , "bottom_left_position4");
    markDisabled(document.getElementById("bottom_left_position5").value , "bottom_left_position5");
    markDisabled(document.getElementById("bottom_left_position6").value , "bottom_left_position6");
    markDisabled(document.getElementById("bottom_left_position7").value , "bottom_left_position7");
    markDisabled(document.getElementById("bottom_left_position8").value , "bottom_left_position8");
    markDisabled(document.getElementById("bottom_left_position9").value , "bottom_left_position9");
    markDisabled(document.getElementById("bottom_center_position1").value , "bottom_center_position1");
    markDisabled(document.getElementById("bottom_center_position2").value , "bottom_center_position2");
    markDisabled(document.getElementById("bottom_center_position3").value , "bottom_center_position3");
    markDisabled(document.getElementById("bottom_center_position4").value , "bottom_center_position4");
    markDisabled(document.getElementById("bottom_center_position5").value , "bottom_center_position5");
    markDisabled(document.getElementById("bottom_center_position6").value , "bottom_center_position6");
    markDisabled(document.getElementById("bottom_center_position7").value , "bottom_center_position7");
    markDisabled(document.getElementById("bottom_center_position8").value , "bottom_center_position8");
    markDisabled(document.getElementById("bottom_center_position9").value , "bottom_center_position9");
    markDisabled(document.getElementById("bottom_right_position1").value , "bottom_right_position1");
    markDisabled(document.getElementById("bottom_right_position2").value , "bottom_right_position2");
    markDisabled(document.getElementById("bottom_right_position3").value , "bottom_right_position3");
    markDisabled(document.getElementById("bottom_right_position4").value , "bottom_right_position4");
    markDisabled(document.getElementById("bottom_right_position5").value , "bottom_right_position5");
    markDisabled(document.getElementById("bottom_right_position6").value , "bottom_right_position6");
    markDisabled(document.getElementById("bottom_right_position7").value , "bottom_right_position7");
    markDisabled(document.getElementById("bottom_right_position8").value , "bottom_right_position8");
    markDisabled(document.getElementById("bottom_right_position9").value , "bottom_right_position9");
}


// This function is called after a new board is initially filled to enable blank input fields.
// These input fields may have been disabled for a previously played game.
function markEnabled(inputFld, inputId) {
    if(inputFld === "") {
        document.getElementById(inputId).disabled = false;         
    }
}

// This function is called after a new board is initially filled to disable all input fields that contain
// a number. These fields contain the correct number and should not be changed by the player.
function markDisabled(inputFld, inputId) {
    if(inputFld === "") {
        // Move on to the next field
    } else {  
        disabledInputs++;      // count the number of disabled Input fields.
        document.getElementById(inputId).disabled = true;   
    }
}


// This functions changes the backgroud color depending on whether the correct or incorrect number is entered
// into an input field
function colorChange(matched, elementInput, origColor) {
    if (matched == "yes") {
        // Change the background color of the input field to green for correct entries
        elementInput.style.backgroundColor = "green";
        enabledInputs++;  // count the number of correct entried for the input fields
        // Wait 2 secs then change the background color back to the original color
        setTimeout(() => {
            elementInput.style.backgroundColor = origColor;
            }, 2000);
         // Play applause3.mp3 -- file downloaded from https://www.freesoundeffects.com/free-sounds/applause-10033/  
         // Display an alert message congratulating the player
         if (enabledInputs + disabledInputs === 81) {
            var source = "./assets/applause3.mp3";
            var audio = new Audio();
            audio.src = source;
            audio.autoplay = true;
            audio.play();
            alert("Congratulations!! You have succesdfully completed the game.");
        }

    } else {
         // Change the background color of the input field to red for incorrect entries
         elementInput.style.backgroundColor = "red";

         // Wait 2 secs then change the background color back to the original color
         setTimeout(() => {
             elementInput.style.backgroundColor = origColor;
             }, 2000);
             
        // Delete an incorrect entry
        elementInput.value = "";
    }
}

// This function verifies that the correct number is entered into an input field on the board
function verifyNumberEntered() {

   // Define variables used for the verifyNumberEntered function
    var selectedGame = document.getElementById("selectGame").selectedIndex;
    var compArray;
    const inpFieldvalue = document.getElementById(activeInput).value;
    var inputElement = document.getElementById(activeInput);
    const originalColor = inputElement.style.backgroundColor;
    var valuesMatch;

    // Select the completed board array so the numbers entered by the player can be verified
    switch (selectedGame) {
        case 0:
            // Not selected
            break;
        case 1:  
            compArray = completed_board_1_Array;
            break;
        case 2:  
            compArray = completed_board_2_Array;
            break;
        case 3:  
            compArray = completed_board_3_Array;
            break;
        case 4:  
            compArray =  completed_board_4_Array;
            break;
        default:
            break;
    }

    // Perform the verification on the active input field
    // The activeInput parameter identifies the element Id of the active input field
    switch (activeInput) { 
            // top_left -- 1st row
        case "top_left_position1":
            if (inpFieldvalue === compArray[1]) {
                valuesMatch = "yes"
                enabledInputs++;  // add the number of correct entried for the input fields
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }   
            break;           

        case "top_left_position2":
            if (inpFieldvalue === compArray[2]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);                   
            }             
            break;
            
        case "top_left_position3":
            if (inpFieldvalue === compArray[3]) {
                 valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);            
            }             
            break;

        case "top_left_position4":
            if (inpFieldvalue === compArray[4]) {    
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);  
            }            
            break;

        case "top_left_position5":
            if (inpFieldvalue === compArray[5]) {    
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);  
            }            
            break;           

        case "top_left_position6":                      
            if (inpFieldvalue === compArray[6]) {        
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }            
            break;

        case "top_left_position7":
            if (inpFieldvalue === compArray[7]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor)
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }            
            break;

        case "top_left_position8":
            if (inpFieldvalue === compArray[8]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }
            break;

        case "top_left_position9":
            if (inpFieldvalue === compArray[9]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }  
            break;

        // top_center -- 1st row
        case "top_center_position1":
            if (inpFieldvalue === compArray[10]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }   
            break;           

        case "top_center_position2":
            if (inpFieldvalue === compArray[11]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);                   
            }             
            break;
            
        case "top_center_position3":
            if (inpFieldvalue === compArray[12]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);            
            }             
            break;

        case "top_center_position4":
            if (inpFieldvalue === compArray[13]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);  
            }            
            break;

        case "top_center_position5":
            if (inpFieldvalue === compArray[14]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);  
            }            
            break;
    

        case "top_center_position6":                    
            if (inpFieldvalue === compArray[15]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }            
            break;

        case "top_center_position7":
            if (inpFieldvalue === compArray[16]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }            
            break;

        case "top_center_position8":
            if (inpFieldvalue === compArray[17]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }
            break;

        case "top_center_position9":
        if (inpFieldvalue === compArray[18]) {
            valuesMatch = "yes"
            colorChange(valuesMatch, inputElement, originalColor);
        } else {
            valuesMatch = "no"
            colorChange(valuesMatch, inputElement, originalColor);
        }             
        break;

        // top_right  -- 1st row
        case "top_right_position1":
            if (inpFieldvalue === compArray[19]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }   
            break;           

        case "top_right_position2":
            if (inpFieldvalue === compArray[20]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);                   
            }             
            break;
            
        case "top_right_position3":
            if (inpFieldvalue === compArray[21]) {
                    valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);            
            }             
            break;

        case "top_right_position4":
            if (inpFieldvalue === compArray[22]) {    
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);  
            }            
            break;
    
        case "top_right_position5":
            if (inpFieldvalue === compArray[23]) {    
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);  
            }            
            break;
        
        case "top_right_position6":                      
            if (inpFieldvalue === compArray[24]) {        
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }            
            break;

        case "top_right_position7":
            if (inpFieldvalue === compArray[25]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor)
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }            
            break;

        case "top_right_position8":
            if (inpFieldvalue === compArray[26]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }
            break;

        case "top_right_position9":
            if (inpFieldvalue === compArray[27]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }  
            break;

        // middle_left -- 2nd row
        case "middle_left_position1":
            if (inpFieldvalue === compArray[28]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }   
            break;           

        case "middle_left_position2":
            if (inpFieldvalue === compArray[29]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);                   
            }             
            break;
            
        case "middle_left_position3":
            if (inpFieldvalue === compArray[30]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);            
            }             
            break;

        case "middle_left_position4":
            if (inpFieldvalue === compArray[31]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);  
            }            
            break;

        case "middle_left_position5":
            if (inpFieldvalue === compArray[32]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);  
            }            
            break;
    
        case "middle_left_position6":                    
            if (inpFieldvalue === compArray[33]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }            
            break;

        case "middle_left_position7":
            if (inpFieldvalue === compArray[34]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);    
            } else {   
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }            
            break;

        case "middle_left_position8":
            if (inpFieldvalue === compArray[35]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }
            break;

        case "middle_left_position9":
        if (inpFieldvalue === compArray[36]) {
            valuesMatch = "yes"
            colorChange(valuesMatch, inputElement, originalColor);
        } else {
            valuesMatch = "no"
            colorChange(valuesMatch, inputElement, originalColor);
        }             
        break;

        // middle_center -- 2nd row
        case "middle_center_position1":
            if (inpFieldvalue === compArray[37]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }   
            break;           

        case "middle_center_position2":
            if (inpFieldvalue === compArray[38]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);                   
            }             
            break;
            
        case "middle_center_position3":
            if (inpFieldvalue === compArray[39]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);            
            }             
            break;

        case "middle_center_position4":
            if (inpFieldvalue === compArray[40]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);  
            }            
            break;

        case "middle_center_position5":
            if (inpFieldvalue === compArray[41]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);  
            }            
            break;
    
        case "middle_center_position6":                    
            if (inpFieldvalue === compArray[42]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }            
            break;

        case "middle_center_position7":
            if (inpFieldvalue === compArray[43]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);    
            } else {   
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }            
            break;

        case "middle_center_position8":
            if (inpFieldvalue === compArray[44]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }
            break;

        case "middle_center_position9":
        if (inpFieldvalue === compArray[45]) {
            valuesMatch = "yes"
            colorChange(valuesMatch, inputElement, originalColor);
        } else {
            valuesMatch = "no"
            colorChange(valuesMatch, inputElement, originalColor);
        }             
        break;

        // middle_right -- 2nd row
        case "middle_right_position1":
            if (inpFieldvalue === compArray[46]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }   
            break;           

        case "middle_right_position2":
            if (inpFieldvalue === compArray[47]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);                   
            }             
            break;
            
        case "middle_right_position3":
            if (inpFieldvalue === compArray[48]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);            
            }             
            break;

        case "middle_right_position4":
            if (inpFieldvalue === compArray[49]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);  
            }            
            break;

        case "middle_right_position5":
            if (inpFieldvalue === compArray[50]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);  
            }            
            break;
    
        case "middle_right_position6":                    
            if (inpFieldvalue === compArray[51]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }            
            break;

        case "middle_right_position7":
            if (inpFieldvalue === compArray[52]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);    
            } else {   
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }            
            break;

        case "middle_right_position8":
            if (inpFieldvalue === compArray[53]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }
            break;

        case "middle_right_position9":
        if (inpFieldvalue === compArray[54]) {
            valuesMatch = "yes"
            colorChange(valuesMatch, inputElement, originalColor);
        } else {
            valuesMatch = "no"
            colorChange(valuesMatch, inputElement, originalColor);
        }             
        break;


        // bottom_left -- 3rd row
        case "bottom_left_position1":
            if (inpFieldvalue === compArray[55]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }   
            break;           

        case "bottom_left_position2":
            if (inpFieldvalue === compArray[56]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);                   
            }             
            break;
            
        case "bottom_left_position3":
            if (inpFieldvalue === compArray[57]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);            
            }             
            break;

        case "bottom_left_position4":
            if (inpFieldvalue === compArray[58]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);  
            }            
            break;

        case "bottom_left_position5":
            if (inpFieldvalue === compArray[59]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);  
            }            
            break;
    
        case "bottom_left_position6":                    
            if (inpFieldvalue === compArray[60]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }            
            break;

        case "bottom_left_position7":
            if (inpFieldvalue === compArray[61]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);    
            } else {   
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }            
            break;

        case "bottom_left_position8":
            if (inpFieldvalue === compArray[62]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }
            break;

        case "bottom_left_position9":
        if (inpFieldvalue === compArray[63]) {
            valuesMatch = "yes"
            colorChange(valuesMatch, inputElement, originalColor);
        } else {
            valuesMatch = "no"
            colorChange(valuesMatch, inputElement, originalColor);
        }             
        break;

        // bottom_center -- 3rd row
        case "bottom_center_position1":
            if (inpFieldvalue === compArray[64]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }   
            break;           

        case "bottom_center_position2":
            if (inpFieldvalue === compArray[65]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);                   
            }             
            break;
            
        case "bottom_center_position3":
            if (inpFieldvalue === compArray[66]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);            
            }             
            break;

        case "bottom_center_position4":
            if (inpFieldvalue === compArray[67]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);  
            }            
            break;

        case "bottom_center_position5":
            if (inpFieldvalue === compArray[68]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);  
            }            
            break;
    
        case "bottom_center_position6":                    
            if (inpFieldvalue === compArray[69]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }            
            break;

        case "bottom_center_position7":
            if (inpFieldvalue === compArray[70]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);    
            } else {   
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }            
            break;

        case "bottom_center_position8":
            if (inpFieldvalue === compArray[71]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }
            break;

        case "bottom_center_position9":
        if (inpFieldvalue === compArray[72]) {
            valuesMatch = "yes"
            colorChange(valuesMatch, inputElement, originalColor);
        } else {
            valuesMatch = "no"
            colorChange(valuesMatch, inputElement, originalColor);
        }             
        break;

        // bottom_right -- 3rd row
        case "bottom_right_position1":
            if (inpFieldvalue === compArray[73]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }   
            break;           

        case "bottom_right_position2":
            if (inpFieldvalue === compArray[74]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);                   
            }             
            break;
            
        case "bottom_right_position3":
            if (inpFieldvalue === compArray[75]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);            
            }             
            break;

        case "bottom_right_position4":
            if (inpFieldvalue === compArray[76]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);  
            }            
            break;

        case "bottom_right_position5":
            if (inpFieldvalue === compArray[77]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);  
            }            
            break;
    
        case "bottom_right_position6":                    
            if (inpFieldvalue === compArray[78]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }            
            break;

        case "bottom_right_position7":
            if (inpFieldvalue === compArray[79]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);    
            } else {   
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }            
            break;

        case "bottom_right_position8":
            if (inpFieldvalue === compArray[80]) {
                valuesMatch = "yes"
                colorChange(valuesMatch, inputElement, originalColor);
            } else {
                valuesMatch = "no"
                colorChange(valuesMatch, inputElement, originalColor);
            }
            break;

        case "bottom_right_position9":
        if (inpFieldvalue === compArray[81]) {
            valuesMatch = "yes"
            colorChange(valuesMatch, inputElement, originalColor);
        } else {
            valuesMatch = "no"
            colorChange(valuesMatch, inputElement, originalColor);
        }             
        break;
    }
}

