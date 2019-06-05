import {ExampleE} from "./ExampleE";

export function main() {
  const scene = new g.Scene({game: g.game});
  scene.loaded.addOnce(() => {
    const example = new ExampleE({
      scene
    });
    scene.append(example);
  });
  g.game.pushScene(scene);
}

module.exports = main;
