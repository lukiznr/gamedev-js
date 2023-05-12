kaboom();

// add a piece of text at position (120, 80)
add([text("lukiznr game"), pos(width()/2, 80), origin("center")]);
add([
  rect(width(), 48),
  pos(0, height() - 48),
  outline(4),
  area(),
  solid(),
  color(127, 200, 255),
]);
