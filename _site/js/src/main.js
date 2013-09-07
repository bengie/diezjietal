var target = $('#target'),
	output = '<ul>';

$.ajax({
	url: 'js/example.json',
	datatype: 'json',
	success: function(resp) {
		for (var i = resp.result.length - 1; i >= 0; i--) {
			output+='<li>' + resp.result[i].name + ' ' + resp.result[i].company + '</li>';
		};
		output+='</ul>';
		target.html(output);
	}

});
