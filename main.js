import kaboom from "kaboom";
kaboom();
loadSprite("ball", "/ball.png");
let ballSize = { width: 100, height: 100 };
let player = add([sprite("ball", ballSize), pos(center())]);
const SPEED = 320;
onKeyDown("left", () => {
  player.move(-SPEED, 0);
});
onKeyDown("right", () => {
  player.move(SPEED, 0);
});

onKeyDown("up", () => {
  player.move(0, -SPEED);
});

onKeyDown("down", () => {
  player.move(0, SPEED);
});
