const validateHello = (greetings) =>
  /hello|ciao|salut|hallo|hola|ahoj|czesc/i.test(greetings);

module.exports = validateHello;
