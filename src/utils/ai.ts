import { Direction, Location, Snake } from "./constants";
import { checkGameOver, newHeadLocation } from "./logic";

function distance(a: Location, b: Location) {
  return Math.sqrt((b[0] - a[0]) ** 2 + (b[1] - a[1]) ** 2);
}

export function aiNextMove(snake: Snake, food: Location) {
  const scores: Partial<Record<Direction, number>> = {};
  const direction: Direction[] = [
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
  ];
  direction.forEach((dir) => {
    const head = newHeadLocation([...snake.body[0]], dir);
    if (!checkGameOver({ ...snake, body: [head, ...snake.body] })) {
      scores[dir] = distance(head, food);
    }
  });
  const minValue = Math.min(...Object.values(scores));
  Object.entries(scores).map(([key, value]) => {
    if (value === minValue) {
      snake.tempDirection = key as Direction;
      return;
    }
  });
}
