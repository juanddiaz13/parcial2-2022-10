import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import './PokemonList.scss';



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

 const data = [
  { item: 'Redmi', count: 490 },
  { item: 'Huawei', count: 291 },
  { item: 'IPhone', count: 348 },
  { item: 'Samsung', count: 245 },
  { item: 'Pixel', count: 50 },
];

export const Bar = (data) => {
  console.log(data.data)
 
  useEffect(() => {
    
    const canvas = d3.select("#canvas");
    const width = 700;
    const height = 500;
    const margin = { top:10, left:50, bottom: 40, right: 10};
    const iwidth = width - margin.left - margin.right;
    const iheight = height - margin.top -margin.bottom;

const svg = canvas.append("svg");
svg.attr("width", width);
svg.attr("height", height);

let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

const colors = d3.scaleOrdinal([
    '#ffa822',
    '#134e6f',
    '#ff6150',
    '#1ac0c6',
    '#dee0e6',
  ]);

const y = d3.scaleLinear() 
    .domain([0, height])
    .range([iheight, 0]);

const x = d3.scaleBand()
.domain(data.map(d => d.name) ) 
.range([0, iwidth])
.padding(0.1); 

const bars = g.selectAll("rect").data(data);

// Tooltip
const tooldiv = d3
.select('#canvas')
.append('div')
.style('visibility', 'hidden')
.style('position', 'absolute')
.style('background-color', 'gray');

bars.enter().append("rect")
.attr("class", "bar")
.attr('fill', (d, i) => colors(i))
.on('mouseover', (e, d) => {
    console.log(e);
    console.log(`${d.name}` + "esto es d.data");
    tooldiv
      .style('visibility', 'visible')
      .text(`${d.name}:` + `${d.height}`);
  })
  .on('mousemove', (e, d) => {
    tooldiv
      .style('top', e.pageY - 50 + 'px')
      .style('left', e.pageX - 50 + 'px');
  })
  .on('mouseout', () => {
    tooldiv.style('visibility', 'hidden');
  })



.attr("x", d => x(d.name))
.attr("y", d => y(d.height))
.attr("height", d => iheight - y(d.height))
.attr("width", x.bandwidth());


g.append("g")
.classed("x--axis", true)
.call(d3.axisBottom(x))
.attr("transform", `translate(0, ${iheight})`);  

g.append("g")
.classed("y--axis", true)
.call(d3.axisLeft(y));



  });

  return (
    <>
    <div id="canvas"></div>
    HOLAAAAAA
    </>
  );
};
