
console.log("TRABAJO PRÁCTICO N°5")

let productos =[
    {
        nombre: "Harina",
        precio:35
    },
    {
        nombre: "Pan",
        precio:25
    },
    {
        nombre: "Papa",
        precio:52
    },
    {
        nombre: "Palta",
        precio:55
    },
    {
        nombre: "Fideos",
        precio:85
    },
    {
        nombre: "Aceite",
        precio:350
    },
    {
        nombre: "Sopa",
        precio:86
    },
    {
        nombre: "Mermelada",
        precio:108
    },
    {
        nombre: "Porotos",
        precio:69
    },
    {
        nombre: "Lentejas",
        precio:85
    },
    {
        nombre: "Mandarina",
        precio:43
    },
    {
        nombre: "Banana",
        precio:79
    },
    {
        nombre: "Leche de Almendras",
        precio:145
    },
    {
        nombre: "Papel Higiénico",
        precio:147
    },
    {
        nombre: "Lavandina",
        precio:55
    },
    {
        nombre: "Alcohol en Gel",
        precio:123
    },
    {
        nombre: "Shampoo",
        precio:400
    },
    {
        nombre: "Arroz",
        precio:66
    },
    {
        nombre: "Harina",
        precio:35
    },
    {
        nombre: "Salsa de Tomate",
        precio:35
    },
];

let precio = []
let productosCarrito = []

const comprar = document.querySelector(".comprar")
const contenedor = document.querySelector(".contenedor")
const mostrar = document.querySelector(".mostrarCompra")

productos.forEach((item)=>{
    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    const button = document.createElement("button")
    

    h2.textContent = item.nombre
    button.textContent = `$ ${item.precio}`

    button.addEventListener("click", ()=>{
        alert("SE AGREGO EL PRODUCTO SELECCIONADO AL CARRITO")
        precio.push(item)
    })

    div.appendChild(h2)
    div.appendChild(button)
    contenedor.appendChild(div)
})

comprar.addEventListener("click", ()=>{

    

    let acumulador = 0

    precio.forEach((item)=>{
       acumulador = acumulador + item.precio
       productosCarrito.push(item.nombre)
    })


    let h3 = document.createElement("h3")
    let h4 = document.createElement("h4")

    h3.textContent = `EL COSTO TOTAL ES: $${acumulador}`
    
    
        h4.textContent = `LISTA DE PRODUCTOS EN CARRITO: ${productosCarrito}`
        mostrar.appendChild(h4)
   

    mostrar.appendChild(h3)

})

const resetear = document.querySelector(".resetear")

resetear.addEventListener("click", ()=>{
    let reset = document.createElement("h3")
    reset.textContent = "SE RESETEO (CARRITO VACIO)."
    reset.style.color = "red"
    mostrar.appendChild(reset)
    precio = []
    productosCarrito = []
})