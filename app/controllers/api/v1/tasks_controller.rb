class Api::V1::TasksController < ApiController
  # protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Task.all
  end

  # example of show endpoint
  def show
    task = Task.find(params[:id])
    render json: task
  end

end
