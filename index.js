const button = document.querySelector('.btn');
const phrase = document.querySelector('.phrase-text');
const phrases = [
    "If you fall asleep now, you will dream. If you study now, you will live your dream.",
    "When you think it's too late, the truth is, it's still early.",
    "It's those who are earlier than the others, those who put in more effort, who can enjoy the feeling of success.",
    "Not everyone can truly succeed in everything. But success only comes with self-management and determination.",
    "If you don't walk today, you'll have to run tomorrow.",
    "When today is over, it will never come back.",
    "I am thankful for all of those who said NO to me. It's because of them I'm doing it myself. <br> (Albert Einstein)",
    "In order to succeed, we must first believe that we can. <br> (Nikos Kazantzakis)",
    "Only I can change my life. No one can do it for me. <br> (Carol Burnett)",
];

button.onclick = () => {
    phrase.innerHTML = phrases[Math.floor(Math.random() * phrases.length)];
    document.querySelector('.phrase-container').style.display = "block";
};