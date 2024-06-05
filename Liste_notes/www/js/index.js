function ajouter() {
    let consoleDiv = document.getElementById("console");
    let taskFieldText = document.getElementById("taskFieldText");
    const taskList = document.getElementById("taskList");

    if (taskFieldText.value) {
        const newItem = document.createElement("li");
        newItem.innerHTML = taskFieldText.value;
        $(newItem).on("swiperight", handleRightSwipe);
        $(newItem).on("swipeleft", handleLeftSwipe);

        taskList.appendChild(newItem);
        $("#taskList").listview("refresh");
        $("#taskFieldText").focus();
        taskFieldText.value = "";
    }
}

function reinitialiser() {
    const taskList = document.getElementById("taskList");
    const completedTaskList = document.getElementById("completedTaskList");
    taskList.innerHTML = '';
    completedTaskList.innerHTML = '';
}

function handleRightSwipe(event) {
    const target = $(event.target).closest("li");
    if (target.length) {
        target.addClass("barrer");

        const completedTaskList = $("#completedTaskList");
        target.slideUp('slow', function() {
            completedTaskList.append(target);
            target.slideDown('slow');
            $("#taskList").listview("refresh");
            $("#completedTaskList").listview("refresh");
        });

    }
}

function handleLeftSwipe(event) {
    const target = $(event.target).closest("li");
    if (target.length) {

        if (target.hasClass("barrer")) {
            target.removeClass("barrer");
            const taskList = $("#taskList");
            target.slideUp('slow', function() {
                taskList.append(target);
                target.slideDown('slow');
                $("#taskList").listview("refresh");
                $("#completedTaskList").listview("refresh");
            });
        } else {
            // If the task is ongoing, remove it
            target.slideUp('slow', function() {
                target.remove();
                $("#taskList").listview("refresh");
            });
        }


    }
}

$(document).on("pagecreate", function() {
    $("#taskList, #completedTaskList").listview();
});
