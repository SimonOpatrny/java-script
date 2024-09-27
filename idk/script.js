const emojis = ['😀', '😎', '😊', '😂', '😍', '❤️'];

// Přidá text bez emoji a uloží odkaz na poslední text
function Text() {
    let input = document.getElementById("input").value;

    // Pokud je zadán text, přidá nový řádek do seznamu
    if (input) {
        let li = document.createElement("li");
        li.textContent = input;
        document.getElementById("output").appendChild(li);

        // Nastaví tento řádek jako poslední přidaný text
        lastTextElement = li;

        // Vymaže pole pro další zadávání textu
        document.getElementById("input").value = "";
    }
}

// Přidá emoji za poslední přidaný text
function Emoji() {
    if (lastTextElement) {
        let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        lastTextElement.textContent += " " + randomEmoji; // Přidá emoji za poslední text
    }
}

// Vymaže celý obsah
function Clear() {
    document.getElementById("output").innerHTML = ""; // Vymaže vše z výstupu
    lastTextElement = null; // Resetuje odkaz na poslední text
}