/**
 * Totara and App need this
 */
(function () {

    function expandAppHeight(newHeight) {
        const height = newHeight || document.body.offsetHeight;
        console.log('\t[App]: expanding app height to: ' + height);
        window.parent.postMessage({ type: 'appEmbed:resize', height: height }, '*');
    }

    /**
     * Only init if there's an App node present
     */
    document.addEventListener('DOMContentLoaded', (event) => {
        init();
    });

    function init() {

        const app = document.getElementById('app');
        if (app) {

            console.log('[App]: DOMContentLoaded, first height expansion (' + document.body.offsetHeight + 'px).');
            expandAppHeight();

            // Observe body size changes and notify parent to resize iframe
            const resizeObserver = new ResizeObserver((e) => {

                console.log('[App]: ResizeObserver...');
                expandAppHeight(e[0].contentRect.height);
            });
            resizeObserver.observe(app);

            // receive CSS variables from parent DOM (Totara) and apply to this document
            window.addEventListener('message', (event) => {
                if (event.data && event.data.type === 'appEmbed:cssVariables') {
                    const style = document.createElement('style');
                    style.textContent = event.data.css;
                    document.head.appendChild(style);
                }
            });

        } else {
            alert('App: No app element found!');
        }
    }
})();
