console.log("hi")


const form = document.getElementById('form');
const loadingElement = document.querySelector('.loading');

loadingElement.style.display = 'none';
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content')
    debugger
    const mew = {
        name,
        content
    }
    console.log(mew);
    loadingElement.style.display = '';
    form.style.display = 'none';
})