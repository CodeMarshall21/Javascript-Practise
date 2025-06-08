// Async/Await = Async = makes a function return a promise
//                            Await = makes an async function wait for a promise

// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject set up as parameters
// Everything after Await is placed in an event queue

function walkDog(){
    return new Promise((resolve,reject) => {
        const walking = true;

        if (walking){
            setTimeout(() =>{
            resolve("YOU WALKED THE DOG");
            }, 1500)
        }else{
            reject("YOU DID NOT WALK THE DOG !");
        }
        
    })
}

function cleanKitchen(){
    return new Promise((resolve,reject) => {
        const cleaning = true;

        if (cleaning){
            setTimeout(() =>{
            resolve("YOU CLEANED THE KITCHEN");
            }, 3000)
        }else{
            reject("YOU DID NOT CLEAN THE KITCHEN !");
        }
        
    })
}

function takeTrash(){
    return new Promise((resolve,reject) => {
        const trash = true;

        if (trash){
            setTimeout(() =>{
            resolve("YOU TOOK THE TRASH");
            }, 500)
        }else{
            reject("YOU DID NOT TAKE THE TRASH !");
        }
        
    })
}

async function doChores(){
    try{
        const walkingDog = await walkDog();
        console.log(walkingDog);

        const cleaningKitchen = await cleanKitchen();
        console.log(cleaningKitchen);

        const takingTrash = await takeTrash();
        console.log(takingTrash);

        console.log("YOU FINISHED ALL THE CHORES !!");

    }
    catch(error){
        console.error(error);
    }
}

doChores();



