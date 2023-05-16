// Nombre: Emilio Berber Maldonado
// Proyecto: Sport Outlet
// Curso: JavaScript
// Requisitos del Proyecto Final:
//      1) Objetos y Arrays. 
//      2) Métodos de Arrays.
//      3) Funciones y condicionales.
//      4) Generación del DOM de forma dinámica. 
//      5) Eventos.
//      6) Sintaxis avanzada.
//      7) Al menos una librería de uso relevante para el proyecto.
//      8) Manejo de promesas con fetch para Carga de datos desde un JSON local o desde una API externa

// ** MARCAS ** //
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

// Creación de productos (objetos) de la marca Adidas
const gorraA = new Productos(1, "Gorra", 11000, "Gorra Adidas Gris Unisex Unitalla", "../img/gorra_adidas.png");
const sudaderaA = new Productos(2, "Sudadera", 30000, "Sudadera Adidas Gris Para Hombre Talla Small", "../img/sudadera_adidas.png");
const tenisA = new Productos(3, "Tenis", 38000, "Tenis Adidas Blancos Para Tennis Unisex", "../img/tenis_adidas.png");
// Creación de productos (objetos) de la marca Nike
const camisetaN = new Productos(4, "Camiseta", 11500, "Camisera Nike Negra Para Hombre Talla Large", "../img/camiseta_nike.png");
const shortN = new Productos(5, "Short", 27000, "Short Nike Negro Con Logo Blanco Unisex Talla Medium", "../img/short_nike.png");
const sudaderaN = new Productos(6, "Sudadera", 35000, "Sudadera Nike Negra Con Cierre Unisex Talla XSmall", "../img/sudadera_nike.png");
// Creación de productos (objetos) de la marca Under Armour
const gorraUA = new Productos(7, "Gorra", 12690, "Gorra Under Armour Naranja Unisex Unitalla", "../img/gorra_UA.png");
const camisaUA = new Productos(8, "Camisa", 15800, "Camisa Under Armour Azul Unisex Para Tennis Talla Small", "../img/camisa_UA.png");
const camisetaUA = new Productos(9, "Camiseta", 11900, "Camiseta Under Armour Gris Para Hombre Talla Large", "../img/camiseta_UA.png");

// Array de todos los productos de adidas:
const productosAdidas = [gorraA, sudaderaA, tenisA];
// Array de todos los productos de Nike:
const productosNike = [camisetaN, shortN, sudaderaN];
// Array de todos los productos de Under Armour:
const productosUA = [gorraUA, camisaUA, camisetaUA];
// Array de todos los productos del outlet
const todosLosProductos = [gorraA, sudaderaA, tenisA, camisetaN, shortN, sudaderaN, gorraUA, camisaUA, camisetaUA];

// Array carrito (se inicializa vacío para posteriormente ir agregando los productos):
let carrito = [];

// localStorage 
if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

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
                                <p>$${producto.precio} ARG</p>
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
                                <p>$${producto.precio} ARG</p>
                                <button class="btn colorBoton" id="boton${producto.id}">Agregar al Carrito</button>
                            </div>
                        </div>
                        `
        contenedorNike.appendChild(card);
        // Agregar productos al carrito:
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", ()=>{
            agregarAlCarrito(producto.id);
        })
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
                                <p>$${producto.precio} ARG</p>
                                <button class="btn colorBoton" id="boton${producto.id}">Agregar al Carrito</button>
                            </div>
                        </div>
                        `
        contenedorUnderArmour.appendChild(card);
        // Agregar productos al carrito:
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", ()=>{
            agregarAlCarrito(producto.id);
        })
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
        const producto = todosLosProductos.find(producto => producto.id === id);
        carrito.push(producto);
    }
    console.log(carrito);
    // localStorage para agregar al carrito:
    localStorage.setItem("carrito", JSON.stringify(carrito));
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
                                <p>$${producto.precio} ARG</p>
                                <p>${producto.cantidad}</p>
                                <button class="btn colorBoton" id="eliminar${producto.id}">Eliminar Producto</button>
                            </div>
                        </div>
                        `
        contenedorCarrito.appendChild(card);
        // Eliminar productos del carrito
        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", ()=>{
            eliminarProductoDelCarrito(producto.id);
        })
    })
    calcularElTotal();
}

// Elimiar CADA producto del carrito
const eliminarProductoDelCarrito = (id) =>{
    const producto = carrito.find(producto => producto.id === id);
    const index = carrito.indexOf(producto);
    carrito.splice(index, 1);
    mostrarCarrito();
    // localStorage para cuando se borre un producto del carrito 
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Eliminar TODOS los productos del carrito cuando de click el vaciar carrito
const vaciarCarrito = document.getElementById("vaciarCarrito");
vaciarCarrito.addEventListener("click", ()=>{
    if(carrito.length > 0){
        /* Libreriía Sweet Alert - Vaciar carrito */
        Swal.fire({
            title: "Eliminar TODO el carrito",
            text: "¿Seguro que desea eliminar todos los productos del carrito?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar todo!'
        }).then((result) => {
            if (result.isConfirmed) {
            Swal.fire(
                'Borrado!',
                'Tu carrito ha sido borrado exitosamente',
                'success'
            )
            vaciarTodoElCarrito();
            localStorage.setItem("carrito",[]);
            }
        })
    }
})
// Función para vaciar todo el carrito
const vaciarTodoElCarrito = () =>{
    carrito = []; // El array se hace vacío
    mostrarCarrito();
    // localStorage para cuando se quiera vaciar todo el carrito
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Mostrar el total de la compra
const total = document.getElementById("total");
// Función para calcular el total
const calcularElTotal = () =>{
    let totalCompra = 0;
    carrito.find(producto =>{
        totalCompra += producto.precio * producto.cantidad;
    })
    total.innerHTML = ` $${totalCompra} ARG`;
    // Librería Sweet Alert
    /* Botonón para Ir a pagar */
    if(totalCompra > 0 && carrito !== []){
        const botonPagar = document.getElementById("botonPagar");
        botonPagar.addEventListener("click", ()=>{
        Swal.fire({
            title: "Tu compra ha sido exitosa!",
            text: `Gracias por tu compra de: $${totalCompra} ARG`,
            icon: "success",
            confirmButtonText: "Aceptar"
            })
            contenedorCarrito.innerHTML = "";
            divDolar.innerHTML="";
            carrito = [];
        })
    }else{
        const botonPagar = document.getElementById("botonPagar");
        botonPagar.addEventListener("click", ()=>{
            Swal.fire({
                title: "Debes agregar algo para poder ir a pagar!",
                icon: "error",
                confirmButtonText: "Aceptar"
                })
            })
    }
    // Añadiendo API:
    const url = "https://criptoya.com/api/dolar";
    const divDolar = document.getElementById("divDolar");
    // Uso de fetch con promesas
    setInterval(()=>{
        fetch(url)
        .then(response => response.json())
        .then((currency)=> {
            let valorMxAlDia = currency.oficial;
            let totalCompraUSD = totalCompra/valorMxAlDia
            divDolar.innerHTML = `<p>Dólar oficial al día de hoy: $${valorMxAlDia} ARG</p>
                                  <p>Total en dólares: $${totalCompraUSD.toFixed(2)} USD</p>`
        })
        .catch(error => console.error(error))
    }, 1000)
}
