// export nommé
var YEAR = "2015";  
  function sayHi(user) {
    return `Hello, ${user}!`;
  } 

   const sayBye = (user,message)=> {
    return `Bye, ${user}! ,${message}`;
  }
   class avion {
    constructor(name) {
      this.name = name;
    }
  }
 export  {sayHi, sayBye,YEAR,avion};
