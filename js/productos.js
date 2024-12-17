document.addEventListener('DOMContentLoaded', () => {

    const comidasContenedor = document.getElementById('product');
    const modalContenido = document.getElementById('modal-contenido')
    const botonCarrito = document.getElementById('ver-carrito');
    const botonFinCompra = document.getElementById('finalizar-compra');
    const modal = document.getElementById('modal-contenedor');
    const aCerrarmodal = document.getElementById('a-cerrar-modal');
    const botonAbrirCerrarModal=document.getElementById('mi-carrito')
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
                        <p>$ 6.600</p>
                    </div>
                    </a>
                   </div>
                   `;
            //agregar evento al boton carrito
            const btnCarrito = cardDiv.querySelector('#carrito');            
            btnCarrito.addEventListener("click", () => {
                console.log('entro');
                agregarCarrito(comida);                
                mostrarModal();
                modal.classList.toggle('abrir');
                


            });

            comidasContenedor.appendChild(cardDiv);

        });
    };
    let agregarCarrito = (comida) => {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carrito.push(comida);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        // alert(`${comida.name} ha sido agregado al carrito`)
    };

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
                    <h5> 1x $6.600</h5>
                    <span>¡Excelente eleccion!</span>
                </div>
            </a>
            <div>
               <button><i class="fa-solid fa-x"></i></button>    
            </div>    
            `;
           
            modalContenido.appendChild(modalDiv);
           
        });
    }
    obtenerComidas();

    botonCarrito.addEventListener('click', () => {
        window.location.href = "market.html";

    });
    botonFinCompra.addEventListener('click', () => {
        alert('COMPRA EXITOSA');
        window.location.href = "productos.html";

    });

    aCerrarmodal.addEventListener('click', () => {
        console.log('cerro');
        
        modalContenido.innerHTML='';
        modal.classList.toggle('abrir')
    });
    botonAbrirCerrarModal.addEventListener('click',()=>{
        mostrarModal();
        modal.classList.toggle('abrir');
    })

})