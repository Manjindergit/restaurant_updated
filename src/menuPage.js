//write a module that create menu page and then export it

//create a menu page
const menuPage = () => {
    const content = document.getElementById('content');

    content.innerHTML = `
        <h1>Menu</h1>
        <ul>
            <li>
                <h2>Breakfast</h2>
                <p>Scrambled eggs, bacon, toast, and coffee</p>
            </li>
            <li>
                <h2>Lunch</h2>
                <p>Grilled cheese, tomato soup, and a side salad</p>
            </li>
            <li>
                <h2>Dinner</h2>
                <p>Steak, mashed potatoes, and green beans</p>
            </li>
        </ul>`
    };

    export default menuPage;