import _ from 'underscore';
import { displayHome } from './helpers/display';
import { quotes, characters } from './api/data';
import formGet, { sendForm } from './helpers/form';
import mobileCheck from './helpers/mobile';
import matcher from './helpers/match';
import bullet from './helpers/bullet';

bullet();
mobileCheck();
formGet();
displayHome();
matcher();

