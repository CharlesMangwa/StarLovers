export let user = {
    "name": "",
    "height": "",
    "weight": "",
    "age": "",
    "species": "",
    "gender": "",
    "faction": "",
    "fail": 0
};

export const quotes = [
    {
        "number": 0,
        "message": "Grâce à STARLOVERS, j'ai rencontré mon Jedinichou :3 !",
        "author": "Obama B., 40 ans"
    }, 
    {
        "number": 1,
        "message": "Depuis que j’utilise StarLovers, ma vie a complètement changée",
        "author": "Andreïas N., 33 ans"
    }, 
    {
        "number": 2,
        "message": "C’est grâce à StarLovers que j’ai ENFIN trouvé l’amour de ma vie",
        "author": "Sergio Y., 7 ans et demi"
    },
    {
        "number": 3,
        "message": "Oui oui oui oui oui oui oui !!!",
        "author": "Lepers J., 66 ans"
    },
    {
        "number": 4,
        "message": "Sans StarLovers, on aurait jamais pu se rencontrer",
        "author": "Watson E., 25 ans"
    },
    {
        "number": 5,
        "message": "Il ma 2manD en mariag ap 1 prmnde galaktik! Truk 2 ge-din!",
        "author": "Smith J., 32 ans"
    },
    {
        "number": 6,
        "message": "Eazy 92i baby, tt mm tu sè moray! <span>#KalashKalash #RPZ #TrpdOsey<span>",
        "author": " Starfoulah75, 88 ans"
    },
    {
        "number": 7,
        "message": "J'ai toujours rêvé de trouver quelqu'un comme ça, et StarLovers l'a fait",
        "author": "Jones R., 74 ans"
    },
    {
        "number": 8,
        "message": "On s'est rencontré sur StarLovers quelques minutes après que je me sois inscrit!",
        "author": "Tintin, 24 ans"
    },
    {
        "number": 9,
        "message": "C'est un conte de fée qui a commencé grâce à StarLovers…",
        "author": "Alice, 19 ans"
    },
    {
        "number": 10,
        "message": "StarLovers m'a donné une meilleure vision des sources!",
        "author": "Jojo B., ? ans"
    },
    {
       "number": 11,
       "message": "Youp Youp ! On se réveille on trouve l’amour sur StarLovers!",
       "author": "Isa E.D., 19 ans"
   },
   {
       "number": 12,
       "message": "Tinder c'est de la m*****, du coup j'ai tenté l'expérience StarLovers: ça déchire sa race gros!",
       "author": "Marty C., 24 ans"
   },
   {
	   "number": 13,
	   "message":  "Franchement c’est pas mal, même si vous pouviez faire un peu mieux… <span>#TeamCUnPeuTricky<span>",
	   "author": "Simon B."
   }
];

