
		var prev=document.getElementById('prev');
		var AA=document.getElementById('AA');
		var AABOX=document.getElementById('radio1');
		var MY=document.getElementById('MY');
		var MYBOX=document.getElementById('radio2');
		var prev=document.getElementById('prev');
		var p=document.getElementById('publishBTN');
		prev.addEventListener('touchstart',function(){
			window.history.back();
		})
		$('#radio1').click(function(){
			AA.className='full';
		 	MY.className='empty';
		})
		$('#radio2').click(function(){
			MY.className='full';
		 	AA.className='empty';
		})
		p.addEventListener('touchstart',function(){
			self.location='myCommon.html';
		})
		prev.addEventListener('touchstart',function(){
			self.location='commonMain.html';
		})