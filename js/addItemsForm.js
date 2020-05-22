// aduagam in HTML formularul de adaugare produs
mainPage.innerHTML += `
<div class="addPhone">
    <p>Vrei să vinzi un ... <i class="fas fa-mobile"></i> adaugă chiar acum!</p>
    <form id="addPhone">
      <div class="cInput">Nume : <input type="text" name="phoneName" placeholder="Nume"></div>
      <div class="cInput">Preț : <input type="number" name="phonePrice"></div>
      <div class="cInput">An apariție : <input type="number" name="phoneYear"></div>
      <div class="cInput">Imagine : <input type="file" id="image" placeholder="Adaugă o imagne"></div>
      <div><input type="submit" value="Adaugă Acum"></div>
    </form>
  </div>
`;
// <div>Agauga</div>

function addFormFunctionality() {
  const form = document.querySelector('#addPhone');
  const showDiv = document.querySelector('#result');

  // functia se va executa la submiterea formului
  form.onsubmit = function(event) {
    // trebuie sa prevenim reincarcare paginii, comportamentul default de la submit
    event.preventDefault();
    let d = new Date();

    let reader = new FileReader();
    let name = document.querySelector('#image').files[0].name

    reader.addEventListener('load', function(){
        if(this.result && localStorage) {
            window.localStorage.setItem(name, this.result);
            showDiv.innerHTML = '';
            showImages();
        }
        else{
            alert('Mai incearca!');
        }
    });
    // luam numele si pretul introduse de utilizator
    const phoneName = event.target.phoneName.value;
    const phonePrice = Number(event.target.phonePrice.value);
    const phoneYear = Number(event.target.phoneYear.value);
    const phoneDateAdd = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`;
  
    // targetul este elementul de HTML care a declansat evenimentul (formularul)
    // creem un nou obiect si il introducem in vectorul de produse
    const newPhone = {
      nume: phoneName,
      price: phonePrice,
      year: phoneYear,
      dateAdd: phoneDateAdd
    };
   
    // preluam produsele din localStorage
    const localStorageProducts = getProducts();

    localStorageProducts.push(newPhone);

     // adaugam vectorul in localStorage
     addProducts(localStorageProducts);

     // reafisam produsele, trb sa replicam functia de afisare pt s se observa modificarile
     APP.renderProductList(localStorageProducts);

     reader.readAsDataURL(document.querySelector('#image').files[0])
  }

  function showImages(){
    for(let i = 0; i < window.localStorage.length; i++){
        let res = window.localStorage.getItem(window.localStorage.key(i))
        let image = new Image()
        image.src = res;

        showDiv.appendChild(image);
    }
  }
  showImages();
}

// la momentul incarcarii fisierului addItemsForm.js
// inca nu stim cine e APP.renderProductList.
// asadar, inainte ca respectiv functie sa fie apelata,
// vrem sa incarcam celelalte fisiere
window.addEventListener('load', addFormFunctionality);