function playSound(letter) {
    var sounds = {
        'A': 'sounds/ttsMP3.com_VoiceText_2024-9-3_18-45-54.mp3',
        'B': 'sounds/ttsMP3.com_VoiceText_2024-9-3_18-46-1.mp3',
        'C': 'sounds/ttsMP3.com_VoiceText_2024-9-3_18-46-6.mp3',
        'D': 'sounds/ttsMP3.com_VoiceText_2024-9-3_18-46-11.mp3',
        'E': 'sounds/ttsMP3.com_VoiceText_2024-9-3_18-46-16.mp3',
        'F': 'sounds/ttsMP3.com_VoiceText_2024-9-3_18-46-23.mp3',
        'G': 'sounds/ttsMP3.com_VoiceText_2024-9-3_18-46-44.mp3',
        'H': 'sounds/ttsMP3.com_VoiceText_2024-9-3_18-46-54.mp3',
        'I': 'sounds/ttsMP3.com_VoiceText_2024-9-3_18-47-0.mp3',
        'J': 'sounds/ttsMP3.com_VoiceText_2024-9-3_18-47-5.mp3',
        'K': 'sounds/ttsMP3.com_VoiceText_2024-9-3_18-47-10.mp3',
        'L': 'sounds/ttsMP3.com_VoiceText_2024-9-3_18-47-15.mp3',
        'M': 'sounds/ttsMP3.com_VoiceText_2024-9-3_18-47-21.mp3',
        'N': 'sounds/ttsMP3.com_VoiceText_2024-9-3_18-47-26.mp3',
        'O': 'sounds/ttsMP3.com_VoiceText_2024-9-3_18-47-31.mp3',
        'P': 'sounds/ttsMP3.com_VoiceText_2024-9-3_18-47-35.mp3',
        'Q': 'sounds/ttsMP3.com_VoiceText_2024-9-3_18-47-42.mp3',
        'R': 'sounds/ttsMP3.com_VoiceText_2024-9-3_18-47-49.mp3',
        'S': 'sounds/ttsMP3.com_VoiceText_2024-9-3_18-47-57.mp3',
        'T': 'sounds/ttsMP3.com_VoiceText_2024-9-3_18-48-3.mp3',
        'U': 'sounds/ttsMP3.com_VoiceText_2024-9-3_18-48-11.mp3',
        'V': 'sounds/ttsMP3.com_VoiceText_2024-9-3_18-48-18.mp3',
        'W': 'sounds/ttsMP3.com_VoiceText_2024-9-3_18-48-25.mp3',
        'X': 'sounds/ttsMP3.com_VoiceText_2024-9-3_18-48-32.mp3',
        'Y': 'sounds/ttsMP3.com_VoiceText_2024-9-3_18-48-37.mp3',
        'Z': 'sounds/ttsMP3.com_VoiceText_2024-9-3_18-48-49.mp3'
    };
    var audio = new Audio(sounds[letter]);
    audio.play();
}
document.querySelectorAll('.drum').forEach(function(button) {
    button.addEventListener('click', function() {
        var letter = this.id;
        playSound(letter);
    });
});