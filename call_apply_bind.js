let fruits = {
    name : 'mango',
    quantity : 5,
    }

let fruits2 = {
        name : 'mango',
        quantity : 4, 
     }

     let fruits3 = {
        name : 'mango',
        quantity : 6,
     }

      function description(name) {
        console.log(`${name} has ${this.quantity} ${this.name} remaining`);
     }

     // call() pass the context to function

     description.call(fruits, 'ashu');
     description.call(fruits2, 'harry');

   // apply()

   description.apply(fruits3,['ashu']);

   // bind() won't get executed function but returns tht with the context provided.

   let desc = description.bind(fruits,['javascript']);
   
  desc();


  function foo(a,b,c) {
     
     console.log(arguments.length);

     Array.prototype.push.call(arguments,67);

     console.log(arguments);
  }


  foo(1,2,3);

