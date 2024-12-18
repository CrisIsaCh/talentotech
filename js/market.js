document.addEventListener('DOMContentLoaded', () => {
    const tableContenedor = document.getElementById('table');
    const carritoStorage = JSON.parse(localStorage.getItem('carrito'));
    console.log(carritoStorage);
    const tablaContenedorMovil = document.getElementById('tabla-mobile');
    let contador=document.getElementById('contador');
    let precio = 6200;
    let cantidad=1;
    let subtotalProducto=0;
    let subtotalGral=0;
    const spanSubtotal=document.getElementById('subtotal-total');
    const spanTotalGral=document.getElementById('total-gral')
    console.log(spanSubtotal.textContent);
    const botonFinCompra = document.getElementById('finalizar-compra');
    

    carritoStorage.forEach(elemento => {
        subtotalProducto=(precio*cantidad)
        
        console.log(subtotalGral);
        

        const tbodyDiv = document.createElement('tbody');
        tbodyDiv.innerHTML = `
            <tr>
                <td><button class="btn-eliminar"><i class="fa-solid fa-x"></i></button></td>
                <td><img class="producto-img"
                    src="${elemento.image}"
                     alt="Eliminar" class="btn-eliminar"></td>
                <td><a href="">${elemento.name}</a></td>
                <td>$${precio}</td>
                <td>
                    <div class="contenedor-cantidad">
                         <button>-</button>
                         <input type="number" value="${cantidad}" min="1">
                         <button>+</button>
                    </div>
                </td>
                <td>$${subtotalProducto}</td>
            </tr>
            `;


        tableContenedor.appendChild(tbodyDiv);
        subtotalGral+=subtotalProducto;
        spanSubtotal.textContent=`$${subtotalGral}`;
        spanTotalGral.textContent=`$${subtotalGral}`

        //////////////////tabla mobile////////////////////////////////////////

        const itemsDiv = document.createElement('div');
        itemsDiv.className = 'items';
        itemsDiv.innerHTML = `
          <img src="${elemento.image}"
                        alt="">
                    <div class="mobile">
                        <div class="desc-producto">
                            <span class="mobile-producto">${elemento.name}</span>
                            <button><i class="fa-solid fa-x"></i></button>
                        </div>
                        <div class="items-mobile">
                            <strong class="columnas">Precio</strong>
                            <span>$ ${precio}</span>
                        </div>
                        <div class="input-cantidad">
                            <strong class="columnas">Cantidad</strong>
                            <div class="cantidad">
                                <button>-</button>
                                <input type="number" value="${cantidad}" min="1">
                                <button>+</button>
                            </div>
                        </div>
                        <div class="items-mobile">
                            <strong class="columnas">Subtotal</strong>
                            <span>$${subtotalProducto}</span>
                        </div>

                    </div>
                    `;
        tablaContenedorMovil.appendChild(itemsDiv)
    });
    

    if (carritoStorage) {
        contadorCarrito = carritoStorage.length
        contador.textContent = contadorCarrito
    }
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