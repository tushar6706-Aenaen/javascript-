class Animal{
    alive = true ;


    eat(){
            console.log("i can eat");
    }
    sleep(){
        console.log("i can sleep");
        
    }
}

class Rabbit extends Animal{
    jump(){
        console.log("i can jump");
        
    }
}

class Cheeta extends Animal{
    run(){
        console.log("i can run fast");
        
    }   
}


const rabbit = new Rabbit(); 
rabbit.eat()
const cheeta  = new Cheeta();


cheeta.run();