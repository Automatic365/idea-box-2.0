class Api::V1::IdeasController < ApplicationController  # ~> NameError: uninitialized constant Api

  def index
    render json: Idea.all
  end

  def create
    render json: Idea.create(idea_params)
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body, :quality)
  end

end

# ~> NameError
# ~> uninitialized constant Api
# ~>
# ~> /Users/Automatic365/turing/1605/mod_4/projects/ideabox_2.0/app/controllers/api/v1/ideas_controller.rb:1:in `<main>'
