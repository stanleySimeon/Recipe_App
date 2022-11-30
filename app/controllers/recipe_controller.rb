class RecipeController < ApplicationController
  def load_and_authorize_resource
    @recipe = Recipe.find(params[:id])
    authorize! :manage, @recipe
  end

  def index
    @recipes = current_user.recipes.includes(:user, :recipe_foods).order(created_at: :desc)
  end

  def show
    @recipe = Recipe.includes(:recipe_foods).find(params[:id])
    @shopping_list = Food.all
  end

  def new
    @recipe = Recipe.new
    @params = params
  end

  def create
    @recipe = current_user.recipes.new(recipe_params)
    if @recipe.save
      redirect_to user_recipe_index_path
    else
      flash['alert'] = 'There was an error in adding recipe item'
      render :new
    end
  end

  def destroy
    @recipe = Recipe.find(params[:id])
    @recipe.destroy
    if @recipe.destroy
      flash[:notice] = 'Recipe deleted successfully!'
      redirect_to user_recipe_path(current_user)
    elsif @recipe.errors.any?
      flash[:alert] = 'There was an error in deleting recipe item'
      render :show
    end
  end

  def toggle_public
    @recipe = set_recipe
    @recipe.public = !@recipe.public
    text = 'private'
    text = 'public' if @recipe.public
    if @recipe.save
      flash[:success] = "#{@recipe.name} is now #{text}!"
    else
      flash[:fail] = @recipe.public
    end
    redirect_to recipe_path(@recipe.id)
  end

  def public_recipes
    @recipes = Recipe.where(public: true)
  end

  private

  def set_recipe
    @recipe = Recipe.find(params[:id])
  end

  def recipe_params
    params.require(:recipe).permit(:name, :preparation_time, :cooking_time, :description, :public)
  end
end
