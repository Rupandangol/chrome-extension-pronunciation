$(function () {

    chrome.storage.sync.get(['pronounce_lang_val', 'pronounce_speed_val'], function (item) {
        $('#languageId').val(item.pronounce_lang_val ?? "en-US");
        $('#speedId').val(item.pronounce_speed_val ?? "0.7");
    })
    chrome.tts.getVoices(
        function(voices) {
          for (var i = 0; i < voices.length; i++) {
           var appendData= new Option(voices[i].voiceName,voices[i].lang);
           $('#languageId').append(appendData);
          }
        }
      );


    $('#updateBtn').on('click', function () {
        var langVal = $('#languageId').val();
        var speedVal = $('#speedId').val();

        chrome.storage.sync.set({ 'pronounce_lang_val': langVal }, () => {
            $('#languageId').val(langVal);
        });
        chrome.storage.sync.set({ 'pronounce_speed_val': speedVal, }, () => {
            $('#speedId').val(speedVal);
        });

        var notifOptions = {
            type: "basic",
            iconUrl: "/assets/icons/speech-icon-48.png",
            title: "Update Successful",
            message: "Language and speed updated successfully"
        };
        chrome.notifications.create('notifOptions_pronounce',notifOptions);

    })


});