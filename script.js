document.addEventListener('DOMContentLoaded', function() {
    const partyForm = document.getElementById('partyForm');
    const partyList = document.getElementById('partyList');
    const parties = [];
  
    function renderPartyList() {
      partyList.innerHTML = '';
      parties.forEach(party => {
        const partyElement = document.createElement('div');
        partyElement.classList.add('party');
  
        partyElement.innerHTML = `
          <h2>${party.name}</h2>
          <p><strong>Date:</strong> ${party.date}</p>
          <p><strong>Time:</strong> ${party.date}</p>
          <p><strong>Location:</strong> ${party.location}</p>
          <p><strong>Description:</strong> ${party.description}</p>
          <button class="deleteParty" data-id="${party.id}">Delete</button>
        `;
  
        partyList.appendChild(partyElement);
      });
    }
  
    partyForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const description = document.getElementById('description').value;
      const date = document.getElementById('date').value;
      const location = document.getElementById('location').value;
  
      const id = parties.length + 1;
      const newParty = { id, name, description, date, location };
      parties.push(newParty);
  
      renderPartyList();
      partyForm.reset();
    });
  
    partyList.addEventListener('click', function(event) {
      if (event.target.classList.contains('deleteParty')) {
        const partyId = parseInt(event.target.dataset.id);
        const index = parties.findIndex(party => party.id === partyId);
  
        if (index !== -1) {
          parties.splice(index, 1);
          renderPartyList();
        }
      }
    });
  });
  