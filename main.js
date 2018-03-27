var main=function(){
var colorStrings=["BLUE","RED","BLACK","MAGENTA","GREEN","ORANGE","BROWN","NAVY","LTBLUE","YELLOW","WHITE","LTGRAY","MEDGRAY","GRAY","DARKGRAY"];
var colorChars=["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
var red=[0,255,0,255,0,255,128,0,128,255,255,200,150,100,50];
var green=[0,0,0,0,255,99,33,0,255,255,255,200,150,100,50];
var blue=[255,0,0,255,0,0,33,50,255,255,255,200,150,100,50];
var img = document.getElementById('myImage');
  var redDiffs=new Array(256);
  var greenDiffs=new Array(256);
  var blueDiffs=new Array(256);
  var mycanvas = document.getElementById('mycanvas');
  mycanvas.width = img.width;
  mycanvas.height = img.height
  var context = mycanvas.getContext('2d');
  context.drawImage(img, 0, 0, img.width, img.height);
  for(var x=1;x<=16;x++){
    for(var y=1;y<=16;y++){
      var pixelData = context.getImageData(x, y, 1, 1).data;
      document.getElementById("output").innerHTML="x="+x.toString()+" y="+y.toString()+" pD="+pixelData.toString();
	  redDiffs[16*x+y-17]=red.map( function(value){
		  return Math.abs(value-pixelData[0]);
	  });
	  greenDiffs[16*x+y-17]=green.map( function(value) {
		  return Math.abs(value-pixelData[1]); 
	  });
	  blueDiffs[16*x+y-17]=blue.map( function(value) {
		  return Math.abs(value-pixelData[2]);
	  });
    }
  }
  var totalDiffs=new Array(256);
  totalDiffs.fill([]);
  for(var pos=0;pos<256;pos++) {
	  for(var pos2=0;pos2<15;pos2++){
  totalDiffs[pos][pos2]=redDiffs[pos][pos2]+greenDiffs[pos][pos2]+blueDiffs[pos][pos2];
	  }
  }
  for (var pos=0;pos<256;pos++){
	  totalDiffs[pos]
	  }
  alert(totalDiffs.toString());	
}
