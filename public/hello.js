	function repeat(){
		var myvar=setInterval(Matrix,500);
		document.getElementById("test").addEventListener("click",function(){
			clearInterval(myvar);
		})
	}



	function Matrix(){

         

	    var R11=document.getElementById("dd").valueAsNumber;
		var R12=document.getElementById("mm").valueAsNumber;
		var R21=document.getElementById("yy1").valueAsNumber;
		var R13=Math.floor(R21*0.01);
		var R14=R21-(R13*100);
		var matrixA=[
         [R11,R12,R13,R14],
         [R14,R13,R12,R11],
         [R12,R11,R14,R13],
         [R13,R14,R11,R12]
         ];
        
        var m = Math.floor(Math.random()*100);
        var n = Math.floor(Math.random()*100);

        var body = document.getElementsByTagName("div")[0];
        var tb1 =  document.createElement("table");
      
         var matrixB =[      
	[0,   0,  0,    0 ],
	[m+n,  -m-n, n-m,    m-n ],
	[-m,   m,  m,   -m],
	[-n,  n,  -n,   n ]

];

var result=[];
result=Array(matrixA.length);
for (var i = 0; i <result.length ; i++) {
result[i]=Array(matrixA[i].length);
var row =document.createElement("tr");
	for (var j = 0; j < 4; j++) {
		result[i][j]=matrixA[i][j]+matrixB[i][j];
		if (result[i][j]>0&&result[i][j]<9) {
			result[i][j]="0" + result[i][j];
		}
		var data= document.createElement("td");
		var sol= document.createTextNode(result[i][j])
		data.appendChild(sol);
		row.appendChild(data);
	}
	tb1.appendChild(row);
	
	}
	
  body.appendChild(tb1);
  tb1.setAttribute("border","1");
}
  
	