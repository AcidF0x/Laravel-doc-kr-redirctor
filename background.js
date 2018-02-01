var storage = chrome.storage.local;
var redirector = {
    storageKey : "redirectStatus",
    status : false
};

storage.get(redirector.storageKey, function(e){
    redirector.status = e[redirector.storageKey];
});

chrome.extension.onMessage.addListener(function(request){
    redirector.status = request[redirector.storageKey];
});

chrome.webRequest.onBeforeRequest.addListener(function(e){
    if (redirector.status === false) {
        return {};
    }
    return {
        redirectUrl: e.url.replace("https://laravel.com/docs", "https://laravel.kr/docs")
    };
},
{
    urls: ["https://laravel.com/docs/*"],
    types: ["main_frame"]
},
    ["blocking"]
);

