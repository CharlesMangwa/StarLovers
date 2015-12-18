/*
 * Display mobile page if screen.width <- 600px
 *
 *
 */
export default function mobileCheck() {
    if (screen.width <= 600 || screen.height <= 600) {
        let body = document.querySelector('body'),
            section = document.createElement('section'),
            mobile_logo = document.createElement('div'),
            img = document.createElement('img'),
            mobile__info = document.createElement('div'),
            h2 = document.createElement('h2'),
            p = document.createElement('p');
            
            body.classList.add('Mobile');
            section.classList.add('Mobile__container');
            mobile_logo.classList.add('Mobile__logo');
            img.classList.add('Mobile__logo__img');
            img.src = "img/starlovers.svg";
            img.alt = "StarLovers - May the Love be with you!";
            h2.classList.add('Mobile__info__oops');
            p.classList.add('Mobile__info__text');
            p.innerHTML = 'Ce site n\'est pas adapté aux petites … "résolutions" !</br>Proccure-toi un engin assez grand ! <span>#IYSWIM</span>';
            mobile_logo.appendChild(img);
            section.appendChild(img);
            mobile__info.appendChild(h2);
            mobile__info.appendChild(p);
            section.appendChild(mobile__info);
            while (body.firstChild) body.removeChild(body.firstChild);
            body.appendChild(section);
    }
}
