window.NewReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		NewReader.feeds = new NewReader.Collections.Feeds();
		NewReader.feeds.fetch({
			success: function () {
				new NewReader.AppRouter();
				Backbone.history.start();
			}
		});
  }
};

$(document).ready(function(){
  NewReader.initialize();
});
