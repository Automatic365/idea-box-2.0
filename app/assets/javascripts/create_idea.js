$(document).ready(function() {

  $("#create-idea").on('click', function(){

    var ideaParams = { idea:{
      title: $("#idea-title").val(),
      body: $("#idea-body").val()
    }}

    // function formattedIdea(idea){
    //   return "<tr data-id=" + idea.id
    //   + " id='idea'>" + "<td contenteditable='true' class='title-text'>"
    //   + newIdea.title + "</td>" + "<td contenteditable='true' class='body-text'>"
    //   + truncateBody(newIdea.body) + "</td>" + "<td class='quality-text'>"
    //   + newIdea.quality
    //   + "</td>"
    //   + "<td><input type='button' class='upvote-idea' value='Thumbs Up'><input type='button' class='downvote-idea' value='Thumbs Down'></td><td><input type='button' value='Delete' class='destroy-idea'></td></tr>";
    // }

    $.ajax({
      url: '/api/v1/ideas',
      data: ideaParams,
      type: 'post',
      success: function(idea){
        var formattedIdea = "<tr data-id=" + idea.id
        + " id='idea'>" + "<td contenteditable='true' class='title-text'>"
        + idea.title + "</td>" + "<td contenteditable='true' class='body-text'>"
        + idea.body + "</td>" + "<td class='quality-text'>"
        + idea.quality
        + "</td>"
        + "<td><input type='button' class='upvote-idea' value='Thumbs Up'><input type='button' class='downvote-idea' value='Thumbs Down'></td><td><input type='button' value='Delete' class='destroy-idea'></td></tr>";
        $(".all-ideas").prepend(formattedIdea)
        $(".idea-title").val("")
        $(".idea-body").val("")
      }
    })
  })
})
