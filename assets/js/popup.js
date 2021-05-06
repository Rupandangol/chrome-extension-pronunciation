$(function(){
    $('#pronounceBtnId').on('click',()=>{
        var proText=$('#pronounceTextId').val();
        console.log(proText);
        chrome.storage.sync.get(['pronounce_lang_val','pronounce_speed_val'],(item)=>{
            chrome.tts.speak(proText, { "rate": parseFloat(item.pronounce_speed_val??"0.7"), "lang": (item.pronounce_lang_val??"en-US") });
        })
    });

    $('#resetBtnId').on('click',()=>{
        $('#pronounceTextId').val('');
    })
})