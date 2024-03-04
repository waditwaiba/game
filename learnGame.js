import kaboom from "kaboom";

kaboom();

loadSprite("ball", "ball.png");
loadSprite("stone", "stone.png");
let ballSize = { width: 100, height: 100 };
let stoneSize = { width: 50, height: 50 };
let SPEED = 500;
let centerBall = add([sprite("ball", ballSize), pos(center()), area(), body()]);

onKeyDown("down", () => {
  centerBall.move(0, SPEED);
});
onKeyDown("left", () => {
  centerBall.move(-SPEED, 0);
});
onKeyDown("right", () => {
  centerBall.move(SPEED, 0);
});
onKeyDown("up", () => {
  centerBall.move(0, -SPEED);
});
for (let i = 0; i < 10; i++) {
  const x = rand(0, width());
  const y = rand(0, height());

  add([
    sprite("stone", stoneSize),
    pos(x, y),
    move(vec2(rand(vec2(width(), height()))), 100),
    area(),
    "enemy",
  ]);
}
centerBall.onCollide("enemy", (enemy) => {
  destroy(enemy);
});
