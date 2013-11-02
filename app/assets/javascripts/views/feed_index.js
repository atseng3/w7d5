NewReader.Views.FeedIndex = Backbone.View.extend({
	template: JST["feeds/index"],
	
	initialize: function (options) {
		this.listenTo(this.collection, "add remove sync change", this.render)
	},

	events: {
		"click .refresh": "refreshFeeds",
		"click .like": "likeFeed",
		"click .unlike": "unlikeFeed"
	},
	
	likeFeed: function (event) {
		event.preventDefault();
		var feed = this.collection.get($(event.target).attr("data-id"));
		feed.like();
	},
	
	unlikeFeed: function (event) {
		event.preventDefault();
		var feed = this.collection.get($(event.target).attr("data-id"));
		feed.unlike();
	},
	
	refreshFeeds: function () {
		this.collection.fetch({
			remove: false,
			success: function () {
				alert("you refreshed!")
			}
		});
	},
	
	render: function (){
		var renderedContent = this.template({
			title: "Feeds Feeds Feeds",
			feeds: this.collection
		});
		this.$el.html(renderedContent);
		return this;
	}
});