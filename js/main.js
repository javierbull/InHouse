"use strict";

$(document).ready(function() {

  // SHOW-HIDE PASSWORD
  $(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  // END SHOW-HIDE PASSWORD

  // Admin Dashboard  active item sidebar
  $(".sidebar-admin button").click(function() {
    $(".active").removeClass("active-item-sidebar");
  });
  // Admin Dashboard  active item sidebar

  // Admin panel
  $("#toggle-btn-sidebar").click(function() {
    $("#admin-panel").toggleClass("ml-panel ml-panel-0");
  });
  // End admin panel

  // admin btn sidebar togle menu
  const btnToggle = document.querySelector('#toggle-btn-sidebar');

  btnToggle.addEventListener('click', function() {
    console.log('clik')
    document.getElementById('sidebar-admin').classList.toggle('active');
    console.log(document.getElementById('sidebar-admin'))
  });

  // End admin btn sidebar togle menu


  // Datatables
  $(document).ready(function() {
    $('#tableEjemplo').DataTable();
    $('#tableSalesSummary').DataTable();
  });

  $('.dtable').DataTable({
    // "scrollX": true,
    //para cambiar el lenguaje a español
    "language": {
      "lengthMenu": "Mostrar _MENU_ filas",
      "zeroRecords": "No se encontraron resultados",
      "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
      "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
      "infoFiltered": "(filtrado de un total de _MAX_ registros)",
      "sSearch": "Buscar:",
      "oPaginate": {
        "sFirst": "Primero",
        "sLast": "Último",
        "sNext": "Siguiente",
        "sPrevious": "Anterior"
      },
      "sProcessing": "Procesando...",
    }

  });

  // End datatables

  // SHOW HIDE panels
  $(".showNuevaVenta").click(function() {
    $("#sale-panel").show();
    $("#home-panel").hide();
  });

  $(".showHome").click(function() {
    $("#sale-panel").hide();
    $("#home-panel").show();
  });
  // END SHOW HIDE PANELS


  // ACTIVAR SELECT 2
  $('#search-clients').select2({
    theme: "bootstrap-5",
    width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
    placeholder: $(this).data('placeholder'),
  });

  $('#select-products').select2({
    theme: "bootstrap-5",
    width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
    placeholder: $(this).data('placeholder'),
  });

    // END ACTIVAR SELECT 2


});
