document.addEventListener('DOMContentLoaded', () => {

    const comidasContenedor = document.getElementById('product');
    const modalContenedor = document.getElementById('modal-contenido')
    const  botonCarrito=document.getElementById('ver-carrito');
    const botonFinCompra=document.getElementById('finalizar-compra');
    console.log(comidasContenedor);

    function obtenerComidas() {


        fetch('https://dummyjson.com/recipes')
            .then(res => res.json())
            .then((data) => {
                const comidas = data.recipes;

                // Limpia el contenedor de productos
                comidasContenedor.innerHTML = "";
                mostrarComidas(comidas);
            });
    }

    let mostrarComidas = (comidas) => {

        comidas.forEach(comida => {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card';
            cardDiv.innerHTML = `
            <button id="carrito" class="carrito"><i class="fa-solid fa-cart-shopping"></i></button>
            <a href="">
            <div class="card-img">
             <img src="${comida.image}" alt="">
             </div>
                    <div class="card-resena">
                   <h2>${comida.name}</h2>
                        <p>$ 84999</p>
                    </div>
                    </a>
                   </div>
                   `;



            const modal = document.getElementById('modal-contenedor')
            //agregar evento al boton carrito
            const btnCarrito = cardDiv.querySelector('#carrito');


            btnCarrito.addEventListener("click", () => {
                console.log('entro');
                agregarCarrito(comida);

                mostrarModal();
                modal.classList.toggle('abrir')



            });
            comidasContenedor.appendChild(cardDiv)


        });



    }
    let agregarCarrito = (comida) => {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carrito.push(comida);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        // alert(`${comida.name} ha sido agregado al carrito`)

    }
    ////////cARGAR COMIDAS EN MODAL 
    let mostrarModal = () => {
        const carritoStorage = JSON.parse(localStorage.getItem('carrito'));



        carritoStorage.forEach(elemento => {

            const modalDiv = document.createElement('div');
            modalDiv.id = 'modal-content';

            modalDiv.innerHTML = `
            <a href="">
                <div id=""><img
                    src="${elemento.image}"
                    alt="">
                </div>
                <div id="modal-descripcion">
                    <h4>${elemento.name}</h4>
                    <h5> 2x $6.600</h5>
                    <span>¡Excelente eleccion!</span>
                </div>
            </a>
            <div>
               <button><i class="fa-solid fa-x"></i></button>
    
            </div>    
            `;
            modalContenedor.appendChild(modalDiv)
        });




    }

 botonCarrito.addEventListener('click',()=>{
    window.location.href = "market.html";

 })
 botonFinCompra.addEventListener('click',()=>{
    alert('COMPRA EXITOSA');
    window.location.href = "productos.html";

 })

    obtenerComidas();
})