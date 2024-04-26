// Load the commands from the JSON file
fetch('commands.json')
  .then(response => response.json())
  .then(data => {
    const commands = data;
    const commandList = document.getElementById('commandList');
    const searchBox = document.getElementById('searchBox');

    // Function to render the commands
    function renderCommands(filteredCommands) {
      commandList.innerHTML = '';
      filteredCommands.forEach(command => {
        const li = document.createElement('li');
        li.textContent = command;
        commandList.appendChild(li);
      });
    }

    // Render all commands initially
    renderCommands(Object.values(commands).flat());

    // Event listener for search box
    searchBox.addEventListener('input', () => {
      const searchTerm = searchBox.value.toLowerCase();
      const filteredCommands = Object.values(commands)
        .flat()
        .filter(command => command.toLowerCase().includes(searchTerm));
      renderCommands(filteredCommands);
    });
  })
  .catch(error => console.error('Error loading commands:', error));