// cream un obiect global, numit APP
window.APP = {};
// index.js fiind primul fisier care se incarca, mainPage va fi available in toate celelalte fisiere
window.mainPage = document.querySelector('#root');
// tot in APP cream un vector de obiecte, numit products
APP.products = [
	{
		// un telefon are nume si pret
		id: '1',
		nume: 'Iphone XS',
		price: 4500,
		year: 2019,
		dateAdd: '27-5-2020',
		ph: 'img/ph1.png'
	},
	{
		id: '2',
		nume: 'Huawei P30',
		price: 4000,
		year: 2019,
		dateAdd: '5-5-2020',
		ph: 'img/ph2.png'
	},
	{
		id: '3',
		nume: 'Samsung S10',
		price: 4250,
		year: 2020,
		dateAdd: '12-4-2020',
		ph: 'img/ph3.png'
	}
];
// pentru stocare persistenta(sa nu se mai piarda datele la refresh), folosim lacalStorage
// avand in vedere ca vom face de mai multe ori operatiile de introducere a datelor in localStorage
// si de extragere a datelor din localStorage, vom face doua functii

// pentru a adauga vectorul de produse in local storage, trebuie mai intai sa il facem string
// pentru cheia "products", vom avea valoarea corespunzatoare, dar facuta string
 function addProducts(products){
	localStorage.setItem("products", JSON.stringify(products));
}

// pentru a extrage vectorul de produse, luam valoarea corespunzatoare cheii "products"
// apoi o parsam, pentru a deveni iar vector de obiecte, si o returnam 
function getProducts(){
	const returnedProducts = localStorage.getItem("products");
	return JSON.parse(returnedProducts);	
};

// introducem vectorul de produse in localStorage, doar daca nu avem nimic in baza de date
if (getProducts() === null){
		addProducts(APP.products);
}

function startRendering() {
	const localStorageProducts = getProducts();
	// "randam" lista de produse, trimitand ca parametru APP.products (incarcat mai sus)
	APP.renderProductList(localStorageProducts);
}
// DUPA ce s-au incarcat TOATE scripturile, apelam functia startRendering
// facem asta pentru ca la momentul incarcarii lui index.js, nu stim cine renderProductList()
window.addEventListener('load', startRendering);