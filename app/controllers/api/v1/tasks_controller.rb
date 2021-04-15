class Api::V1::TasksController < ApiController

  def index
    tasks = Task.all 
    render json: tasks
  end

  # example of show endpoint
  def show
 
  end

  def create 
    params 
  end

end
