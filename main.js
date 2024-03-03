import kaboom from "kaboom";

kaboom();
loadSprite("face", "/face.png");
loadSprite("enemy", "/face2.png");
loadSprite("fire", "/fire.png");

let faceSize = { width: 100, height: 100 };
let fireSize = { width: 50, height: 50 };
const player = add([
  sprite("face", faceSize),
  area(),
  body(),
  pos(0, center().y),
]);

const SPEED = 320;

onKeyDown("up", () => {
  player.move(0, -SPEED);
});

onKeyDown("down", () => {
  player.move(0, SPEED);
});

for (let i = 0; i < 5; i++) {
  const x = rand(0, width());
  const y = rand(0, height());
  add([
    sprite("enemy", faceSize),
    pos(x, y),
    area(),
    move(player.pos.angle(vec2(rand(0, width()), rand(0, height()))), 100),
    "enemy",
  ]);
}
onKeyDown("space", () => {
  const fire = add([
    sprite("fire", fireSize),
    area(),
    pos(player.pos),
    move(RIGHT, 1000),
    "fire",
  ]);
  fire.onCollide("enemy", (enemy) => {
    destroy(enemy);
  });
});
