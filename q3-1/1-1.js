let divMidd = document.createElement('div');
let paragraph2 = document.createElement('p');
paragraph2.innerText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime id quibusdam nihil, quasi vel molestiae error, quidem rem nesciunt suscipit ducimus harum impedit voluptas inventore? Incidunt ipsum porro esse suscipit.';
divMidd.appendChild(paragraph2);

let divParent = document.createElement('div');
let paragraph1 = document.createElement('h1');
paragraph1.innerText = 'light mode';
divParent.appendChild(paragraph1);
divParent.appendChild(divMidd);
document.body.appendChild(divParent);

//div parent css
divParent.style.backgroundColor = 'gray';
divParent.style.width = '650px';
divParent.style.height = '350px';

//js
let copyParent = document.querySelector('#btn1');
copyParent.onclick = function () {
 divParent.style.backgroundColor = 'black';
 divParent.style.color = 'white';

}

let copyChild = document.querySelector('#btn2');
copyChild.onclick = function () {
    divParent.style.backgroundColor = 'gray';
    divParent.style.color = 'black';1
}
