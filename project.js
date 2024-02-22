const submit = document.querySelector('#submit');

const text  = document.querySelector('#fname');

const speechSynthesis = window.speechSynthesis;


submit.addEventListener('click' , () => {
  
    const textToSpeak = textInput.value;

    if (textToSpeak) {
        const utterance = new SpeechSynthesisUtterance(textToSpeak);// interface gets and sets the voice that will be used to speak the utterance.
        speechSynthesis.speak(utterance);
    }

})