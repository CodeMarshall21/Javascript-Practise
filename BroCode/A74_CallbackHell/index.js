// Callback Hell = Situation in JavaScript where callbacks 
//                            are nested within other callbacks to the
//                           degree where the code is difficult to read.
//                           Old pattern to handle asynchronous functions.
//                           Use Promises + async/await to avoid Callback Hell

const synchronous = document.querySelector("#synchronous p");
const asynchronous = document.querySelector("#asynchronous p");


function synchronousTask(){
    function task1(){
        setTimeout(() =>{
            synchronous.innerHTML += "Task 1 completed<br>"
        }, 3000)
    };
    function task2(){
        setTimeout(() =>{
            synchronous.innerHTML += "Task 2 completed<br>"
        }, 2000)
    };
    function task3(){
        setTimeout(() =>{
            synchronous.innerHTML += "Task 3 completed<br>"
        }, 1000)
    };
    function task4(){
        setTimeout(() =>{
            synchronous.innerHTML += "Task 4 completed<br>"
        }, 1500)
    };

    task1();
    task2();
    task3();
    task4();
}

function asynchronousTask(){
    function task1(callback){
        setTimeout(() =>{
            asynchronous.innerHTML += "Task 1 completed<br>";
            callback();
        }, 3000)
        
    };
    function task2(callback){
        setTimeout(() =>{
            asynchronous.innerHTML += "Task 2 completed<br>";
            callback();
        }, 2000)
    };
    function task3(callback){
        setTimeout(() =>{
            asynchronous.innerHTML += "Task 3 completed<br>";
            callback();
        }, 1000)
    };
    function task4(callback){
        setTimeout(() =>{
            asynchronous.innerHTML += "Task 4 completed<br>";
            callback();
        }, 1500)
    };

    task1(() =>{
        task2(()=>{
            task3(() =>{
                task4(()=>{
                    asynchronous.innerHTML += "All Tasks Completed !<br>";
                });
            });
        });
    });
}