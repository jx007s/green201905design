$(document).ready(function(){
	

	var no=0;
	
	$("#addNode").on({
		click : function (){
			
		
			
		   var ee = $("<div></div>");

		   ee.html(no+":"+$("#content").val());  
		   $("#content").val("");
		   $("#content").focus();
		   
		   
		    ee.addClass("child");  //클래스 추가
		    ee.attr("id","child_"+no);
		    
		    var btn = $('<input type="button">')
		    btn.attr("delId","child_"+no);
		    btn.val("삭제");
		    ee.append(btn);
		    
		    btn.on({
				click : function (){
				   $('#'+$(this).attr('delId')).remove();

				}
			});

		    $("#nodes").append(ee);
 
		    no++;
		    
		   
		}
	});
	
	


	
});

