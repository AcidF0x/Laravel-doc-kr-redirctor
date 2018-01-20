var checkbox = document.getElementById('checkbox');
var appOptions = {
    redirectStatus: localStorage.getItem("redirectStatus") === "true"
};
checkbox.checked = appOptions.redirectStatus;
checkbox.addEventListener('click', function() {
    appOptions.redirectStatus = !appOptions.redirectStatus;
    localStorage.setItem('redirectStatus', appOptions.redirectStatus);
}, false);


