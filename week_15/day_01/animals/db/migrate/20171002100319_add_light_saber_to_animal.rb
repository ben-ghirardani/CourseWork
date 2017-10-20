class AddLightSaberToAnimal < ActiveRecord::Migration
  def change
    add_column :animals, :LightSaber, :string
  end
end
