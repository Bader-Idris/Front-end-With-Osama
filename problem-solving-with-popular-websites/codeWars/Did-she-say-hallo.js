
let helloLangs = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];
function validateHello(greetings) {
  const regex = new RegExp(helloLangs.join("|"), "i");
  return regex.test(greetings);
}
validateHello("hello baby");