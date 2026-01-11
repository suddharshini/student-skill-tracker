function addSkill() {
    const skillInput = document.getElementById("skillInput");
    const levelInput = document.getElementById("levelInput");

    const skill = skillInput.value.trim();
    const level = levelInput.value;

    if (skill === "" || level === "") {
        alert("Please enter both skill and level");
        return;
    }

    const skillList = document.getElementById("skillList");

    const listItem = document.createElement("li");
    listItem.textContent = skill + " - " + level;

    skillList.appendChild(listItem);

    skillInput.value = "";
    levelInput.value = "";
}
