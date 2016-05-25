/* global app */
'use strict';
app
.service('bookmarkService',['_', function(_){

	var cnewsBookmarks = (window.localStorage.cnewsBookmarks)? JSON.parse(window.localStorage.cnewsBookmarks) : [];
	function _bookmark() {
		var arg = arguments[0];

		if(typeof arg === 'number'){ 
			cnewsBookmarks = _.without(cnewsBookmarks, _.findWhere(cnewsBookmarks, {id: arg}));
		}

		if(typeof arg === 'object'){
			var existingPost = _.find(cnewsBookmarks, function(post){ return post.id === arg.id; });
			// console.log(existingPost);

			if (!existingPost) {
				cnewsBookmarks.push({
					id: arg.id,
					heading : arg.heading,
					image : arg.image,
					likes : arg.likes
				});
			}			
		}

		localStorage.cnewsBookmarks = JSON.stringify(cnewsBookmarks);
		return cnewsBookmarks;
	}

	return{
		bookmark: _bookmark
		
	};

}]);
