const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach(button=>{
    button.addEventListener('click',e=>{
        if(e.target.id ==='c-sliver'){
            body.style.backgroundColor = 'silver';
        }
        if(e.target.id ==='c-aquamarine'){
            body.style.backgroundColor = 'aquamarine';
        }
        if(e.target.id ==='c-white'){
            body.style.backgroundColor = 'white';
        }
        if(e.target.id ==='c-bisque'){
            body.style.backgroundColor = 'bisque';
        }
    });
});