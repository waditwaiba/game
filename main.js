import kaboom from "kaboom";

kaboom();
loadSprite("player", "/face.png");
loadSprite("enemy", "/ball.png");
loadSprite("fire", "/fire.jpg");

let enemysize = { width: 100, height: 100 };
let playersize = { width: 100, height: 100 };
let firesize = { width: 50, height: 50 };

const player = add([
  sprite("player", playersize),
  area(),
  body(),
  pos(0, center().y),
]);
onKeyDown("up", () => {
  player.move(0, -SPEED);
});

onKeyDown("down", () => {
  player.move(0, SPEED);
});
for (let i = 0; i < 5; i++) {
  const x = rand(0, width());
  const y = rand(0, height());
  add([sprite("enemy", enemysize), pos(x, y), area(), "enemy"]);
}
onUpdate("enemy", (e) => {
  e.move(player.pos.angle(vec2(rand(0, width()), rand(0, height()))), 100);
  if (e.pos.x < 0 || e.pos.x > width()) {
    e.dir = -e.dir;
  }
});
const SPEED = 320;

onKeyDown("space", () => {
  let fire = add([
    sprite("fire", firesize),
    area(),
    pos(player.pos),
    "fire",
    move(RIGHT, 2000),
  ]);

  fire.onCollide("enemy", (enemy) => {
    destroy(enemy);
  });
});
