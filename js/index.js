;($ => {
    ['DOMContentLoaded'].forEach(event =>
        $.addEventListener(event, () =>
            $.querySelector('input#time').addEventListener('input', event =>
                $.querySelector('div#result').innerHTML = (event.target.value / 60 * 100).toFixed(2)
            )
        )
    );
})(document);