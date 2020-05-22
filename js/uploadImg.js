function addImagesFunc() {

const form = document.querySelector('#form');
const showDiv = document.querySelector('#result');
const btnB = document.querySelector('#btnImg');

form.addEventListener('submit', function(event){
    event.preventDefault();

    let reader = new FileReader()
    let name = document.querySelector('#image').files[0].name

    reader.addEventListener('load', function(){
        if(this.result && localStorage) {
            window.localStorage.setItem(name, this.result);
            alert('Imaginea a fost stocata in  local Storage');
            showDiv.innerHTML = '';
            showImages();
        }
        else{
            alert('Mai incearca!');
        }
    });
    reader.readAsDataURL(document.querySelector('#image').files[0])

});

function showImages(){
    for(let i = 0; i < window.localStorage.length; i++){
        let res = window.localStorage.getItem(window.localStorage.key(i))
        let image = new Image()
        image.src = res;

        showDiv.appendChild(image);
    }
}

function deleteImg() {
    console.log('mege btn');
    window.localStorage.clear();
    showDiv.innerHTML = '';
}
btnB.addEventListener('click', deleteImg);

showImages()
}
window.addEventListener('load', addImagesFunc)
