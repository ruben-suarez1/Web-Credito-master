export function getIdDepartment(name, Departments) {
  for (let i = 0; i < Departments.length; i++) {
    if (Departments[i].name === name) {
      return i;
    }
  }
  return "";
}

export function Departments() {
  let Departments = [
    {
      id: 0,
      name: "Amazonas",
    },
    {
      id: 1,
      name: "Antioquia",
    },
    {
      id: 2,
      name: "Arauca",
    },
    {
      id: 3,
      name: "Atlantico",
    },
    {
      id: 4,
      name: "Bolivar",
    },
    {
      id: 5,
      name: "Boyacá",
    },
    {
      id: 6,
      name: "Caldas",
    },
    {
      id: 7,
      name: "Caquetá",
    },
    {
      id: 8,
      name: "Casanare",
    },
    {
      id: 9,
      name: "Cauca",
    },
    {
      id: 10,
      name: "Cesar",
    },
    {
      id: 11,
      name: "Chocó",
    },
    {
      id: 12,
      name: "Cordoba",
    },
    {
      id: 13,
      name: "Cundinamarca",
    },
    {
      id: 14,
      name: "Guanía",
    },
    {
      id: 15,
      name: "Guajira",
    },
    {
      id: 16,
      name: "Guaviare",
    },
    {
      id: 17,
      name: "Huila",
    },
    {
      id: 18,
      name: "Magdalena",
    },
    {
      id: 19,
      name: "Meta",
    },
    {
      id: 20,
      name: "N.santander",
    },
    {
      id: 21,
      name: "Nariño",
    },
    {
      id: 22,
      name: "Putumayo",
    },
    {
      id: 23,
      name: "Quindio",
    },
    {
      id: 24,
      name: "Risaralda",
    },
    {
      id: 25,
      name: "San andres",
    },
    {
      id: 26,
      name: "Santander",
    },
    {
      id: 27,
      name: "Sucre",
    },
    {
      id: 28,
      name: "Tolima",
    },
    {
      id: 29,
      name: "Valle del cauca",
    },
    {
      id: 30,
      name: "Vaupes",
    },
    {
      id: 31,
      name: "Vichada",
    },
  ];
  return Departments;
}
export function Citys(id) {
  let CitysById = [];
  if (id === 0) {
    CitysById = [
      {
        id: 0,
        name: "Leticia",
      },
      {
        id: 1,
        name: "El encanto",
      },
      {
        id: 2,
        name: "La chorrera",
      },
      {
        id: 3,
        name: "La pedrera",
      },
      {
        id: 4,
        name: "La victoria",
      },
      {
        id: 5,
        name: "Miriti-parana",
      },
      {
        id: 6,
        name: "Puerto alegría",
      },
      {
        id: 7,
        name: "Puerto arica",
      },
      {
        id: 8,
        name: "Puerto nariño",
      },
      {
        id: 9,
        name: "Santander",
      },
      {
        id: 10,
        name: "Tarapaca",
      },
    ];
  } else if (id === 1) {
    CitysById = [
      {
        id: 0,
        name: "Abejorral",
      },
      {
        id: 1,
        name: "Abriaqui",
      },
      {
        id: 2,
        name: "Alejandria",
      },
      {
        id: 3,
        name: "Amaga",
      },
      {
        id: 4,
        name: "Amalfi",
      },
      {
        id: 5,
        name: "Andes",
      },
      {
        id: 6,
        name: "Angelopolis",
      },
      {
        id: 7,
        name: "Angostura",
      },
      {
        id: 8,
        name: "Anori",
      },
      {
        id: 9,
        name: "Anza",
      },
      {
        id: 10,
        name: "Apartado",
      },
      {
        id: 11,
        name: "Arboletes",
      },
      {
        id: 12,
        name: "Argelia",
      },
      {
        id: 13,
        name: "Armenia",
      },
      {
        id: 14,
        name: "Barbosa",
      },
      {
        id: 15,
        name: "Bello",
      },
      {
        id: 16,
        name: "Belmira",
      },
      {
        id: 17,
        name: "Betania",
      },
      {
        id: 18,
        name: "Betulia",
      },
      {
        id: 19,
        name: "Briceno",
      },
      {
        id: 20,
        name: "Buritica",
      },
      {
        id: 21,
        name: "Caceres",
      },
      {
        id: 22,
        name: "Caicedo",
      },
      {
        id: 23,
        name: "Caldas",
      },
      {
        id: 24,
        name: "Campamento",
      },
      {
        id: 25,
        name: "Canasgordas",
      },
      {
        id: 26,
        name: "Caracoli",
      },
      {
        id: 27,
        name: "Caramanta",
      },
      {
        id: 28,
        name: "Carepa",
      },
      {
        id: 29,
        name: "Carmen de viboral",
      },
      {
        id: 30,
        name: "Carolina",
      },
      {
        id: 31,
        name: "Caucasia",
      },
      {
        id: 32,
        name: "Chigorodo",
      },
      {
        id: 33,
        name: "Cisneros",
      },
      {
        id: 34,
        name: "Ciudad bolivar",
      },
      {
        id: 35,
        name: "Cocorna",
      },
      {
        id: 36,
        name: "Concepción",
      },
      {
        id: 37,
        name: "Concordia",
      },
      {
        id: 38,
        name: "Copacabana",
      },
      {
        id: 39,
        name: "Dabeiba",
      },
      {
        id: 40,
        name: "Don matias",
      },
      {
        id: 41,
        name: "Ebejico",
      },
      {
        id: 42,
        name: "El bagre",
      },
      {
        id: 43,
        name: "Entrerios",
      },
      {
        id: 44,
        name: "Envigado",
      },
      {
        id: 45,
        name: "Fredonia",
      },
      {
        id: 46,
        name: "Frontino",
      },
      {
        id: 47,
        name: "Giraldo",
      },
      {
        id: 48,
        name: "Girardota",
      },
      {
        id: 49,
        name: "Gomez plata",
      },
      {
        id: 50,
        name: "Granada",
      },
      {
        id: 51,
        name: "Guadalupe",
      },
      {
        id: 52,
        name: "Guarne",
      },
      {
        id: 53,
        name: "Guatape",
      },
      {
        id: 54,
        name: "Heliconia",
      },
      {
        id: 55,
        name: "Hispania",
      },
      {
        id: 56,
        name: "Itagui",
      },
      {
        id: 57,
        name: "Ituango",
      },
      {
        id: 58,
        name: "Jardin",
      },
      {
        id: 59,
        name: "Jerico",
      },
      {
        id: 60,
        name: "La ceja",
      },
      {
        id: 61,
        name: "La estrella",
      },
      {
        id: 62,
        name: "La pintada",
      },
      {
        id: 63,
        name: "La unión",
      },
      {
        id: 64,
        name: "Liborina",
      },
      {
        id: 65,
        name: "Maceo",
      },
      {
        id: 66,
        name: "Marinilla",
      },
      {
        id: 67,
        name: "Medellín",
      },
      {
        id: 68,
        name: "Montebello",
      },
      {
        id: 69,
        name: "Murindo",
      },
      {
        id: 71,
        name: "Mutata",
      },
      {
        id: 72,
        name: "Nariño",
      },
      {
        id: 73,
        name: "Nechi",
      },
      {
        id: 74,
        name: "Necocli",
      },
      {
        id: 75,
        name: "Olaya",
      },
      {
        id: 76,
        name: "Penol",
      },
      {
        id: 77,
        name: "Peque",
      },
      {
        id: 78,
        name: "Pueblorrico",
      },
      {
        id: 79,
        name: "Puerto berrio",
      },
      {
        id: 80,
        name: "Puerto nare",
      },
      {
        id: 81,
        name: "Puerto triunfo",
      },
      {
        id: 82,
        name: "Remedios",
      },
      {
        id: 83,
        name: "Retiro",
      },
      {
        id: 84,
        name: "Rionegro",
      },
      {
        id: 85,
        name: "Sabanalarga",
      },
      {
        id: 86,
        name: "Sabaneta",
      },
      {
        id: 87,
        name: "Salgar",
      },
      {
        id: 88,
        name: "San andres",
      },
      {
        id: 89,
        name: "San carlos",
      },
      {
        id: 90,
        name: "San francisco",
      },
      {
        id: 91,
        name: "San jeronimo",
      },
      {
        id: 92,
        name: "San jose de la montaña",
      },
      {
        id: 93,
        name: "San juan de urabá",
      },
      {
        id: 94,
        name: "San luis",
      },
      {
        id: 95,
        name: "San pedro",
      },
      {
        id: 96,
        name: "San pedro de urabá",
      },
      {
        id: 97,
        name: "San rafael",
      },
      {
        id: 98,
        name: "San roque",
      },
      {
        id: 99,
        name: "San vicente",
      },
      {
        id: 100,
        name: "Santa barbara",
      },
      {
        id: 101,
        name: "Santa fe de antioquia",
      },
      {
        id: 102,
        name: "Santa rosas de osos",
      },
      {
        id: 103,
        name: "Santo domingo",
      },
      {
        id: 104,
        name: "Santuario",
      },
      {
        id: 105,
        name: "Segovia",
      },
      {
        id: 106,
        name: "Sonson",
      },
      {
        id: 107,
        name: "Sopetran",
      },
      {
        id: 108,
        name: "Tamesis",
      },
      {
        id: 109,
        name: "Taraza",
      },
      {
        id: 110,
        name: "Tarso",
      },
      {
        id: 111,
        name: "Titiribi",
      },
      {
        id: 112,
        name: "Toledo",
      },
      {
        id: 113,
        name: "Turbo",
      },
      {
        id: 114,
        name: "Uramita",
      },
      {
        id: 115,
        name: "Urrao",
      },
      {
        id: 116,
        name: "Valdivia",
      },
      {
        id: 117,
        name: "Valparaiso",
      },
      {
        id: 118,
        name: "Vegachi",
      },
      {
        id: 119,
        name: "Venecia",
      },
      {
        id: 120,
        name: "Vigia del fuerte",
      },
      {
        id: 121,
        name: "Yali",
      },
      {
        id: 122,
        name: "Yarumal",
      },
      {
        id: 123,
        name: "Yolombo",
      },
      {
        id: 124,
        name: "Yondo",
      },
      {
        id: 125,
        name: "Zaragoza",
      },
    ];
  } else if (id === 2) {
    CitysById = [
      {
        id: 0,
        name: "Arauca",
      },
      {
        id: 1,
        name: "Arauquita",
      },
      {
        id: 2,
        name: "Cravo Norte",
      },
      {
        id: 3,
        name: "Fortul",
      },
      {
        id: 4,
        name: "Puerto Rondon",
      },
      {
        id: 5,
        name: "Saravena",
      },
      {
        id: 6,
        name: "Tame",
      },
    ];
  } else if (id === 3) {
    return (CitysById = [
      {
        id: 0,
        name: "Baranoa",
      },
      {
        id: 1,
        name: "Barranquilla",
      },
      {
        id: 2,
        name: "Campo de la cruz",
      },
      {
        id: 3,
        name: "Candelaria",
      },
      {
        id: 4,
        name: "Galapa",
      },
      {
        id: 5,
        name: "Juan de acosta",
      },
      {
        id: 6,
        name: "Luruaco",
      },
      {
        id: 7,
        name: "Malambo",
      },
      {
        id: 8,
        name: "Manati",
      },
      {
        id: 9,
        name: "Palmar de varela",
      },
      {
        id: 10,
        name: "Piojo",
      },
      {
        id: 11,
        name: "Polonuevo",
      },
      {
        id: 12,
        name: "Ponedera",
      },

      {
        id: 13,
        name: "Puerto colombia",
      },
      {
        id: 14,
        name: "Repelon",
      },
      {
        id: 15,
        name: "Sabanagrande",
      },
      {
        id: 16,
        name: "Sabanalarga",
      },
      {
        id: 17,
        name: "Santa lucia",
      },
      {
        id: 18,
        name: "Santo tomas",
      },
      {
        id: 19,
        name: "Soledad",
      },
      {
        id: 20,
        name: "Suan",
      },
      {
        id: 21,
        name: "Tubara",
      },
      {
        id: 22,
        name: "Usiacuri",
      },
    ]);
  } else if (id === 4) {
    return (CitysById = [
      {
        id: 0,
        name: "Achi",
      },
      {
        id: 1,
        name: "Altos del rosario",
      },
      {
        id: 2,
        name: "Arenal",
      },
      {
        id: 3,
        name: "Arjona",
      },
      {
        id: 4,
        name: "Arroyohondo",
      },
      {
        id: 5,
        name: "Barranco de loba",
      },
      {
        id: 6,
        name: "Calamar",
      },
      {
        id: 7,
        name: "Cantagallo",
      },
      {
        id: 8,
        name: "Cartagena de indias",
      },
      {
        id: 9,
        name: "Cicuco",
      },
      {
        id: 10,
        name: "Clemencia",
      },
      {
        id: 11,
        name: "Cordoba",
      },
      {
        id: 12,
        name: "El carmen de bolivar",
      },
      {
        id: 13,
        name: "El guamo",
      },
      {
        id: 14,
        name: "El peñon",
      },
      {
        id: 15,
        name: "Hatillo de loba",
      },
      {
        id: 16,
        name: "Magangue",
      },
      {
        id: 17,
        name: "Mahates",
      },
      {
        id: 18,
        name: "Margarita",
      },
      {
        id: 19,
        name: "Maria la baja",
      },
      {
        id: 20,
        name: "Mompos",
      },
      {
        id: 21,
        name: "Monte cristo",
      },
      {
        id: 22,
        name: "Morales",
      },
      {
        id: 23,
        name: "Pinillos",
      },
      {
        id: 24,
        name: "Regidor",
      },
      {
        id: 25,
        name: "Rioviejo",
      },
      {
        id: 26,
        name: "San cristobal",
      },
      {
        id: 27,
        name: "San estanislao",
      },
      {
        id: 28,
        name: "San fernando",
      },
      {
        id: 29,
        name: "San jacinto",
      },
      {
        id: 30,
        name: "San jacinto del cauca",
      },
      {
        id: 31,
        name: "San juan nepomuceno",
      },
      {
        id: 32,
        name: "San martin de loba",
      },
      {
        id: 33,
        name: "San pablo",
      },
      {
        id: 34,
        name: "Santa catalina",
      },
      {
        id: 35,
        name: "Santa rosa",
      },
      {
        id: 36,
        name: "Santa rosa del sur ",
      },
      {
        id: 37,
        name: "Simiti ",
      },
      {
        id: 38,
        name: "Soplaviento",
      },
      {
        id: 39,
        name: "Talaigua nuevo",
      },
      {
        id: 40,
        name: "Tiquisio",
      },
      {
        id: 41,
        name: "Turbaco",
      },
      {
        id: 42,
        name: "Turbana",
      },
      {
        id: 43,
        name: "Villanueva",
      },
      {
        id: 44,
        name: "Zambrano",
      },
    ]);
  } else if (id === 5) {
    return (CitysById = [
      {
        id: 0,
        name: "Almeida",
      },
      {
        id: 1,
        name: "Aquitania",
      },
      {
        id: 2,
        name: "Arcabuco",
      },
      {
        id: 3,
        name: "Belen",
      },
      {
        id: 4,
        name: "Berbeo",
      },
      {
        id: 5,
        name: "Beteitiva",
      },
      {
        id: 6,
        name: "Boavita",
      },
      {
        id: 7,
        name: "Boyaca",
      },
      {
        id: 8,
        name: "Briceno",
      },
      {
        id: 9,
        name: "Buenavista",
      },
      {
        id: 10,
        name: "Busbanza",
      },
      {
        id: 11,
        name: "Caldas",
      },
      {
        id: 12,
        name: "Campohermoso",
      },
      {
        id: 13,
        name: "Cerinza",
      },
      {
        id: 14,
        name: "Chinavita",
      },
      {
        id: 15,
        name: "Chiquinquirá",
      },
      {
        id: 16,
        name: "Chiquiza",
      },
      {
        id: 17,
        name: "Chiscas",
      },
      {
        id: 18,
        name: "Chita",
      },
      {
        id: 19,
        name: "Chitaraque",
      },
      {
        id: 20,
        name: "Chivata",
      },
      {
        id: 21,
        name: "Chivor",
      },
      {
        id: 22,
        name: "Cienega",
      },
      {
        id: 23,
        name: "Combita",
      },
      {
        id: 24,
        name: "Coper",
      },
      {
        id: 25,
        name: "Corrales",
      },
      {
        id: 26,
        name: "Covarachia",
      },
      {
        id: 27,
        name: "Cubara",
      },
      {
        id: 28,
        name: "Cucaita",
      },
      {
        id: 29,
        name: "Cuitiva",
      },
      {
        id: 30,
        name: "Duitama",
      },
      {
        id: 31,
        name: "El cocuy",
      },
      {
        id: 32,
        name: "El espino",
      },
      {
        id: 33,
        name: "Firavitoba",
      },
      {
        id: 34,
        name: "Floresta",
      },
      {
        id: 35,
        name: "Gachantiva",
      },
      {
        id: 36,
        name: "Gameza",
      },
      {
        id: 37,
        name: "Garagoa",
      },
      {
        id: 38,
        name: "Guacamayas",
      },
      {
        id: 39,
        name: "Guateque",
      },
      {
        id: 40,
        name: "Guayata",
      },
      {
        id: 41,
        name: "Guican",
      },
      {
        id: 42,
        name: "Iza",
      },
      {
        id: 43,
        name: "Jenesano",
      },
      {
        id: 44,
        name: "Jerico",
      },
      {
        id: 45,
        name: "La capilla",
      },
      {
        id: 46,
        name: "La uvita",
      },
      {
        id: 47,
        name: "La victoria",
      },
      {
        id: 48,
        name: "Labranzagrande",
      },
      {
        id: 49,
        name: "Macanal",
      },
      {
        id: 50,
        name: "Maripi",
      },
      {
        id: 51,
        name: "Miraflores",
      },
      {
        id: 52,
        name: "Mongua",
      },
      {
        id: 53,
        name: "Mongui",
      },
      {
        id: 54,
        name: "Moniquira",
      },
      {
        id: 55,
        name: "Motavita",
      },
      {
        id: 56,
        name: "Muzo",
      },
      {
        id: 57,
        name: "Nobsa",
      },
      {
        id: 58,
        name: "Nuevo colon",
      },
      {
        id: 59,
        name: "Oicata",
      },
      {
        id: 60,
        name: "Otanche",
      },
      {
        id: 61,
        name: "Pachavita",
      },
      {
        id: 62,
        name: "Paez",
      },
      {
        id: 63,
        name: "Paipa",
      },
      {
        id: 64,
        name: "Pajarito",
      },
      {
        id: 65,
        name: "Panqueba",
      },
      {
        id: 66,
        name: "Pauna",
      },
      {
        id: 67,
        name: "Paya",
      },
      {
        id: 68,
        name: "Paz de rio",
      },
      {
        id: 69,
        name: "Pesca",
      },
      {
        id: 70,
        name: "Pisva",
      },
      {
        id: 71,
        name: "Puerto boyaca",
      },
      {
        id: 72,
        name: "Quipama",
      },
      {
        id: 73,
        name: "Ramiriqui",
      },
      {
        id: 74,
        name: "Raquira",
      },
      {
        id: 75,
        name: "Rondon",
      },
      {
        id: 76,
        name: "Saboya",
      },
      {
        id: 77,
        name: "Sachica",
      },
      {
        id: 78,
        name: "Samaca",
      },
      {
        id: 79,
        name: "San eduardo",
      },
      {
        id: 80,
        name: "San josede pare",
      },
      {
        id: 81,
        name: "San luis de gaceno",
      },
      {
        id: 82,
        name: "San mateo",
      },
      {
        id: 83,
        name: "San miguel de sema",
      },
      {
        id: 84,
        name: "San pablo de borbur",
      },
      {
        id: 85,
        name: "Santa maria",
      },
      {
        id: 86,
        name: "Santa rosa de viterbo",
      },
      {
        id: 87,
        name: "Santa sofia",
      },
      {
        id: 88,
        name: "Santana",
      },
      {
        id: 89,
        name: "Santivanorte",
      },
      {
        id: 90,
        name: "Santivasur",
      },
      {
        id: 91,
        name: "Siachoque",
      },
      {
        id: 92,
        name: "Soata",
      },
      {
        id: 93,
        name: "Socha",
      },
      {
        id: 94,
        name: "Socota",
      },
      {
        id: 95,
        name: "Sogamoso",
      },
      {
        id: 96,
        name: "Somondoco",
      },
      {
        id: 97,
        name: "Sora",
      },
      {
        id: 98,
        name: "Soraca",
      },
      {
        id: 99,
        name: "Sotaquira",
      },
      {
        id: 100,
        name: "Susacon",
      },
      {
        id: 101,
        name: "Sutamarchan",
      },
      {
        id: 102,
        name: "Sutatenza",
      },
      {
        id: 103,
        name: "Tasco",
      },
      {
        id: 104,
        name: "Tenza",
      },
      {
        id: 105,
        name: "Tibana",
      },
      {
        id: 106,
        name: "Tibasosa",
      },
      {
        id: 107,
        name: "Tinjaca",
      },
      {
        id: 108,
        name: "Tipacoque",
      },
      {
        id: 109,
        name: "Toca",
      },
      {
        id: 110,
        name: "Togui",
      },
      {
        id: 111,
        name: "Topaga",
      },
      {
        id: 112,
        name: "Tota",
      },
      {
        id: 113,
        name: "Tunja",
      },
      {
        id: 114,
        name: "Tunungua",
      },
      {
        id: 115,
        name: "Turmeque",
      },
      {
        id: 116,
        name: "Tuta",
      },
      {
        id: 117,
        name: "Tutaza",
      },
      {
        id: 118,
        name: "Umbita",
      },
      {
        id: 119,
        name: "Ventaquemada",
      },
      {
        id: 120,
        name: "Villa de leiva",
      },
      {
        id: 121,
        name: "Viracacha",
      },
      {
        id: 122,
        name: "Zetaquira",
      },
    ]);
  }
  return CitysById;
}
