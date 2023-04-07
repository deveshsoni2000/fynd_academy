// Ques) Write code such that when I call a function named as myFunc first time it gives 
// output as "Hi you Called me" and if it gets called again then it gives
// "Mai already ek bar call ho chuka hoon!"

















//revision note
//If you have done previous examples well then you should have solved the question on your
//own.
//From below line solution starts.
function func(){
    let counter = 0;
    return function(){
        if(counter < 1){
            console.log("Hi You Called me");
            counter++;
        }else{
            console.log("Mai already ek bar call ho chuka hoon!");
        }
    }
}

const myFunc = func();
myFunc();
myFunc();

//Since I was able to solve the question at first attempt so not written any explaination
//for the same in doc file named as how_js_works.doc



//This below code snippet was my solution at first time
// function func(){
//     let n = 0;
//     return function(){
//         if(n===0){
//         n=1;
//         console.log("Hi, you called me.");}
//         else{
//             console.log("mai ek baar call ho chuka hu");
//         }
//     }
// }

// const myFunc = func();

// myFunc();
// myFunc();
//my thought here was to get desired result so used n=1