const creatures = [
    {
        "name": "Dragón de Sombras",
        "type": "Criatura Mítica",
        "origin": "Montañas del Ocaso",
        "age": "300 años",
        "image": "img/shadow-dragon.png",
        "story": "Este dragón legendario ha sido el guardián de las Montañas del Ocaso durante siglos, su presencia intimidante asegura que los secretos de la región permanezcan protegidos. Cuenta la leyenda que solo los más valientes o desesperados se atreven a cruzar sus dominios. Aquellos que lo desafían rara vez regresan, y los que lo hacen traen historias de una criatura que domina las sombras mismas, utilizando la oscuridad como un arma y un escudo.",
        "appearance": "De tamaño colosal, el Dragón de Sombras tiene escamas negras como ónix que parecen absorber y distorsionar la luz. Sus ojos, de un rojo profundo, brillan como brasas en la oscuridad, y sus alas membranosas proyectan sombras espectaculares, envolviendo todo a su alrededor en una penumbra inquietante. Su cuerpo está adornado con cicatrices de antiguas batallas, y su aliento emana una niebla oscura que debilita a sus enemigos.",
        "stats": {
            "strength": 18,
            "agility": 12,
            "endurance": 20,
            "intelligence": 14,
            "charisma": 10,
            "willpower": 16
        }
    },
    {
        "name": "Hombre Lobo Errante",
        "type": "Criatura Mutante",
        "origin": "Bosques del Norte",
        "age": "45 años",
        "image": "img/werewolf.png",
        "story": "Una figura maldita que vaga por los bosques bajo la luna llena.",
        "appearance": "Un ser humanoide con pelaje gris oscuro y ojos brillantes.",
        "stats": {
            "strength": 14,
            "agility": 16,
            "endurance": 12,
            "intelligence": 10,
            "charisma": 8,
            "willpower": 12
        }
    },
    {
        "name": "Gárgola de Piedra",
        "type": "Criatura Mágica",
        "origin": "Catedrales Antiguas",
        "age": "500 años",
        "image": "img/gargoyle.png",
        "story": "Guardianes inmóviles durante el día, estas criaturas cobran vida para proteger sus dominios en la noche.",
        "appearance": "Esculturas de piedra con alas imponentes y rostros intimidantes.",
        "stats": {
            "strength": 15,
            "agility": 8,
            "endurance": 18,
            "intelligence": 8,
            "charisma": 5,
            "willpower": 14
        }
    },
    {
        "name": "Sirena de las Profundidades",
        "type": "Criatura Acuática",
        "origin": "Océanos Abismales",
        "age": "100 años",
        "image": "img/mermaid.png",
        "story": "Conocidas por su canto hipnótico, estas sirenas atraen a los navegantes a su perdición.",
        "appearance": "Mitad humana, mitad pez, con escamas iridiscentes y ojos hipnotizantes.",
        "stats": {
            "strength": 10,
            "agility": 14,
            "endurance": 12,
            "intelligence": 12,
            "charisma": 18,
            "willpower": 12
        }
    },
    {
        "name": "Fénix Escarlata",
        "type": "Criatura Mítica",
        "origin": "Volcanes Extintos",
        "age": "Inmortal",
        "image": "img/phoenix.png",
        "story": "Un ave legendaria que renace de sus cenizas, símbolo de inmortalidad y renacimiento.",
        "appearance": "Ave de fuego con plumas rojas y doradas, irradiando calor intenso.",
        "stats": {
            "strength": 14,
            "agility": 16,
            "endurance": 20,
            "intelligence": 14,
            "charisma": 15,
            "willpower": 20
        }
    },
    {
        "name": "Espectro de Medianoche",
        "type": "Criatura Fantasmal",
        "origin": "Cementerios Olvidados",
        "age": "200 años",
        "image": "img/specter.png",
        "story": "Un espíritu atormentado que vaga en busca de venganza contra quienes profanaron su descanso.",
        "appearance": "Una figura etérea envuelta en niebla oscura, con ojos que emiten un brillo tenue.",
        "stats": {
            "strength": 6,
            "agility": 14,
            "endurance": 10,
            "intelligence": 12,
            "charisma": 8,
            "willpower": 18
        }
    },
    {
        "name": "Minotauro del Laberinto",
        "type": "Criatura Legendaria",
        "origin": "Islas Perdidas",
        "age": "120 años",
        "image": "img/minotaur.png",
        "story": "Una bestia imponente que protege los secretos de un antiguo laberinto.",
        "appearance": "Un humanoide musculoso con cabeza de toro y ojos inyectados en sangre.",
        "stats": {
            "strength": 20,
            "agility": 12,
            "endurance": 18,
            "intelligence": 8,
            "charisma": 6,
            "willpower": 14
        }
    },
    {
        "name": "Vampiro Nocturno",
        "type": "Criatura Sobrenatural",
        "origin": "Castillos Abandonados",
        "age": "400 años",
        "image": "img/vampire.png",
        "story": "Un ser inmortal que se alimenta de la sangre de los vivos, temido por su astucia y poder.",
        "appearance": "Pálido, con colmillos afilados y una mirada hipnótica.",
        "stats": {
            "strength": 12,
            "agility": 14,
            "endurance": 16,
            "intelligence": 18,
            "charisma": 16,
            "willpower": 14
        }
    },
    {
        "name": "Elemental de Tierra",
        "type": "Criatura Elemental",
        "origin": "Montañas Rocosas",
        "age": "Milenario",
        "image": "img/earth-elemental.png",
        "story": "Una manifestación viva de la tierra, imparable en su camino.",
        "appearance": "Un coloso hecho de roca, tierra y raíces.",
        "stats": {
            "strength": 20,
            "agility": 6,
            "endurance": 22,
            "intelligence": 10,
            "charisma": 5,
            "willpower": 15
        }
    },
    {
        "name": "Araña Gigante",
        "type": "Criatura Mutante",
        "origin": "Bosques Oscuros",
        "age": "30 años",
        "image": "img/giant-spider.png",
        "story": "Una araña de tamaño colosal que teje trampas mortales para sus presas.",
        "appearance": "Un cuerpo peludo con múltiples ojos y patas largas y puntiagudas.",
        "stats": {
            "strength": 14,
            "agility": 18,
            "endurance": 12,
            "intelligence": 8,
            "charisma": 3,
            "willpower": 10
        }
    }
    // Continúa añadiendo más criaturas
];
