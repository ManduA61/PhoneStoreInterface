function showMessage() {

    showAlert(message, className){

        const containerMesg = document.querySelector('.containerMsg');
        const form = document.querySelector('#addPhone');

        const div = document.createElement('div')

        div.className = `alert alert - ${className}`

        div.appendChild(document.createTextNode(message))

        containerMesg.insertBefore(div, form);

        // dispare dupa 1 secunda
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 2000);

    }

}
window.addEventListener('load', showMessage) 

showAlert("Please enter all fields", "divRed danger")
showAlert("Product Added", "divGreen success")
