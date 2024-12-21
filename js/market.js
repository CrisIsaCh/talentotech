document.addEventListener('DOMContentLoaded', () => {
    const tableContenedor = document.getElementById('table');
    //const carritoStorage = JSON.parse(localStorage.getItem('carrito')) || [];
    // console.log(carritoStorage);
    const tablaContenedorMovil = document.getElementById('tabla-mobile');
    let contador = document.getElementById('contador');
    let subtotalProducto = 0;
    let subtotalGral = 0;
    const spanSubtotal = document.getElementById('subtotal-total');
    const spanTotalGral = document.getElementById('total-gral')
    console.log(spanSubtotal.textContent);
    const botonFinCompra = document.getElementById('finalizar-compra');


    function mostarComidas() {
        const carritoStorage = JSON.parse(localStorage.getItem('carrito')) || [];
        console.log(carritoStorage);
        subtotalProducto = 0;
        subtotalGral = 0;


        carritoStorage.forEach(elemento => {



            subtotalProducto = (elemento.precio * elemento.cantidad)


            const tbodyDiv = document.createElement('tbody');
            tbodyDiv.id = 'tbody'
            tbodyDiv.innerHTML = `
            <tr>
                <td><button class="btn-eliminar" id='btn-eliminar'><i class="fa-solid fa-x"></i></button></td>
                <td><img class="producto-img"
                    src="${elemento.imagen}"
                     alt="Eliminar" class="btn-eliminar"></td>
                <td><a href="">${elemento.nombre}</a></td>
                <td>$${elemento.precio}</td>
                <td>
                    <div class="contenedor-cantidad">
                         <button>-</button>
                         <input type="number" value="${elemento.cantidad}" min="1">
                         <button>+</button>
                    </div>
                </td>
                <td>$${subtotalProducto}</td>
            </tr>
            `;
            ////////agregar evento al boton eliminar////////////////
            const btnEliminar = tbodyDiv.querySelector('#btn-eliminar');
            btnEliminar.addEventListener('click', () => {

                eliminarProducto(elemento.id);
                cantidadTotal();
            })


            tableContenedor.appendChild(tbodyDiv);
            subtotalGral += subtotalProducto;
            spanSubtotal.textContent = `$${subtotalGral}`;
            spanTotalGral.textContent = `$${subtotalGral}`

            //////////////////tabla mobile////////////////////////////////////////

            const itemsDiv = document.createElement('div');
            itemsDiv.className = 'items';
            itemsDiv.innerHTML = `
          <img src="${elemento.imagen}"
                        alt="">
                    <div class="mobile">
                        <div class="desc-producto">
                            <span class="mobile-producto">${elemento.nombre}</span>
                            <button id='btn-elimina-mobile' class='btn-eliminar'><i class="fa-solid fa-x"></i></button>
                        </div>
                        <div class="items-mobile">
                            <strong class="columnas">Precio</strong>
                            <span>$ ${elemento.precio}</span>
                        </div>
                        <div class="input-cantidad">
                            <strong class="columnas">Cantidad</strong>
                            <div class="cantidad">
                                <button>-</button>
                                <input type="number" value="${elemento.cantidad}" min="1">
                                <button>+</button>
                            </div>
                        </div>
                        <div class="items-mobile">
                            <strong class="columnas">Subtotal</strong>
                            <span>$${subtotalProducto}</span>
                        </div>

                    </div>
                    `;
//////////////////////////////////evento eliminar producto/////////////////////////////
            const btnElimino = itemsDiv.querySelector('#btn-elimina-mobile');
            btnElimino.addEventListener('click', () => {
                eliminarProducto(elemento.id);
                cantidadTotal();
            })
            tablaContenedorMovil.appendChild(itemsDiv)
        });
    }
    mostarComidas()
    //////////////////////////eliminar productos///////

    let eliminarProducto = (id) => {
        const carritoStorage = JSON.parse(localStorage.getItem('carrito')) || [];
        console.log(carritoStorage);

        const carrito = carritoStorage.filter(item => item.id != id)
        const tbod = document.getElementById('tbody');
        tbod.remove()
        let tbodys = document.querySelectorAll('tbody');
        console.log(tbodys);
        console.log(carrito);
        tablaContenedorMovil.innerHTML = '';
        localStorage.setItem('carrito', JSON.stringify(carrito));
        // location.reload();
        tbodys.forEach(tbody => {
            console.log('entro al tbody');

            tbody.remove();
        });


        mostarComidas();


    }



    //////////////////Elimina el contador si es ==0 //////////////////////////////

    let cantidadTotal = () => {
        const carritoStorage = JSON.parse(localStorage.getItem('carrito')) || [];

        const cantidadTotal = carritoStorage.reduce((acumulador, producto) => acumulador + producto.cantidad, 0)
        console.log(cantidadTotal);

        if (cantidadTotal == 0) {
            contador.style.display = 'none';
            document.getElementById('subtotal-total').innerText=`$0`;
            document.getElementById('total-gral').innerText=`$0`;
        } else {
            contador.style.display = 'block'
            contadorCarrito = cantidadTotal
            contador.textContent = contadorCarrito

        }

    }
    cantidadTotal()







    botonFinCompra.addEventListener('click', () => {
        alert('COMPRA EXITOSA');
        // Limpiar el carrito después de finalizar la compra
        localStorage.removeItem('carrito');

        // Redirigir al inicio despues de 4 segundos
        setTimeout(() => {
            window.location.href = 'productos.html';
        }, 2000);


    });




})