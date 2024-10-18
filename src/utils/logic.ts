import { COLS, Direction, FOOD, Location, ROWS, Snake } from "./constants";
import {
  HeadDownImage,
  HeadLeftImage,
  HeadRightImage,
  HeadUpImage,
  tailDownImage,
  tailLeftImage,
  tailRightImage,
  tailUpImage,
  bodyBottomLeftImage,
  bodyBottomRightImage,
  bodyHorizontalImage,
  bodyTopLeftImage,
  bodyTopRightImage,
  bodyVerticalImage,
} from "./loadAssets";

function checkSameLocation(a: Location, b: Location) {
  return a[0] === b[0] && a[1] === b[1];
}
export function changeFood() {
  FOOD[0] = Math.floor(Math.random() * ROWS);
  FOOD[1] = Math.floor(Math.random() * COLS);
}

export function moveSnake(snake: Snake) {
  const newBody = [...snake.body];
  const head: Location = [...snake.body[0]];
  snake.direction = snake.tempDirection;
  switch (snake.direction) {
    case "ArrowUp":
      head[1]--;
      break;
    case "ArrowDown":
      head[1]++;
      break;
    case "ArrowRight":
      head[0]++;
      break;
    case "ArrowLeft":
      head[0]--;
      break;
  }
  newBody.unshift(head);
  if (checkSameLocation(head, FOOD)) {
    changeFood();
    return newBody;
  }
  newBody.pop();
  return newBody;
}

export function checkGameOver(snake: Snake) {
  const newBody = [...snake.body];
  const head = newBody.shift()!;
  const checkX = head[0] < 0 || head[0] >= COLS;
  const checkY = head[1] < 0 || head[1] >= ROWS;
  let checkBody = false;
  for (const part of newBody) {
    if (checkSameLocation(head, part)) {
      checkBody = true;
      break;
    }
  }
  return checkX || checkY || checkBody;
}

export function keyboardController(e: KeyboardEvent, snake: Snake) {
  switch (e.key) {
    case "ArrowUp":
      if (snake.direction !== "ArrowDown") {
        snake.tempDirection = e.key;
      }
      break;
    case "ArrowDown":
      if (snake.direction !== "ArrowUp") {
        snake.tempDirection = e.key;
      }
      break;
    case "ArrowLeft":
      if (snake.direction !== "ArrowRight") {
        snake.tempDirection = e.key;
      }
      break;
    case "ArrowRight":
      if (snake.direction !== "ArrowLeft") {
        snake.tempDirection = e.key;
      }
      break;
  }
}

export function chooseHeadImage(direction: Direction) {
  let headImage: HTMLImageElement;
  switch (direction) {
    case "ArrowUp":
      headImage = HeadUpImage;
      break;
    case "ArrowDown":
      headImage = HeadDownImage;
      break;
    case "ArrowRight":
      headImage = HeadRightImage;
      break;
    case "ArrowLeft":
      headImage = HeadLeftImage;
      break;
  }
  return headImage;
}

export function chooseBodyImage({
  part,
  previous,
  isLast = false,
  next,
}: {
  part: Location;
  previous: Location;
  isLast: boolean;
  next?: Location;
}) {
  const bodyImage = tailUpImage;
  if (isLast) {
    if (part[0] == previous[0]) {
      if (part[1] < previous[1]) {
        return tailUpImage;
      } else {
        return tailDownImage;
      }
    } else {
      if (part[0] < previous[0]) {
        return tailLeftImage;
      } else {
        return tailRightImage;
      }
    }
  }
  if (next) {
    if (part[0] === previous[0]) {
      if (part[0] === next[0]) {
        return bodyVerticalImage;
      }
      if (part[1] > previous[1]) {
        //move up
        if (part[0] > next[0]) {
          // left
          return bodyTopLeftImage;
        } else {
          // right
          return bodyTopRightImage;
        }
      } else {
        // move down
        if (part[0] > next[0]) {
          // right
          return bodyBottomLeftImage;
        } else {
          // left
          return bodyBottomRightImage;
        }
      }
    }
    if (part[1] === previous[1]) {
      if (part[1] === next[1]) {
        return bodyHorizontalImage;
      }
      if (part[0] < previous[0]) {
        // move right
        if (part[1] > next[1]) {
          // turn up
          return bodyTopRightImage;
        } else {
          // turn down
          return bodyBottomRightImage;
        }
      } else {
        // move left
        if (part[1] < next[1]) {
          // turn down
          return bodyBottomLeftImage;
        } else {
          // turn up
          return bodyTopLeftImage;
        }
      }
    }
  }
  return bodyImage;
}
