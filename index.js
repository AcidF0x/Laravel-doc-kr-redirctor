var storage = chrome.storage.local;
var redirector = {
    storageKey : "redirectStatus",
    status : false,
    iconSet : {
        gray : { path : "/icon/icon-gray-48.png"},
        default : { path : "/icon/icon-48.png"}
    }, 
    checkbox : null
};
redirector.checkbox = document.getElementById('checkbox');

function updateCheckbox() {
    redirector.checkbox.checked = redirector.status;
}

function iconUpdate(){
    if (redirector.status === true) {
        chrome.browserAction.setIcon(redirector.iconSet.default);
        return ;
    }
    chrome.browserAction.setIcon(redirector.iconSet.gray);
}

function saveOnStorage(){
    var json = {};
    json[redirector.storageKey] = redirector.status;
    storage.set(json);
    chrome.extension.sendMessage(json);
}

function bindEvent() {
    redirector.checkbox.addEventListener('click', function() {
        redirector.status = ! redirector.status;
        saveOnStorage();
        iconUpdate();
    }, false);
}

storage.get(redirector.storageKey, function(e){
    redirector.status = e[redirector.storageKey];
    updateCheckbox();
    iconUpdate();
    bindEvent();
});
