// localStorage.setItem("username","Narmada");
// localStorage.setItem("password","narmada123");
localStorage.removeItem("username");//remove username in local storage
localStorage.clear();//clear all the stored data
localStorage.setItem("username","Narmada");
localStorage.setItem("password","narmada123");
//to fetch the key
let username=localStorage.getItem("username");
document.writeln(`This is ${username}`);
