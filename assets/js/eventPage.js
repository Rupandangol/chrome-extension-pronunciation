var contextMenu ={
    "id":"pronounceId",
    "title":"Pronounce",
    "contexts":["selection"]
};
chrome.contextMenus.create(contextMenu);

chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId=="pronounceId" && clickData.selectionText){
        chrome.tts.speak(clickData.selectionText, {"rate":0.7} );
    }
});