export let characters = [

    //Perso 0 : Luke Skywalker

    {

        "match": 0,
        "number": "0",
        "name": "Luke Skywalker",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
        "height": "172",
        "weight": "77",
        "birth": "19 BBY",
        "faction": "gentil",
        "species": "Humaine",
        "gender": "Homme",
        "world": "Tatooine",
        "job": "Héro à temps partiel",
        "bio": "Mon père est un relou. Aidez-moi.",
        "relationships": [

            {
                "name": "Dark Vador",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/dark_vador.png",
                "url": "dark.vador"
            }, {
                "name": "Leia Organa",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
                "url": "leia.organa"
            }, {
                "name": "Obi-Wan Kenobi",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
                "url": "obi.wan.kenobi"
            }

        ],
        "preferences": "Tout ceux qui ne portent pas de masques.",
        "messages": ["Est-ce que la force est avec toi?", "Ok ... Tu vas bien?", "Bof. Mon père est un idiot."]

    },

    //Perso 1 : C-3PO

    {

        "match": 0,
        "number": "1",
        "name": "C-3PO",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/c_3po.png",
        "height": "167",
        "weight": "75",
        "birth": "112 BBY",
        "faction": "gentil",
        "species": "Droïde",
        "gender": "Un peu des deux",
        "world": "Perdu dans la galaxie",
        "job": "Dans la communication",
        "bio": "Je maîtrise plus de six millions de formes de communication. Impressionnant non?",
        "relationships": [

            {
                "name": "R2-D2",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/r2_d2.png",
                "url": "r2.d2"
            }, {
                "name": "Luke Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
                "url": "luke.skywalker"
            }, {
                "name": "Obi-Wan Kenobi",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
                "url": "obi.wan.kenobi"
            }

        ],
        "preferences": "J'ai une préfèrence pour tout ce qui est métalique. Les clous, les vis...",
        "messages": []

    },

    //Perso 2 : R2-D2

    {

        "match": 0,
        "number": "2",
        "name": "R2-D2",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/r2_d2.png",
        "height": "96",
        "weight": "32",
        "birth": "33 BBY",
        "faction": "gentil",
        "species": "Droïde",
        "gender": "Un peu des deux",
        "world": "Naboo",
        "job": "Astromecano",
        "bio": "Bip-Bip. Bip-Bip",
        "relationships": [

            {
                "name": "C-3PO",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/c_3po.png",
                "url": "c.3po"
            }, {
                "name": "Luke Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
                "url": "luke.skywalker"
            }, {
                "name": "Obi-Wan Kenobi",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
                "url": "obi.wan.kenobi"
            }

        ],
        "preferences": "Bip-Bip",
        "messages": ["Bip-Bip", "Bip-Bip-Bip", "Bip-Bip Bip-Bip"]

    },

    //Perso 3 : Dark Vador

    {

        "match": 0,
        "number": "3",
        "name": "Dark Vador",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/dark_vador.png",
        "height": "202",
        "weight": "136",
        "birth": "41.9 BBY",
        "faction": "mechant",
        "species": "Humaine",
        "gender": "Homme",
        "world": "Yavin IV",
        "job": "Leader",
        "bio": "Je suis ton père.",
        "relationships": [

            {
                "name": "Luke Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
                "url": "luke.skywalker"
            }, {
                "name": "Leia Organa",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
                "url": "leia.organa"
            }, {
                "name": "Obi-Wan Kenobi",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
                "url": "obi.wan.kenobi"
            }

        ],
        "preferences": "J'aime semer la terreur autour de moi.",
        "messages": []

    },

    //Perso 4 : Leia Organa

    {

        "match": 0,
        "number": "4",
        "name": "Leia Organa",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
        "height": "150",
        "weight": "49",
        "birth": "19 BBY",
        "faction": "gentil",
        "species": "Humaine",
        "gender": "Femme",
        "world": "Alderaan",
        "job": "Princesse",
        "bio": "J'ai eu une relation avec mon frère, mais ne dites rien à personne.",
        "relationships": [

            {
                "name": "Dark Vador",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/dark_vador.png",
                "url": "dark.vador"
            }, {
                "name": "Luke Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
                "url": "luke.skywalker"
            }, {
                "name": "Han Solo",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/han_solo.png",
                "url": "han.solo"
            }

        ],
        "preferences": "L'inceste...",
        "messages": []

    },

    //Perso 5 : Owen Lars


    {

        "match": 0,
        "number": "5",
        "name": "Owen Lars",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/owen_lars.png",
        "height": "178",
        "weight": "120",
        "birth": "52 BBY",
        "faction": "gentil",
        "species": "Humaine",
        "gender": "Homme",
        "world": "Tatooine",
        "job": "Fermier",
        "bio": "Mon demi-frère est une horrible personne.",
        "relationships": [

            {
                "name": "Luke Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
                "url": "luke.skywalker"
            }, {
                "name": "Beru Whitesun Lars",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/beru_whitesun_lars.png",
                "url": "beru.whitesun.lars"
            }, {
                "name": "Anakin Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
                "url": "anakin.skywalker"
            }

        ],
        "preferences": "J'aime revenir de parmis les morts.",
        "messages": []

    },

    //Perso 6 : Beru Whitesun Lars

    {

        "match": 0,
        "number": "6",
        "name": "Beru Whitesun Lars",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/beru_whitesun_lars.png",
        "height": "165",
        "weight": "75",
        "birth": "47 BBY",
        "faction": "gentil",
        "species": "Humaine",
        "gender": "Femme",
        "world": "Tatooine",
        "job": "Fermière",
        "bio": "Ne dites pas à mon mari que je suis sur STARLOVERS.",
        "relationships": [

            {
                "name": "Luke Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
                "url": "luke.skywalker"
            }, {
                "name": "Owen Lars",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/owen_lars.png",
                "url": "owen.lars"
            }, {
                "name": "Anakin Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
                "url": "anakin.skywalker"
            }

        ],
        "preferences": "Les rencontres extraconjugales.",
        "messages": []

    },

    //Perso 7 : R5-D4

    {

        "match": 0,
        "number": "7",
        "name": "R5-D4",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/r5_d4.png",
        "height": "97",
        "weight": "32",
        "birth": "C'est une bonne question",
        "faction": "gentil",
        "species": "Droïde",
        "gender": "Un peu des deux",
        "world": "Tatooine",
        "job": "Astromecano",
        "bio": "Bip-Bip",
        "relationships": [

            {
                "name": "R2-D2",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/r2_d2.png",
                "url": "r2.d2"
            }, {
                "name": "C-3PO",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/c_3po.png",
                "url": "c.3po"
            }, {
                "name": "Obi-Wan Kenobi",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
                "url": "obi.wan.kenobi"
            }

        ],
        "preferences": "Bip-Bip",
        "messages": []

    },

    //Perso 8 : Biggs Darklighter

    {

        "match": 0,
        "number": "8",
        "name": "Biggs Darklighter",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/biggs_darklighter.png",
        "height": "183",
        "weight": "84",
        "birth": "24 BBY",
        "faction": "mechant",
        "species": "Humaine",
        "gender": "Homme",
        "world": "Tatooine",
        "job": "Pilote",
        "bio": "Toujours la tête dans les étoiles, à toi de venir y décrocher mon coeur.",
        "relationships": [

            {
                "name": "C-3PO",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/c_3po.png",
                "url": "c.3po"
            }, {
                "name": "Luke Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
                "url": "luke.skywalker"
            }, {
                "name": "Obi-Wan Kenobi",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
                "url": "obi.wan.kenobi"
            }

        ],
        "preferences": "Tout ce qui vole.",
        "messages": []

    },

    //Perso 9 : Obi-Wan Kenobi

    {

        "match": 0,
        "number": "9",
        "name": "Obi-Wan Kenobi",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
        "height": "182",
        "weight": "77",
        "birth": "57 BBY",
        "faction": "gentil",
        "species": "Humaine",
        "gender": "Homme",
        "world": "Stewjon",
        "job": "Former les jeunes",
        "bio": "Si j'avais su ... Hé bien j'aurai réfléchi à deux fois.",
        "relationships": [

            {
                "name": "Luke Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
                "url": "luke.skywalker"
            }, {
                "name": "Owen Lars",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/owen_lars.png",
                "url": "owen.lars"
            }, {
                "name": "Anakin Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
                "url": "anakin.skywalker"
            }

        ],
        "preferences": "Réfléchir.",
        "messages": []

    },

    //Perso 10 : Anakin Skywalker

    {

        "match": 0,
        "number": "10",
        "name": "Anakin Skywalker",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
        "height": "188",
        "weight": "84",
        "birth": "41.9 BBY",
        "faction": "gentil",
        "species": "Humaine",
        "gender": "Homme",
        "world": "Tatooine",
        "job": "Jedi",
        "bio": "J'ai deux profils sur ce site mais faut pas le dire c'est interdis dans les CGU lol.",
        "relationships": [

            {
                "name": "Luke Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
                "url": "luke.skywalker"
            }, {
                "name": "Leia Organa",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
                "url": "leia.organa"
            }, {
                "name": "Obi-Wan Kenobi",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
                "url": "obi.wan.kenobi"
            }

        ],
        "preferences": "Les soirées déguisées pour porter des masques.",
        "messages": []

    },

    //Perso 11 : Wilhuff Tarkin

    {

        "match": 0,
        "number": "11",
        "name": "Wilhuff Tarkin",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/wilhuff_tarkin.png",
        "height": "180",
        "weight": "Je n'ai plus de pèse-personne chez moi.",
        "birth": "64 BBY",
        "faction": "mechant",
        "species": "Humaine",
        "gender": "Homme",
        "world": "Eriadu",
        "job": "Gouverneur",
        "bio": "À toute foule de manifestants, il y a réponse adaptée.",
        "relationships": [

            {
                "name": "Dark Vador",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/dark_vador.png",
                "url": "dark.vador"
            }, {
                "name": "Leia Organa",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
                "url": "leia.organa"
            }, {
                "name": "Obi-Wan Kenobi",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
                "url": "obi.wan.kenobi"
            }

        ],
        "preferences": "Faire régner l'ordre.",
        "messages": []

    },

    //Perso 12 : Chewbacca

    {

        "match": 0,
        "number": "12",
        "name": "Chewbacca",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/chewbacca.png",
        "height": "228",
        "weight": "112",
        "birth": "200 BBY",
        "faction": "gentil",
        "species": "Wookiee",
        "gender": "Homme",
        "world": "Kashyyyk",
        "job": "Coiffeur",
        "bio": "BRRRRR.",
        "relationships": [

            {
                "name": "Leia Organa",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
                "url": "leia.organa"
            }, {
                "name": "Luke Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
                "url": "luke.skywalker"
            }, {
                "name": "Han Solo",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/han_solo.png",
                "url": "han.solo"
            }

        ],
        "preferences": "BRRRRR",
        "messages": []

    },

    //Perso 13 : Han Solo

    {

        "match": 0,
        "number": "13",
        "name": "Han Solo",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/han_solo.png",
        "height": "180",
        "weight": "80",
        "birth": "29 BBY",
        "faction": "gentil",
        "species": "Humaine",
        "gender": "Homme",
        "world": "Corellia",
        "job": "Pilote",
        "bio": "Toujours proche d'une grosse touffe de poils. Et vous pensez peut être pas à la même chose que moi.",
        "relationships": [

            {
                "name": "Leia Organa",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
                "url": "leia.organa"
            }, {
                "name": "Luke Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
                "url": "luke.skywalker"
            }, {
                "name": "Chewbacca",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/chewbacca.png",
                "url": "chewbacca"
            }

        ],
        "preferences": "Les soeurs de mes amis.",
        "messages": []

    },

    //Perso 14 : Greedo

    {

        "match": 0,
        "number": "14",
        "name": "Greedo",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/greedo.png",
        "height": "173",
        "weight": "74",
        "birth": "44 BBY",
        "faction": "mechant",
        "species": "Rodian",
        "gender": "Homme",
        "world": "Rodia",
        "job": "Chasseur de primes",
        "bio": "J'ai toujours voulu suivre les traces de mon père. Jabba est un brave type.",
        "relationships": [

            {
                "name": "Han Solo",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/han_solo.png",
                "url": "han.solo"
            }, {
                "name": "Jabba Desilijic Tiure",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/jabba_desilijic_tiure.png",
                "url": "jabba.desilijic.tiure"
            }, {
                "name": "Anakin Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
                "url": "anakin.skywalker"
            }

        ],
        "preferences": "Dès qu'il y a une prime.",
        "messages": []

    },

    //Perso 15 : Qui-Gon Jinn

    {

        "match": 0,
        "number": "15",
        "name": "Qui-Gon Jinn",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/qui_gon_jinn.png",
        "height": "193",
        "weight": "89",
        "birth": "92 BBY",
        "faction": "gentil",
        "species": "Humaine",
        "gender": "Homme",
        "world": "Perdu dans la galaxie",
        "job": "Maître Jedi",
        "bio": "Et dire que j'aurai pu faire éviter le pire...",
        "relationships": [

            {
                "name": "Dooku",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/dooku.png",
                "url": "dooku"
            }, {
                "name": "Anakin Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
                "url": "anakin.skywalker"
            }, {
                "name": "Obi-Wan Kenobi",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
                "url": "obi.wan.kenobi"
            }

        ],
        "preferences": "Fais moi plaisir avec un sabre laser.",
        "messages": []

    },


    //Perso 16 : Dooku

    {

        "match": 0,
        "number": "16",
        "name": "Dooku",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/dooku.png",
        "height": "193",
        "weight": "78",
        "birth": "102 BBY",
        "faction": "mechant",
        "species": "Humaine",
        "gender": "Homme",
        "world": "Serenno",
        "job": "Seigneur Sith",
        "bio": "Yoda m'a tout appris!",
        "relationships": [

            {
                "name": "Qui-Gon Jinn",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/qui_gon_jinn.png",
                "url": "qui.gon.jinn"
            }, {
                "name": "Dark Vador",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/dark_vador.png",
                "url": "dark.vador"
            }, {
                "name": "Yoda",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/yoda.png",
                "url": "yoda"
            }

        ],
        "preferences": "Les choses petites et vertes.",
        "messages": []

    },



    //Perso 17 : Nute Gunray


    {

        "match": 0,
        "number": "17",
        "name": "Nute Gunray",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/nute_gunray.png",
        "height": "191",
        "weight": "90",
        "birth": "Je n'aime pas donner mon âge",
        "faction": "mechant",
        "species": "Neimodian",
        "gender": "Homme",
        "world": "Cato Neimodia",
        "job": "Vice-Roi",
        "bio": "Après 4 procès, ces idiots n'ont toujours pas réussi à me destituer. Thug life.",
        "relationships": [

            {
                "name": "Palpatine",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/palpatine.png",
                "url": "palpatine"
            }, {
                "name": "Dark Vador",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/dark_vador.png",
                "url": "dark.vador"
            }, {
                "name": "Yoda",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/yoda.png",
                "url": "yoda"
            }

        ],
        "preferences": "Le commerce.",
        "messages": []

    },

    //Perso 18 : Finis Valorum

    {

        "match": 0,
        "number": "18",
        "name": "Finis Valorum",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/finis_valorum.png",
        "height": "170",
        "weight": "J'ai pris du ventre",
        "birth": "91 BBY",
        "faction": "gentil",
        "species": "Humaine",
        "gender": "Homme",
        "world": "Coruscant",
        "job": "Chancelier Suprême",
        "bio": "Amidala et Palpatine j'aurai votre peau.",
        "relationships": [

            {
                "name": "Palpatine",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/palpatine.png",
                "url": "palpatine"
            }, {
                "name": "Dark Vador",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/dark_vador.png",
                "url": "dark.vador"
            }, {
                "name": "Padmé Amidala",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/padme_amidala.png",
                "url": "padme.amidala"
            }

        ],
        "preferences": "Dominer et être dominé.",
        "messages": []

    },

    //Perso 19 : Padmé Amidala

    {

        "match": 0,
        "number": "19",
        "name": "Padmé Amidala",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/padme_amidala.png",
        "height": "185",
        "weight": "45",
        "birth": "46 BBY",
        "faction": "gentil",
        "species": "Humaine",
        "gender": "Femme",
        "world": "Naboo",
        "job": "Reine et Sénatrice",
        "bio": "Il manque un peu de femmes sur ce site de rencontre vous ne trouvez pas?",
        "relationships": [

            {
                "name": "Luke Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
                "url": "luke.skywalker"
            }, {
                "name": "Leia Organa",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
                "url": "leia.organa"
            }, {
                "name": "Anakin Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
                "url": "anakin.skywalker"
            }

        ],
        "preferences": "Les relations secrètes.",
        "messages": []

    },

    //Perso 20 : Jar Jar Binks

    {

        "match": 0,
        "number": "20",
        "name": "Jar Jar Binks",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/jar_jar_binks.png",
        "height": "196",
        "weight": "66",
        "birth": "52 BBY",
        "faction": "gentil",
        "species": "Gungan",
        "gender": "Homme",
        "world": "Naboo",
        "job": "Général des armées",
        "bio": "Je suis ce que l'on pourrait appeler un boulet. Mais je fais très bien à manger.",
        "relationships": [

            {
                "name": "Luke Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
                "url": "luke.skywalker"
            }, {
                "name": "Leia Organa",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
                "url": "leia.organa"
            }, {
                "name": "Padmé Amidala",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/padme_amidala.png",
                "url": "padme.amidala"
            }

        ],
        "preferences": "Erm.Vaste question.",
        "messages": []

    },

    //Perso 21 : Roos Tarpals

    {

        "match": 0,
        "number": "21",
        "name": "Roos Tarpals",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/roos_tarpals.png",
        "height": "224",
        "weight": "82",
        "birth": "Secret",
        "faction": "gentil",
        "species": "Gungan",
        "gender": "Homme",
        "world": "Naboo",
        "job": "Capitaine",
        "bio": "Jar Jar est un très bon ami et un excellent général. Notre armée ne serait rien sans lui.",
        "relationships": [

            {
                "name": "Luke Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
                "url": "luke.skywalker"
            }, {
                "name": "Jar Jar Binks",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/jar_jar_binks.png",
                "url": "jar.jar.binks"
            }, {
                "name": "Padmé Amidala",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/padme_amidala.png",
                "url": "padme.amidala"
            }

        ],
        "preferences": "Jar Jar a répondu quoi?",
        "messages": []

    },

    //Perso 22 : Rugor Nass


    {

        "match": 0,
        "number": "22",
        "name": "Rugor Nass",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/rugor_nass.png",
        "height": "206",
        "weight": "J'ai pris du ventre",
        "birth": "Secret",
        "faction": "mechant",
        "species": "Gungan",
        "gender": "Homme",
        "world": "Naboo",
        "job": "Chef des Gungans",
        "bio": "J'aime bien manger, ça ne se voit pas trop que j'ai arrêté le sport?",
        "relationships": [

            {
                "name": "Luke Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
                "url": "luke.skywalker"
            }, {
                "name": "Jar Jar Binks",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/jar_jar_binks.png",
                "url": "jar.jar.binks"
            }, {
                "name": "Padmé Amidala",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/padme_amidala.png",
                "url": "padme.amidala"
            }

        ],
        "preferences": "Je déteste les Naboo.",
        "messages": []

    },

    //Perso 23 : Ric Olié

    {

        "match": 0,
        "number": "23",
        "name": "Ric Olié",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/ric_olie.png",
        "height": "183",
        "weight": "80",
        "birth": "Secret",
        "faction": "gentil",
        "species": "Humaine",
        "gender": "Homme",
        "world": "Naboo",
        "job": "Pilote",
        "bio": "Je pense que ton père est un voleur. Je pense l'avoir aperçu dans le ciel en train de voler des étoiles pour les mettre dans tes yeux.",
        "relationships": [

            {
                "name": "Jar Jar Binks",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/jar_jar_binks.png",
                "url": "jar.jar.binks"
            }, {
                "name": "Padmé Amidala",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/padme_amidala.png",
                "url": "padme.amidala"
            }, {
                "name": "Quarsh Panaka",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/quarsh_panaka.png",
                "url": "quarsh.panaka"
            },

        ],
        "preferences": "Tout ce qui vole.",
        "messages": []

    },

    //Perso 24 : Watto

    {

        "match": 0,
        "number": "24",
        "name": "Watto",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/watto.png",
        "height": "137",
        "weight": "Secret",
        "birth": "Secret",
        "faction": "mechant",
        "species": "Toydarian",
        "gender": "Homme",
        "world": "Toydaria",
        "job": "Commerçant",
        "bio": "J'achète toute votre vieille ferraille au meilleur prix !",
        "relationships": [

            {
                "name": "Qui-Gon Jinn",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/qui_gon_jinn.png",
                "url": "qui.gon.jinn"
            }, {
                "name": "Anakin Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
                "url": "anakin.skywalker"
            }, {
                "name": "Owen Lars",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/owen_lars.png",
                "url": "owen.lars"
            }

        ],
        "preferences": "Tomber en esclavage.",
        "messages": []

    },

    //Perso 25 : Sebulba

    {

        "match": 0,
        "number": "25",
        "name": "Sebulba",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/sebulba.png",
        "height": "112",
        "weight": "40",
        "birth": "Secret",
        "faction": "mechant",
        "species": "Dug",
        "gender": "Homme",
        "world": "Malastare",
        "job": "Pilote de course",
        "bio": "Anakin n'aurait jamais du gagner cette course ... Il ne le méritait pas !",
        "relationships": [

            {
                "name": "Qui-Gon Jinn",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/qui_gon_jinn.png",
                "url": "qui.gon.jinn"
            }, {
                "name": "Anakin Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
                "url": "anakin.skywalker"
            }, {
                "name": "Watto",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/watto.png",
                "url": "watto"
            }

        ],
        "preferences": "Les courses automobiles et la mauvaise foi.",
        "messages": []

    },

    //Perso 26 : Quarsh Panaka

    {

        "match": 0,
        "number": "26",
        "name": "Quarsh Panaka",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/quarsh_panaka.png",
        "height": "183",
        "weight": "Secret",
        "birth": "62 BBY",
        "faction": "gentil",
        "species": "Humaine",
        "gender": "Homme",
        "world": "Naboo",
        "job": "Capitaine",
        "bio": "Je serai prêt à tout pour défendre ma planète.",
        "relationships": [

            {
                "name": "Ric Olié",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/ric_olie.png",
                "url": "ric.olie"
            }, {
                "name": "Jar Jar Binks",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/jar_jar_binks.png",
                "url": "jar.jar.binks"
            }, {
                "name": "Padmé Amidala",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/padme_amidala.png",
                "url": "padme.amidala"
            }

        ],
        "preferences": "Amidala",
        "messages": []

    },

    //Perso 27 : Shmi Skywalker

    {

        "match": 0,
        "number": "27",
        "name": "Shmi Skywalker",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/shmi_skywalker.png",
        "height": "163",
        "weight": "Secret",
        "birth": "72 BBY",
        "faction": "gentil",
        "species": "Humaine",
        "gender": "Femme",
        "world": "Tatooine",
        "job": "Fermière",
        "bio": "J'ai enfanté un monstre, ne m'en tenez pas rigueur !",
        "relationships": [

            {
                "name": "Qui-Gon Jinn",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/qui_gon_jinn.png",
                "url": "qui.gon.jinn"
            }, {
                "name": "Anakin Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
                "url": "anakin.skywalker"
            }, {
                "name": "Watto",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/watto.png",
                "url": "watto"
            }

        ],
        "preferences": "La liberté.",
        "messages": []

    },

    //Perso 28 : Dark Maul

    {

        "match": 0,
        "number": "28",
        "name": "Dark Maul",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/dark_maul.png",
        "height": "175",
        "weight": "80",
        "birth": "54 BBY",
        "faction": "mechant",
        "species": "Zabrak",
        "gender": "Homme",
        "world": "Dathomir",
        "job": "Sith",
        "bio": "Si quelqu'un retrouve la seconde partie de mon corps, qu'il me contacte.",
        "relationships": [

            {
                "name": "Qui-Gon Jinn",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/qui_gon_jinn.png",
                "url": "qui.gon.jinn"
            }, {
                "name": "Dark Vador",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/dark_vador.png",
                "url": "dark.vador"
            }, {
                "name": "Obi-Wan Kenobi",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
                "url": "obi.wan.kenobi"
            }

        ],
        "preferences": "Les doubles sabres laser.",
        "messages": []

    },

    //Perso 29 : Bib Fortuna

    {

        "match": 0,
        "number": "29",
        "name": "Bib Fortuna",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/bib_fortuna.png",
        "height": "180",
        "weight": "Secret",
        "birth": "Secret",
        "faction": "mechant",
        "species": "Twi'lek",
        "gender": "Homme",
        "world": "Ryloth",
        "job": "Criminel",
        "bio": "Si j'avais des millions, je serai millionnaire, si j'avais des milliards, je serai milliardaire. Mais je n'ai que quelques centimes donc je suis sentimental...",
        "relationships": [

            {
                "name": "Jabba Desilijic Tiure",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/jabba_desilijic_tiure.png",
                "url": "jabba.desilijic.tiure"
            }, {
                "name": "Dark Vador",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/dark_vador.png",
                "url": "dark.vador"
            }, {
                "name": "Obi-Wan Kenobi",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
                "url": "obi.wan.kenobi"
            }

        ],
        "preferences": "La fortune.",
        "messages": []

    },

    //Perso 30 : Aayla Secura

    {

        "match": 0,
        "number": "30",
        "name": "Aayla Secura",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/aayla_secura.png",
        "height": "178",
        "weight": "55",
        "birth": "48 BBY",
        "faction": "gentil",
        "species": "Twi'lek",
        "gender": "Femme",
        "world": "Ryloth",
        "job": "Jedi",
        "bio": "Ne t'approche pas trop de moi où je n'hésiterai pas à utiliser mon sabre laser.",
        "relationships": [

            {
                "name": "Anakin Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
                "url": "anakin.skywalker"
            }, {
                "name": "Obi-Wan Kenobi",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
                "url": "obi.wan.kenobi"
            }, {
                "name": "Padmé Amidala",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/padme_amidala.png",
                "url": "padme.amidala"
            }

        ],
        "preferences": "Les garçons discrets.",
        "messages": []
    },

    //Perso 31 : Ratts Tyerel

    {

        "match": 0,
        "number": "31",
        "name": "Ratts Tyerel",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/ratts_tyerel.png",
        "height": "79",
        "weight": "15",
        "birth": "Secret",
        "faction": "gentil",
        "species": "Aleena",
        "gender": "Homme",
        "world": "Aleen Minor",
        "job": "Pilote",
        "bio": "Anakin, si tu vois ce message, tu es un pilote d'exception.",
        "relationships": [

            {
                "name": "Anakin Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
                "url": "anakin.skywalker"
            }, {
                "name": "Obi-Wan Kenobi",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
                "url": "obi.wan.kenobi"
            }, {
                "name": "Sebulba",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/sebulba.png",
                "url": "sebulba"
            }

        ],
        "preferences": "Revenir de parmis les morts.",
        "messages": []

    },

    //Perso 32 : Dud Bolt

    {

        "match": 0,
        "number": "32",
        "name": "Dud Bolt",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/dud_bolt.png",
        "height": "94",
        "weight": "45",
        "birth": "Secret",
        "faction": "gentil",
        "species": "Vulpetereen",
        "gender": "Homme",
        "world": "Vulpter",
        "job": "Pilote",
        "bio": "Le troisième tour ne m'a pas porté chance.",
        "relationships": [

            {
                "name": "Anakin Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
                "url": "anakin.skywalker"
            }, {
                "name": "Dud Bolt",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/dud_bolt.png",
                "url": "dud.bolt"
            }, {
                "name": "Sebulba",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/sebulba.png",
                "url": "sebulba"
            }

        ],
        "preferences": "La course.",
        "messages": []

    },

    //Perso 33 : Jabba Desilijic Tiure

    {

        "match": 0,
        "number": "33",
        "name": "Jabba Desilijic Tiure",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/jabba_desilijic_tiure.png",
        "height": "175",
        "mass": "1358",
        "birth": "600BBY",
        "gender": "Homme",
        "world": "Nal Hutta",
        "faction": "mechant",
        "species": "Hutt",
        "job": "Seigneur du crime",
        "bio": "Pourquoi m'as-tu trahi Leia? </3",
        "relationships": [

            {
                "name": "Luke Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
                "url": "luke.skywalker"
            }, {
                "name": "Leia Organa",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
                "url": "leia.organa"
            }, {
                "name": "Obi-Wan Kenobi",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
                "url": "obi.wan.kenobi"
            }

        ],
        "preferences": "Manger.",
        "messages": []

    },

    //Perso 34 : Wedge Antilles

    {

        "match": 0,
        "number": "34",
        "name": "Wedge Antilles",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/wedge_antilles.png",
        "height": "170",
        "mass": "77",
        "birth": "21BBY",
        "gender": "Homme",
        "world": "Corellia",
        "faction": "gentil",
        "species": "Humaine",
        "job": "Pilote",
        "bio": "Passer de contrebandier à pilote, n'est-ce pas ça l'ascension sociale?",
        "relationships": [

            {
                "name": "Luke Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
                "url": "luke.skywalker"
            }, {
                "name": "Leia Organa",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
                "url": "leia.organa"
            }, {
                "name": "Jabba Desilijic Tiure",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/jabba_desilijic_tiure.png",
                "url": "jabba.desilijic.tiure"
            }

        ],
        "preferences": "La contrebande.",
        "messages": []

    },

    //Perso 35 : Jek Tono Porkins

    {

        "match": 0,
        "number": "35",
        "name": "Jek Tono Porkins",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/jek_tono_porkins.png",
        "height": "180",
        "mass": "110",
        "birth": "23BBY",
        "gender": "Homme",
        "world": "Bestine IV",
        "faction": "gentil",
        "species": "Humaine",
        "job": "Pilote",
        "bio": "Je ne voulais pas mourir lors de cette bataille.",
        "relationships": [

            {
                "name": "Luke Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
                "url": "luke.skywalker"
            }, {
                "name": "Leia Organa",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
                "url": "leia.organa"
            }, {
                "name": "Wedge Antilles",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/wedge_antilles.png",
                "url": "wedge.antilles"
            }

        ],
        "preferences": "Piloter un avion.",
        "messages": []

    },

    //Perso 36 : Yoda

    {

        "match": 0,
        "number": "36",
        "name": "Yoda",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/yoda.png",
        "height": "66",
        "mass": "17",
        "birth": "896BBY",
        "gender": "Homme",
        "world": "Quelque part dans la galaxie",
        "faction": "gentil",
        "species": "Yoda",
        "job": "Maître Jedi",
        "bio": "Difficile à voir. Toujours en mouvement est l'avenir",
        "relationships": [

            {
                "name": "Luke Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
                "url": "luke.skywalker"
            }, {
                "name": "Anakin Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
                "url": "anakin.skywalker"
            }, {
                "name": "Obi-Wan Kenobi",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
                "url": "obi.wan.kenobi"
            }

        ],
        "preferences": "La philosophie.",
        "messages": ["La taille importe peu ... Regarde moi : est-ce par la taille que tu peux me juger ? Et bien tu ne le dois pas.", "Quand 900 ans comme moi tu auras, moins en forme tu seras.", "Le côté obscur de la Force, redouter tu dois."]

    },

    //Perso 37 : Palpatine

    {

        "match": 0,
        "number": "37",
        "name": "Palpatine",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/palpatine.png",
        "height": "170",
        "mass": "75",
        "birth": "82BBY",
        "gender": "Homme",
        "world": "Naboo",
        "faction": "mechant",
        "species": "Humaine",
        "job": "Empereur",
        "bio": "Je te hais. Je te déteste. Je te maudis.",
        "relationships": [

            {
                "name": "Dark Vador",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/dark_vador.png",
                "url": "dark.vador"
            }, {
                "name": "Luke Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
                "url": "luke.skywalker"
            }, {
                "name": "Obi-Wan Kenobi",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
                "url": "obi.wan.kenobi"
            }

        ],
        "preferences": "Les plans libertins.",
        "messages": []

    },

    //Perso 38 : Boba Fett

    {

        "match": 0,
        "number": "38",
        "name": "Boba Fett",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/boba_fett.png",
        "height": "183",
        "mass": "78.2",
        "birth": "31.5BBY",
        "gender": "Homme",
        "world": "Kamino",
        "faction": "mechant",
        "species": "Humaine",
        "job": "Chasseur de primes",
        "bio": "Viens en privé pour connaître mes tarifs.",
        "relationships": [

            {
                "name": "Dark Vador",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/dark_vador.png",
                "url": "dark.vador"
            }, {
                "name": "Luke Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
                "url": "luke.skywalker"
            }, {
                "name": "Palpatine",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/palpatine.png",
                "url": "palpatine"
            }

        ],
        "preferences": "La chasse.",
        "messages": []

    },

    //Perso 39 : IG-88

    {

        "match": 0,
        "number": "39",
        "name": "IG-88",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/ig_88.png",
        "height": "200",
        "mass": "140",
        "birth": "15BBY",
        "gender": "Homme",
        "world": "Quelque part dans la galaxie",
        "faction": "mechant",
        "species": "Droïde",
        "job": "Assassin",
        "bio": "Mon but : tuer. Tuer tout ce qui bouge.",
        "relationships": [

            {
                "name": "Dark Vador",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/dark_vador.png",
                "url": "dark.vador"
            }, {
                "name": "Boba Fett",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/boba_fett.png",
                "url": "boba.fett"
            }, {
                "name": "Palpatine",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/palpatine.png",
                "url": "palpatine"
            }

        ],
        "preferences": "Le sang.",
        "messages": []

    },

    //Perso 40 : Bossk

    {

        "match": 0,
        "number": "40",
        "name": "Bossk",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/bossk.png",
        "height": "190",
        "mass": "113",
        "birth": "53BBY",
        "gender": "Homme",
        "world": "Trandosha",
        "faction": "mechant",
        "species": "Trandoshan",
        "job": "Chasseur de primes",
        "bio": "Chewbacca tu es bien trop poilu pour moi.",
        "relationships": [

            {
                "name": "IG-88",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/ig_88.png",
                "url": "ig.88"
            }, {
                "name": "Boba Fett",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/boba_fett.png",
                "url": "boba.fett"
            }, {
                "name": "Palpatine",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/palpatine.png",
                "url": "palpatine"
            }

        ],
        "preferences": "La destruction.",
        "messages": []

    },

    //Perso 41 : Lando Calrissian

    {

        "match": 0,
        "number": "41",
        "name": "Lando Calrissian",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/lando_calrissian.png",
        "height": "177",
        "mass": "79",
        "birth": "31BBY",
        "gender": "Homme",
        "world": "Socorro",
        "faction": "gentil",
        "species": "Humaine",
        "job": "Général rebelle",
        "bio": "Mon plaisir? Motiver les gens à rejoindre ma cause. Rejoins-moi.",
        "relationships": [

            {
                "name": "Luke Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
                "url": "luke.skywalker"
            }, {
                "name": "Jar Jar Binks",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/jar_jar_binks.png",
                "url": "jar.jar.binks"
            }, {
                "name": "Padmé Amidala",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/padme_amidala.png",
                "url": "padme.amidala"
            }

        ],
        "preferences": "L'anarchie.",
        "messages": []

    },

    //Perso 42 : Lobot

    {

        "match": 0,
        "number": "42",
        "name": "Lobot",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/lobot.png",
        "height": "175",
        "mass": "79",
        "birth_year": "37BBY",
        "gender": "Homme",
        "world": "Bespin",
        "faction": "gentil",
        "species": "Humaine",
        "job": "Baron Administrateur",
        "bio": "Non, je ne suis pas intervenant à HETIC.",
        "relationships": [

            {
                "name": "Luke Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
                "url": "luke.skywalker"
            }, {
                "name": "Leia Organa",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
                "url": "leia.organa"
            }, {
                "name": "Obi-Wan Kenobi",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
                "url": "obi.wan.kenobi"
            }

        ],
        "preferences": "Les tondeuses.",
        "messages": []

    },

    //Perso 43 : Ackbar

    {

        "match": 0,
        "number": "43",
        "name": "Ackbar",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/ackbar.png",
        "height": "180",
        "mass": "83",
        "birth": "41BBY",
        "gender": "Homme",
        "world": "Mon Cala",
        "faction": "mechant",
        "species": "Mon Calamari",
        "job": "Amiral",
        "bio": "Malgré mon apparence, je suis un homme recherchant une relation sérieuse sur ce site.",
        "relationships": [

            {
                "name": "Luke Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
                "url": "luke.skywalker"
            }, {
                "name": "Lando Calrissian",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/lando_calrissian.png",
                "url": "lando.calrissian"
            }, {
                "name": "Padmé Amidala",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/padme_amidala.png",
                "url": "padme.amidala"
            }

        ],
        "preferences": "Les poulpes.",
        "messages": []

    },

    //Perso 44 : Mon Mothma

    {

        "match": 0,
        "number": "44",
        "name": "Mon Mothma",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/mon_mothma.png",
        "height": "150",
        "mass": "61",
        "birth_year": "48BBY",
        "gender": "Femme",
        "world": "Chandrila",
        "faction": "gentil",
        "species": "Humaine",
        "job": "Présidente de la Nouvelle République",
        "bio": "Femme mature recherchant un jeune homme pour des moments de plaisir.",
        "relationships": [

            {
                "name": "Padmé Amidala",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/padme_amidala.png",
                "url": "padme.amidala"
            }, {
                "name": "Anakin Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
                "url": "anakin.skywalker"
            }, {
                "name": "Palpatine",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/palpatine.png",
                "url": "palpatine"
            }

        ],
        "preferences": "Les jeunots.",
        "messages": []

    },


    //Perso 45 : Arvel Crynyd

    {

        "match": 0,
        "number": "45",
        "name": "Arvel Crynyd",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/arvel_crynyd.png",
        "height": "Secret",
        "mass": "Secret",
        "birth": "Secret",
        "gender": "Homme",
        "world": "Quelque part dans la galaxie",
        "faction": "gentil",
        "species": "Humaine",
        "job": "Pilote",
        "bio": "Je me suis sacrifié pour les miens. Ne suis-je pas génial?",
        "relationships": [

            {
                "name": "Luke Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
                "url": "luke.skywalker"
            }, {
                "name": "Leia Organa",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
                "url": "leia.organa"
            }, {
                "name": "Jabba Desilijic Tiure",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/jabba_desilijic_tiure.png",
                "url": "jabba.desilijic.tiure"
            }

        ],
        "preferences": "Les soumis.",
        "messages": []

    },

    //Perso 46 : Wicket Wystri Warrick

    {

        "match": 0,
        "number": "46",
        "name": "Wicket Wystri Warrick",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/wicket_wystri_warrick.png",
        "height": "88",
        "mass": "20",
        "birth": "8BBY",
        "gender": "Homme",
        "world": "Endor",
        "faction": "gentil",
        "species": "Ewok",
        "job": "Éclaireur",
        "bio": "Même dans les périodes les plus sombres, je serai toujours là pour te guider.",
        "relationships": [

            {
                "name": "Chewbacca",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/chewbacca.png",
                "url": "chewbacca"
            }, {
                "name": "Luke Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
                "url": "luke.skywalker"
            }, {
                "name": "Han Solo",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/han_solo.png",
                "url": "han.solo"
            }

        ],
        "preferences": "Les lampes.",
        "messages": []

    },

    //Perso 47 : Nien Nunb

    {

        "match": 0,
        "number": "47",
        "name": "Nien Nunb",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/nien_nunb.png",
        "height": "160",
        "mass": "68",
        "birth": "Secret",
        "gender": "Homme",
        "world": "Sullust",
        "faction": "gentil",
        "species": "Sullustan",
        "job": "Pilote",
        "bio": "Viens prendre les commandes de mon coeur et de mon corps...",
        "relationships": [

            {
                "name": "Gasgano",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/gasgano.png",
                "url": "gasgano"
            }, {
                "name": "Boba Fett",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/boba_fett.png",
                "url": "boba.fett"
            }, {
                "name": "Ben Quadinaros",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/ben_quadinaros.png",
                "url": "ben.quadinaros"
            }

        ],
        "preferences": "Les belles carrosseries.",
        "messages": []

    },

    //Perso 48 : Gasgano

    {

        "match": 0,
        "number": "48",
        "name": "Gasgano",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/gasgano.png",
        "height": "122",
        "mass": "Secret",
        "birth": "Secret",
        "gender": "Homme",
        "world": "Troiken",
        "faction": "gentil",
        "species": "Xexto",
        "job": "Pilote",
        "bio": "Tu sais que tu es belle?",
        "relationships": [

            {
                "name": "Nien Nunb",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/nien_nunb.png",
                "url": "nien.nunb"
            }, {
                "name": "Boba Fett",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/boba_fett.png",
                "url": "boba.fett"
            }, {
                "name": "Ben Quadinaros",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/ben_quadinaros.png",
                "url": "ben.quadinaros"
            }

        ],
        "preferences": "Tout ce qui vole.",
        "messages": []

    },

    //Perso 49 : Ben Quadinaros

    {

        "match": 0,
        "number": "49",
        "name": "Ben Quadinaros",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/ben_quadinaros.png",
        "height": "163",
        "mass": "65",
        "birth": "Secret",
        "gender": "Homme",
        "world": "Tund",
        "faction": "gentil",
        "species": "Toong",
        "job": "Pilote",
        "bio": "Tu veux voir mon bel engin?",
        "relationships": [

            {
                "name": "Gasgano",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/gasgano.png",
                "url": "gasgano"
            }, {
                "name": "Boba Fett",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/boba_fett.png",
                "url": "boba.fett"
            }, {
                "name": "Nien Nunb",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/nien_nunb.png",
                "url": "nien.nunb"
            }

        ],
        "preferences": "Toi.",
        "messages": []

    },

    //Perso 50 : Mace Windu

    {

        "match": 0,
        "number": "50",
        "name": "Mace Windu",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/mace_windu.png",
        "height": "188",
        "mass": "84",
        "birth": "72BBY",
        "gender": "Homme",
        "world": "Haruun Kal",
        "faction": "gentil",
        "species": "Humaine",
        "job": "Maître Jedi",
        "bio": "Sans moi, Anakin n'en serait pas là.",
        "relationships": [

            {
                "name": "Obi-Wan Kenobi",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
                "url": "obi.wan.kenobi"
            }, {
                "name": "Anakin Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/anakin_skywalker.png",
                "url": "anakin.skywalker"
            }, {
                "name": "Yoda",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/yoda.png",
                "url": "yoda"
            }

        ],
        "preferences": "Les beaux sabres laser.",
        "messages": []

    },

    //Perso 51 : Ki Adi Mundi

    {

        "match": 0,
        "number": "51",
        "name": "Ki-Adi-Mundi",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/ki_adi_mundi.png",
        "height": "198",
        "mass": "82",
        "birth": "92BBY",
        "gender": "Homme",
        "world": "Carea",
        "faction": "gentil",
        "species": "Cerean",
        "job": "Maître Jedi",
        "bio": "Incline-toi devant tant de style. ",
        "relationships": [

            {
                "name": "Obi-Wan Kenobi",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/obi_wan_kenobi.png",
                "url": "obi.wan.kenobi"
            }, {
                "name": "Mace Windu",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/mace_windu.png",
                "url": "mace.windu"
            }, {
                "name": "Yoda",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/yoda.png",
                "url": "yoda"
            }

        ],
        "preferences": "Les grandes filles.",
        "messages": []

    },

    //Perso 52 : Kit Fisto

    {

        "match": 0,
        "number": "52",
        "name": "Kit Fisto",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/kit_fisto.png",
        "height": "196",
        "mass": "87",
        "birth": "Secret",
        "gender": "Homme",
        "world": "Glee Anslem",
        "faction": "gentil",
        "species": "Nautolan",
        "job": "Maître Jedi",
        "bio": "Ne pas se fier à mon nom. Je ne suis pas fan de ce genre de pratiques.",
        "relationships": [

            {
                "name": "Ki-Adi-Mundi",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/ki_adi_mundi.png",
                "url": "ki.adi.mundi"
            }, {
                "name": "Mace Windu",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/mace_windu.png",
                "url": "mace.windu"
            }, {
                "name": "Yoda",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/yoda.png",
                "url": "yoda"
            }

        ],
        "preferences": "Le shopping.",
        "messages": []

    },

    //Perso 53 : Eeth Koth

    {

        "match": 0,
        "number": "53",
        "name": "Eeth Koth",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/eeth_koth.png",
        "height": "171",
        "mass": "Secret",
        "birth": "Secret",
        "gender": "Homme",
        "world": "Iridonia",
        "faction": "gentil",
        "species": "Zabrak",
        "job": "Maître Jedi",
        "bio": "Il y a beaucoup trop de Maître Jedi sur ce site ...",
        "relationships": [

            {
                "name": "Ki-Adi-Mundi",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/ki_adi_mundi.png",
                "url": "ki.adi.mundi"
            }, {
                "name": "Kit Fisto",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/kit_fisto.png",
                "url": "kit.fisto"
            }, {
                "name": "Yoda",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/yoda.png",
                "url": "yoda"
            }

        ],
        "preferences": "Le champagne.",
        "messages": []

    },

    //Perso 54 : Adi Gallia

    {

        "match": 0,
        "number": "54",
        "name": "Adi Gallia",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/adi_gallia.png",
        "height": "184",
        "mass": "50",
        "birth": "Secret",
        "gender": "Femme",
        "world": "Coruscant",
        "faction": "gentil",
        "species": "Tholothian",
        "job": "Maître Jedi",
        "bio": "Je suis une belle femme. Si je t'accepte, tu sais à quoi t'attendre.",
        "relationships": [

            {
                "name": "Ki-Adi-Mundi",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/ki_adi_mundi.png",
                "url": "ki.adi.mundi"
            }, {
                "name": "Mace Windu",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/mace_windu.png",
                "url": "mace.windu"
            }, {
                "name": "Eeth Koth",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/eeth_koth.png",
                "url": "eeth.koth"
            }

        ],
        "preferences": "La musique techno.",
        "messages": []

    },

    //Perso 55 : Saesee Tiin

    {

        "match": 0,
        "number": "55",
        "name": "Saesee Tiin",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/saesee_tiin.png",
        "height": "188",
        "mass": "Secret",
        "birth": "Secret",
        "gender": "Homme",
        "world": "Iktotch",
        "faction": "gentil",
        "species": "Iktotchi",
        "job": "Maître Jedi",
        "bio": "Où sont les vaches? Avec leurs cornes plein de charme.",
        "relationships": [

            {
                "name": "Adi Gallia",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/adi_gallia.png",
                "url": "adi.gallia"
            }, {
                "name": "Mace Windu",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/mace_windu.png",
                "url": "mace.windu"
            }, {
                "name": "Eeth Koth",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/eeth_koth.png",
                "url": "eeth.koth"
            }

        ],
        "preferences": "Les vaches.",
        "messages": []

    },

    //Perso 56 : Yarael Poof

    {

        "match": 0,
        "number": "56",
        "name": "Yarael Poof",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/yarael_poof.png",
        "height": "264",
        "mass": "Secret",
        "birth": "Secret",
        "gender": "Homme",
        "world": "Quermia",
        "faction": "gentil",
        "species": "Quermian",
        "job": "Maître Jedi",
        "bio": "Je suis disponible pour toute formation Jedi. Plus d'informations en privé.",
        "relationships": [

            {
                "name": "Adi Gallia",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/adi_gallia.png",
                "url": "adi.gallia"
            }, {
                "name": "Saesee Tiin",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/saesee_tiin.png",
                "url": "saesee.tiin"
            }, {
                "name": "Eeth Koth",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/eeth_koth.png",
                "url": "eeth.koth"
            }

        ],
        "preferences": "Les sabres laser.",
        "messages": []

    },

    //Perso 57 : Plo Koon

    {

        "match": 0,
        "number": "57",
        "name": "Plo Koon",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/plo_koon.png",
        "height": "188",
        "mass": "80",
        "birth": "22BBY",
        "gender": "Homme",
        "world": "Dorin",
        "faction": "gentil",
        "species": "Kel Dor",
        "job": "Maître Jedi",
        "bio": "Un ami m'a inscrit sur ce site, ne me jugez pas.",
        "relationships": [

            {
                "name": "Adi Gallia",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/adi_gallia.png",
                "url": "adi.gallia"
            }, {
                "name": "Saesee Tiin",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/saesee_tiin.png",
                "url": "saesee.tiin"
            }, {
                "name": "Yarael Poof",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/yarael_poof.png",
                "url": "yarael.poof"
            }

        ],
        "preferences": "Le shopping.",
        "messages": []

    },

    //Perso 58 : Mas Amedda

    {

        "match": 0,
        "number": "58",
        "name": "Mas Amedda",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/mas_amedda.png",
        "height": "196",
        "mass": "Secret",
        "birth": "Secret",
        "gender": "Homme",
        "world": "Champala",
        "faction": "gentil",
        "species": "Chagrian",
        "job": "Vice-Chancelier",
        "bio": "Je suis comme un chocolat. Dur à l'exterieur, tendre à l'intérieur.",
        "relationships": [

            {
                "name": "Palpatine",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/palpatine.png",
                "url": "palpatine"
            }, {
                "name": "Finis Valorum",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/finis_valorum.png",
                "url": "finis.valorum"
            }, {
                "name": "Padmé Amidala",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/padme_amidala.png",
                "url": "padme.amidala"
            }

        ],
        "preferences": "Me faire dominer.",
        "messages": []

    },

    //Perso 59 : Gregar Typho

    {

        "match": 0,
        "number": "59",
        "name": "Gregar Typho",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/gregar_typho.png",
        "height": "185",
        "mass": "85",
        "birth": "Secret",
        "gender": "Homme",
        "world": "Naboo",
        "faction": "gentil",
        "species": "Humaine",
        "job": "Garde du corps",
        "bio": "Homme sportif mais qui en a dans la tête, n'hésite pas à venir me parler.",
        "relationships": [

            {
                "name": "Cordé",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/corde.png",
                "url": "corde"
            }, {
                "name": "Leia Organa",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/leia_organa.png",
                "url": "leia.organa"
            }, {
                "name": "Padmé Amidala",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/padme_amidala.png",
                "url": "padme.amidala"
            }

        ],
        "preferences": "Les gilets-pare-balles.",
        "messages": []

    },

    //Perso 60 : Cordé

    {

        "match": 0,
        "number": "60",
        "name": "Cordé",
        "photo": "http://charles-mangwa.olympe.in/starlovers/img/corde.png",
        "height": "157",
        "mass": "Secret",
        "birth": "Secret",
        "gender": "Femme",
        "world": "Naboo",
        "faction": "gentil",
        "species": "Humaine",
        "job": "Servante",
        "bio": "C'est tout de même dommage de se faire tuer à la place de quelqu'un.",
        "relationships": [

            {
                "name": "Luke Skywalker",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/luke_skywalker.png",
                "url": "luke.skywalker"
            }, {
                "name": "Gregar Typho",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/gregar_typho.png",
                "url": "gregar.typho"
            }, {
                "name": "Padmé Amidala",
                "photo": "http://charles-mangwa.olympe.in/starlovers/img/padme_amidala.png",
                "url": "padme.amidala"
            }

        ],
        "preferences": "Les soirées déguisées.",
        "messages": []
    },

];
