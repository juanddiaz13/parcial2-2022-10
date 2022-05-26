import React, { useEffect, useState } from 'react';
import './PokemonList.scss';
import locES from '../../i18n/messages/es.json';
import locEN from '../../i18n/messages/en.json';
import Row from '../pokemon-list/Row';
import {FormattedDate} from 'react-intl';
import {FormattedNumber} from 'react-intl';
import {FormattedMessage} from 'react-intl';
import {IntlProvider} from 'react-intl';


const API_EN = [
  {
    "abilities": [
      "Overgrow"
    ],
    "detailPageURL": "/us/pokedex/bulbasaur",
    "description": "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger",
    "weight": 15.2,
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Psychic"
    ],
    "number": "001",
    "height": 28,
    "collectibles_slug": "bulbasaur",
    "featured": "true",
    "slug": "bulbasaur",
    "name": "Bulbasaur",
    "ThumbnailAltText": "Bulbasaur",
    "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    "id": 1,
    "type": [
      "grass",
      "poison"
    ]
  },
  {
    "abilities": [
      "Overgrow"
    ],
    "detailPageURL": "/us/pokedex/ivysaur",
    "description": "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
    "weight": 28.7,
    "weakness": [
      "Fire",
      "Flying",
      "Ice",
      "Psychic"
    ],
    "number": "002",
    "height": 39,
    "collectibles_slug": "ivysaur",
    "featured": "true",
    "slug": "ivysaur",
    "name": "Ivysaur",
    "ThumbnailAltText": "Ivysaur",
    "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
    "id": 2,
    "type": [
      "grass",
      "poison"
    ]
  },
  {
    "abilities": [
      "Thick Fat"
    ],
    "detailPageURL": "/us/pokedex/venusaur",
    "description": "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight",
    "weight": 342.8,
    "weakness": [
      "Fire",
      "Psychic",
      "Flying",
      "Ice"
    ],
    "number": "003",
    "height": 94,
    "collectibles_slug": "venusaur",
    "featured": "true",
    "slug": "venusaur",
    "name": "Venusaur",
    "ThumbnailAltText": "Venusaur",
    "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
    "id": 3,
    "type": [
      "grass",
      "poison"
    ]
  },
  {
    "abilities": [
      "Blaze"
    ],
    "detailPageURL": "/us/pokedex/charmander",
    "description": "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    "description": "",
    "weight": 18.7,
    "weakness": [
      "Ground",
      "Rock",
      "Water"
    ],
    "number": "004",
    "height": 24,
    "collectibles_slug": "charmander",
    "featured": "true",
    "slug": "charmander",
    "name": "Charmander",
    "ThumbnailAltText": "Charmander",
    "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
    "id": 4,
    "type": [
      "fire"
    ]
  },
  {
    "abilities": [
      "Blaze"
    ],
    "detailPageURL": "/us/pokedex/charmeleon",
    "description": "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
    "weight": 41.9,
    "weakness": [
      "Ground",
      "Rock",
      "Water"
    ],
    "number": "005",
    "height": 43,
    "collectibles_slug": "charmeleon",
    "featured": "true",
    "slug": "charmeleon",
    "name": "Charmeleon",
    "ThumbnailAltText": "Charmeleon",
    "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png",
    "id": 5,
    "type": [
      "fire"
    ]
  },
  {
    "abilities": [
      "Blaze"
    ],
    "detailPageURL": "/us/pokedex/charizard",
    "description": "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames",
    "weight": 9999,
    "weakness": [
      "Water",
      "Electric",
      "Rock"
    ],
    "number": "006",
    "height": 1102,
    "collectibles_slug": "charizard",
    "featured": "true",
    "slug": "charizard",
    "name": "Charizard",
    "ThumbnailAltText": "Charizard",
    "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png",
    "id": 6,
    "type": [
      "fire",
      "flying"
    ]
  },
  {
    "abilities": [
      "Torrent"
    ],
    "detailPageURL": "/us/pokedex/squirtle",
    "description": "When it retracts its long neck into its shell, it squirts out water with vigorous force",
    "weight": 19.8,
    "weakness": [
      "Electric",
      "Grass"
    ],
    "number": "007",
    "height": 20,
    "collectibles_slug": "squirtle",
    "featured": "true",
    "slug": "squirtle",
    "name": "Squirtle",
    "ThumbnailAltText": "Squirtle",
    "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
    "id": 7,
    "type": [
      "water"
    ]
  },
  {
    "abilities": [
      "Torrent"
    ],
    "detailPageURL": "/us/pokedex/wartortle",
    "description": "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
    "weight": 49.6,
    "weakness": [
      "Electric",
      "Grass"
    ],
    "number": "008",
    "height": 39,
    "collectibles_slug": "wartortle",
    "featured": "true",
    "slug": "wartortle",
    "name": "Wartortle",
    "ThumbnailAltText": "Wartortle",
    "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png",
    "id": 8,
    "type": [
      "water"
    ]
  },
  {
    "abilities": [
      "Mega Launcher"
    ],
    "detailPageURL": "/us/pokedex/blastoise",
    "description": "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell",
    "weight": 222.9,
    "weakness": [
      "Grass",
      "Electric"
    ],
    "number": "009",
    "height": 63,
    "collectibles_slug": "blastoise",
    "featured": "true",
    "slug": "blastoise",
    "name": "Blastoise",
    "ThumbnailAltText": "Blastoise",
    "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png",
    "id": 9,
    "type": [
      "water"
    ]
  },
  {
    "abilities": [
      "Shield Dust"
    ],
    "detailPageURL": "/us/pokedex/caterpie",
    "description": "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.",
    "weight": 6.4,
    "weakness": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "number": "010",
    "height": 12,
    "collectibles_slug": "caterpie",
    "featured": "true",
    "slug": "caterpie",
    "name": "Caterpie",
    "ThumbnailAltText": "Caterpie",
    "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png",
    "id": 10,
    "type": [
      "bug"
    ]
  },
  {
    "abilities": [
      "Shed Skin"
    ],
    "detailPageURL": "/us/pokedex/metapod",
    "description": "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack",
    "weight": 21.8,
    "weakness": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "number": "011",
    "height": 28,
    "collectibles_slug": "metapod",
    "featured": "true",
    "slug": "metapod",
    "name": "Metapod",
    "ThumbnailAltText": "Metapod",
    "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png",
    "id": 11,
    "type": [
      "bug"
    ]
  },
  {
    "abilities": [
      "Compound Eyes"
    ],
    "detailPageURL": "/us/pokedex/butterfree",
    "description": "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
    "weight": 9999,
    "weakness": [
      "Fire",
      "Flying",
      "Electric",
      "Ice",
      "Rock"
    ],
    "number": "012",
    "height": 669,
    "collectibles_slug": "butterfree",
    "featured": "true",
    "slug": "butterfree",
    "name": "Butterfree",
    "ThumbnailAltText": "Butterfree",
    "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png",
    "id": 12,
    "type": [
      "bug",
      "flying"
    ]
  }
 ];

