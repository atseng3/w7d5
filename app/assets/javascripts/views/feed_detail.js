NewReader.Views.FeedDetail = Backbone.View.extend({
	template: JST["feeds/detail"],
	
	render: function (){
		var renderedContent = this.template({
			feed: this.model,
			entries: this.model.entries()
		});
		this.$el.html(renderedContent);
		return this;
	}
});