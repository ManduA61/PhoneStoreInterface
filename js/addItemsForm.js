// aduagam in HTML formularul de adaugare produs
mainPage.innerHTML += `
<div class="addPhone">
    <p>Vrei să vinzi un ... <i class="fas fa-mobile"></i> adaugă chiar acum!</p>
    <form id="addPhone">
      <div class="cInput"><input type="text" name="phoneName" placeholder="Nume"></div>
      <div class="cInput"><input type="number" name="phonePrice" placeholder="Preț"></div>
      <div class="cInput"><input type="number" name="phoneYear" placeholder="An apariție"></div>
      <div class="cInput"><input type="text" name="phoneImg" placeholder="Link-ul imaginii"></div>
      <div><input type="submit" value="Adaugă Acum"></div>
    </form>
  </div>
`;
// <div>Agauga</div>

function addFormFunctionality() {
  const form = document.querySelector('#addPhone');

  // functia se va executa la submiterea formului
  form.onsubmit = function(event) {
    // trebuie sa prevenim reincarcare paginii, comportamentul default de la submit
    event.preventDefault();
    let d = new Date();
    // luam numele si pretul introduse de utilizator
    // const phoneId = event.target.phoneId.value;
    const phoneName = event.target.phoneName.value;
    const phonePrice = Number(event.target.phonePrice.value);
    const phoneYear = Number(event.target.phoneYear.value);
    const phoneDateAdd = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`;
    const phoneImg = event.target.phoneImg.value;
  
    // targetul este elementul de HTML care a declansat evenimentul (formularul)
    // creem un nou obiect si il introducem in vectorul de produse
    const newPhone = {
      // id: phoneId,
      nume: phoneName,
      price: phonePrice,
      year: phoneYear,
      dateAdd: phoneDateAdd,
      ph: phoneImg
    };
   
    // preluam produsele din localStorage
    const localStorageProducts = getProducts();

    localStorageProducts.push(newPhone);

     // adaugam vectorul in localStorage
     addProducts(localStorageProducts);

     // reafisam produsele, trb sa replicam functia de afisare pt s se observa modificarile
     APP.renderProductList(localStorageProducts);
     location.reload();
  }
  
}

// la momentul incarcarii fisierului addItemsForm.js
// inca nu stim cine e APP.renderProductList.
// asadar, inainte ca respectiv functie sa fie apelata,
// vrem sa incarcam celelalte fisiere
window.addEventListener('load', addFormFunctionality);