const API_ESP= [
  {
    "abilities": [
      "Overgrow"
    ],
    "detailPageURL": "/us/pokedex/bulbasaur",
    "description": "Hay una semilla de planta en su parte posterior desde el día en que nace este Pokémon. La semilla crece lentamente",
    "weight": 15.2,
    "weakness": [
      "Fuego",
      "Volador",
      "Hielo",
      "Psíquico"
    ],
    "number": "001",
    "height": 28,
    "collectibles_slug": "bulbasaur",
    "featured": "true",
    "slug": "bulbasaur",
    "name": "Bulbasaur",
    "ThumbnailAltText": "Bulbasaur",
    "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    "id": 1,
    "type": [
      "Planta",
      "Veneno"
    ]
  },
  {
    "abilities": [
      "Overgrow"
    ],
    "detailPageURL": "/us/pokedex/ivysaur",
    "description": "Cuando el bulbo de su espalda crece, parece perder la capacidad de pararse sobre sus patas traseras.",
    "weight": 28.7,
    "weakness": [
      "Fuego",
      "Volador",
      "Hielo",
      "Psíquico"
    ],
    "number": "002",
    "height": 39,
    "collectibles_slug": "ivysaur",
    "featured": "true",
    "slug": "ivysaur",
    "name": "Ivysaur",
    "ThumbnailAltText": "Ivysaur",
    "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
    "id": 2,
    "type": [
      "Planta",
      "Veneno"
    ]
  },
  {
    "abilities": [
      "Thick Fat"
    ],
    "detailPageURL": "/us/pokedex/venusaur",
    "description": "Su planta florece cuando absorbe energía solar. Se mantiene en movimiento para buscar la luz del sol.",
    "weight": 342.8,
    "weakness": [
      "Fuego",
      "Volador",
      "Hielo",
      "Psíquico"
    ],
    "number": "003",
    "height": 94,
    "collectibles_slug": "venusaur",
    "featured": "true",
    "slug": "venusaur",
    "name": "Venusaur",
    "ThumbnailAltText": "Venusaur",
    "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
    "id": 3,
    "type": [
      "Planta",
      "Veneno"
    ]
  },
  {
    "abilities": [
      "Blaze"
    ],
    "detailPageURL": "/us/pokedex/charmander",
    "description": "Tiene preferencia por las cosas calientes. Cuando llueve, se dice que sale vapor de la punta de la cola.",
    "weight": 18.7,
    "weakness": [
      "Tierra",
      "Roca",
      "Agua"
    ],
    "number": "004",
    "height": 24,
    "collectibles_slug": "charmander",
    "featured": "true",
    "slug": "charmander",
    "name": "Charmander",
    "ThumbnailAltText": "Charmander",
    "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
    "id": 4,
    "type": [
      "Fuego"
    ]
  },
  {
    "abilities": [
      "Blaze"
    ],
    "detailPageURL": "/us/pokedex/charmeleon",
    "description": "Tiene un carácter bárbaro. En la batalla, azota su cola de fuego y corta con garras afiladas.",
    "weight": 41.9,
    "weakness": [
      "Tierra",
      "Roca",
      "Agua"
    ],
    "number": "005",
    "height": 43,
    "collectibles_slug": "charmeleon",
    "featured": "true",
    "slug": "charmeleon",
    "name": "Charmeleon",
    "ThumbnailAltText": "Charmeleon",
    "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png",
    "id": 5,
    "type": [
      "Fuego"
    ]
  },
  {
    "abilities": [
      "Blaze"
    ],
    "detailPageURL": "/us/pokedex/charizard",
    "description": "Escupe fuego que está lo suficientemente caliente como para derretir rocas. Puede provocar incendios forestales al soplar llamas.",
    "weight": 9999,
    "weakness": [
      "Agua",
      "Electrico",
      "Roca"
    ],
    "number": "006",
    "height": 1102,
    "collectibles_slug": "charizard",
    "featured": "true",
    "slug": "charizard",
    "name": "Charizard",
    "ThumbnailAltText": "Charizard",
    "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png",
    "id": 6,
    "type": [
      "Fuego",
      "Volador"
    ]
  },
  {
    "abilities": [
      "Torrent"
    ],
    "detailPageURL": "/us/pokedex/squirtle",
    "description": "Cuando retrae su largo cuello en su caparazón, arroja agua con fuerza vigorosa.",
    "weight": 19.8,
    "weakness": [
      "Electrico",
      "Césped"
    ],
    "number": "007",
    "height": 20,
    "collectibles_slug": "squirtle",
    "featured": "true",
    "slug": "squirtle",
    "name": "Squirtle",
    "ThumbnailAltText": "Squirtle",
    "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
    "id": 7,
    "type": [
      "Agua"
    ]
  },
  {
    "abilities": [
      "Torrent"
    ],
    "detailPageURL": "/us/pokedex/wartortle",
    "description": "Es reconocido como símbolo de longevidad. Si su caparazón tiene algas, ese Wartortle es muy viejo.",
    "weight": 49.6,
    "weakness": [
      "Electrico",
      "Césped"
    ],
    "number": "008",
    "height": 39,
    "collectibles_slug": "wartortle",
    "featured": "true",
    "slug": "wartortle",
    "name": "Wartortle",
    "ThumbnailAltText": "Wartortle",
    "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png",
    "id": 8,
    "type": [
      "Agua"
    ]
  },
  {
    "abilities": [
      "Mega Launcher"
    ],
    "detailPageURL": "/us/pokedex/blastoise",
    "description": "En caso de apuro, se retirará dentro de su caparazón.",
    "weight": 222.9,
    "weakness": [
      "Electrico",
      "Césped"
    ],
    "number": "009",
    "height": 63,
    "collectibles_slug": "blastoise",
    "featured": "true",
    "slug": "blastoise",
    "name": "Blastoise",
    "ThumbnailAltText": "Blastoise",
    "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png",
    "id": 9,
    "type": [
      "Agua"
    ]
  },
  {
    "abilities": [
      "Shield Dust"
    ],
    "detailPageURL": "/us/pokedex/caterpie",
    "description": "Para protegerse, libera un hedor horrible de la antena en su cabeza para ahuyentar a los enemigos.",
    "weight": 6.4,
    "weakness": [
      "Fuego",
      "Volador",
      "Roca"
    ],
    "number": "010",
    "height": 12,
    "collectibles_slug": "caterpie",
    "featured": "true",
    "slug": "caterpie",
    "name": "Caterpie",
    "ThumbnailAltText": "Caterpie",
    "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png",
    "id": 10,
    "type": [
      "Insecto"
    ]
  },
  {
    "abilities": [
      "Shed Skin"
    ],
    "detailPageURL": "/us/pokedex/metapod",
    "description": "Está esperando el momento de evolucionar. En esta etapa, solo puede endurecerse, por lo que permanece inmóvil para evitar el ataque.",
    "weight": 21.8,
    "weakness": [
      "Fuego",
      "Volador",
      "Roca"
    ],
    "number": "011",
    "height": 28,
    "collectibles_slug": "metapod",
    "featured": "true",
    "slug": "metapod",
    "name": "Metapod",
    "ThumbnailAltText": "Metapod",
    "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png",
    "id": 11,
    "type": [
      "Insecto"
    ]
  }
 ];

export const PokemonList = () => {

  let local = navigator.language

  const [dataAPI, setDataAPI] = useState([]);
  const [loc, setLoc] = useState([]);

  useEffect(()=>{
    if(local=='en'){
      setLoc(locEN);
      setDataAPI(API_EN);
  
    }
    else if(local='es'){
      setLoc(locES);
        setDataAPI(API_ESP);
      
    } 

  },[])

  return (
    <>
    <IntlProvider locale={local} messages= {loc}>
      <div className='pokemon-container'>
        <h1>Most wanted pokemons</h1>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'><FormattedMessage id="image"/></th>
              <th scope='col'><FormattedMessage id="name"/></th>
              <th scope='col'><FormattedMessage id="description"/></th>
              <th scope='col'><FormattedMessage id="height"/></th>
              <th scope='col'><FormattedMessage id="weight"/></th>
              <th scope='col'><FormattedMessage id="type"/></th>
            </tr>
          </thead>
          <tbody>
          {dataAPI.map((e, i) => (
            <Row key={i} idioma={local} dat={e}/>
          ))}
          </tbody>
        </table>
      </div>
      </IntlProvider>
    </>
  );
};
