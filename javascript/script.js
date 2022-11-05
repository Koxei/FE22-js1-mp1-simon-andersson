/* SKAPAR ELEMENT TILL HTML */
const body = document.body;
const ul = document.createElement('ul');
const container = document.createElement('div');
let box1 = document.createElement('ul');
let box2 = document.createElement('ul');
let box3 = document.createElement('ul');



/* MODIFIERAR ELEMENTEN */
body.append(ul);
body.append(container);

container.append(box1);
container.append(box2);
container.append(box3);
container.setAttribute('id', 'container');
container.style.display = "flex";
container.style.justifyContent = "space-around";
container.style.padding = "2rem";
container.style.border = "1px solid black";

ul.setAttribute('id', 'list');
ul.style.textAlign = "center";
ul.style.listStyleType = "none";
ul.style.padding = "0";

box1.setAttribute("class", "box");
box2.setAttribute("class", "box");
box3.setAttribute("class", "box");
box1.style.listStyleType = "none";
box2.style.listStyleType = "none";
box3.style.listStyleType = "none";
box1.style.padding = "0.5rem";
box2.style.padding = "0.5rem";
box3.style.padding = "0.5rem";
box1.style.backgroundColor = "rgb(182, 182, 240)";
box2.style.backgroundColor = "rgb(182, 182, 240)";
box3.style.backgroundColor = "rgb(182, 182, 240)";
box2.style.textOrientation = "upright";
box2.style.color = "red";


/* FÖRSTA RADEN*/
let colors = ["rgb(182, 251, 182)", "rgb(182, 251, 205)", "rgb(182, 251, 238)", "rgb(182, 251, 251)", "rgb(182, 228, 251)"];
for (let i = 1; i < 6; i++){
    let li = document.createElement('li');
    li.setAttribute('class', 'rad');
    li.innerText = "Rad " + i;
    document.querySelector('#list').append(li);
    li.style.fontSize = ""+i+"rem";
    li.style.backgroundColor = ""+colors[i-1]+""
    li.style.marginBottom = ""+i+"rem";
    li.style.color = "rgb(110, 110, 247";
    li.style.fontWeight = "bold";
}



/* ANDRA RADEN */
let nummer = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];
/* BOX 1 */
for (let i = 0; i < 10; i++){
    let li = document.createElement('li');
    li.innerText = i;
    document.querySelectorAll(".box")[0].append(li);
    li.style.padding = "0 2rem 0 0";
    
    li.style.textAlign = "left";
    if (i%2 == 0){
        if (i == 4) {
            li.style.backgroundColor = "inherit";
            li.style.color = "white";
        } else {
            li.style.backgroundColor = "black";
            li.style.color = "white";
        }
    } else {
        li.style.backgroundColor = "white";
        li.style.color = "black";
    }
}
/* BOX 2 */
for (let i = 9; i >=0; i--){
    let li = document.createElement('li');
    li.innerText = i;
    document.querySelectorAll(".box")[1].append(li);
    li.style.padding = "0 1rem 0 1rem";
    li.style.backgroundColor = "blue";
    li.style.textAlign = "center";
    if (i%2 == 0){
        if (i == 8) {
            li.style.backgroundColor = "inherit";
            li.style.color = "white";
        } else {
            li.style.backgroundColor = "black";
            li.style.color = "white";
        }
    } else {
        li.style.backgroundColor = "white";
        li.style.color = "black";
    }
}
/* BOX 3 */
for (let i = 0; i < nummer.length; i++){
    let li = document.createElement('li');
    li.innerText = nummer[i];
    document.querySelectorAll(".box")[2].append(li);
    li.style.padding = "0 0 0 1rem";
    li.style.textAlign = "right";
    if (i%2 == 1){
        if (i == 5) {
            li.style.backgroundColor = "inherit";
            li.style.color = "black";
        } else {
            li.style.backgroundColor = "white";
            li.style.color = "black";
        }
    } else {
        li.style.backgroundColor = "black";
        li.style.color = "white";
    }
}



