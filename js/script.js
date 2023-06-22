//task-1

let maths=parseInt(prompt("Enter your maths mark"));
let physics=parseInt(prompt("Enter your physics mark"));
let chemistry=parseInt(prompt("Enter your chemistry mark"));
const total=maths+physics+chemistry;
const twosub=maths+physics;
if(((maths)&&(maths<=100))&&((physics)&&(physics<=100))&&((chemistry)&&(chemistry<=100))){
	if((maths>=65)&&(physics>=55)&&(chemistry>=50)){
  	if(total>=190){
    	if(twosub>=140){
      	document.write("The candidate is eligible for admission","<br>","total marks scored =",total,"<br>","physics && chemistry mark is=",twosub,"/140 required");
			}
			else if(twosub<140){
      	document.write("The candidate is not eligible for admission","<br>","total marks scored =",total,"<br>","but physics && chemistry mark is less than the eligibility=",twosub,"/140 required");
			}
    }
     else{
     	document.write("The candidate is not eligible for admission.","<br>","total mark is less than the eligibility=",total,"/190");
      }
     }
    else{
   	document.write("The candidate is not eligible for admission","<br>", "because eligibility not satisfied","<br>","maths=",maths,"/65","<br>","chemistry=",chemistry,"/50","<br>","physics=",physics,"/55");
   }
   } 
  else{
  	document.write("Invalid input","<br>","maths=",maths,"<br>","physics=",physics,"<br>","chemistry=",chemistry)
  }

//task-2
let a=parseInt(prompt("Enter the number"));
if (a){
  for(i=1;i<=a;i++){
    var res=i*2
    document.write(i,"X 2 =",res,"<br>");
  }
}
else{
	document.write("Invalid input")
}

//task-3
let a=parseInt(prompt("Enter the purchase cost"));
let b=parseInt(prompt("Enter the selling cost"));
if (a && b){
	if (a<b){
  	let result=b-a;
  	const c=(result/a)*100;
  	document.write("you profit percentage is=",c,"%","<br>","your profit amount is=",result,"<br>","brought for=",a,"  rupees","<br>","sold it for =",b,);
  }
  else{
  	let loss=a-b;
  	document.write("your loss amount is=",loss,"<br>","brought for=",a,"  rupees","<br>","sold it for =",b,);
  }
}
else{
	document.write("Invalid input")
}

//task4

a=parseInt(prompt("Enter the days(eg:1,2 upto 7)"));
if (a && a<=7){
	switch (a){
  	case 1:
    	document.write("your input is=",a,"<br>","MONDAY is the day for your input");
      break;
    case 2:
    	document.write("your input is=",a,"<br>","TUESDAY is the day for your input");
      break;
    case 3:
    	document.write("your input is=",a,"<br>","WEDNESDAY is the day for your input");
      break;
    case 4:
    	document.write("your input is=",a,"<br>","THURSDAY is the day for your input");
      break;
    case 5:
    	document.write("your input is=",a,"<br>","FRIDAY is the day for your input");
      break;
    case 6:
    	document.write("your input is=",a,"<br>","SATURDAY is the day for your input");
      break;
    case 7:
    	document.write("your input is=",a,"<br>","SUNDAY is the day for your input");
      break;
  }
}
else{
	document.write("Invalid input=",a)
}