const creatures = [
    {
        "name": "Jack el Destripador",
        "type": "Leyenda Urbana",
        "origin": "Londres Victoriano",
        "age": "Aproximadamente 30-40 años (especulación)",
        "image": "img/jack-the-ripper.webp",
        "story": "Un asesino en serie conocido por aterrorizar el distrito de Whitechapel en Londres durante 1888. Su verdadera identidad nunca fue descubierta.",
        "appearance": "Un hombre vestido con capa oscura y sombrero, moviéndose rápidamente entre las sombras.",
        "stats": {
            "strength": 10,
            "agility": 14,
            "endurance": 12,
            "intelligence": 16,
            "charisma": 10,
            "willpower": 14
        },
        "skills": [
            { "name": "Ataque Sigiloso", "description": "Incrementa el daño crítico cuando Jack ataca desde las sombras." },
            { "name": "Evasión", "description": "Reduce las probabilidades de ser detectado." },
            { "name": "Rastreo de Presa", "description": "Identifica y localiza enemigos cercanos." }
        ],
        "weakness": "Exposición a la luz brillante y ser confrontado directamente."
    },
    {
        "name": "Baba Yaga",
        "type": "Leyenda Folklórica",
        "origin": "Europa del Este",
        "age": "Indeterminado",
        "image": "img/baba-yaga.webp",
        "story": "Una figura de la mitología eslava, conocida como una anciana sabia y peligrosa que vive en una cabaña sobre patas de gallina. Es temida y respetada a partes iguales.",
        "appearance": "Una mujer anciana con cabello gris desordenado, mirada penetrante y una figura encorvada.",
        "stats": {
            "strength": 8,
            "agility": 10,
            "endurance": 12,
            "intelligence": 18,
            "charisma": 12,
            "willpower": 16
        },
        "skills": [
            { "name": "Maleficio", "description": "Reduce la resistencia de un enemigo durante 3 turnos." },
            { "name": "Conjuro de Oscuridad", "description": "Crea un área de penumbra que oculta su posición." },
            { "name": "Invocación de Espíritus", "description": "Trae aliados espirituales al combate." }
        ],
        "weakness": "Rituales de purificación o magia sagrada."
    },
    {
        "name": "El Hombre del Saco",
        "type": "Leyenda Infantil",
        "origin": "Europa y América Latina",
        "age": "Variable según la historia",
        "image": "img/boogeyman.webp",
        "story": "Una figura que los padres utilizaban para asustar a los niños desobedientes. Según el mito, secuestra a los pequeños y se los lleva en un saco.",
        "appearance": "Un hombre alto y delgado, vestido con ropa vieja y un saco grande al hombro.",
        "stats": {
            "strength": 12,
            "agility": 10,
            "endurance": 14,
            "intelligence": 10,
            "charisma": 6,
            "willpower": 12
        },
        "skills": [
            { "name": "Captura Rápida", "description": "Secuestra a un objetivo, dejándolo incapacitado por 2 turnos." },
            { "name": "Aparición Sorprendente", "description": "Aumenta el pánico de los enemigos cercanos." },
            { "name": "Saco de Sombras", "description": "Absorbe daño menor con su saco mágico." }
        ],
        "weakness": "Es vulnerable a ataques de fuego."
    },
    {
        "name": "María Sangrienta",
        "type": "Leyenda Urbana",
        "origin": "Diversos países occidentales",
        "age": "Fallecida (mito)",
        "image": "img/bloody-mary.webp",
        "story": "Un espíritu que aparece al decir su nombre frente a un espejo en la oscuridad. Está rodeada de historias de venganza y tragedia.",
        "appearance": "Una figura femenina pálida con cabellos desordenados y mirada acusadora.",
        "stats": {
            "strength": 8,
            "agility": 10,
            "endurance": 12,
            "intelligence": 14,
            "charisma": 8,
            "willpower": 18
        },
        "skills": [
            { "name": "Espejo Mortal", "description": "Atrapa a los enemigos en un reflejo ilusorio." },
            { "name": "Grito de Venganza", "description": "Daña mentalmente a todos los enemigos cercanos." },
            { "name": "Sombras Perpetuas", "description": "Reduce la visibilidad en la habitación." }
        ],
        "weakness": "Los espejos rotos disipan su forma física."
    },
    {
        "name": "La Llorona",
        "type": "Leyenda Folklórica",
        "origin": "América Latina",
        "age": "Fallecida (mito)",
        "image": "img/la-llorona.webp",
        "story": "Un espíritu errante que busca a sus hijos, llorando por la culpa de haberlos perdido. Se dice que aparece cerca de ríos y lagos.",
        "appearance": "Una mujer vestida con un vestido blanco harapiento, llorando desconsoladamente.",
        "stats": {
            "strength": 6,
            "agility": 10,
            "endurance": 10,
            "intelligence": 12,
            "charisma": 14,
            "willpower": 16
        },
        "skills": [
            { "name": "Lamento Doloroso", "description": "Causa miedo en un área amplia." },
            { "name": "Toque Helado", "description": "Drena energía de los enemigos cercanos." },
            { "name": "Aparición Fantasmal", "description": "Se teletransporta a cortas distancias." }
        ],
        "weakness": "No puede cruzar corrientes de agua bendita."
    },
    {
        "name": "El Charro Negro",
        "type": "Leyenda Mexicana",
        "origin": "México",
        "age": "Indeterminado",
        "image": "img/el-charro-negro.webp",
        "story": "Un jinete oscuro que aparece en caminos solitarios ofreciendo riquezas a los viajeros, pero a cambio de sus almas.",
        "appearance": "Un hombre vestido con un traje de charro negro impecable, montado en un caballo del mismo color.",
        "stats": {
            "strength": 10,
            "agility": 12,
            "endurance": 14,
            "intelligence": 14,
            "charisma": 16,
            "willpower": 18
        },
        "skills": [
            { "name": "Persuasión Infernal", "description": "Engaña a los viajeros ofreciéndoles riquezas a cambio de sus almas." },
            { "name": "Riquezas Ilusorias", "description": "Crea tesoros falsos para distraer a sus enemigos." },
            { "name": "Velocidad Sobrenatural", "description": "Desaparece y reaparece rápidamente durante el combate." }
        ],
        "weakness": "No puede entrar en lugares consagrados o protegidos con símbolos religiosos."
    },
    {
        "name": "El Jinete Sin Cabeza",
        "type": "Leyenda Americana",
        "origin": "Sleepy Hollow, Nueva York",
        "age": "Fallecido (mito)",
        "image": "img/headless-horseman.webp",
        "story": "Un espíritu vengativo que busca su cabeza perdida, aterrorizando a los viajeros nocturnos.",
        "appearance": "Un jinete en un caballo negro, sosteniendo una calabaza o un cráneo como cabeza.",
        "stats": {
            "strength": 14,
            "agility": 12,
            "endurance": 14,
            "intelligence": 10,
            "charisma": 8,
            "willpower": 16
        },
        "skills": [
            { "name": "Ataque Decapitador", "description": "Lanza ataques feroces que tienen una alta probabilidad de causar daño crítico." },
            { "name": "Aparición Montada", "description": "Puede materializarse repentinamente en el combate, causando pánico en los enemigos." },
            { "name": "Rastreo Sobrenatural", "description": "Localiza enemigos sin importar su escondite." }
        ],
        "weakness": "Si recupera su cabeza, pierde su motivación y se desvanece."
    },
    {
        "name": "La Dama de Blanco",
        "type": "Leyenda Fantasmal",
        "origin": "Diversas culturas",
        "age": "Fallecida (mito)",
        "image": "img/white-lady.webp",
        "story": "Un espíritu femenino que aparece en carreteras o puentes, llorando por un amor perdido.",
        "appearance": "Una mujer vestida completamente de blanco, con un aura de tristeza y melancolía.",
        "stats": {
            "strength": 6,
            "agility": 8,
            "endurance": 10,
            "intelligence": 14,
            "charisma": 12,
            "willpower": 16
        },
        "skills": [
            { "name": "Presencia Etérea", "description": "Se mueve entre los enemigos como un espectro, esquivando ataques." },
            { "name": "Manipulación Emocional", "description": "Provoca desesperación y tristeza en los enemigos, reduciendo su moral." },
            { "name": "Desaparición Rápida", "description": "Desaparece de la vista, dificultando ser atacada." }
        ],
        "weakness": "Es vulnerable a objetos personales de su vida pasada, como anillos o cartas."
    },
    {
        "name": "Ded Moroz",
        "type": "Entidad Sobrenatural",
        "origin": "Mito Eslavo",
        "age": "Indeterminado",
        "image": "img/ded-moroz.webp",
        "story": "Una figura antigua de la mitología eslava que alguna vez fue un benefactor del invierno. Ahora corrompido por el deseo de poder, busca extender su imperio de hielo a nuevas tierras.",
        "appearance": "Un hombre alto, imponente, con barba blanca congelada, ropajes azules decorados con estrellas de hielo y un cetro brillante.",
        "stats": {
            "strength": 14,        // Antes: 18
            "agility": 10,         // Antes: 12
            "endurance": 16,       // Antes: 20
            "intelligence": 14,    // Antes: 16
            "charisma": 12,        // Antes: 14
            "willpower": 16        // Antes: 18
        },
        "skills": [
            { "name": "Congelación Instantánea", "description": "Ded Moroz congela a un enemigo inmovilizándolo por 2 turnos." },
            { "name": "Tormenta de Nieve", "description": "Invoca un área de hielo que reduce la visibilidad y la movilidad." },
            { "name": "Sello de Hielo", "description": "Lanza un hechizo para bloquear entradas o salidas con muros de hielo." }
        ],
        "weakness": "El calor de las campanadas y la luz simbolizan su derrota."
    }    
];
