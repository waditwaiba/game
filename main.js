import kaboom from "kaboom";

kaboom({
  background: [141, 180, 150],
});

loadSprite("fire", "fire.png");
loadSprite("player", "player.png");
loadSprite("enemy", "enemy.png");
let ballSize = { width: 100, height: 100 };
let stoneSize = { width: 60, height: 60 };
let fireSize = { width: 50, height: 90 };

let SPEED = 500;
let player = add([
  sprite("player", ballSize),
  pos(0, center().y),
  area(),
  body(),
]);

onKeyDown("down", () => {
  player.move(0, SPEED);
});

onKeyDown("up", () => {
  player.move(0, -SPEED);
});
for (let i = 0; i < 100; i++) {
  add([
    sprite("enemy", stoneSize),
    pos(width() - stoneSize.width, rand(height())),
    move(vec2(-rand(width()), rand(height())), 50),
    area(),
    body(),
    "enemy",
    rotate(0),
  ]);
}

onKeyDown("space", () => {
  let fire = add([
    sprite("fire", fireSize),
    pos(player.pos),
    area(),
    "fire",
    move(RIGHT, 7000),
  ]);

  fire.onCollide("enemy", (enemy) => {
    destroy(enemy);
  });
});
