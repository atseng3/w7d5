class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :feed_id, :null => false

      t.timestamps
    end
  end
end
