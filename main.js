document.body.style.textAlign = 'center';

names = ['Omar','Muhammad','youssef','hesham','Marwan','Muhammad','youssef','hesham','Marwan','Muhammad','youssef','hesham','Marwan']
agees = ['24','18','25','33','25','18','25','33','25','18','25','33','25']

function creatElement(n,g) {
    // element
  let parent = document.createElement("div");
  let name = document.createElement("h1");
  let age = document.createElement("h2");
  let img = document.createElement("img");
    img.style.width = '100%';


    // content
    let title = document.createTextNode(n);
    let ages = document.createTextNode(g);
    img.src = "assets/img/1.jpg";


    name.appendChild(title);
    age.appendChild(ages);



    // style
    parent.style.textAlign = 'center'
    parent.style.width = '23%'
    parent.style.backgroundColor = '#1b263b'
    parent.style.color = '#fff'
    parent.style.overflow = 'hidden'
    parent.style.paddingTop = '10px'
    parent.style.margin = '5px'
    parent.style.display = 'inline-block'
    parent.style.borderRadius = '25px'


    parent.appendChild(name);
    parent.appendChild(age);
    parent.appendChild(img);


  document.body.appendChild(parent);
}

for(let i = 0 ; i< names.length ; i++){
    creatElement(names[i],agees[i]);
}
