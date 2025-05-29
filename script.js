document.addEventListener("DOMContentLoaded", function() {
    const text1 = "Hello, this is a sample text!";
    const container1 = document.getElementById("animatedText1");
    const text2 = "This is not gonna be a for real project";
    const container2 = document.getElementById("animatedText2");
    let index = 0;

    function showNextLetter() {
        if (index < text1.length) {
            container1.textContent += text1.charAt(index);
            index++;
            setTimeout(showNextLetter, 50); // 1 millisecond interval
        }
    }

        


    showNextLetter();
});