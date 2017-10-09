
// 去重1
var arr0=[1,1,2,3,4];
 function newSet(arr){

 	var brr=[];

 	for(var i=0;i<arr.length;i++){
 		if (brr.indexOf(arr[i])==-1) {
 			brr.push(arr[i]);
 		}
 		return brr;
 	}
 }
 console.log(newSet(arr0)); 

// 去重2
function newset1(arr){
	 return new Set(arr)		 	
}
console.log(newset1(arr0));
