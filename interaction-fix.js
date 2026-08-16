/* Makes every navigation tap work whether the user touches the icon or the label. */
document.querySelectorAll('.nav-item').forEach((button) => {
  button.addEventListener('click', () => {
    const view = button.dataset.view;
    document.querySelectorAll('.content').forEach((section) => section.classList.add('hidden'));
    const target = document.getElementById(`${view}-view`);
    if (target) target.classList.remove('hidden');
    document.querySelectorAll('.nav-item').forEach((item) => item.classList.toggle('active', item === button));
  });
});

document.addEventListener('click', (event) => {
  const speakButton = event.target.closest('[data-say]');
  if (speakButton && window.speechSynthesis) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(speakButton.dataset.say);
    utterance.lang = 'en-US';
    const englishVoice = window.speechSynthesis.getVoices().find((voice) => /^en(-|_)/i.test(voice.lang));
    if (englishVoice) utterance.voice = englishVoice;
    window.speechSynthesis.speak(utterance);
  }
});
