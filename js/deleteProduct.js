//delete
function deleteFunctionalyty() {
    const deleteButton1 = document.querySelector('#btnDelete1');
    const deleteButton2 = document.querySelector('#btnDelete2');
    const deleteButton3 = document.querySelector('#btnDelete3');


    function deleteProducts1() {
        console.log('Merge BTN-ul 1');
        const localStorageProducts = getProducts();

        const newLocalStorageProducts= localStorageProducts.filter(item => item.id != 1);
       
        addProducts(newLocalStorageProducts);
        APP.renderProductList(newLocalStorageProducts);
        location.reload();
    }
    deleteButton1.addEventListener('click', deleteProducts1);

    function deleteProducts2() {
        console.log('Merge BTN-ul 2');
        const localStorageProducts = getProducts();

        const newLocalStorageProducts= localStorageProducts.filter(function (product) {
    
        return product.id != '2';
        });
        
        addProducts(newLocalStorageProducts);
        APP.renderProductList(newLocalStorageProducts);
        location.reload();
    }
    deleteButton2.addEventListener('click', deleteProducts2);

    function deleteProducts3() {
        console.log('Merge BTN-ul 3');
        const localStorageProducts = getProducts();

        const newLocalStorageProducts= localStorageProducts.filter(function (product) {
    
        return product.id != '3';
        });
        
        addProducts(newLocalStorageProducts);
        APP.renderProductList(newLocalStorageProducts);
        location.reload();
    }
    deleteButton3.addEventListener('click', deleteProducts3);
}

window.addEventListener('load', deleteFunctionalyty)
