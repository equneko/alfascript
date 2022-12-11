alfa.use('#std','dom','dom.render','math.random');

log("Hello World");
var range = put("Type Number Randomly");
log("Your Random Number: "+random()*range);

dom.init('h1','p');
render(
  h1("Hello World!"),
  p("Learn Weird Language <b>AlfaScript!</b>")
);
