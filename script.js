let section1 = document.createElement('section1');
section1.setAttribute('id', 'section1');
document.body.appendChild(section1);

let section2 = document.createElement('section2');
section2.setAttribute('id', 'section2');
document.body.appendChild(section2);

let header = document.createElement('header');
header.textContent = "My Favorite Motorcycle";
document.getElementById('section1').appendChild(header);

let image = document.createElement('img');
image.setAttribute("src", "https://i.pinimg.com/564x/5f/90/35/5f9035783566622c6b878a152f3d6b21.jpg");
document.getElementById('section1').appendChild(image);

let header2 = document.createElement('header2');
header2.textContent = "Cross Country";
document.getElementById('section2').appendChild(header2);

let blockquote = document.createElement('blockquote');
blockquote.textContent = "New for 2010, the Victory Cross Country Motorcycle is a hard-bagger cruiser with a handlebar mounted fairing. It has a Freedom V-Twin Engine, 21 gallons of cargo capacity, 4.7 inches of suspension travel, floorboards, cruise control and an MP3-compatible sound system.";
document.getElementById('section2').appendChild(blockquote);

let header3 = document.createElement('header3');
header3.textContent = "Specs";
document.getElementById('section2').appendChild(header3);

let ul = document.createElement('ul');
ul.setAttribute('id', 'ul');
document.getElementById('section2').appendChild(ul);

let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
let li4 = document.createElement('li');
let li5 = document.createElement('li');
let li6 = document.createElement('li');
let li7 = document.createElement('li');
li1.innerHTML = "106 cu in (1,740 cc) engine produces 92 hp (69 kW) and 109 lb⋅ft (148 N⋅m) torque";
li2.innerHTML = "Engine: four-stroke 50° V-Twin";
li3.innerHTML = "Fuel capacity: 5.8 US gal (22 l; 4.8 imp gal)";
li4.innerHTML = "Fuel System: Electronic Fuel Injection with dual 45 mm throttle body";
li5.innerHTML = "Primary Drive: Gear drive with torque compensator";
li6.innerHTML = "Transmission: six-speed constant mesh";
li7.innerHTML = "Final Drive: Carbon Fiber Reinforced Belt";
document.getElementById('ul').appendChild(li1);
document.getElementById('ul').appendChild(li2);
document.getElementById('ul').appendChild(li3);
document.getElementById('ul').appendChild(li4);
document.getElementById('ul').appendChild(li5);
document.getElementById('ul').appendChild(li6);
document.getElementById('ul').appendChild(li7);    

let section3 = document.createElement('section3');
section3.setAttribute('id', 'section3');
document.body.appendChild(section3);

let header4 = document.createElement('header4');
header4.textContent = "Why is this my Favorite Motorcycle";
document.getElementById('section2').appendChild(header4);

let ul2 = document.createElement('ul2');
ul2.setAttribute('id', 'ul2');
document.getElementById('section3').appendChild(ul2);

let li8 = document.createElement('li');
let li9 = document.createElement('li');
let li10 = document.createElement('li');
let li11 = document.createElement('li');
li8.innerHTML = "Full fairing so it blocks the wind and you have music."
li9.innerHTML = "It is the lowest motorcycle in it's class and at 5'5 I need the seat to be low."
li10.innerHTMP = "In 2014 it had the largest stock motor."
li11.innerHTML = "I own one!"
document.getElementById('ul2').appendChild(li8);
document.getElementById('ul2').appendChild(li9);
document.getElementById('ul2').appendChild(li10);
document.getElementById('ul2').appendChild(li11);

let anchor = document.createElement('a');
anchor.setAttribute('href', 'https://en.wikipedia.org/wiki/Victory_Motorcycles');
anchor.textContent = "Click here for more information";
document.getElementById('section3').appendChild(anchor);

