$(function () {
    $('#listaIncidentes').on('click', function () {
        $.ajax({
            url: '/incidente/',
            headers: { "Authorization": 'token ' + localStorage.getItem("jwt")},
            success: function(data) {
                console.log(data.results)
                let tbody = $('tbody')
                tbody.html('');
                incidentes = data.results
                incidentes.forEach(incidente => {
                    tbody.append(`
                        <tr>
                        <td class='id'>${incidente.ID}</td>
                        <td>
                        <input type="text" class="Fecha" value="${incidente.Fecha}" required="required"></td>
                        <td>
                        <input type="text" class="Descripcion" value="${incidente.Descripcion}" required="required" pattern="[A-Za-z0-9]{1,255}"></td>
                        <td>
                        <button class="update-button"> Update </button>
                        <button class="delete-button"> Delete </button>
                        </td>
                        </tr>
                        `)
                })
              }
        })
    })
    $('#productForm').on('submit', function (e) {
        e.preventDefault()
        let Fecha = $('#Fecha')
        let Descripcion = $('#Descripcion')
        $.ajax({
            url: '/incidente/',
            method: 'post',
            headers: { "Authorization": 'token ' + localStorage.getItem("jwt")},
            data: {
                Fecha: Fecha.val(),
                Descripcion: Descripcion.val()
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("Error al Insertar el Registro");
                $('#listaIncidentes').click();
            },
            success: function (response) {
                $('#listaIncidentes').click()
            }
        })
    })
    $('table').on('click', '.update-button', function () {
        let row = $(this).closest('tr')
        let id = row.find('.id').text()
        let Fecha = row.find('.Fecha').val()
        let Descripcion = row.find('.Descripcion').val()

        $.ajax({
            url: '/incidente/' + id+'/',
            method:'patch',
            headers: { "Authorization": 'token ' + localStorage.getItem("jwt")},
            data: {
                Fecha:Fecha,
                Descripcion:Descripcion
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("Error al Actualizar el Registro");
                $('#listaIncidentes').click();
            },
            success:function(response){
                console.log(response)
                $('#listaIncidentes').click();
            }
            
        })
    })
    $('table').on('click','.delete-button', function(){
        let row = $(this).closest('tr') // obtengo toda la fila que seleccione
        let id = row.find('.id').text();
        $.ajax({
            url:'/incidente/'+id+'/',
            method:'delete',
            headers: { "Authorization": 'token ' + localStorage.getItem("jwt")},
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("Error al Borrar el Registro");
                $('#listaIncidentes').click();
            },
            success: function(response){
                console.log(response)
                $('#listaIncidentes').click();
            }
        })
    })
})