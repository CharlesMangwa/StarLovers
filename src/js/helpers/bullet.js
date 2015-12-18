/*
 * Display a full-stop each 500ms on Loading page
 *
 *
 *
 */


export default function bullet() {
    if (/Loading/.test(document.querySelector('body').classList)) {
        var dots = window.setInterval(function() {
            var wait = document.getElementById("wait");
            if (wait.innerHTML.length > 2)
                wait.innerHTML = "";
            else
                wait.innerHTML += ".";
        }, 500);
    }
}
