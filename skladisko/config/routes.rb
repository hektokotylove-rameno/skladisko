Skladisko::Application.routes.draw do
  
  post "params" => 'params#show'
  get "params" => 'params#show'
  get "locations" => "locations#index"
  get "groups" => 'groups#index'
  get "settings" => 'settings#index'
  get "settings/restore" => 'settings#select_file'
  post "settings/restore" => 'settings#restore'
  patch "settings" => 'settings#save'
  get 'messages' => 'messages#index'
  get 'messages/check_expired' => 'messages#check_expired'
  get 'users/:id/change_password' => 'users#change_password'
  get 'chemicals/units' => 'chemicals#get_units'
  
  get "projects/index"
  get "operations/projects" => 'operations#options_projects'
  get "operations/chemicals" => 'operations#options_chemicals'
  get "operations/users" => 'operations#options_users'
  get "operations/protocols" => 'operations#options_protocols'
  resources :operations
  resources :chemicals
  resources :users
  resources :projects
  
  get 'operations/new/:kind' => 'operations#new'
  get 'protocols' => 'operations#index', :protocols => true
  patch 'operations' => 'operations#add_from_protocol'
  get 'login' => 'sessions#login'
  post 'login' => 'sessions#check_login'
  get 'who' => 'users#who'
  get 'logout' => 'sessions#logout'
  
  
  
  root 'chemicals#index'
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
