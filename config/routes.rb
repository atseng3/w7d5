NewReader::Application.routes.draw do
  resources :feeds, only: [:index, :create] do
    resources :entries, only: [:index]
    resource :like, only: [:create, :destroy]
  end

  root to: "feeds#index"
end
