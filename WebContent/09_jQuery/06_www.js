

function aaa(){
	var ee0 = $('<div>와 append 이다</div>')
	var ee1 = $('<div>와 appendTo 이다</div>')
	$('#cons').append(ee0);
	ee1.appendTo('#cons');
	
	var ee2 = $('<div>와 prepend 이다</div>')
	var ee3 = $('<div>와 prependTo 이다</div>')
	$('#cons').prepend(ee2);
	ee3.prependTo('#cons');
	
	var ee4 = $('<div>와 after 이다</div>')
	var ee5 = $('<div>와 insertAfter 이다</div>')
	$('#cons').after(ee4);
	ee5.insertAfter('#cons');
	
	var ee6 = $('<div>와 before 이다</div>')
	var ee7 = $('<div>와 insertBefore 이다</div>')
	$('#cons').before(ee6);
	ee7.insertBefore('#cons');
	
	ee3.remove();   //와 prependTo 이다 삭제
	
}





$(document).ready(aaa);