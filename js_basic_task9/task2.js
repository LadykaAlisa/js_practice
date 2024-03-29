function executeCallbackWithDelay(text, seconds, callback) {
    setTimeout(function() {
        callback(text);
    }, seconds * 1000); 
}

executeCallbackWithDelay("Цей текст виведеться через 3 секунди", 3, function(text) {
    console.log("Отриманий текст:", text);
    
});
