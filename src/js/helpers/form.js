/*
* Verify and get form inputs values 
 * 
 * 
 */

import _ from 'underscore';
import { user, characters } from '../api/data.js';
export default function formGet() {
    if (/Home/.test(document.querySelector('body').classList)) {
        let formId = document.querySelector('#form');

        formId.addEventListener('submit', function() {
            form();
        });

        function form() {
            let data = {};
            data.name = document.querySelector('#name').value;
            data.gender = document.querySelector('#gender').value;
            data.weight = document.querySelector('#weight').value;
            data.age = document.querySelector('#age').value;
            data.species = document.querySelector('#species').value;
            data.height = document.querySelector('#height').value;
            data.faction = document.querySelector('#faction').value;
            if (_.contains(data, '—')) {
                alert('Fill in the form!');
                document.formHome.action = '#';
                return false;

            } else {
                document.formHome.submit();
                user.name = document.querySelector('#name').value;
                user.gender = document.querySelector('#gender').value;
                user.weight = document.querySelector('#weight').value;
                user.age = document.querySelector('#age').value;
                user.species = document.querySelector('#species').value;
                user.height = document.querySelector('#height').value;
                user.faction = document.querySelector('#faction').value;
                for (let i in characters) characters[i].match = 0;
            }
        }
    }
}
