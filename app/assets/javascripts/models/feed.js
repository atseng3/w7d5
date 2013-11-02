NewReader.Models.Feed = Backbone.Model.extend({
	urlRoot: "/feeds",
	
	like: function () {
		var feed = this;
		$.ajax({
			type: "POST",
			url: "/feeds/" + this.id + "/like",
			success: function (data) {
				feed.set("liked", true)
			}
		});
	},
	
	unlike: function () {
		var feed = this;
		$.ajax({
			type: "DELETE",
			url: "/feeds/" + this.id + "/like",
			success: function (data) {
				feed.set("liked", false)
			}
		});
	},
	
	entries: function () {
		if (!this._entries) {
			this._entries = new NewReader.Collections.Entries([], { feed: this });
		}
		
		return this._entries;
	},
	
	parse: function (serverAttributes, options) {
		this.entries().reset(serverAttributes.entries);
		delete serverAttributes.entries;
		
		return serverAttributes;
	},
	
	validate: function () {
		var errors = [];
		
		if (this.get("title").length == 0) {
			errors.push("Title can't be blank");
		}
		
		return errors.length == 0 ? undefined : errors;
	}
});