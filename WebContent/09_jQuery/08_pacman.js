$(document).ready(function(){
	

	init();
	
	function init(){
		
		$("#area").append($('<div id="pacman"></div>'));
		
		
		areaW = eval($("#area").css('width').substring(0,$("#area").css('width').length-2));
		areaH = eval($("#area").css('height').substring(0,$("#area").css('height').length-2));

		pacW = eval($('#pacman').css('width').substring(0,$('#pacman').css('width').length-2));
		pacH = eval($('#pacman').css('height').substring(0,$('#pacman').css('height').length-2));
		
		pacX=areaW/2-pacW/2; 
		pacY=areaH/2-pacH/2;
		
		pacMove();
		
		em = enermyInit();
		emeChk = setInterval(emeMove, 50);
		
	}
	
	

	function enermyInit(){
		var res =[];
		
		cnt = $('#area').attr('cnt');

		for(var i =0; i<cnt ; i++){
			var buf = {};
			
			//:100, :500, :8, :3
			buf['emeLocX'] = Math.random()*areaW/2+100;
			buf['emeLocY'] = Math.random()*50+(areaH*3/5);
			buf['emeX'] = (Math.random()*5+3)*[-1,1][Math.floor(Math.random()*2)];
			buf['emeY'] = (Math.random()*5+3)*[-1,1][Math.floor(Math.random()*2)];

			var buf2 =$('<div id="en'+i+'" class="enermy"></div>');
			$("#area").append(buf2);
			
			
			emeW = eval(buf2.css('width').substring(0,buf2.css('width').length-2));
			emeH = eval(buf2.css('height').substring(0,buf2.css('height').length-2));
			
			

			
			res[i] = buf;
		}
		
		return res;
	}
	
	
	

	function emeMove(){
		
		
		for(var i =0 ; i<em.length; i++){
			
			em[i].emeLocX+=em[i].emeX;
			em[i].emeLocY+=em[i].emeY;
			
			
			
			if(em[i].emeLocX<0 || em[i].emeLocX+emeW>areaW)
				em[i].emeX*=-1;
			
			if(em[i].emeLocY<0 || em[i].emeLocY+emeH>areaH)
				em[i].emeY*=-1;
				
			
				
			
			
			$('#en'+i).css({
				'left':em[i].emeLocX+'px'
				,'top':em[i].emeLocY+'px'
			})
		}
		
		kissChk();
		
	}


	function kissChk(){
		for(i in em){
			
			if(pacX+pacW > em[i].emeLocX && pacX < em[i].emeLocX+emeW &&
					pacY+pacH > em[i].emeLocY && pacY < em[i].emeLocY+emeH){
				alert("게임오버");
				clearInterval(emeChk);
				break;
			}
		}
	}


	


	function pacMove(){
		
		if(pacX<0)
			pacX=0;
		if(pacX+pacW>areaW)
			pacX=areaW-pacW;
		if(pacY<0)
			pacY=0;
		if(pacY+pacH>areaH)
			pacY=areaH-pacH;
		
		$('#pacman').css({
			'left':pacX+'px',
			'top':pacY+'px'
		})
	}

	$('body').on({
			keydown:function(event){
				
				switch(event.keyCode){
					case 37:
						pacX -=10;
						break;
					case 39:
						pacX +=10;
						break;
					case 38:
						pacY -=10;
						break;
					case 40:
						pacY +=10;
						break;
						
				}

				pacMove();			
			}	
	});
});

