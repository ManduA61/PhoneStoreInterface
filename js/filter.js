//filter
function addFilterFunctionalyty() {
    const filterPriceButton = document.querySelector('#filterPrice');
    const NotFilterButton = document.querySelector('#notFilter');


    function filterProducts() {
        const localStorageProducts = getProducts();

        const newLocalStorageProducts= localStorageProducts.filter(function (product) {
        return product.price >= 2000;
        });
        APP.renderProductList(newLocalStorageProducts);
    }

    filterPriceButton.addEventListener('click', filterProducts);
  

    function NotFilterProducts() {

        const localStorageProducts = getProducts();
        const newLocalStorageProducts = localStorageProducts.filter(function (product1) {
        return product1.price >= 0;
        });
        addProducts(newLocalStorageProducts);
        APP.renderProductList(newLocalStorageProducts);
    }
    NotFilterButton.addEventListener('click', NotFilterProducts)
}

window.addEventListener('load', addFilterFunctionalyty)
