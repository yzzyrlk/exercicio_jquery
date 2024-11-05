$(document).ready(function() {
    $('#task-form').submit(function(event) {
    event.preventDefault();
    var taskText = $('#task-input').val();
    if (taskText.trim() !== "") {
    var newTask = $('<li></li>').text(taskText);
    $('#task-list').append(newTask);
    $('#task-input').val('');
    }
    });
    $('#task-list').on('click', 'li', function() {
    $(this).toggleClass('completed');
    });
    });
    