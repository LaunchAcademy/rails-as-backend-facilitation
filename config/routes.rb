Rails.application.routes.draw do
  root 'static_pages#index'

  # routes that need to be setup to match React Router routes
  get '/tasks', to: "static_pages#index"
  get '/starships', to: "static_pages#index"



  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :tasks, only: :index
    end
  end
end
