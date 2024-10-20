export const BOARD_WIDTH = 800;
export const BOARD_HEIGHT = 800;
export const ROWS = 32;
export const COLS = 32;
export const CELL_WIDTH = BOARD_WIDTH / COLS;
export const CELL_HEIGHT = BOARD_HEIGHT / ROWS;
export const BG_COLOR_1 = "rgb(220 252 231)";
export const BG_COLOR_2 = "rgb(0 252 231)";
export const FOOD: Location = [5, 5];

export type Direction = "ArrowUp" | "ArrowDown" | "ArrowRight" | "ArrowLeft";
export type Location = [x: number, y: number];

export type Snake = {
  name: string;
  body: Location[];
  direction: Direction;
  tempDirection: Direction;
  color: number;
};
export const snakeTemplate: Snake = {
  name: "Ali",
  body: [
    [16, 16],
    [16, 17],
    [16, 18],
  ],
  direction: "ArrowUp",
  tempDirection: "ArrowUp",
  color: 0,
};
