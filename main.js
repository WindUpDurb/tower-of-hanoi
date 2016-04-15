
let initialize = function () {
    diskMove();
    changeTowerData($("#placeHere1"));
    changeTowerData($("#placeHere2"));
    changeTowerData($("#placeHere3"));
};

//function to toggle disk select
let toggleSelect = function (selectedDisk) {
    if(selectedDisk.hasClass("selectedDisk") === false) {
        //remove the class after moving the disk
        selectedDisk.toggleClass("selectedDisk");

    };
};

//disk movement function
let diskMove = function () {
    $(".tower").click(function() {
        //target first disks in tower
        var disk = $(this).find(".disk").first();
        //disk with .selectedDisk
        var selectedDisk = $(".selectedDisk");
        var targetTower = $(this).find(".innerTower");
        //update Tower Data
        changeTowerData(targetTower);
        //if there isn't a div with the class selectedDisk
        if (selectedDisk.length === 0) {
            //toggle it
            toggleSelect(disk);
            //update tower data
            changeTowerData(targetTower)
            //if there is, and if the selected disk's data is larger than tower's data size
        } else if (selectedDisk.length === 1 && selectedDisk.data("size") > targetTower.data("size"))  {
            //prepend it to the div
            targetTower.prepend(selectedDisk);
            //toggle off the class
            selectedDisk.toggleClass("selectedDisk");
            //update the tower data
            changeTowerData(targetTower);
            //check if the game is won
            winGame();
            //otherwise, if the user picks a location that a disk cannot be set
        } else {
            //remove the class so user chooses again
            selectedDisk.toggleClass("selectedDisk");
        }
    })
};

//update the tower data so that if the disk data-size is larger, it can move there.
let changeTowerData = function (targetTower) {
    var towerData = 0
   targetTower.children().each(function () {
        towerData += $(this).data("size")
    });
    targetTower.data("size", towerData);
};

//win game condition
let winGame = function () {
    var winningTower = $("#placeHere3").data("size");
    if (winningTower === 10) {
        alert("You win!!");
    };
};

$(document).ready(initialize);
