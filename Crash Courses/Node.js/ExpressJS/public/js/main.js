$(document).ready(function (argument) {
	$('.deleteUser').on('click', deleteUser);
});

function deleteUser(){
	var confirmation = confirm('Are you Sure?');

	if(confirmation){
		$.ajax({
			type: 'DELETE',
			url: '/users/delete/' + $(this).data('id')
		}).done(function(response){
			
		});

		window.location.replace('/');
	} else{
		return false;
	}
}