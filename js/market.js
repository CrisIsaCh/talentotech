document.addEventListener('DOMContentLoaded', () => {
    const tableContenedor = document.getElementById('table');
    const carritoStorage = JSON.parse(localStorage.getItem('carrito'));
    console.log(carritoStorage);
    const tablaContenedorMovil = document.getElementById('tabla-mobile')
    carritoStorage.forEach(elemento => {

        const tbodyDiv = document.createElement('tbody');
        tbodyDiv.innerHTML = `
            <tr>
                <td><button class="btn-eliminar"><i class="fa-solid fa-x"></i></button></td>
                <td><img class="producto-img"
                    src="${elemento.image}"
                     alt="Eliminar" class="btn-eliminar"></td>
                <td><a href="">${elemento.name}</a></td>
                <td>$6.600</td>
                <td>
                    <div class="contenedor-cantidad">
                         <button>-</button>
                         <input type="number" value="1" min="1">
                         <button>+</button>
                    </div>
                </td>
                <td>$6.600</td>
            </tr>
            `;
        tableContenedor.appendChild(tbodyDiv)

        const itemsDiv=document.createElement('div');
        itemsDiv.className='items';
        itemsDiv.innerHTML=`
          <img src="${elemento.image}"
                        alt="">
                    <div class="mobile">
                        <div class="desc-producto">
                            <span class="mobile-producto">${elemento.name}</span>
                            <button><i class="fa-solid fa-x"></i></button>
                        </div>
                        <div class="items-mobile">
                            <strong class="columnas">Precio</strong>
                            <span>$ 49.506</span>
                        </div>
                        <div class="input-cantidad">
                            <strong class="columnas">Cantidad</strong>
                            <div class="cantidad">
                                <button>-</button>
                                <input type="number" value="1" min="1">
                                <button>+</button>
                            </div>
                        </div>
                        <div class="items-mobile">
                            <strong class="columnas">Subtotal</strong>
                            <span>$49.950</span>
                        </div>

                    </div>
                    `;
                    tablaContenedorMovil.appendChild(itemsDiv)
    });





})