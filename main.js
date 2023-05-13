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

//** PRODUCTOS DE LAS MARCAS **/
// Clase para los producto
class Productos {
    constructor(id, nombre, precio, descripcion, img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.img = img;
        this.cantidad = 1;
    }
}

// Array carrito (se inicializa vacío para posteriormente ir agregando los productos):
const carrito = [];

// Creación de productos (objetos) de la marca Adidas
const gorraA = new Productos(1, "Gorra", 500, "Gorra Adidas Gris Unisex Unitalla", "../img/gorra_adidas.png");
const sudaderaA = new Productos(2, "Sudadera", 1800, "Sudadera Adidas Gris Para Hombre Talla Small", "../img/sudadera_adidas.png");
const tenisA = new Productos(3, "Tenis", 2000, "Tenis Adidas Blancos Para Tennis Unisex", "../img/tenis_adidas.png");
// Creación de productos (objetos) de la marca Nike
const camisetaN = new Productos(4, "Camiseta", 280, "Camisera Nike Negra Para Hombre Talla Large", "../img/camiseta_nike.png");
const shortN = new Productos(5, "Short", 570, "Short Nike Negro Con Logo Blanco Unisex Talla Medium", "../img/short_nike.png");
const sudaderaN = new Productos(6, "Sudadera", 2500, "Sudadera Nike Negra Con Cierre Unisex Talla XSmall", "../img/sudadera_nike.png");
// Creación de productos (objetos) de la marca Under Armour
const gorraUA = new Productos(7, "Gorra", 320, "Gorra Under Armour Naranja Unisex Unitalla", "../img/gorra_UA.png");
const camisaUA = new Productos(8, "Camisa", 1000, "Camisa Under Armour Azul Unisex Para Tennis Talla Small", "../img/camisa_UA.png");
const camisetaUA = new Productos(9, "Camiseta", 650, "Camiseta Under Armour Gris Para Hombre Talla Large", "../img/camiseta_UA.png");

// Array de todos los productos de adidas:
const productosAdidas = [gorraA, sudaderaA, tenisA];
// Array de todos los productos de Nike:
const productosNike = [camisetaN, shortN, sudaderaN];
// Array de todos los productos de Under Armour:
const productosUA = [gorraUA, camisaUA, camisetaUA];

// DOM para mostrar los productos de adidas en cards
const contenedorAdidas = document.getElementById("contenedorAdidas");
// DOM para mostrar los productos de adidas en cards
const contenedorNike = document.getElementById("contenedorNike");
// DOM para mostrar los productos de Under Armour en cards
const contenedorUnderArmour = document.getElementById("contenedorUnderArmour");

// Función para mostrar los productos de adidas
const mostrarProductosA = () =>{
    productosAdidas.forEach(producto =>{
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                        <div class="card">
                            <img src="${producto.img}" class="card-img-top imgProductos">
                            <div class="card-body">
                                <h5>${producto.nombre}</h5>
                                <p>$${producto.precio} mx</p>
                                <button class="btn colorBoton" id="boton${producto.id}">Agregar al Carrito</button>
                            </div>
                        </div>
                        `
        contenedorAdidas.appendChild(card);
        // Agregar productos al carrito:
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", ()=>{
            agregarAlCarrito(producto.id);
        })
        console.log(carrito);
    })
}
// Función para mostrar los productos de Nike
const mostrarProductosN = () =>{
    productosNike.forEach(producto =>{
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                        <div class="card">
                            <img src="${producto.img}" class="card-img-top imgProductos">
                            <div class="card-body">
                                <h5>${producto.nombre}</h5>
                                <p>$${producto.precio} mx</p>
                                <button class="btn colorBoton" id="boton${producto.id}">Agregar al Carrito</button>
                            </div>
                        </div>
                        `
        contenedorNike.appendChild(card);
    })
}
// Función para mostrar los productos de Under Armour
const mostrarProductosUA = () =>{
    productosUA.forEach(producto =>{
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                        <div class="card">
                            <img src="${producto.img}" class="card-img-top imgProductos">
                            <div class="card-body">
                                <h5>${producto.nombre}</h5>
                                <p>$${producto.precio} mx</p>
                                <button class="btn colorBoton" id="boton${producto.id}">Agregar al Carrito</button>
                            </div>
                        </div>
                        `
        contenedorUnderArmour.appendChild(card);
    })
}

// Llamada de las funciones con sus contenedores de marcas y de cada marca
contenedorMarcas && mostrarMarcas();
contenedorAdidas && mostrarProductosA();
contenedorNike && mostrarProductosN();
contenedorUnderArmour && mostrarProductosUA();


// Función para agregar productos al carrito usando como parámetro el id de los productos
const agregarAlCarrito = (id) =>{
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
    }else{
        const producto = productosAdidas.find(producto => producto.id === id);
        carrito.push(producto);
    }
}

// Mostrar el carrito de compras:
const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", ()=>{
    mostrarCarrito();
})

// Función mostrar carrito
const mostrarCarrito = () =>{
    contenedorCarrito.innerHTML="";
    carrito.forEach(producto =>{
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                        <div class="card">
                            <img src="${producto.img}" class="card-img-top imgProductos">
                            <div class="card-body">
                                <h5>${producto.nombre}</h5>
                                <p>${producto.precio}</p>
                                <p>${producto.cantidad}</p>
                                <button class="btn colorBoton" id="eliminar${producto.id}">Eliminar Producto</button>
                            </div>
                        </div>
                        `
        contenedorCarrito.appendChild(card);
    })
}