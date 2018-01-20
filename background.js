var status = false;
chrome.extension.onMessage.addListener(function(request, sender, sendResponse){
    status = request.status;
});

function updateStatus() {
    chrome.storage.local.get('redirectStatus', function(e){
        status = e.redirectStatus;
    });
}

updateStatus();

chrome.webRequest.onBeforeRequest.addListener(function(e){
    if (status === "true") {
        return {
            redirectUrl: e.url.replace("https://laravel.com/docs", "https://laravel.kr/docs")
        };
    }
    return {};
},
{
    urls: ["https://laravel.com/docs/*"],
    types: ["main_frame"]
},
    ["blocking"]
);
