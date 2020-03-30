
// get the references to interactive HTML elements
const ctrlBtns = document.querySelectorAll('.controls button');
// const cntnr = document.querySelector('.container');
let btnsArray = [
    ctrlBtns[0],
    ctrlBtns[1],
    ctrlBtns[2]
];
const cntnr1 = document.querySelector('.box1');
const cntnr2 = document.querySelector('.box2');
const cntnr3 = document.querySelector('.box3');

// create array that will store the data
let pages = [
    {
        heading: "Solar System for you",
        bodyText: "The Solar System formed 4.6 billion years ago from the gravitational collapse of a giant interstellar molecular cloud. The vast majority of the system's mass is in the Sun, with the majority of the remaining mass contained in Jupiter. The four smaller inner planets, Mercury, Venus, Earth and Mars, are terrestrial planets, being primarily composed of rock and metal. The four outer planets are giant planets, being substantially more massive than the terrestrials. The two largest, Jupiter and Saturn, are gas giants, being composed mainly of hydrogen and helium; the two outermost planets, Uranus and Neptune, are ice giants, being composed mostly of substances with relatively high melting points compared with hydrogen and helium, called volatiles, such as water, ammonia and methane. All eight planets have almost circular orbits that lie within a nearly flat disc called the ecliptic.",
        altt: "solar image",
        thumb: "./images/solar.jpg"
    },
    {
        heading: "Water is Power",
        bodyText: "Hydropower or water power (from Greek: ὕδωρ, 'water') is power derived from the energy of falling or fast-running water, which may be harnessed for useful purposes. Since ancient times, hydropower from many kinds of watermills has been used as a renewable energy source for irrigation and the operation of various mechanical devices, such as gristmills, sawmills, textile mills, trip hammers, dock cranes, domestic lifts, and ore mills. A trompe, which produces compressed air from falling water, is sometimes used to power other machinery at a distance",
        altt: "water image",
        thumb: "./images/water.jpg"
    },
    {
        heading: "Wind is Treasure",
        bodyText: "Wind farms consist of many individual wind turbines, which are connected to the electric power transmission network. Onshore wind is an inexpensive source of electric power, competitive with or in many places cheaper than coal or gas plants.[2][3][4][5] Onshore wind farms also have an impact on the landscape, as typically they need to be spread over more land than other power stations[6][7] and need to be built in wild and rural areas, which can lead to industrialization of the countryside and habitat loss. Offshore wind is steadier and stronger than on land and offshore farms have less visual impact, but construction and maintenance costs are higher. Small onshore wind farms can feed some energy into the grid or provide electric power to isolated off-grid locations.",
        altt: "Wind Image",
        thumb: "./images/wind.jpg"
    }
];


// create function that handles click-event
function  clickBtn(ev) {
    
    // Brightspsce Ref: Week 6
    let clickedButton = ev.target;
    
    // MDN Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    let index = btnsArray.indexOf(clickedButton);
    
    // MDN Ref: https://developer.mozilla.org/en-US/docs/Web/API/Element
    
    // handle moving id-active to the currently clicked button 

        // remove currently present id="active"
        for (let i = 0; i<ctrlBtns.length; i++){
            // claiming that current element in the loop containe attribute
            if(ctrlBtns[i].id){
                // MDN ref: https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
                ctrlBtns[i].removeAttribute('id');
            }  
        }

        // assign id="active" to the currently clicked button
        clickedButton.id='active';    
    
    // load the corresponding data into <div class="container"></div>
    cntnr1.innerHTML = `
        <h2>${pages[index].heading}</h2>
        `;
    cntnr2.innerHTML = `
        <img src="${pages[index].thumb}" alt="${pages[index].altt}">
    `;
    cntnr3.innerHTML = `
        <p>${pages[index].bodyText}</p>
    `;
}

function myFunction() {
  cntnr1.innerHTML = `
        <h2>${pages[0].heading}</h2>
        `;
    cntnr2.innerHTML = `
        <img src="./images/solar.jpg" alt="Solar image">
    `;
    cntnr3.innerHTML = `
        <p>${pages[0].bodyText}</p>
    `;
}
// register your buttons for click event
for(let i = 0; i<ctrlBtns.length; i++){ 
    ctrlBtns[i].addEventListener('click', clickBtn);  
}