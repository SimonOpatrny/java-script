let history = []; // Pole pro uchování historie obrázků
let count = 1;    // Čítač pro číslování obrázků

function pridatObrazek() {
  const novaUrl = document.getElementById("urlObrazku").value; // Získání URL z inputu
  const jmenoObrazku = document.getElementById("nazevObrazkuInput").value; // Získání jména z inputu
  const img = new Image(); // Vytvoření nového objektu Image

  img.onload = function() {
    // Tato funkce se spustí, když se obrázek úspěšně načte
    document.getElementById("obrazek").src = novaUrl; // Změna src obrázku na novou URL
    history.push(`${count++}. ${jmenoObrazku}`); // Přidání jména obrázku do historie a inkrementace čítače
    updateHistoryList(); // Aktualizace seznamu předchozích obrázků
  };

  img.onerror = function() {
    // Tato funkce se spustí, pokud se obrázek nepodaří načíst
    alert("Zadaná URL není platná nebo obrázek nelze načíst."); // Zobrazení upozornění
  };

  img.src = novaUrl; // Pokus o načtení obrázku z nové URL
}

function updateHistoryList() {
  const infoList = document.getElementById("info"); // Získání seznamu pro předchozí obrázky
  infoList.innerHTML = history.map(name => `<li>${name}</li>`).join(''); // Převedení historie na HTML seznam
}
