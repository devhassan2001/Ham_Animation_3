// * get the container div (div with id ham_3)
const hamContainer = document.querySelector('#ham_3');

// * get the data from the classes names
const data = [];

data.push(hamContainer.getAttribute('data-bars_thickness'));
data.push(hamContainer.getAttribute('data-speed'));
data.push(hamContainer.getAttribute('data-middle_bar_color'));
data.push(hamContainer.getAttribute('data-top_down_bars_color'));


// * create the hamburger icon bars
const mainBar = document.createElement('div');

// * set the classes of the main bar
mainBar.classList.add('mainBar');

// * set the user data change
const root = document.querySelector(':root'); 
root.style.setProperty("--bars-height", `${data[0]}px`);
root.style.setProperty("--transition", `all ${data[1]}s ease-in-out`);
root.style.setProperty("--mainBar-backgroundColor", `${data[2]}`);
root.style.setProperty("--pseudo-backgroundColor", `${data[3]}`);


// * add elements to the DOM
hamContainer.appendChild(mainBar);


// * start the animation
let start = true;
hamContainer.addEventListener('click', () => {
    if(start) {
        hamContainer.classList.add('resetPosition');
        setTimeout(() => {
            hamContainer.classList.add('rotate'); 
            setTimeout(() => {
                hamContainer.classList.add('rotateMore');                
            }, data[1] * 1000);           
        }, data[1] * 1000);
        start = false;
    } else {
        hamContainer.classList.remove('rotateMore');
        setTimeout(() => {
            hamContainer.classList.remove('rotate'); 
            setTimeout(() => {
                hamContainer.classList.remove('resetPosition');                
            }, data[1] * 1000);           
        }, data[1] * 1000);
        start = true;
    }
})