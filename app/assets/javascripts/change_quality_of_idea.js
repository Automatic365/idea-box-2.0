$(document).ready(function() {
  var ideaQuality = ['swill', 'plausible', 'genius']

  $("#all-ideas").on('blur', ".title-text" ,function(){
    var ideaId = $(this).parents('tr').data('id')
    var ideaParams = { idea: {
      id: ideaId,
      title: $(this).text()
    }}
    $.ajax({
      type: 'put',
      url: '/api/v1/ideas/' + ideaId,
      data: ideaParams
    })
  })

  $("#all-ideas").on('blur', ".body-text" ,function(){
    var ideaId = $(this).parents('tr').data('id')
    var ideaParams = { idea: {
      id: ideaId,
      body: $(this).text()
    }}
    $.ajax({
      type: 'put',
      url: '/api/v1/ideas/' + ideaId,
      data: ideaParams
    })
  })

  $("#all-ideas").on('click', '.upvote-idea', function(){
    var ideaId = $(this).parents('tr').data('id')
    var ideaRow = $(this).parents('tr')
    var currentQuality = $(this).closest('tr').children('.quality-text').text()
    var qualityIndex = ideaQuality.indexOf(currentQuality)

    if(qualityIndex !== ideaQuality.length - 1) {
      var newQuality = ideaQuality[qualityIndex + 1]
      var ideaParams = {idea: {id: ideaId,
        quality: newQuality}}

        $.ajax({
          type: 'put',
          url: '/api/v1/ideas/' + ideaId,
          data: ideaParams,
          success: function(){
            ideaRow.children('.quality-text').html(newQuality)
          }
        })
      }
    })
  })
