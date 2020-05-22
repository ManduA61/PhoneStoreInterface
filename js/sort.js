// functia de sortare
function addSortFunctionalyty() {
  const sortByPriceButtonUp = document.querySelector('#sortByPriceUp');
  const sortByPriceButtonDown = document.querySelector('#sortByPriceDown');
  const sortByYearButtonUp = document.querySelector('#sortByYearUp');
  const sortByYearButtonDown = document.querySelector('#sortByYearDown');
  const sortByRecentButton = document.querySelector('#sortByRecent');
  const sortByNameButtonUp = document.querySelector('#sortByNameUp');
  const sortByNameButtonDown = document.querySelector('#sortByNameDown');

  // sortare dupa pret
  function sortProducts0() {
    const localStorageProducts = getProducts();

    function compareFunction(product1, product2) {
      if (product1.price < product2.price){
        return -1;
      }
      if (product1.price > product2.price){
        return 1;
      }
    
      return 0;
    }
    localStorageProducts.sort(compareFunction)
    addProducts(localStorageProducts);
    APP.renderProductList(localStorageProducts);
  }
  sortByPriceButtonUp.addEventListener('click', sortProducts0);

  function sortProducts1() {
    const localStorageProducts = getProducts();

    function compareFunction(product1, product2) {
      if (product1.price > product2.price){
        return -1;
      }
      if (product1.price < product2.price){
        return 1;
      }
    
      return 0;
    }
    localStorageProducts.sort(compareFunction)
    addProducts(localStorageProducts);
    APP.renderProductList(localStorageProducts);
  }
  sortByPriceButtonDown.addEventListener('click', sortProducts1);

  // sortare dupa an
  function sortProducts2() {
    const localStorageProducts = getProducts();

    function compareFunction2(product1, product2) {
      if (product1.year > product2.year){
        return -1;
      }
      if (product1.year < product2.year){
        return 1;
      }
      return 0;
    }
    localStorageProducts.sort(compareFunction2)
    addProducts(localStorageProducts);
    APP.renderProductList(localStorageProducts);
  }
  sortByYearButtonUp.addEventListener('click', sortProducts2);

  function sortProducts3() {
    const localStorageProducts = getProducts();

    function compareFunction2(product1, product2) {
      if (product1.year < product2.year){
        return -1;
      }
      if (product1.year > product2.year){
        return 1;
      }
      return 0;
    }
    localStorageProducts.sort(compareFunction2)
    addProducts(localStorageProducts);
    APP.renderProductList(localStorageProducts);
  }
  sortByYearButtonDown.addEventListener('click', sortProducts3);

  // Sortare dupa data adaugare produs
  function sortProducts4() {
    const localStorageProducts = getProducts();

    function compareFunction3(product1, product2) {
      var c = new Date(product1.dateAdd);
      var d = new Date(product2.dateAdd);
      return d-c;
    }
    localStorageProducts.sort(compareFunction3)
    addProducts(localStorageProducts);
    APP.renderProductList(localStorageProducts);
  }
  sortByRecentButton.addEventListener('click', sortProducts4);  

  // Sortare dupa nume
  function sortProducts5() {
    const localStorageProducts = getProducts();

    localStorageProducts.sort(function(product1, product2) {
      var nameA = product1.nume.toUpperCase(); // ignore upper and lowercase
      var nameB = product2.nume.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    addProducts(localStorageProducts);
    APP.renderProductList(localStorageProducts);
}
sortByNameButtonUp.addEventListener('click', sortProducts5);

  function sortProducts6() {
    const localStorageProducts = getProducts();

    localStorageProducts.sort(function(product1, product2) {
      var nameA = product1.nume.toUpperCase(); // ignore upper and lowercase
      var nameB = product2.nume.toUpperCase(); // ignore upper and lowercase
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    });
    addProducts(localStorageProducts);
    APP.renderProductList(localStorageProducts);
}
sortByNameButtonDown.addEventListener('click', sortProducts6);

}

window.addEventListener('load', addSortFunctionalyty)