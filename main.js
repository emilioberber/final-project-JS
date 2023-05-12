// Clase de marcas en el index de forma dinámica usando DOM
class Marca{
    constructor(nombre, img){
        this.nombre = nombre;
        this.img = img;
    }
}

// Creación de los objetos 
const adidas = new Marca("Adidas", "img/adidas.png");
const nike = new Marca("Nike","img/nike.png");
const underArmour = new Marca("UnderArmour","img/under_armour.png");

// Array con las marcas existentes:
const marcas = [adidas, nike, underArmour];

// Modificamos el DOM mostrando las marcas
const contenedorMarcas = document.getElementById("contenedorMarcas");

// Función para mostrar las marcas
const mostrarMarcas = () =>{
    marcas.forEach(marca => {
        const marcaMostrada = document.createElement("div");
        marcaMostrada.innerHTML = `
                                <div>
                                    <a id="marca" href="html/${marca.nombre}.html">
                                        <img src="${marca.img}" alt="image${marca.nombre}" class="card-img-top imgMarca">
                                    </a>
                                </div>
                                `
    contenedorMarcas.appendChild(marcaMostrada);
    })
}
mostrarMarcas();

//**PARA ADIDAS**//:

// Clase tipo producto de la marca adidas
class ProductoAdidas {
    constructor(id, nombre, precio, descripcion, img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.img = img;
        this.cantidad = 1;
    }
}
// Creación de productos (objetos) de la marca adidas
const gorra = new ProductoAdidas(1, "Gorra", 500, "Gorra Adidas Gris Unisex Unitalla", "../img/gorra_adidas.png");
const sudadera = new ProductoAdidas(2, "Sudadera", 1800, "Sudadera Adidas Gris Para Hombre Talla Small", "../img/sudadera_adidas.png");
const tenis = new ProductoAdidas(3, "Tenis", 2000, "Tenis Adidas Blancos Para Tennis Unisex", "../img/tenis_adidas.png");

// Array de todos los productos de adidas:
const productosAdidas = [gorra, sudadera, tenis];

// Array carrito (se inicializa vacío para posteriormente ir agregando los productos):
const carrito = [];

// DOM para mostrar los productos de adidas en cards
const contenedorAdidas = document.getElementById("contenedorAdidas");

// Función para mostrar los productos
const mostrarProductosA = () =>{
    productosAdidas.forEach(producto =>{
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                        <div class="card">
                            <img src="${producto.img}" class="card-img-top imgProductos">
                            <div class="card-body">
                                <h5>${producto.nombre}</h5>
                                <p>${producto.precio}</p>
                                <button class="btn colorBoton" id="boton${producto.id}">Agregar al Carrito</button>
                            </div>
                        </div>
                        `
        contenedorAdidas.appendChild(card);
    })
}
mostrarProductosA();


// PARA NIKE:
/* class ProductoNike {
    constructor(id, nombre, precio, img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
} */

// PARA UNDER ARMOUR:
/* class ProductoUA {
    constructor(id, nombre, precio, img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
} */