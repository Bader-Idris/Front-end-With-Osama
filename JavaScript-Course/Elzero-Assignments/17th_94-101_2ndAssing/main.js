// we'll need to use those events 

/*
  Class List Object && Methods
  - classList
  --- length
  --- contains
  --- item(index)
  --- add [%100 will be used⬇️3️⃣]
  --- remove
  --- toggle
*/

LaElemento.onclick = function () {
  LaElemento.classList.add("add-one", "add-two"); //can add many classes[tokens]
  LaElemento.classList.remove("one", "two"); //removes existing classes,
  //  if one doesn't exist, it doesn't care, and remove the existing one
  LaElemento.classList.toggle("one"); // only one class, if exists, it'll remove it, if not it'll create it
  // we can use it when moving [active] between elements
};
