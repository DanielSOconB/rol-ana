document.addEventListener("DOMContentLoaded", () => {
    const charactersContainer = document.getElementById("characters-content");

    characters.forEach(character => {
        const card = document.createElement("div");
        card.className = "character";

        card.innerHTML = `
            <div class="character-header">
                <h3>${character.name}</h3>
                <p>${character.class} - ${character.origin}</p>
            </div>
            <div class="character-body">
                <img src="${character.image}" alt="${character.name}">
                <p>${character.story}</p>
                <ul class="stats">
                    ${Object.entries(character.stats).map(([key, value]) => `<li>${key}: ${value}</li>`).join("")}
                </ul>
            </div>
            <div class="character-skills">
                <h4>Habilidades:</h4>
                <ul>
                    ${character.skills.map(skill => `<li><strong>${skill.name}:</strong> ${skill.description}</li>`).join("")}
                </ul>
            </div>
        `;

        charactersContainer.appendChild(card);
    });
});
