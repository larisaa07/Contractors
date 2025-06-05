//testimonials page
//function to change text to Testimonial 1
function testOne(){
    document.getElementById('date').innerText= '"' + 'I have worked with A Plus Quality Contractors since 2001. They are able to handle both small and large projects. They have done wood and metal framing on our commercial projects, custom houses, exterior and interior trim work and kitchen cabinet installations. We are highly satisfied with the quality of their work as the work is done accurately and on schedule. I highly recommend them in all areas of framing projects.' + '"'
}

//function to change text to Testimonial 2
function testTwo(){
    document.getElementById('date').innerText= '"' + 'Mr. Armen Avetisyan of A Plus Quality Contractors has worked for our company for approximately 18 months and will continue to frame for Charles B Hembling & Son. He is reliable, his workmanship is good. He cleans up after himself and knows how to communicate with my staff and Owners.' + '"'
}

//function to change text to Testimonial 3
function testThree(){
    document.getElementById('date').innerText= '"' + 'We’ve had the pleasure of working with Mr. Avetisyan on several projects. He consistently delivers quality work, stays on schedule, and maintains a clean job site. His professionalism and clear communication make him a valuable part of any construction team.' + '"'
}

//function to change text to Testimonial 4
function testFour(){
    document.getElementById('date').innerText= '"' + 'Armen and his crew at A Plus Quality Contractors are dependable and skilled. Their attention to detail and ability to adapt to changing site needs have made our projects run smoothly. We look forward to continuing our partnership.' + '"'
}

//function to change text to Testimonial 5
function testFive(){
    document.getElementById('date').innerText= '"' + 'A Plus Quality Contractors has been a great asset to our builds. Armen’s framing work is solid, accurate, and completed on time. He coordinates well with other trades and always keeps a tidy work area.' + '"'
}

//function to change text to Testimonial 6
function testSix(){
    document.getElementById('date').innerText= '"' + 'I’ve worked with Armen on multiple home builds and renovations. His craftsmanship is excellent, and he takes pride in every aspect of the job. He’s easy to work with and communicates clearly with both staff and clients.' + '"'
}


//contact age
document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});
