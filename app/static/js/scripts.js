$(document).ready(function(){
	$(document.body).on('click', '.editPost', function(e){
		var postID = $(this).attr('id');
		$('#post-body').val($('#post'+postID).text());
		$("#editPostModal").modal();
		$(function() {
    $('#save-post-edit').click(function(){
		$.post('/postEdit', { 
			id: postID, 
			body: $('#post-body').val()
		}, function() {
			$('#editPostModal').modal('hide');
			location.reload(true);
		}).fail(
			$('#post-edit-error').show()
		);
    });
});
	});
});