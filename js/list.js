var employees;
var urlGeneral = 'https://edganime96.github.io/jsonlist';

function cargarEmpleados()
{
	var url = urlGeneral + '../ajax/employees3.json';
	var $empleados = $("#empleados");
	$empleados.find('option').remove().end();
	$empleados.append($("<option />").val(-1).text('Seleccionar'));
	$.getJSON(url, function(data){
		employees = data.employees;
		$.each(employees, function(key, val){
		  $empleados.append($("<option />").val(key).
			  text(val.name).attr("data-age",val.age).
			  attr("data-name",val.name));
		});
	});
}	
function mostrarMascota()
{	
	var $mascotas = $("#mascotas");
	var $empleados = $("#empleados");
	var keyEmp = eval($empleados.val());
	$mascotas.find('option').remove().end();
	$mascotas.append($("<option />").val(-1).text('Seleccionar'));
	if(employees !== null){
		$.each(employees, function(key, val){
			if(keyEmp === key){
				$.each(val.pets, function(petkey, petVal){
					$mascotas.append($("<option />").val(petkey).text(
							petVal.name + '(' + petVal.animal + ')'));
				});
			}
		});
	}
}

function mostrarMascotaTable()
{
	var $empleados = $("#empleados");
	var $tbMascotas = $("#tbMascotas");
	var keyEmp = eval($empleados.val());
	$tbMascotas.find('tr').remove().end();
	$tbMascotas.append($('<tr>').append(
					$('<th>').text("Animal"),
					$('<th>').text("Nombre")
				));
	if(employees !== null){
		$.each(employees, function(key, val){
			if(keyEmp === key){
				$.each(val.pets, function(petkey, petVal){
					$tbMascotas.append($('<tr>').append(
									$('<td>').text(petVal.animal),
									$('<td>').text(petVal.name)
								));
				});
			}
		});
	}
}

function mostrarInfoEmpleado()
{
	var $empleados = $("#empleados");
	$('#sNombre').text($empleados.find(':selected').attr('data-name'));
	$('#sEdad').text($empleados.find(':selected').attr('data-age'));
}
