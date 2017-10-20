class FamousHorsesController < ApplicationController

    def animal_params
        params.require(:famous_horse).permit( [ :name, :colour ] )
    end

    def index
        famous_horses = Horse.all
        render :json => famous_horses
    end

    def show
        famous_horse = Horse.find(params[:id])
        render :json => famous_horse
    end

    def create
        famous_horse = Horse.create( animal_params )
        render :json => famous_horse
    end

    def update
        famous_horse = Horse.find(params[:id])

        if famous_horse.update_attributes(animal_params)
            render :json => famous_horse
        else
            render :json => { status: :update_failed }
        end
    end

    def destroy
        famous_horse = Horse.find( params[:id] )

        if famous_horse.destroy!
            render :json => { status: :success }
        else
            render :json => { status: :delete_failed }
        end
    end

end