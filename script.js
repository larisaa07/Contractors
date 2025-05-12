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

//testimonials page
//function to change text to Testimonial 1
function testOne(){
    document.getElementById('date').innerText= '"' + 'Testimonial 1' + '"'
}

//function to change text to Testimonial 2
function testTwo(){
    document.getElementById('date').innerText= '"' + 'Testimonial 2' + '"'
}

//function to change text to Testimonial 3
function testThree(){
    document.getElementById('date').innerText= '"' + 'Testimonial 3' + '"'
}

//function to change text to Testimonial 4
function testFour(){
    document.getElementById('date').innerText= '"' + 'Testimonial 4' + '"'
}

//function to change text to Testimonial 5
function testFive(){
    document.getElementById('date').innerText= '"' + 'Testimonial 5' + '"'
}

//function to change text to Testimonial 6
function testSix(){
    document.getElementById('date').innerText= '"' + 'Testimonial 6' + '"'
}


//contact age
document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});
