class LikesController < ApplicationController
  def create
    @like = Like.new(:feed_id => params[:feed_id])
    if @like.save
      render :json => @like
    else
      render :json => @like.errors.full_messages
    end
  end
  
  def destroy
    Like.destroy_all(:feed_id => params[:feed_id])
    render :json => {}
  end
end
