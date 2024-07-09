function episode1() {
    console.log("Ceci est l'épisode 1.");
  }

  function episode2(name) {
    console.log(`Bonjour, ${Joyce} !`);
  }

  
  function episode4(num1, num2) {
    const sum = num1 + num2;
    console.log(`La somme de ${num1} et ${num2} est ${sum}.`);
  }

  function episode6(age) {
    if (age >= 18) {
      console.log("Vous êtes majeur.");
    } else {
      console.log("Vous êtes mineur.");
    }
  }

  function episode7(numbers) {
    const sum = numbers.reduce((total, num) => total + num, 0);
    console.log(`La somme des nombres du tableau est ${sum}.`);
  }

  
episode1(); // Ceci est l'épisode 1.

episode2("Alice"); // Bonjour, Joyce !

episode4(5, 3); // La somme de 5 et 3 est 8.

episode6(25); // Vous êtes majeur.
episode6(15); // Vous êtes mineur.

episode7([2, 4, 6, 8]); // La somme des nombres du tableau est 20.
