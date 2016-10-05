$(document).ready(function() {

  $("#create-idea").on('click', function(){
    var formattedIdea(idea){

    }

    var ideaParams = { idea:{
                        title: $("#idea-title").val(),
                        body: $("#idea-body").val(),
                      }}
    $.ajax({
      url: '/api/v1/ideas',
      data: ideaParams,
      type: 'POST',
      success: function(idea){ //this function is the same and .then(createIdeaHTML) passing data implicitly
       //   createIdeaHTML(data);
       // };
      }
    })
  })
