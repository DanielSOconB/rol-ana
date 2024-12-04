document.addEventListener("DOMContentLoaded", () => {
    const pointsLeft = document.getElementById("points-left");
    const statInputs = document.querySelectorAll(".stat-controls input");
    const form = document.getElementById("character-form");
    const summarySection = document.getElementById("character-summary");
    const summaryDetails = document.getElementById("character-details");

    const maxPoints = 40;
    let pointsRemaining = maxPoints;

    const skills = ["Atletismo", "Sigilo", "Primeros Auxilios", "Tecnología", "Conocimiento", "Persuasión"];
    const skillsContainer = document.getElementById("skills-container");

    // Render skills dynamically
    skills.forEach(skill => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "skills";
        checkbox.value = skill;
        checkbox.id = skill;

        const label = document.createElement("label");
        label.htmlFor = skill;
        label.textContent = skill;

        const wrapper = document.createElement("div");
        wrapper.appendChild(checkbox);
        wrapper.appendChild(label);

        skillsContainer.appendChild(wrapper);
    });

    // Update points remaining dynamically
    statInputs.forEach(input => {
        input.addEventListener("input", () => {
            const totalPoints = Array.from(statInputs).reduce((sum, input) => sum + parseInt(input.value || 0), 0);
            pointsRemaining = maxPoints - totalPoints;
            pointsLeft.textContent = pointsRemaining;

            if (pointsRemaining < 0) {
                input.value = parseInt(input.value) - 1;
                alert("No puedes asignar más de 40 puntos.");
            }
        });
    });

    // Handle form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const name = formData.get("name");
        const charClass = formData.get("class");
        const origin = formData.get("origin");
        const selectedSkills = formData.getAll("skills").join(", ");

        const stats = {};
        statInputs.forEach(input => {
            stats[input.name] = input.value;
        });

        summaryDetails.innerHTML = `
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Clase:</strong> ${charClass}</p>
            <p><strong>Origen:</strong> ${origin}</p>
            <p><strong>Habilidades Destacadas:</strong> ${selectedSkills}</p>
            <p><strong>Atributos:</strong></p>
            <ul>
                ${Object.entries(stats).map(([key, value]) => `<li>${key}: ${value}</li>`).join("")}
            </ul>
        `;

        form.classList.add("hidden");
        summarySection.classList.remove("hidden");
    });
});
