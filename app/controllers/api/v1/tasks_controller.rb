class Api::V1::TasksController < ApiController


  def index
    tasks = Task.all 
    render json: tasks
  end

  # def show
  # end
  # etc..

  def create 
    task = Task.new(task_params)

    if task.save 
      render json: task
      # no redirect!
    else 
      render json: { message: task.errors.full_messages }, status: "400"
    end
  end

  def task_params 
    params.permit(:name)
  end


end
