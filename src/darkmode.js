window.addEventListener('load', function() {
    const hour = new Date().getHours();
    if ((hour >= 18 || hour < 6)) {
        document.body.classList.add('dark-mode');
    }
});
function toggleReadMore() {
    const transcript = document.getElementById('transcript');
    const btn = document.getElementById('readMoreBtn');
    if (transcript.classList.contains('collapsed')) {
        transcript.classList.remove('collapsed');
        btn.textContent = 'Read Less';
    } else {
        transcript.classList.add('collapsed');
        btn.textContent = 'Read More';
    }
}