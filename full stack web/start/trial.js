//var students=["aaa","ttt","mmm","sss"];
//
//
//for (var x=0; x < students.length; x+=2)
//    {
//        console.log(x);
//        console.log(students[x]);
//    }



//function area (l,w)
//{
//    return l*w;
//}
//var a1=area(2,4);
//console.log(a1);



//var bankbalance=500;
//var transaction = function(priceofsale)
//{
//    if (priceofsale<=bankbalance)
//        {
//            bankbalance-=priceofsale;
//            console.log(" purchuse is succefull");
//        }
//    else
//    {
//        console.log(" insufficint funds");
//    }
//};
//var customername=function(first,last){
//   console.log("fist name is:"+first+"/n" +"last name is :"+last);
//}
//var applyforcreditcard = function(creditscore,soul)
//{
//    
//}
//var bankoperations=[];
//bankoperations.push(transaction);
//bankoperations.push(customername);
//bankoperations.push(applyforcreditcard);
//console.log(bankoperations);


//var students=[];
//function student(fn,ln,age){
//    this.fn = fn;
//    this.ln = ln;
//    this.age = age;
//    this.greeting = function()
//    {
//        return "hi"+this.fn+this.ln+"iam"+this.age;
//    };
//}
//
//students.push(new student("jenny","john",5));
//students.push(new student("kenny","john",7));
//students.push(new student("fenny","john",9));
//students.push(new student("renny","john",4));
//
//for (var index=0; index < students.length; index++)
//    {
//        var student=students[index];
//        console.log(student.greeting());
//    }



//binding
//alex brown's
//this.car = "honda";
//var marksgarage = {
//    car: "aston martin",
//    getcar: function()
//    {
//    return this.car;
//    }
//};
//console.log(marksgarage.getcar());
//var store = marksgarage.getcar;
//console.log(store());
//var therealcarfunc = store.bind(marksgarage);
//console.log(therealcarfunc());


//
//var n1 = document.getElementById('num1');
//var n2 = document.getElementById('num2');
//var r = document.getElementById('result');
//var form = document.getElementById('xy');
//
//form.addEventListener('submit', function(e){
//    if ( !n1.value || !n2.value)
//    {
//        alert("please enter a number in the missing field");
//    }
//    else {
//       var x = parseFloat(n1.value);
//       var y = parseFloat(n2.value); 
//       var div = parseFloat(x / y);
//       var percent = div * 100;
//        r.innerText = "Answer is " + percent +  "" +"%";
//        e.preventDefault();
//    
//    }
//   
//});





























