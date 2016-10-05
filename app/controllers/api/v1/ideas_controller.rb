class Api::V1::IdeasController < ApplicationController

  def index
    render json: Idea.all
  end

  def create
    render json: Idea.create(idea_params)
  end

end
