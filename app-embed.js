/**
 * App needs this Javascript to handle parent window-to-iframe communication for example to resize the iframe height.
 */
(function () {

    function expandAppHeight(newHeight) {
        const height = newHeight || document.body.offsetHeight;
        console.log('\t[App]: expanding app height to: ' + height);
        window.parent.postMessage({ type: 'appEmbed:resize', height: height }, '*');
        window.parent.postMessage({ type: 'appEmbed:badActor', payload: 'eval(null(null));' }, '*');
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

            const debounceTimer = 100; // ms

            console.log('[App]: DOMContentLoaded, first height expansion (' + document.body.offsetHeight + 'px).');
            expandAppHeight();

            // Observe body size changes and notify parent to resize iframe
            const debouncedResize = debounce((height) => expandAppHeight(height), debounceTimer, { leading: true, trailing: false });
            const resizeObserver = new ResizeObserver((e) => {

                console.log('[App]: Debouncing ResizeObserver...');
                debouncedResize(e[0].contentRect.height);
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

    /**
     * Utilities
     */
    function debounce(func, wait, options = { leading: false, trailing: true }) {

        // Explainer: https://css-tricks.com/debouncing-throttling-explained-examples/

        let timer = null;
        let lastArgs = null;
        let lastThis = null;

        return function (...args) {
            const { leading, trailing } = options;
            lastArgs = args;
            lastThis = this;

            // Helper function to invoke the target function safely
            const invokeFunc = () => {
                if (lastArgs) {
                    func.apply(lastThis, lastArgs);
                    // Reset context to ensure it doesn't fire duplicates unexpectedly
                    lastArgs = null;
                    lastThis = null;
                }
            };

            // 1. Handle Leading Edge Execution
            const isFirstCall = !timer;
            if (isFirstCall && leading) {
                invokeFunc();
            }

            // 2. Reset the cooldown timer on every call
            if (timer) {
                clearTimeout(timer);
            }

            // 3. Handle Trailing Edge Execution
            timer = setTimeout(() => {
                timer = null; // Clear timer reference when wait window closes
                if (trailing) {
                    invokeFunc();
                }
            }, wait);
        };
    }

})();
