/*
 * Display messages on home page randomly
 *
 *
 */
 
import { quotes } from '../api/data';

export function displayHome() {
    let message = document.querySelector('.Home__quote__message'),
        author = document.querySelector('.Home__quote__author'),
        panel = document.querySelector('.Home__quote__panel');

    if (/Home/.test(document.querySelector('body').classList)) {
        let i = quotes.length,
            j = quotes.length,
            k = 0,
            l,
            quote = quotes;

        (function myLoop(i) {
            setTimeout(function() {
                l = k;
                k = parseInt(Math.random() * quotes.length);
                if (l = k) k = parseInt(Math.random() * quotes.length);
                message.innerHTML = `"${quote[k].message}"`;
                console.log("Message added");

                author.innerHTML = quote[k].author;
                console.log("Author added");

                panel.classList.add('fade');
                console.log("Element IN");

                (function myLoopJ(i) {
                    setTimeout(function() {
                        if (--j) myLoopJ(j); //  decrement i and call myLoop again if i > 0
                    }, 5000)
                })(quotes.length);
                if (--i) myLoop(i); //  decrement i and call myLoop again if i > 0
                if (k >= quote.length) {
                    i = quotes.length;
                    j = quotes.length;
                    myLoop(i);
                }
            }, 5000)
        })(quotes.length);
    }
}
