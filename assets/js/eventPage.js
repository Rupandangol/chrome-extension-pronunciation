var id="pronounceId"+Date.now();

var contextMenu = {
    "id": id,
    "title": "Pronounce",
    "contexts": ["selection"]
};
chrome.contextMenus.create(contextMenu);

chrome.contextMenus.onClicked.addListener(function (clickData) {
    if (clickData.menuItemId == id && clickData.selectionText) {
       
        chrome.storage.sync.get(['pronounce_lang_val','pronounce_speed_val'],(item)=>{
            pronounceConfig(clickData,(item.pronounce_lang_val??"en-US"),(item.pronounce_speed_val??"0.7"));
        })
    }
});

function pronounceConfig(clickData,lang, speed) {
    chrome.tts.speak(clickData.selectionText, { "rate": parseFloat(speed), "lang": lang });
}