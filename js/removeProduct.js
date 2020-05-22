// remove Product
function removeProductFunctionalyty() {
    const removeButton = document.querySelector('#btnDelete');

    localStorage.setItem('acadele', 'bune');
    localStorage.setItem('bomboane', 'mari');

    function removeItem() {

        // localStorage.removeItem("products");
        console.log('mergee deleteleee');
        
        localStorage.removeItem("acadele");
    }
removeButton.addEventListener('click', removeItem);
}

window.addEventListener('load', removeProductFunctionalyty)