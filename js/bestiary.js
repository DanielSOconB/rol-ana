document.addEventListener("DOMContentLoaded", () => {
    const bestiaryContent = document.getElementById("bestiary-content");

    // Procesar los datos del bestiario (importados desde bestiary-data.js)
    creatures.forEach(creature => {
        const creatureContainer = document.createElement("div");
        creatureContainer.classList.add("creature");

        creatureContainer.innerHTML = `
            <div class="creature-header">
                <h3>${creature.name}</h3>
                <p><strong>Tipo:</strong> ${creature.type}</p>
                <p><strong>Procedencia:</strong> ${creature.origin}</p>
                <p><strong>Edad:</strong> ${creature.age}</p>
            </div>
            <div class="creature-body">
                <img src="${creature.image}" alt="${creature.name}" class="creature-image">
                <p><strong>Historia:</strong> ${creature.story}</p>
                <p><strong>Apariencia:</strong> ${creature.appearance}</p>
            </div>
            <div class="creature-stats">
                <h4>Estadísticas</h4>
                <ul>
                    <li><strong>Fuerza:</strong> ${creature.stats.strength}</li>
                    <li><strong>Agilidad:</strong> ${creature.stats.agility}</li>
                    <li><strong>Resistencia:</strong> ${creature.stats.endurance}</li>
                    <li><strong>Inteligencia:</strong> ${creature.stats.intelligence}</li>
                    <li><strong>Carisma:</strong> ${creature.stats.charisma}</li>
                    <li><strong>Voluntad:</strong> ${creature.stats.willpower}</li>
                </ul>
            </div>
            <div class="card-skills">
                <h4>Habilidades</h4>
                <ul>
                    ${creature.skills.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
            </div>
        `;

        bestiaryContent.appendChild(creatureContainer);
    });
});
