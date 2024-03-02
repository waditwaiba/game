import kaboom from "kaboom";

kaboom();

loadSprite("ball", "/ball.png");
loadSprite("enemy", "/face.jpg");

let ballsize = { width: 100, height: 100 };
let enemysize = { width: 100, height: 100 };

const SPEED = 320;

let player = add([
  sprite("ball", ballsize),
  scale(1),
  pos(center()),
  area(),
  body(),
]);

for (let i = 0; i < 5; i++) {
  const x = rand(0, width());
  const y = rand(0, height());

  let enemy = add([
    sprite("enemy", enemysize),
    scale(1),
    pos(x, y),
    area(),
    "enemy",
    move(player.pos.angle(x, y), 100),
  ]);
}

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

player.onCollide("enemy", (enemy) => {
  destroy(enemy);
});
