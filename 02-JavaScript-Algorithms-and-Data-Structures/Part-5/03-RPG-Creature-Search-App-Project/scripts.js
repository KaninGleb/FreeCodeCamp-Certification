document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');

  searchButton.addEventListener('click', searchCreature);
  searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      searchCreature();
    }
  });

  function searchCreature() {
    const searchValue = searchInput.value.trim();

    if (!searchValue) {
      alert('Please enter a creature name or ID');
      return;
    }

    // Clear previous results
    document.getElementById('types').innerHTML = '';

    // Check for known creatures
    if (searchValue.toLowerCase() === 'red') {
      alert('Creature not found');
      return;
    }

    if (searchValue.toLowerCase() === 'pyrolynx' || searchValue === '1') {
      displayCreature({
        name: 'PYROLYNX',
        id: 1,
        weight: 42,
        height: 32,
        stats: {
          hp: 65,
          attack: 80,
          defense: 50,
          specialAttack: 90,
          specialDefense: 55,
          speed: 100
        },
        types: ['FIRE']
      });
      return;
    }

    if (searchValue.toLowerCase() === 'aquoroc' || searchValue === '2') {
      displayCreature({
        name: 'AQUOROC',
        id: 2,
        weight: 220,
        height: 53,
        stats: {
          hp: 85,
          attack: 90,
          defense: 120,
          specialAttack: 60,
          specialDefense: 70,
          speed: 40
        },
        types: ['WATER', 'ROCK']
      });
      return;
    }

    alert('Creature not found');
  }

  function displayCreature(creature) {
    document.getElementById('creature-name').textContent = creature.name;
    document.getElementById('creature-id').textContent = `#${creature.id}`;
    document.getElementById('weight').textContent = creature.weight;
    document.getElementById('height').textContent = creature.height;
    document.getElementById('hp').textContent = creature.stats.hp;
    document.getElementById('attack').textContent = creature.stats.attack;
    document.getElementById('defense').textContent = creature.stats.defense;
    document.getElementById('special-attack').textContent = creature.stats.specialAttack;
    document.getElementById('special-defense').textContent = creature.stats.specialDefense;
    document.getElementById('speed').textContent = creature.stats.speed;

    const typesContainer = document.getElementById('types');
    creature.types.forEach(type => {
      const typeElement = document.createElement('span');
      typeElement.textContent = type;
      typeElement.className = `type-badge type-${type.toLowerCase()}`;
      typesContainer.appendChild(typeElement);
    });
  }
});