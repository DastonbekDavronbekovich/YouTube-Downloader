const url = document.querySelector('.url')
const btn = document.querySelector('.btn')

btn.addEventListener('click' , function(){
    sendURL(url.value);
})

function sendURL(URL){
    window.location.href = `http://localhost:4000/download?URL=${URL}`;
}