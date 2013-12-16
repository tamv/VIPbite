class MigrateDetails < ActiveRecord::Migration
  def change
  	create_table :details do |t|
  		t.string :detailId
  		t.text :promo
  		t.text :promoDetail
  		t.string :reservation
      t.string :operatinghour
  		t.string :restaurantlink
  		t.text :comment
  		t.string :imgFolder
  		t.string :urbanspoon
      t.string :urbanspoonreview
  		t.timestamp
  	end
  end
end
