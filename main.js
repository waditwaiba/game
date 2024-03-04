import kaboom from "kaboom";

kaboom();

loadSprite("ball", "/ball.png");
loadSprite("enemy", "/enemy.png");
loadSprite("fire", "/fire.png");

let ballsize = { width: 100, height: 100 };
let enemysize = { width: 100, height: 100 };
let firesize = { width: 50, height: 50 };

const SPEED = 320;

let player = add([
  sprite("ball", ballsize),
  pos(0, center().y),
  area(),
  body(),
]);

for (let i = 0; i < 5; i++) {
  const y = rand(height());

  let enemy = add([
    sprite("enemy", enemysize),
    pos(width() - enemysize.width, y),
    area(),
    "enemy",
    move(vec2(-rand(width()), rand(height())), 100),
  ]);
}

onKeyDown("up", () => {
  player.move(0, -SPEED);
});
onKeyDown("down", () => {
  player.move(0, SPEED);
});

onKeyDown("space", () => {
  let fire = add([
    sprite("fire", firesize),
    pos(player.pos),
    area(),
    "fire",
    move(RIGHT, 1000),
  ]);
  fire.onCollide("enemy", (enemy) => {
    destroy(enemy);
  });
});
