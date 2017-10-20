class PizzaShopController < ApplicationController

    def index
        @pizza_shop = [ { name: "Cheese" }, { name: "Tomato" } ]
        render :json => @pizza_shop
    end

end