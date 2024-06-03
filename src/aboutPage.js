const aboutPage = () => {
   //get the contetn div with class name content
    const contentDiv = document.getElementById("content");
  
    //add a div to contentDiv that would display the home page
  
    contentDiv.innerHTML = ` 
    <div class="about">

    <h1>About Us</h1>
    <p>Our restaurant is a family owned business that has been in operation for over 20 years. We are located in the heart of the city and we offer a wide variety of dishes that are sure to satisfy your taste buds. Our chefs are highly skilled and have years of experience in the culinary industry. We take pride in using only the freshest ingredients in our dishes and we strive to provide our customers with the best dining experience possible. Our restaurant is the perfect place to enjoy a delicious meal with your family and friends. We look forward to serving you soon!</p>
    </div>
    
    `;
  };
  
  export default aboutPage;
  