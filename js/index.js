;($ => {
    ['DOMContentLoaded'].forEach(event =>
        $.addEventListener(event, () =>
            $.querySelector('input#time').addEventListener('input', event => {
                    let value = event.target.value;
                    if (value > 60) event.target.value = 60;
                    if (value < 0) event.target.value = 0;
                    $.querySelector('div#result').innerHTML = (event.target.value / 60).toFixed(2);
                }
            )
        )
    );
})(document);