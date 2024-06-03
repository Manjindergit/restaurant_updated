const componentModule = () => {
  const contentDiv = document.getElementById("content");

  //add a div to contentDiv that would display the home page

  contentDiv.innerHTML = `  <h1>Welcome to the Restaurant</h1>
                            <p>Our restaurant is the best in town, come and enjoy our delicious food</p>`;
};

export default componentModule;
