document.addEventListener("DOMContentLoaded", function () {
    var currentDateElement = document.getElementById("currentDate");
    var currentDate = new Date().toString();
    currentDateElement.textContent = currentDate;
});
