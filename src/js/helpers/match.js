/*
 * Stylize elements
 *
 * @params {object} styles
 * @return {this}
 */
import _ from 'underscore';
import formGet from '../helpers/form';
import { user, characters } from '../api/data';

function randomNbr(min, max) {
    return (parseInt(Math.floor((max - min) * Math.random()) + min));
}

function changeCard(total, iterator) {
    let user = randomNbr(0, characters.length + 1);
        document.querySelector('.Match__result__number').innerHTML = ` ${total}`;
        document.querySelector('.Proposal__photo').src = characters[user].photo;
        document.querySelector('.Proposal__infos__card__number').innerHTML = `${iterator+1} / ${total}`;
        document.querySelector('.Proposal__infos__card__name').innerHTML = characters[user].name;
        document.querySelector('.Proposal__infos__job').innerHTML = characters[user].job;
        document.querySelector('.Proposal__infos__currentHome').innerHTML = characters[user].world;
    }

function allUsers(){
        let proposal_container = document.querySelector('.Proposal__container'),
        finish = document.createElement('div'),
        img = document.createElement('img'),
        h2 = document.createElement('h2'),
        h4 = document.createElement('h4'),
        a = document.createElement('a');

       finish.classList.add('Proposal__card', 'finish');
        img.src= "img/chewbacca.svg";
        img.alt = "StarLovers - May the Love be with you!";
        a.href= "characters.html";
        a.innerHTML = "jète un coup d'oeil aux autres utilisateurs !";
        h2.innerHTML = "C'EST LA LOOSE…";
        h4.appendChild(a);
        finish.appendChild(img);
        finish.appendChild(h2);
        finish.appendChild(h4);
        while (proposal_container.firstChild) proposal_container.removeChild(proposal_container.firstChild);
        proposal_container.appendChild(finish);

}

                // <!--             <div class="Proposal__card finish">
                //     <img src="img/chewbacca.svg" alt="">
                //     <h2>C'EST LA LOOSE…</h2>
                //     <h4><a href="characters.html">jète un coup d'oeil aux autres utilisateurs !</a href="characters.html"></h4>
                // </div> -->

export default function matcher() {
    if (/Match/.test(document.querySelector('body').classList)) {
        let matchs = randomNbr(10, 20),
            first = randomNbr(0, characters.length+1),
            button1 = document.querySelector('.Button.yes'),
            button2 = document.querySelector('.Button.no'),
            counter = 0;

        document.querySelector('.Match__result__number').innerHTML = ` ${matchs}`;
        document.querySelector('.Proposal__photo').src = characters[first].photo;
        document.querySelector('.Proposal__infos__card__number').innerHTML = `${counter+1} / ${matchs}`;
        document.querySelector('.Proposal__infos__card__name').innerHTML = characters[first].name;
        document.querySelector('.Proposal__infos__job').innerHTML = characters[first].job;
        document.querySelector('.Proposal__infos__currentHome').innerHTML = characters[first].world;

        button1.addEventListener("click", function(){
        	counter++;
        	counter < matchs ? changeCard(matchs, counter) : allUsers();
        });

        button2.addEventListener("click", function(){
	counter++;
        	counter < matchs ? changeCard(matchs, counter) : allUsers();
        });

    }
}

