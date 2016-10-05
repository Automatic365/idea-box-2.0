$(document).ready(function() {

$("#all-ideas").on('click', '.delete-idea', function(){
  var $idearow = $(this).parents('tr')
  var ideaId = $idearow.data('id')

  $.ajax({
    type: 'delete',
    url: '/api/v1/ideas/' + ideaId,
    success: function() {
      $idearow.remove()
      }
    })
  })
})
