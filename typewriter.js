// Typewriter effect for demo search input
(function () {
    const input = document.getElementById('demo-query-input');
    if (!input) return;

    const queries = [
        'What are the current limitations of CRISPR gene therapy?',
        'How did quantitative easing affect income inequality post-2008?',
        'Compare Kant\'s categorical imperative with Rawls\' veil of ignorance.',
        'What are the geopolitical implications of rare earth supply chains?'
    ];

    let qIndex = 0;
    let cIndex = 0;
    let deleting = false;

    function tick() {
        const target = queries[qIndex];

        if (!deleting) {
            cIndex++;
            input.value = target.slice(0, cIndex);
            if (cIndex === target.length) {
                setTimeout(() => { deleting = true; tick(); }, 2400);
                return;
            }
            setTimeout(tick, 42);
        } else {
            cIndex--;
            input.value = target.slice(0, cIndex);
            if (cIndex === 0) {
                deleting = false;
                qIndex = (qIndex + 1) % queries.length;
                setTimeout(tick, 480);
                return;
            }
            setTimeout(tick, 22);
        }
    }

    // Start after hero load-in animations finish
    setTimeout(tick, 1100);
})();
