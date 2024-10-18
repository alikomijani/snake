import { useCallback, useEffect, useRef, useState } from "react";
import { Canvas } from "./components/canvas";
import { renderBoard, renderFood, renderSnake } from "./utils/renders";
import { snakeTemplate } from "./utils/constants";
import { checkGameOver, keyboardController, moveSnake } from "./utils/logic";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const snakeRef = useRef(snakeTemplate);
  const [gameState, setGameState] = useState(true);
  const animate = useCallback(() => {
    const canvas = canvasRef.current?.getContext("2d");
    if (gameState && canvas) {
      renderBoard(canvas);
      renderFood(canvas);
      snakeRef.current.body = moveSnake(snakeRef.current);
      renderSnake(canvas, snakeRef.current);
      if (checkGameOver(snakeRef.current)) {
        setGameState(false);
      }
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
      keyboardController(e, snakeRef.current);
    }
    window.addEventListener("keydown", keyBoardHandler);
    return () => window.removeEventListener("keydown", keyBoardHandler);
  }, []);
  return (
    <div className="text-red-300">
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
