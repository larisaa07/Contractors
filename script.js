//galleryPg
const vue_app = Vue.createApp({
    created() {
      // Fetch the images.json file and update the 'images' array
      fetch("images.json")
        .then((response) => response.json())
        .then((json) => {
          this.images = json; // Set the response to the images array
        })
        .catch((error) => console.error("Error loading images:", error));
    },
    data() {
      return {
        images: [] // Declare the images data array
      };
    }
  });
  
  vue_app.mount("#vue_app");

//testimonial page
const teamMembers = [
  {
      name: 'Zeus',
      comment: 'what they said'
  },
  {
      name: 'Zeus',
      comment: 'what they said'
  },
  {
    name: 'Zeus',
    comment: 'what they said'
  },
  {
    name: 'Zeus',
    comment: 'what they said'
  },
  {
    name: 'Zeus',
    comment: 'what they said'
  },
  {
    name: 'Zeus',
    comment: 'what they said'
  },
  {
    name: 'Zeus',
    comment: 'what they said'
  },
  {
    name: 'Zeus',
    comment: 'what they said'
  },
  {
    name: 'Zeus',
    comment: 'what they said'
  },
  {
    name: 'Zeus',
    comment: 'what they said'
  },
  {
    name: 'Zeus',
    comment: 'what they said'
  },
  {
    name: 'Zeus',
    comment: 'what they said'
  }
]

function generateTeamCards(){
  const teamCardsContainer = document.getElementById('teamCards');

  teamMembers.forEach(member => {
      const card = document.createElement('div')
      card.classList.add('col-md-4')

       //Create a list of titleDomain with <li> tags
  const titleDomainList = member.titleDomain
  .map(titleDomain => `<li> ${titleDomain} </li>`).join('')

      //Create a list of symbols with <li> tags
  const symbolsList = member.symbols
  .map(symbols => `<li> ${symbols} </li>`).join('')

      card.innerHTML=`
          <div class="card">
              <div   class = "card-header">
                  ${member.name}
              </div>
              <div class="card-body" style = "background-color:${backgroundColor};">
                  <p><strong>Comments:</strong> ${member.comment}</p>
              </div>
          </div>
      `

          
  teamCardsContainer.appendChild(card)
  });
}

window.onload = generateTeamCards()