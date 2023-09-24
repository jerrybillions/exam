 // this is my first java
 console.log('hello word');

 let name ='mosh';
 console.log(name);

// numbers in java
var num1=7;
console.log(10*num1);

var num2=10;
num2++;
console.log(num2);


//divide, multiply ,remainder
console.log(num2/5);

/*
prompt('what is your name')
document.getElementById('text').innerHTML=('see my baby')
*/

/*var age=prompt('how are old are u');
document.getElementById('agg').innerHTML=age
*/

//functions class begins

/*function fun(){
    var name=prompt('what is you father name');
}
 //call function

 fun();
 */


 /*function greet(yourname){
    var name=prompt('what is your name');
    var result='my age is '+''+name;
    console.log(result);
 }

 greet(name);*/

 

 /* var nam=prompt('i am ');
 document.getElementById('rr').innerHTML=('jerry billions'+''+ nam);
console.log(nam);*/


 //while loops

 /* var num=0;
 /* while(num<=20);{
    num+=1
  console.log(num);
 }*/


  //for loop

/*  for(let num=0; num<100; num++){
    console.log(num);
  }*/



  //string
  let fruit='banana';
  let morefruit='banana\napple';
  console.log(fruit);
  console.log(morefruit);





  //objects in javascript

  let student={
    first:'jerry',  
    last:'chris',
   age:18 ,
   height:40,
  studentinfo:function(){return this.first + '\n' + this.last +'\n'+ this.age;}};

  console.log(student.first);
  console.log(student.last);
  console.log(student.height);
  // to increse the age by one
  student.age++;
  console.log(student.age);

  //change the first name
  student.first='its not the first'; 
  console.log(student.first);



  // if and else conditionals
  //18-35 is my target demographic
  //&&  AND-boolean
  //|| OR


  /*var age=prompt('what is your age');

  if((age >=18)) ((age <=35));{
    status='target demo'
    console.log(status);
  } else{
    status='not m audience';
    console.log(status);
  }*/

  //switch statement
  //different between weekend and weekday
  //day 0-->sunday--weeekend
  //day 1-->monday---weekday
  //day 2-->tuesday--weekday
  //day 5-->friday--weekend
  //day 6-->saturday--weekend

  switch(6){
    case 0:
    text='weekend';
    break;

    case 5:
    text='weekend';
    break;

    case 6:
    text='weekend';
    break;

    default:
      text='weekday';
    
  }
  console.log((text));
  
