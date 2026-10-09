## En ToDo-applikation i medeltida parchment stil byggd med React och Vite.

## 1. Frågor om koden

### State-hantering
Appen håller koll på alla uppgifter i ett state (`todos`) i `App.jsx` med hjälp av `useState`. Varje uppgift sparas som ett objekt med `id`, `text` och `completed`. När vi anropar `setTodos` känner React av att datan har ändrats och ritar om komponenten så att skärmen uppdateras direkt utan att sidan laddas om.

### Oföränderlighet (Immutability)
Man får inte ändra en array direkt med `.push()` eftersom React jämför minnesreferenser för att veta när sidan ska ritas om. Om man ändrar i samma array upptäcker React inte ändringen och gränssnittet blir inaktuellt. Istället skapar vi alltid en ny array med spread-operatorn (`[...todos, newTodo]`), `.map()` eller `.filter()`.

---

## 2. Kodgranskning (Koddetektiven)

**Koden som granskas:**
```javascript
function addTodo(todos, text) {
  todos.push(text);
  return todos;
}
```

Feedback:
Koden försöker att lägga till en ny uppgift i listan med .push(), men problemet är att den ändrar direkt i det befintliga statet och bara sparar en textsträng, vilket gör att React inte upptäcker ändringen och inte ritar om gränssnittet. Ett bättre sätt är att skapa ett nytt objekt med id, text och completed, och returnera en helt ny array med spread-operatorn ([...todos, newTodo]).

Korrekt omskrivning för React:
```JavaScript

function addTodo(todos, text) {
  // Skapa ett nytt objekt med id, text och status
  const newTodo = {
    id: Date.now(),
    text: text,
    completed: false
  };

  // Returnera en ny array med spread-operatorn
  return [...todos, newTodo];
}
```

3. Problemlösning & Reflektion

När jag ville stoppa användare från att lägga till tomma uppgifter sökte jag i MDN och React-dokumentationen om strängmetoden .trim(). Jag lade till ett villkor if (!text.trim()) return; i mitt formulär. Det tar bort tomma mellanslag och avbryter funktionen om inputfältet är tomt. Det var ett enkelt sätt att validera indata så att appen inte sparar tomma rader.


---
