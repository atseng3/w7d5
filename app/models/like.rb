class Like < ActiveRecord::Base
  attr_accessible :feed_id
  
  validates :feed_id, :presence => true
end
