class AnimalsController < ApplicationController

    def animal_params
        params.require(:animal).permit([:name, :diet])
    end

    def index
        @animals = Animal.all
        render :json => @animals
    end

    def show
        animal = Animal.find(params[:id])
        render :json => animal
    end

    def create
        animal = Animal.create(animal_params)
        render :json => animal
    end

    def update
        animal = Animal.find(params[:id])
        if animal.update_attributes(animal_params)
            render :json => animal
        else
            render :json => {status: :update_failed}
        end
    end

    def destroy
        animal = Animal.find(params[:id])
        if animal.destroy! 
            render :json => {status: :success}
        else
            render :json => {status: :delete_failed}
        end
    end

end