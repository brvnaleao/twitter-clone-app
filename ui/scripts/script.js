const form = document.getElementById('form');
const loadingElement = document.querySelector('.loading');
const mewsElement = document.querySelector('.mews');
const API_URL = 'http://localhost:1231/mews'

loadingElement.style.display = '';

listAllMews()

form.addEventListener('submit', (e) =>{
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
    
   
    fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(mew),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(createdMew => {

            console.log(createdMew)
            form.reset()
            loadingElement.style.display = 'none'
            form.style.display = ''
    })
})

function listAllMews(){

    fetch(API_URL,{
        method: "GET",
    }).then(res => res.json()).then(mews => {

        loadingElement.style.display = 'none';
        mews.forEach(mew => {
            console.log(mews)
            const div = document.createElement('div')
            const header = document.createElement('h3')
            header.textContent = mew.name
            const date = document.createElement('h6')
            date.textContent = mew.created

            const content = document.createElement('p')
            content.textContent = mew.content
            div.appendChild(header)
            div.appendChild(content)
            div.appendChild(date)
            mewsElement.appendChild(div)

        
        });
        
        
    
    })
}