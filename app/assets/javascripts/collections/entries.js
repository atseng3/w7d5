NewReader.Collections.Entries = Backbone.Collection.extend({
	url: function () {
		return "/feeds/" + this.model.id + "/entries"
	}
});