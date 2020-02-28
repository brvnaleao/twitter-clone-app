console.log("hi")

const form = document.getElementById('form');
const loadingElement = document.querySelector('.loading');
const API_URL = 'http://localhost:1231/test'
loadingElement.style.display = 'none';
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content')
    
    const mew = {
        name,
        content
    }
    console.log(mew)
    fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(mew),
        headers: {
            'content-type': 'application/json'
        }
    })
    loadingElement.style.display = '';
    form.style.display = 'none';


})