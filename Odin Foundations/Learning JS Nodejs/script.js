// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


// red <p>
const p = document.createElement("p");
p.style.color = "red";
p.textContent = "Hey I'm red!";
container.appendChild(p);

// blue <h3>
const h3 = document.createElement("h3");
h3.style.color = 'blue';
h3.textContent = "Hey I'm blue!";
container.appendChild(h3);

// <div>
const div = document.createElement("div");
div.style.border = "black";
div.style.background = "pink";
container.appendChild(div);

const h1 = document.createElement("h1");
h1.textContent = "I'm a div!"
div.appendChild(h1);

const p1 = document.createElement("p");
p1.textContent = "Me too!";
div.appendChild(p1);

const btn = document.querySelectorAll("button");

btn.forEach((button) => {
    button.addEventListener('click',() => {
        alert(button.id);
    })
}) 

