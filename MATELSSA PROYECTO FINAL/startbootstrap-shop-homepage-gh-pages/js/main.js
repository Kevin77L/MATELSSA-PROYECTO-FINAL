// PRODUCTOS
const productos = [
    // Abrigos
    {
        id: "CamisetaVerde",
        titulo: "Camiseta Verde",
        imagen: "https://b2cmattelsa.vtexassets.com/arquivos/ids/608882-500-auto?v=638636370033470000&width=500&height=auto&aspect=true",
        categoria: {
            nombre: "Hombre",
            id: "hombre"
        },
        precio: 79000
    },
    {
        id: "CamisetaPolo",
        titulo: "Camiseta Polo",
        imagen: "https://b2cmattelsa.vtexassets.com/arquivos/ids/608574-500-auto?v=638636368170500000&width=500&height=auto&aspect=true",
        categoria: {
            nombre: "Mujer",
            id: "mujer"
        },
        precio: 79000
    },
    {
        id: "CamisetaBlanca",
        titulo: "Camiseta Blanca",
        imagen: "https://b2cmattelsa.vtexassets.com/arquivos/ids/608630-500-auto?v=638636368464430000&width=500&height=auto&aspect=true",
        categoria: {
            nombre: "CamisetaBlanca",
            id: "hombre"
        },
        precio: 79000
    },
    // celular
    {
        id: "BuzoCafe",
        titulo: "Buzo Cafe",
        imagen: "https://b2cmattelsa.vtexassets.com/arquivos/ids/608278-500-auto?v=638636365340270000&width=500&height=auto&aspect=true",
        categoria: {
            nombre: "BuzoCafe",
            id: "mujer"
        },
        precio: 129000
    },
    {
        id: "CamisetaNegra",
        titulo: "Camiseta Negra",
        imagen: "https://b2cmattelsa.vtexassets.com/arquivos/ids/609186-500-auto?v=638636371393900000&width=500&height=auto&aspect=true",
        categoria: {
            nombre: "CamisetaNegra",
            id: "hombre"
        },
        precio: 79000
    },
    {
        id: "CamisetaAngel",
        titulo: "Camiseta Angel",
        imagen: "https://b2cmattelsa.vtexassets.com/arquivos/ids/609162-500-auto?v=638636371240270000&width=500&height=auto&aspect=true",
        categoria: {
            nombre: "CamisetaAngel",
            id: "mujer"
        },
        precio: 59000
    },
    // Accesorios
    {
        id: "CamisetaBlancaConejo",
        titulo: "Camiseta Blanca Conejo",
        imagen: "https://b2cmattelsa.vtexassets.com/arquivos/ids/608802-500-auto?v=638636369573030000&width=500&height=auto&aspect=true",
        categoria: {
            nombre: "CamisetaBlancaConejo",
            id: "hombre"
        },
        precio: 99000
    },
    {
        id: "VestidoCafe",
        titulo: "Vestido Cafe",
        imagen: "https://b2cmattelsa.vtexassets.com/arquivos/ids/608734-500-auto?v=638636369197100000&width=500&height=auto&aspect=true",
        categoria: {
            nombre: "VestidoCafe",
            id: "mujer"
        },
        precio: 109000
    },
    {
        id: "GorraNegra",
        titulo: "GorraNegra",
        imagen: "https://b2cmattelsa.vtexassets.com/arquivos/ids/609379-500-auto?v=638636372545970000&width=500&height=auto&aspect=true",
        categoria: {
            nombre: "GorraNegra",
            id: "hombre"
        },
        precio: 79000
    },
    {
        id: "Jean",
        titulo: "Jean",
        imagen: "https://b2cmattelsa.vtexassets.com/arquivos/ids/608670-500-auto?v=638636368817800000&width=500&height=auto&aspect=true",
        categoria: {
            nombre: "Jean",
            id: "mujer"
        },
        precio: 169000
    },
    {
        id: "Tank",
        titulo: "Tank",
        imagen: "https://b2cmattelsa.vtexassets.com/arquivos/ids/608458-500-auto?v=638636367393170000&width=500&height=auto&aspect=true",
        categoria: {
            nombre: "Tank",
            id: "hombre"
        },
        precio: 89000
    },
    {
        id: "Body",
        titulo: "Body",
        imagen: "https://b2cmattelsa.vtexassets.com/arquivos/ids/609226-500-auto?v=638636371546600000&width=500&height=auto&aspect=true",
        categoria: {
            nombre: "Body",
            id: "mujer"
        },
        precio: 79000
    },
    {
        id: "CamisetaNegra2",
        titulo: "Camiseta Negra",
        imagen: "https://b2cmattelsa.vtexassets.com/arquivos/ids/608762-500-auto?v=638636369402970000&width=500&height=auto&aspect=true",
        categoria: {
            nombre: "CamisetaNegra2",
            id: "hombre"
        },
        precio: 79000
    }
    ,
    {
        id: "TopBlanco",
        titulo: "Top Blanco",
        imagen: "https://b2cmattelsa.vtexassets.com/arquivos/ids/608546-500-auto?v=638636367977930000&width=500&height=auto&aspect=true",
        categoria: {
            nombre: "TopBlanco",
            id: "mujer"
        },
        precio: 79000
    }
    ,
    {
        id: "Joggers",
        titulo: "Joggers",
        imagen: "https://b2cmattelsa.vtexassets.com/arquivos/ids/608954-500-auto?v=638636370328530000&width=500&height=auto&aspect=true",
        categoria: {
            nombre: "Joggers",
            id: "hombre"
        },
        precio: 159000
    }
    ,
    {
        id: "CamisetaMujer",
        titulo: "Camiseta Mujer",
        imagen: "https://b2cmattelsa.vtexassets.com/arquivos/ids/608994-500-auto?v=638636370541300000&width=500&height=auto&aspect=true",
        categoria: {
            nombre: "CamisetaMujer",
            id: "mujer"
        },
        precio: 59000
    }
    ,
    {
        id: "Vestido",
        titulo: "Vestido",
        imagen: "https://b2cmattelsa.vtexassets.com/arquivos/ids/594373-500-auto?v=638581974402900000&width=500&height=auto&aspect=true",
        categoria: {
            nombre: "Sale",
            id: "sale"
        },
        precio: 67500
    }
    ,
    {
        id: "Camisetanegra3",
        titulo: "Camiseta negra",
        imagen: "https://b2cmattelsa.vtexassets.com/arquivos/ids/601545-500-auto?v=638618226634200000&width=500&height=auto&aspect=true",
        categoria: {
            nombre: "Camisetanegra",
            id: "sale"
        },
        precio: 44500
    }
    ,
    {
        id: "CamisetaBlancaHombre",
        titulo: "Camiseta Blanca",
        imagen: "https://b2cmattelsa.vtexassets.com/arquivos/ids/601836-500-auto?v=638618228698230000&width=500&height=auto&aspect=true",
        categoria: {
            nombre: "CamisetaBlancaHombre",
            id: "sale"
        },
        precio: 49500
    }
    ,
    {
        id: "falda",
        titulo: "falda",
        imagen: "https://b2cmattelsa.vtexassets.com/arquivos/ids/586008-500-auto?v=638551745829300000&width=500&height=auto&aspect=true",
        categoria: {
            nombre: "falda",
            id: "sale"
        },
        precio: 41500
    }
    ,
    {
        id: "CamisetaOversize",
        titulo: "Camiseta Oversize",
        imagen: "https://b2cmattelsa.vtexassets.com/arquivos/ids/598249-500-auto?v=638603535118470000&width=500&height=auto&aspect=true",
        categoria: {
            nombre: "CamisetaOversize",
            id: "sale"
        },
        precio: 44500
    }
    ,
    {
        id: "CamisetaCafe",
        titulo: "Camiseta Cafe",
        imagen: "https://b2cmattelsa.vtexassets.com/arquivos/ids/597123-500-auto?v=638598349856200000&width=500&height=auto&aspect=true",
        categoria: {
            nombre: "CamisetaCafe",
            id: "sale"
        },
        precio: 39500
    }
    ,
    {
        id: "CropTop",
        titulo: "Crop Top",
        imagen: "https://b2cmattelsa.vtexassets.com/arquivos/ids/594127-500-auto?v=638581971111400000&width=500&height=auto&aspect=true",
        categoria: {
            nombre: "Crop top",
            id: "sale"
        },
        precio: 26500
    }
    ,
    {
        id: "Chaqueta",
        titulo: "Chaqueta",
        imagen: "https://b2cmattelsa.vtexassets.com/arquivos/ids/563500-500-auto?v=638442816517970000&width=500&height=auto&aspect=true",
        categoria: {
            nombre: "Chaqueta",
            id: "sale"
        },
        precio: 80000
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}