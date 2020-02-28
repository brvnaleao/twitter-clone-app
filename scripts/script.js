console.log("hi")


const form = document.getElementById('form');
const loadingElement = document.querySelector('.loading');
const API_URL = 'http://localhost.com:5000/meows'
loadingElement.style.display = 'none';
form.addEventListener('submit', async (e) =>{
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content')
    
    const mew = {
        name,
        content
    }
    
    loadingElement.style.display = '';
    form.style.display = 'none';

     await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(mew),
        headers: {
            'content-type': 'aplication/json'
        }
    })
})