function printAfterDelay(text, seconds) {
    setTimeout(function() {
        console.log(text);
    }, seconds * 1000); 
}


printAfterDelay("Цей текст виведеться через 3 секунди", 3);
