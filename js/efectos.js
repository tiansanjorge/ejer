$(document).ready(function(){

	var inicio = $('#inicio').offset().top,
		quienes = $('#quienes').offset().top,
		eligen = $('#eligen').offset().top,
		contacto = $('#contacto').offset().top;

	$('#btn-inicio').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: inicio -100
		}, 500);
	});

	$('#btn-quienes').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: quienes -100
		}, 500);
	});
	
	$('#btn-eligen').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: eligen -100
		}, 500);
	});

	$('#btn-contacto').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contacto -100
		}, 500);
	});

	$('#btn-contacto2').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: inicio -100
		}, 500);
	});

	$('#btn-iniciox').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: inicio
		}, 500);
	});

	$('#btn-quienesx').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: quienes
		}, 500);
	});
	
	$('#btn-eligenx').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: eligen
		}, 500);
	});

	$('#btn-contactox').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contacto
		}, 500);
	});

	$("#sendMailForm").submit(function(e){
		e.preventDefault();
		Swal.fire({
		  icon: 'success',
		  title: 'Éxito',
		  text: 'Consulta enviada correctamente',
		});
		$('#sendMailForm').trigger("reset");
		$.ajax({
		  type: 'POST',
		  url: 'https://mandrillapp.com/api/1.0/messages/send.json',
		  data: {
		    'key': 'NzFIugG_1HSaBK8S2HPQwQ',
		    'message': {
		      'from_email': 'emiliano.rot@ejer.com.ar',
		      'to': [
		          {
		            'email': 'emiliano.rot@ejer.com.ar',
		            'type': 'to'
		          },
		        ],
		      'autotext': 'true',
		      'subject': 'Consulta recibida - EJER.COM.AR',
		      'html': 'Nombre: ' + $("#name").val() + '<br> Telefono: ' + $("#contact").val() + '<br> Mail: ' + $("#mail").val() + '<br><br> Consulta: ' + $("#message").val(),
		    }
		  }
		 }).done(function(response) {
		   console.log(response); 
		 	});
	});	 

	

	$("#sendMailForm2").submit(function(e) {
		e.preventDefault();
		Swal.fire({
		  icon: 'success',
		  title: 'Éxito',
		  text: 'Consulta enviada correctamente',
		});
		$('#sendMailForm2').trigger("reset");
		$.ajax({
		  type: 'POST',
		  url: 'https://mandrillapp.com/api/1.0/messages/send.json',
		  data: {
		    'key': 'NzFIugG_1HSaBK8S2HPQwQ',
		    'message': {
		      'from_email': 'emiliano.rot@ejer.com.ar',
		      'to': [
		          {
		            'email': 'emiliano.rot@ejer.com.ar',
		            'type': 'to'
		          },
		        ],
		      'autotext': 'true',
		      'subject': 'Consulta recibida - EJER.COM.AR',
		      'html': 'Nombre: ' + $("#name2").val() + '<br> Telefono: ' + $("#contact2").val() + '<br> Mail: ' + $("#mail2").val() + '<br><br> Consulta: ' + $("#message2").val(),
		    }
		  }
		 }).done(function(response) {
		   console.log(response); 
		 	});
	}); 

});