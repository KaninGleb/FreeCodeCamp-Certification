document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const messageContainer = document.getElementById('message-container');
  const creatureCard = document.getElementById('creature-card');

  const creatureElements = {
    name: document.getElementById('creature-name'),
    id: document.getElementById('creature-id'),
    types: document.getElementById('types'),
    specialName: document.getElementById('special-name'),
    specialDescription: document.getElementById('special-description'),
    hp: document.getElementById('hp'),
    attack: document.getElementById('attack'),
    defense: document.getElementById('defense'),
    specialAttack: document.getElementById('special-attack'),
    specialDefense: document.getElementById('special-defense'),
    speed: document.getElementById('speed'),
  };

  const API_URL = 'https://rpg-creature-api.freecodecamp.rocks/api/creature/';

  searchButton.addEventListener('click', fetchCreatureData);
  searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      fetchCreatureData();
    }
  });

  async function fetchCreatureData() {
    const creatureId = searchInput.value.trim();

    if (!creatureId || creatureId < 1 || creatureId > 20) {
      displayMessage('Please enter a creature ID (1-20).');
      hideCard();
      return;
    }

    clearMessage();

    try {
      const res = await fetch(`${API_URL}${creatureId}`);
      if (!res.ok) {
        throw new Error(`Creature with ID ${id} not found.`);
      }
      const creatureData = await res.json();
      displayCreature(creatureData);
    } catch (error) {
      displayMessage(error.message);
      hideCard();
    }
  }

  function displayCreature(creature) {
    if (!creature || !creature.stats || !Array.isArray(creature.stats)) {
      displayMessage('Received invalid data from the server.');
      hideCard();
      return;
    }

    creatureElements.name.textContent = creature.name;
    creatureElements.id.textContent = `#${String(creature.id).padStart(3, '0')}`;

    if (creature.special) {
      creatureElements.specialName.textContent = creature.special.name;
      creatureElements.specialDescription.textContent = creature.special.description;
    }

    creatureElements.types.innerHTML = '';
    creature.types.forEach(typeObj => {
      const typeElement = document.createElement('span');
      typeElement.textContent = typeObj.name;
      typeElement.className = `type-badge type-${typeObj.name.toLowerCase()}`;
      creatureElements.types.appendChild(typeElement);
    });

    const statsObject = creature.stats.reduce((acc, stat) => {
      acc[stat.name] = stat.base_stat;
      return acc;
    }, {});

    creatureElements.hp.textContent = statsObject.hp ?? '-';
    creatureElements.attack.textContent = statsObject.attack ?? '-';
    creatureElements.defense.textContent = statsObject.defense ?? '-';
    creatureElements.specialAttack.textContent = statsObject['special-attack'] ?? '-';
    creatureElements.specialDefense.textContent = statsObject['special-defense'] ?? '-';
    creatureElements.speed.textContent = statsObject.speed ?? '-';

    showCard();
  }

  function displayMessage(message) {
    messageContainer.textContent = message;
    messageContainer.style.display = 'block';
  }

  function clearMessage() {
    messageContainer.style.display = 'none';
  }

  function showCard() {
    creatureCard.hidden = false;
    setTimeout(() => {
      creatureCard.classList.add('visible');
    }, 10);
  }

  function hideCard() {
    creatureCard.classList.remove('visible');
    setTimeout(() => {
      if (!creatureCard.classList.contains('visible')) {
        creatureCard.hidden = true;
      }
    }, 500);
  }
});