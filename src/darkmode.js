window.addEventListener('load', function() {
    const hour = new Date().getHours();
    if (!(hour >= 18 || hour < 6)) {
        document.body.classList.add('dark-mode');
    }
});
