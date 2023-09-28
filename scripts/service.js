const navToggle = document.getElementById('menu_toggle');
const navToggler = document.getElementById('hamclose');

navToggle.addEventListener('click', function () {
  const navBar = document.querySelector('.navbar');
  navBar.classList.toggle('nav-bar-active');
  
  if (navToggler.textContent == '≡') {
    navToggler.textContent = 'x';
  } else if (navToggler.textContent = 'x') {
  navToggler.textContent = '≡';
}

})


// button display for desktop
const industrialCleaning = document.getElementById('btn_industrial_cleaning')
const houseCleaning = document.getElementById('btn_house_cleaning');
const cooking = document.getElementById('btn_cooking');
const fumigation = document.getElementById('btn_fumigation');
const wasteManagement = document.getElementById('btn_Waste_management');


// desktop overview of the services rendered starts here
industrialCleaning.addEventListener('click', function () {
  const content = document.getElementById('service-content-view');
  content.innerHTML = '';


  const html = `<div class="service-cartoon-content">

     <div class="service-cartoon-image">
                  <img src="./images/cartoon-industrial-cleaning.jpg" alt=industrial.jpg>
                </div>  
      
       <div class="service-cartoon-p">
                <span class="service-cartoon-header">Industrial Cleaning Service</span>
             <p>Our team of experts is equipped with cutting-edge technology and extensive experience to tackle the toughest industrial cleaning challenges. We're committed to providing excellence in every corner, ensuring your industrial 
                facilities are not only clean but also safe and efficient. Experience the Resswell difference in industrial cleaning today.</p>
            </div>
               
 </div>`
  
 content.scrollIntoView({ behavior: 'smooth'});
  content.innerHTML = html;

});

houseCleaning.addEventListener('click', function () {
  const content = document.getElementById('service-content-view');
  content.innerHTML = '';


  const html = ` <div class="service-cartoon-content">
        <div class="service-cartoon-p">
                 <span class="service-cartoon-header">House Cleaning Service</span>

            <p>            
            We understand that your home is your sanctuary, and we treat it with the utmost care and respect. From top to bottom, we'll thoroughly clean every nook and cranny, leaving your home spotless and inviting.
            Our services are tailored to your specific needs. Whether it's a one-time deep clean, regular maintenance, or specialized cleaning tasks, we've got you covered. We use eco-friendly cleaning products to ensure the safety of your family and pets.          
            </p>
        </div>
        
        
        <div class="service-cartoon-image">
            <img src="./images/cleaning-cartoon.jpg" alt="">
            
        </div>        
        
    </div>`
  
    content.scrollIntoView({ behavior: 'smooth'});
  content.innerHTML = html;

});

cooking.addEventListener('click', function () {
  const content = document.getElementById('service-content-view');
  content.innerHTML = '';


  const html = `  <div class="service-cartoon-content">

                <div class="service-cartoon-image">
                  <img src="./images/cooking-cartoon.jpg" alt="">

                </div>

            <div class="service-cartoon-p">
                <span class="service-cartoon-header">Home Meal Preparation</span>
                <p>
                    Experience the delightful taste of home-cooked meals, customized just for you by Resswell's Home Cooking Services. Our culinary experts craft menus that cater to your preferences, ensuring every dish is a reflection of your unique taste.
                    With a focus on quality and freshness, we use the finest ingredients to prepare your meals. Whether you're longing for comforting classics that remind you of home or seeking healthier dining options, our diverse menu has something for everyone.
                    Say goodbye to the hassle of grocery shopping, meal prep, and cooking.
                </p>
            </div>
        </div>`
  
        content.scrollIntoView({ behavior: 'smooth'});
  content.innerHTML = html;



});


fumigation.addEventListener('click', function () {
  const content = document.getElementById('service-content-view');
  content.innerHTML = '';


  const html = `  <div class="service-cartoon-content">

       <div class="service-cartoon-p">
                <span class="service-cartoon-header">Fumigation and Pest Control</span>
             <p>Pests can pose serious health risks and damage to property, making professional fumigation essential. Our expert team is well-equipped to handle various pest infestations, from common household pests to more stubborn invaders.
                We use safe and effective fumigation techniques to eliminate pests while ensuring the safety of your loved ones or employees. Our approach is thorough, targeting the root of the problem to prevent future infestations.
            </p>
            </div>
                <div class="service-cartoon-image">
                  <img src="./images/fumigation.jpg" alt="fumigation">
                </div>
        </div>`
  
        content.scrollIntoView({ behavior: 'smooth'});
  content.innerHTML = html;



});

wasteManagement.addEventListener('click', function () {
  const content = document.getElementById('service-content-view');
  content.innerHTML = '';


  const html = ` <div class="service-cartoon-content">

       <div class="service-cartoon-p">
                <span class="service-cartoon-header">Waste Management</span>
             <p>Resswell takes pride in offering efficient waste management solutions that prioritize sustainability and environmental responsibility. Our waste management services are designed to keep your surroundings clean, healthy, and free from waste-related issues. With a commitment to excellence, we manage waste collection, recycling, and disposal with precision, ensuring a cleaner and greener environment for everyone. Choose Resswell for a more sustainable and waste-free tomorrow.</p>
            </div>
                <div class="service-cartoon-image">
                  <img src="./images/cartoon-waste-management.jpg" alt="fumigation">
                </div>
        </div>`
  
        content.scrollIntoView({ behavior: 'smooth'});
        content.innerHTML = html;
  


});
// desktop overview of the services rendered ends here.



