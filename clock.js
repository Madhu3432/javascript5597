document.addEventListener("DOMContentLoaded", function () {
    displayCurrentDate();
});

function displayCurrentDate() {
    var dateElement = document.getElementById("dateDisplay");
    var currentDate = getCurrentDate();
    dateElement.innerText = currentDate;
}

function getCurrentDate() {
    var options = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    };

    var date = new Date();
    var formattedDate = date.toLocaleString('en-US', options);
    return formattedDate;
}
