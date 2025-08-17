document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const messageContainer = document.getElementById('message-container');

  const API_URL = 'https://rpg-creature-api.freecodecamp.rocks/api/creature/';

  searchButton.addEventListener('click', fetchCreatureData);
  searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      fetchCreatureData();
    }
  });

  async function fetchCreatureData() {
    const creatureId = searchInput.value.trim();

    if (!creatureId) {
      displayMessage('Please enter a creature ID.', true);
      return;
    }

    const id = parseInt(creatureId, 10);
    if (isNaN(id) || id < 1 || id > 20) {
      displayMessage('Please enter a valid ID between 1 and 20.', true);
      return;
    }

    clearMessage();

    try {
      const response = await fetch(`${API_URL}${id}`);
      if (!response.ok) {
        throw new Error(`Creature with ID ${id} not found.`);
      }
      const creatureData = await response.json();
      displayCreature(creatureData);
    } catch (error) {
      displayMessage(error.message, true);
      resetCard();
    }
  }

  function displayCreature(creature) {
    // Проверяем наличие основных данных
    if (!creature || !creature.stats || !Array.isArray(creature.stats)) {
      displayMessage('Received invalid data from the server.', true);
      resetCard();
      return;
    }

    document.getElementById('creature-name').textContent = creature.name || '-';
    document.getElementById('creature-id').textContent = `#${creature.id || '-'}`;
    document.getElementById('weight').textContent = creature.weight || '-';
    document.getElementById('height').textContent = creature.height || '-';

    // Отображение изображения
    const imageElement = document.getElementById('creature-image');
    const imagePlaceholder = document.getElementById('image-placeholder');
    if (creature.image) {
      imageElement.src = creature.image;
      imageElement.style.display = 'block';
      imagePlaceholder.style.display = 'none';
    } else {
      imageElement.style.display = 'none';
      imagePlaceholder.style.display = 'block';
    }

    // *** ГЛАВНОЕ ИЗМЕНЕНИЕ: Преобразование массива статов в объект ***
    const statsObject = creature.stats.reduce((acc, stat) => {
      // Ключом объекта будет имя стата (stat.name), значением - его показатель (stat.base_stat)
      acc[stat.name] = stat.base_stat;
      return acc;
    }, {});

    // Теперь используем созданный объект для заполнения полей
    document.getElementById('hp').textContent = statsObject.hp ?? '-';
    document.getElementById('attack').textContent = statsObject.attack ?? '-';
    document.getElementById('defense').textContent = statsObject.defense ?? '-';
    document.getElementById('special-attack').textContent = statsObject['special-attack'] ?? '-';
    document.getElementById('special-defense').textContent = statsObject['special-defense'] ?? '-';
    document.getElementById('speed').textContent = statsObject.speed ?? '-';


    // *** ИЗМЕНЕНИЕ ДЛЯ ТИПОВ ***
    const typesContainer = document.getElementById('types');
    typesContainer.innerHTML = ''; // Очистка предыдущих типов

    if (creature.types && Array.isArray(creature.types)) {
      creature.types.forEach(typeObj => { // typeObj - это { name: "fire" }
        const typeElement = document.createElement('span');
        // Используем свойство .name из объекта
        typeElement.textContent = typeObj.name;
        typeElement.className = `type-badge type-${typeObj.name.toLowerCase()}`;
        typesContainer.appendChild(typeElement);
      });
    }
  }

  function displayMessage(message, isError = false) {
    messageContainer.textContent = message;
    messageContainer.classList.toggle('message-error', isError);
  }

  function clearMessage() {
    messageContainer.textContent = '';
    messageContainer.classList.remove('message-error');
  }

  function resetCard() {
    document.getElementById('creature-name').textContent = '-';
    document.getElementById('creature-id').textContent = '#-';
    document.getElementById('weight').textContent = '-';
    document.getElementById('height').textContent = '-';
    document.getElementById('hp').textContent = '-';
    document.getElementById('attack').textContent = '-';
    document.getElementById('defense').textContent = '-';
    document.getElementById('special-attack').textContent = '-';
    document.getElementById('special-defense').textContent = '-';
    document.getElementById('speed').textContent = '-';
    document.getElementById('types').innerHTML = '';
    document.getElementById('creature-image').style.display = 'none';
    document.getElementById('image-placeholder').style.display = 'block';
  }
});