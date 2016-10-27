$(document).ready(function() {

  $("#create-idea").on('click', function(){

    var ideaParams = { idea:{
      title: $("#idea-title").val(),
      body: $("#idea-body").val()
    }}

    $.post('/api/v1/ideas', ideaParams)
    .then(createIdeaHTML)
    .then(renderIdea)
    .fail(handleError)

    e.preventDefault();
    clearInputFields();
  });
});
