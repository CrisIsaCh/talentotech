document.addEventListener('DOMContentLoaded', () => {

    const comidasContenedor = document.getElementById('product');
    const modalContenido = document.getElementById('modal-contenido')
    const botonCarrito = document.getElementById('ver-carrito');
    const botonFinCompra = document.getElementById('finalizar-compra');
    const modal = document.getElementById('modal-contenedor');
    const overlay = document.getElementById("overlay");
    const aCerrarmodal = document.getElementById('a-cerrar-modal');
    const botonAbrirCerrarModal = document.getElementById('mi-carrito')
    console.log(comidasContenedor);
    let precio = 5450;
    let cantidad = 1;
    let subtotalGral = 0;
    const spanSubtotalGral = document.getElementById('span-subtotal');
    let contadorCarrito = 0;
    const contador = document.getElementById('contador');

    ////////////////////////////////////////////////////////////////////////
    const carritoStorage = JSON.parse(localStorage.getItem('carrito')) || [];




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
            <a href="#">
            <div class="card-img">
             <img src="${comida.image}" alt="">
             </div>
                    <div class="card-resena">
                   <h2>${comida.name}</h2>
                        <p>$ ${precio}</p>
                    </div>
                    </a>
                   </div>
                   `;
            //agregar evento al boton carrito
            const btnCarrito = cardDiv.querySelector('#carrito');
            btnCarrito.addEventListener("click", () => {
                console.log('entro');
                agregarCarrito(comida);
                console.log(comida.id);


                mostrarModal();
                modal.classList.toggle('abrir');
                overlay.classList.toggle('open');



            });

            comidasContenedor.appendChild(cardDiv);

        });
    };
    let agregarCarrito = (comida) => {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        ///////////////////////encuentra un objeto que ya este en la lista 
        if (carrito.some((element) => element.id === comida.id)) {
            /////////////encuentra el inidice de ese objeto
            let indice = carrito.findIndex(item => item.id === comida.id)
            console.log(indice);

            console.log('si hay');


            //////////////////////reemplaza el objeto por otro objeto y aumenta la cantidad
            carrito.splice(indice, 1, {
                id: comida.id,
                nombre: comida.name,
                cantidad: (carrito[indice].cantidad) += 1,
                imagen: comida.image,
                ////////////precio harcodeado
                precio:5450

            })
           




        } else {
            carrito.unshift({
                id: comida.id,
                nombre: comida.name,
                cantidad: 1,
                imagen: comida.image,
                ////////////precio harcodeado
                precio:5450
            })

        }



        localStorage.setItem('carrito', JSON.stringify(carrito));
        
    };

    ////////cARGAR COMIDAS EN MODAL 
    let mostrarModal = () => {
        const carritoStorage = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoStorage.forEach(elemento => {
            console.log(precio * cantidad);


            const modalDiv = document.createElement('div');
            modalDiv.id = 'modal-content';
            modalDiv.innerHTML = `
            <a href="#">
                <div id=""><img
                    src="${elemento.imagen}"
                    alt="">
                </div>
                <div id="modal-descripcion">
                    <h4>${elemento.nombre}</h4>
                    <h5> ${elemento.cantidad} x $ ${elemento.precio}</h5>
                    <span>¡Excelente eleccion!</span>
                </div>
            </a>
            <div>
               <button><i class="fa-solid fa-x"></i></button>    
            </div>    
            `;

///////////////pinta contador del carrito///////////
            modalContenido.appendChild(modalDiv);
            contador.style.display = 'block'

            contadorCarrito = cantidadTotal()
            console.log(contadorCarrito);
            
            contador.textContent = contadorCarrito

            subtotalGral += precio * cantidad
            spanSubtotalGral.textContent = `$ ${subtotalGral}`;



        });


    }

    //////////////////Elimina el contador si es ==0 //////////////////////////////
    
    
    let cantidadTotal=()=>{
        //////////////////busca en el el objeto el elemento cantidad y los suma
        const carritoStorage = JSON.parse(localStorage.getItem('carrito')) || [];
        const cantidadTotal = carritoStorage.reduce((acumulador, producto) => acumulador + producto.cantidad, 0)
        console.log(cantidadTotal);
        return cantidadTotal
        
    }

    if (carritoStorage.length == 0) {
        contador.style.display = 'none';
    } else {

       
        contador.style.display = 'block'
        contadorCarrito = cantidadTotal()
        contador.textContent = contadorCarrito

    }
    

   

    // console.log(carritoStorage);
    // const array = carritoStorage.filter(item => item.id == 2)
    // console.log(array);



    obtenerComidas();


    botonCarrito.addEventListener('click', () => {
        window.location.href = "market.html";

    });
    botonFinCompra.addEventListener('click', () => {
        alert('COMPRA EXITOSA');
        // Limpiar el carrito después de finalizar la compra
        localStorage.removeItem('carrito');

        // Redirigir al inicio despues de 4 segundos
        setTimeout(() => {
            window.location.href = 'productos.html';
        }, 2000);


    });

    aCerrarmodal.addEventListener('click', () => {
        console.log('cerro');
        subtotalGral = 0;

        modalContenido.innerHTML = '';
        modal.classList.toggle('abrir');
        overlay.classList.toggle('open');
    });
    botonAbrirCerrarModal.addEventListener('click', () => {
        mostrarModal();
        modal.classList.toggle('abrir');
        overlay.classList.toggle('open');
    })


})