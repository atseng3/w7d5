NewReader.AppRouter = Backbone.Router.extend({
	routes: {
		"": "showFeedIndex",
		"feeds/:id": "showFeedDetail"
	},
	
	showFeedIndex: function () {
		var indexView = new NewReader.Views.FeedIndex({
			collection: NewReader.feeds
		});
		$(".sidebar").html(indexView.render().$el)
	},
	
	showFeedDetail: function (id) {
		var detailView = new NewReader.Views.FeedDetail({
			model: NewReader.feeds.get(id)
		});
		$(".content").html(detailView.render().$el)
	},
	
	_swapView: function (newView) {
		if (this._preView) {
			this._preView.remove();
		}
		this._preView = newView;
		newView.render();
		$(".content").html(newView.$el);
	}
});