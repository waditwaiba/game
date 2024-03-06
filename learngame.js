import kaboom from "kaboom";

kaboom();
loadSprite("face", "/face.png");
loadSprite("ball", "/ball.png");
let ballsize = { width: 100, height: 100 };

const SPEED = 320;
const b1 = add([
  sprite("face", ballsize),
  scale(1),
  area(),
  body(),
  pos(center()),
]);

onKeyDown("left", () => {
  b1.move(-SPEED, 0);
});
onKeyDown("right", () => {
  b1.move(SPEED, 0);
});

onKeyDown("up", () => {
  b1.move(0, -SPEED);
});

onKeyDown("down", () => {
  b1.move(0, SPEED);
});

for (let i = 0; i < 10; i++) {
  const x = rand(0, width());
  const y = rand(0, height());

  add([
    sprite("ball", ballsize),
    pos(x, y),
    area(),
    move(b1.pos.angle(vec2(rand(0, width()), rand(0, height()))), 100),
    "enemy",
  ]);
}
b1.onCollide("enemy", (enemy) => {
  destroy(enemy);
});
