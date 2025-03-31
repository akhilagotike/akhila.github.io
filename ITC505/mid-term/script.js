const story = {
    start: {
        text: "You find an old diary and a mysterious locket. What do you do?",
        choices: [
            { text: "Read the diary", next: "diaryRevealed" },
            { text: "Ignore it", next: "endNoAdventure" }
        ],
        image: "start.jpg"
    },
    diaryRevealed: {
        text: "The diary hints at a hidden treasure in Pakistan. What next?",
        choices: [
            { text: "Travel to Pakistan", next: "travelPakistan" },
            { text: "Sell the locket", next: "endNoTreasure" }
        ],
        image: "diary.jpg"
    },
    travelPakistan: {
        text: "You arrive in Pakistan. Where to first?",
        choices: [
            { text: "Visit the archaeology department", next: "archaeologyDept" },
            { text: "Explore the streets", next: "kidnapped" }
        ],
        image: "pakistan.jpg"
    },
    kidnapped: {
        text: "You are kidnapped! You must escape.",
        choices: [
            { text: "Try to escape", next: "escapeWithLocket" },
            { text: "Wait for help", next: "endCaptured" }
        ],
        image: "kidnapped.jpg"
    },
    archaeologyDept: {
        text: "You meet a man who wants to trade gold for your locket.",
        choices: [
            { text: "Accept", next: "endGreedy" },
            { text: "Refuse and escape", next: "escapeWithLocket" }
        ],
        image: "department.jpg"
    },
    escapeWithLocket: {
        text: "You escape and search for the treasure map. Who do you trust?",
        choices: [
            { text: "Steal the map from Sultan", next: "stealMap" },
            { text: "Find Zara, an expert", next: "findZara" }
        ],
        image: "escape.jpg"
    },
    findZara: {
        text: "Zara helps you decode the map. You must hurry!",
        choices: [
            { text: "Go to the treasure site", next: "findTreasureLocation" }
        ],
        image: "zara.jpg"
    },
    stealMap: {
        text: "You steal the map but Sultan is after you!",
        choices: [
            { text: "Use the locket as a key", next: "findTreasureLocation" },
            { text: "Break open the box", next: "caughtBySultan" }
        ],
        image: "map.jpg"
    },
    findTreasureLocation: {
        text: "The map leads to a temple. Enter the ruins?",
        choices: [
            { text: "Enter", next: "undergroundRuins" },
            { text: "Wait outside", next: "endTooLate" }
        ],
        image: "temple.jpg"
    },
    undergroundRuins: {
        text: "A puzzle blocks your way. Solve it?",
        choices: [
            { text: "Try a pattern", next: "correctPuzzle" },
            { text: "Guess randomly", next: "wrongPuzzle" }
        ],
        image: "ruins.jpg"
    },
    wrongPuzzle: {
        text: "You trigger a trap and Sultan captures you!",
        choices: [],
        image: "wrong.jpg"
    },
    correctPuzzle: {
        text: "A secret passage opens, but Sultan arrives!",
        choices: [
            { text: "Fight Sultan", next: "battleSultan" },
            { text: "Trick Sultan", next: "trickSultan" }
        ],
        image: "passage.jpg"
    },
    battleSultan: {
        text: "You fight bravely but Sultan is too strong!",
        choices: [],
        image: "defeat.jpg"
    },
    trickSultan: {
        text: "You trick Sultan and enter the final chamber!",
        choices: [
            { text: "Seal the door", next: "victory" }
        ],
        image: "trick.jpg"
    },
    victory: {
        text: "You secure the treasure and win!",
        choices: [],
        image: "victory.jpg"
    },
    endNoAdventure: {
        text: "You ignore the mystery and live a normal life.",
        choices: [],
        image: "no_adventure.jpg"
    },
    endNoTreasure: {
        text: "You sell the locket and miss out on the adventure.",
        choices: [],
        image: "no_treasure.jpg"
    },
    endGreedy: {
        text: "You take the gold, but Sultan betrays you.",
        choices: [],
        image: "greedy.jpg"
    },
    endCaptured: {
        text: "Waiting for help was a mistake. You are never seen again.",
        choices: [],
        image: "captured.jpg"
    },
    caughtBySultan: {
        text: "Sultan captures you. The adventure ends here.",
        choices: [],
        image: "caught.jpg"
    },
    endTooLate: {
        text: "You waited too long. Sultan gets the treasure first!",
        choices: [],
        image: "too_late.jpg"
    }
};

function startGame() {
    updateStory("start");
}

function updateStory(part) {
    const storyText = document.getElementById("story-text");
    const storyImage = document.getElementById("story-image");
    const choicesContainer = document.getElementById("choices-container");
    const restartBtn = document.getElementById("restart-btn");

    choicesContainer.innerHTML = "";
    let currentPart = story[part];

    storyText.textContent = currentPart.text;
    storyImage.src = currentPart.image;
    restartBtn.style.display = "block";

    currentPart.choices.forEach(choice => {
        let button = document.createElement("button");
        button.textContent = choice.text;
        button.onclick = () => updateStory(choice.next);
        choicesContainer.appendChild(button);
    });
}

window.onload = startGame;
