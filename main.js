
let initialize = function () {
    diskMove();
};

//function to toggle disk select
let toggleSelect = function (selectedDisk) {
    if(selectedDisk.hasClass("selectedDisk") === false) {
        //remove the class after moving the disk
        selectedDisk.toggleClass("selectedDisk");
        console.log( $(".selectedDisk").length)
    };
};

//disk move function
let diskMove = function () {

    $(".tower").click(function(event) {
        //target first disks in tower
        var disk = $(this).find(".disk").first();
        var selectedDisk = $(".selectedDisk");
        var targetTower = $(this).find(".innerTower");
        console.log(targetTower)
        //first disk change color

        if (selectedDisk.length === 0) {
            toggleSelect(disk);
        } else if (selectedDisk.length === 1)  {
            targetTower.append(selectedDisk);
            selectedDisk.toggleClass("selectedDisk");
        }


    })
};



$(document).ready(initialize);
