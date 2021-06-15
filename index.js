var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

   makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

    });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound(key) {
  switch (key) {
    case "a":
      var a = new Audio("sounds/a.mp4.mpeg");
      a.play();
      break;

    case "b":
      var b = new Audio("sounds/b.mp4.mpeg");
      b.play();
      break;

    case "c":
      var c = new Audio("sounds/c.mp4.mpeg");
      c.play();
      break;

    case "d":
      var d = new Audio("sounds/d.mp4.mpeg");
      d.play();
      break;

    case "e":
      var e = new Audio("sounds/e.mp4.mpeg");
      e.play();
      break;

    case "f":
      var f = new Audio("sounds/f.mp4.mpeg");
      f.play();
      break;

    case "g":
      var g = new Audio("sounds/g.mp4.mpeg");
      g.play();
      break;

    case "h":
      var h = new Audio("sounds/h.mp4.mpeg");
      h.play();
      break;

    case "i":
      var i = new Audio("sounds/i.mp4.mpeg");
      i.play();
      break;

    case "j":
      var j = new Audio("sounds/j.mp4.mpeg");
      j.play();
      break;

    case "k":
      var k = new Audio("sounds/k.mp4.mpeg");
      k.play();
      break;

    case "l":
      var l = new Audio("sounds/l.mp4.mpeg");
      l.play();
      break;

    case "m":
      var m = new Audio("sounds/m.mp4.mpeg");
      m.play();
      break;

    case "n":
      var n = new Audio("sounds/n.mp4.mpeg");
      n.play();
      break;

    case "o":
      var o = new Audio("sounds/o.mp4.mpeg");
      o.play();
      break;

    case "p":
      var p = new Audio("sounds/p.mp4.mpeg");
      p.play();
      break;

    case "q":
      var q = new Audio("sounds/q.mp4.mpeg");
      q.play();
      break;

    case "r":
      var r = new Audio("sounds/r.mp4.mpeg");
      r.play();
      break;

    case "s":
      var s = new Audio("sounds/s.mp4.mpeg");
      s.play();
      break;

    case "t":
      var t = new Audio("sounds/t.mp4.mpeg");
      t.play();
      break;

    case "u":
      var u = new Audio("sounds/u.mp4.mpeg");
      u.play();
      break;

    case "v":
      var v = new Audio("sounds/v.mp4.mpeg");
      v.play();
      break;

    case "w":
      var w = new Audio("sounds/w.mp4.mpeg");
      w.play();
      break;

    case "x":
      var x = new Audio("sounds/x.mp4.mpeg");
      x.play();
      break;

    case "y":
      var y = new Audio("sounds/y.mp4.mpeg");
      y.play();
      break;

    case "z":
      var z = new Audio("sounds/z.mp4.mpeg");
      z.play();
      break;


    default: console.log(key);

  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
