$(document).ready(function(){
  $('.delete-crud').on('click', function(e){
    $target = $(e.target);
    const id = $target.attr('data-id');

    $.ajax({
      type: 'DELETE',
      url: '/newer/'+id,
      success: function (response){
        alert('Deleting article');
        window.location.href='/';
      },
      error: function(err){
        console.error(err);
      }
    });
  });
});