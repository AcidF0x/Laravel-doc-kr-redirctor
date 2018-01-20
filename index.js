var checkbox = document.getElementById('checkbox');

chrome.storage.local.get('redirectStatus', function(e){
    var status = e.redirectStatus;
    checkbox.checked = status;
    checkbox.addEventListener('click', function() {
        chrome.storage.local.set({'redirectStatus' : !status});
        chrome.extension.sendMessage({ status: !status });
    }, false);
});



