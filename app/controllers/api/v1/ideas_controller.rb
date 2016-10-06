class Api::V1::IdeasController < ApplicationController

  def index
    render json: Idea.all
  end

  def create
    render json: Idea.create(idea_params)
  end

  def destroy
    render json: Idea.destroy(params[:id])
  end

  def update
    idea = Idea.find(idea_params[:id])
    render json: idea.update(idea_params)
  end

  private

  def idea_params
    params.require(:idea).permit(:id, :title, :body, :quality)
  end

end
