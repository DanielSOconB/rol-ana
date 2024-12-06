document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".form-step");
    const nextBtns = document.querySelectorAll(".next-btn");
    const prevBtns = document.querySelectorAll(".prev-btn");
    const submitBtn = document.querySelector(".submit-btn");
    const attributesInputs = document.querySelectorAll("#attributes input[type='number']");
    const remainingPointsElement = document.getElementById("remaining-points").querySelector("span");
    const skillsCheckboxes = document.querySelectorAll("#skills input[type='checkbox']");
    const maxPoints = 40;
    let remainingPoints = maxPoints;

    nextBtns.forEach(button => {
        button.addEventListener("click", () => {
            const currentStep = button.closest(".form-step");
            const nextStepId = button.getAttribute("data-next");
            const nextStep = document.getElementById(nextStepId);

            if (validateStep(currentStep)) {
                currentStep.classList.add("hidden");
                nextStep.classList.remove("hidden");
            }
        });
    });

    prevBtns.forEach(button => {
        button.addEventListener("click", () => {
            const currentStep = button.closest(".form-step");
            const prevStepId = button.getAttribute("data-prev");
            const prevStep = document.getElementById(prevStepId);

            currentStep.classList.add("hidden");
            prevStep.classList.remove("hidden");
        });
    });

    attributesInputs.forEach(input => {
        const decrementBtn = input.previousElementSibling;
        const incrementBtn = input.nextElementSibling;

        decrementBtn.addEventListener("click", () => {
            if (parseInt(input.value) > 0) {
                input.value = parseInt(input.value) - 1;
                updatePoints();
            }
        });

        incrementBtn.addEventListener("click", () => {
            if (remainingPoints > 0) {
                input.value = parseInt(input.value) + 1;
                updatePoints();
            }
        });

        input.addEventListener("input", updatePoints);
    });

    function updatePoints() {
        const totalPoints = Array.from(attributesInputs).reduce((sum, attrInput) => sum + parseInt(attrInput.value || 0), 0);
        remainingPoints = maxPoints - totalPoints;

        if (remainingPoints >= 0) {
            remainingPointsElement.textContent = remainingPoints;
            attributesInputs.forEach(input => input.classList.remove("error"));
        } else {
            attributesInputs.forEach(input => input.classList.add("error"));
        }
    }

    skillsCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            const selectedSkills = Array.from(skillsCheckboxes).filter(skill => skill.checked);
            if (selectedSkills.length > 3) {
                checkbox.checked = false;
                alert("You can only select up to 3 skills.");
            }
        });
    });

    function validateStep(step) {
        const inputs = step.querySelectorAll("input, select, textarea");
        let valid = true;

        inputs.forEach(input => {
            if (!input.checkValidity() || (input.type === "number" && parseInt(input.value) < 1)) {
                valid = false;
                input.classList.add("error");
            } else {
                input.classList.remove("error");
            }
        });

        if (step.id === "step-2" && remainingPoints !== 0) {
            alert("You must assign exactly 40 points between the attributes.");
            valid = false;
        }

        return valid;
    }

    submitBtn.addEventListener("click", () => {
        const characterData = collectCharacterData();
        if (characterData) {
            console.log("Character Created:", characterData);
            alert("Character created successfully!");

            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(characterData, null, 2));
            const downloadAnchor = document.createElement("a");
            downloadAnchor.setAttribute("href", dataStr);
            downloadAnchor.setAttribute("download", `${characterData.name.replace(/\s+/g, "_").toLowerCase()}_character.json`);
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();
        }
    });

    function collectCharacterData() {
        try {
            const name = document.getElementById("name").value;
            const charClass = document.getElementById("class").value;
            const origin = document.getElementById("origin").value;
            const appearance = document.getElementById("appearance").value;
            const power = document.getElementById("power").value;

            const attributes = {};
            attributesInputs.forEach(input => {
                attributes[input.name] = parseInt(input.value);
            });

            const skills = Array.from(skillsCheckboxes)
                .filter(skill => skill.checked)
                .map(skill => skill.value);

            if (!name || !charClass || !origin || !power) {
                alert("Please complete all required fields.");
                return null;
            }

            return {
                name,
                class: charClass,
                origin,
                appearance,
                power,
                attributes,
                skills,
                timestamp: new Date().toISOString(),
            };
        } catch (error) {
            console.error("Error collecting character data:", error);
            return null;
        }
    }
});