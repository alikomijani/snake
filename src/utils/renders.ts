import {
  BG_COLOR_1,
  BG_COLOR_2,
  CELL_HEIGHT,
  CELL_WIDTH,
  COLS,
  FOOD,
  ROWS,
} from "./constants";
import { Snake } from "./constants";
import { FoodImage } from "./loadAssets";
import { chooseBodyImage, chooseHeadImage } from "./logic";

export function renderBoard(ctx: CanvasRenderingContext2D) {
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      ctx.beginPath();
      ctx.rect(i * CELL_WIDTH, j * CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT);
      if (i % 2) {
        if (j % 2) {
          ctx.fillStyle = BG_COLOR_1;
        } else {
          ctx.fillStyle = BG_COLOR_2;
        }
      } else {
        if (j % 2 === 0) {
          ctx.fillStyle = BG_COLOR_1;
        } else {
          ctx.fillStyle = BG_COLOR_2;
        }
      }
      ctx.fill();
      ctx.closePath();
    }
  }
}

export function renderSnake(ctx: CanvasRenderingContext2D, snake: Snake) {
  ctx.beginPath();

  snake.body.forEach((part, index, body) => {
    if (index) {
      const bodyImage = chooseBodyImage({
        part,
        previous: snake.body[index - 1],
        isLast: index === body.length - 1,
        next: index < body.length ? snake.body[index + 1] : undefined,
      });
      ctx.drawImage(
        bodyImage,
        part[0] * CELL_WIDTH,
        part[1] * CELL_HEIGHT,
        CELL_WIDTH,
        CELL_HEIGHT
      );
    } else {
      const headImage = chooseHeadImage(snake.direction);
      ctx.drawImage(
        headImage,
        part[0] * CELL_WIDTH,
        part[1] * CELL_HEIGHT,
        CELL_WIDTH,
        CELL_HEIGHT
      );
    }
  });

  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();
}

export function renderFood(ctx: CanvasRenderingContext2D) {
  ctx.drawImage(
    FoodImage,
    FOOD[0] * CELL_WIDTH,
    FOOD[1] * CELL_HEIGHT,
    CELL_WIDTH,
    CELL_HEIGHT
  );
}
