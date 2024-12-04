const characters = [
    {
        name: "Tomás, el Investigador",
        class: "Detective Privado",
        origin: "Ciudad Industrial",
        age: 42,
        image: "img/tomas-investigador.webp",
        story: "Tomás es un detective privado que se especializa en casos que otros consideran cerrados. Tiene un don para encontrar conexiones imposibles y un instinto que le permite detectar mentiras con facilidad.",
        appearance: "De complexión media, siempre con una gabardina gris y una libreta en mano.",
        stats: {
            strength: 8,
            agility: 10,
            endurance: 12,
            intelligence: 16,
            charisma: 14,
            willpower: 14
        },
        skills: [
            { name: "Observación", description: "Permite encontrar detalles ocultos." },
            { name: "Persuasión", description: "Incrementa las posibilidades de obtener información." },
            { name: "Resiliencia", description: "Soporta presión física y mental en situaciones difíciles." }
        ]
    },
    {
        name: "Isabela, la Enfermera",
        class: "Sanadora",
        origin: "Barrio Marginal",
        age: 35,
        image: "img/isabela-enfermera.webp",
        story: "Isabela trabaja como enfermera en un hospital local, pero tiene conocimientos sobre curación alternativa que la convierten en una figura indispensable para su comunidad.",
        appearance: "De figura delgada, cabello largo recogido y manos siempre listas para ayudar.",
        stats: {
            strength: 6,
            agility: 10,
            endurance: 12,
            intelligence: 14,
            charisma: 16,
            willpower: 12
        },
        skills: [
            { name: "Primeros Auxilios", description: "Sana heridas menores rápidamente." },
            { name: "Empatía", description: "Aumenta la confianza de los aliados." },
            { name: "Conocimiento Herbolario", description: "Usa plantas locales para curar enfermedades." }
        ]
    },
    {
        name: "Carlos, el Mecánico",
        class: "Técnico",
        origin: "Ciudad Tranquila",
        age: 29,
        image: "img/carlos-mecanico.webp",
        story: "Carlos creció entre motores y maquinaria. Su habilidad para reparar y modificar tecnología lo hace un recurso invaluable.",
        appearance: "Alto y musculoso, con manchas de grasa en sus manos y ropa de trabajo.",
        stats: {
            strength: 12,
            agility: 10,
            endurance: 14,
            intelligence: 12,
            charisma: 8,
            willpower: 12
        },
        skills: [
            { name: "Ingeniería", description: "Repara y mejora dispositivos mecánicos." },
            { name: "Desarme", description: "Desactiva trampas o artefactos peligrosos." },
            { name: "Fabricación Improvisada", description: "Construye herramientas útiles con pocos recursos." }
        ]
    },
    {
        name: "Lucía, la Maestra",
        class: "Intelectual",
        origin: "Pueblo Rural",
        age: 31,
        image: "img/lucia-maestra.webp",
        story: "Lucía es una maestra que, detrás de su aspecto tranquilo, guarda secretos sobre antiguas culturas y leyendas. A menudo ayuda a resolver enigmas complejos.",
        appearance: "De mirada serena, gafas pequeñas y un chal tejido sobre los hombros.",
        stats: {
            strength: 6,
            agility: 8,
            endurance: 10,
            intelligence: 18,
            charisma: 14,
            willpower: 12
        },
        skills: [
            { name: "Conocimiento Cultural", description: "Accede a información clave sobre mitos y leyendas." },
            { name: "Resolución de Enigmas", description: "Descifra códigos y acertijos con facilidad." },
            { name: "Docencia", description: "Mejora las habilidades de los aliados a través de enseñanzas." }
        ]
    },
    {
        name: "Martín, el Guardabosques",
        class: "Explorador",
        origin: "Zona Fronteriza",
        age: 39,
        image: "img/martin-guardabosques.webp",
        story: "Martín conoce los bosques mejor que nadie. Su conexión con la naturaleza lo hace un guía invaluable en terrenos desconocidos.",
        appearance: "Vestido con ropa de camuflaje y un sombrero ancho, lleva un arco colgado a la espalda.",
        stats: {
            strength: 10,
            agility: 14,
            endurance: 12,
            intelligence: 12,
            charisma: 10,
            willpower: 14
        },
        skills: [
            { name: "Rastreo", description: "Encuentra pistas en terrenos complicados." },
            { name: "Arquería", description: "Golpea con precisión a larga distancia." },
            { name: "Conexión con la Naturaleza", description: "Identifica recursos naturales útiles." }
        ]
    }
];
