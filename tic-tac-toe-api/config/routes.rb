Rails.application.routes.draw do
  scope "/api/v1" do
    resources :games, only: [:index, :show, :create, :destroy]
  end
end
