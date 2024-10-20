import { useCallback, useEffect, useRef, useState } from "react";
import { Canvas } from "./components/canvas";
import { renderBoard, renderFood, renderSnake } from "./utils/renders";
import { FOOD, snakeTemplate } from "./utils/constants";
import { checkGameOver, keyboardController, moveSnake } from "./utils/logic";
import { aiNextMove } from "./utils/ai";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const snakeRef = useRef({ ...snakeTemplate, color: 255 });
  const snakeRef2 = useRef({ ...snakeTemplate, color: 254 });
  const [gameState, setGameState] = useState(true);
  const animate = useCallback(() => {
    const canvas = canvasRef.current?.getContext("2d");
    if (gameState && canvas) {
      renderBoard(canvas);
      renderFood(canvas);
      snakeRef.current.body = moveSnake(snakeRef.current);
      snakeRef2.current.body = moveSnake(snakeRef2.current);
      renderSnake(canvas, snakeRef2.current);
      renderSnake(canvas, snakeRef.current);
      if (checkGameOver(snakeRef.current)) {
        setGameState(false);
      }
      aiNextMove(snakeRef.current, FOOD);
    }
  }, [gameState]);

  useEffect(() => {
    let id = 0;
    if (gameState) {
      id = setInterval(() => {
        animate();
      }, 200);
    } else {
      clearInterval(id);
    }
    return () => {
      clearInterval(id);
    };
  }, [animate, gameState]);

  useEffect(() => {
    function keyBoardHandler(e: KeyboardEvent) {
      keyboardController(e, snakeRef2.current);
    }
    window.addEventListener("keydown", keyBoardHandler);
    return () => window.removeEventListener("keydown", keyBoardHandler);
  }, []);
  // useEffect(() => {
  //   function keyBoardHandler(e: KeyboardEvent) {
  //     keyboardController2(e, snakeRef2.current);
  //   }
  //   window.addEventListener("keydown", keyBoardHandler);
  //   return () => window.removeEventListener("keydown", keyBoardHandler);
  // }, []);
  return (
    <div className="text-red-300  ">
      <Canvas
        ref={canvasRef}
        className="mx-auto bg-green-200"
        width={800}
        height={800}
      />
    </div>
  );
}

export default App;
