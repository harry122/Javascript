// Remove()

let para = document.querySelector("#heading1");  // the variable still has the value but from dom it is completely removed.
para.remove();

// removeChild()

let em = document.querySelector('#emTag');

console.log(em.parentNode);

em.parentNode.removeChild(em);
