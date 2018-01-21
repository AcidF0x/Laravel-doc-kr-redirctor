var checkbox = document.getElementById('checkbox');

function iconUpdate(status)
{
    var iconSet = { path : ''};
    if(status === true) {
        iconSet.path = '/icon/icon-48.png';
    } else {
        iconSet.path = '/icon/icon-gray-48.png';
    }
    chrome.browserAction.setIcon(iconSet);
}



chrome.storage.local.get('redirectStatus', function(e){
    var status = e.redirectStatus;
    checkbox.checked = status;
    iconUpdate(status);
    checkbox.addEventListener('click', function() {
        iconUpdate(!status);
        chrome.storage.local.set({'redirectStatus' : !status});
        chrome.extension.sendMessage({ status: !status });
    }, false);
});



