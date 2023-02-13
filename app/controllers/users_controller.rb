class UsersController < ApplicationController
 load_and_authorize_resource :class => UsersController

 def index
  @users = User.all
 end
end
