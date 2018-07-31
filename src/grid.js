import React from "react";
import "./Game.css";

// A cell can be ...
// - Blank: ' '
// - Occupied by Snake: 'S'
// - Occupied by an Apple: 'A'

const BLANK = "X";
const SNAKE = "S";
const APPLE = "A";

const Cell = ({ value }) => <td className={"gridCell"}>{value}</td>;

const genRandomAppleLocations = numApples => [1, 1];

/**
 * Helper function to make the layout array representing the game state.
 *
 * @param {number} size The size of the n by n game world.
 * @param {Array<number>} playerStart An array of two numbers representing
 * the starting coordinates of the player snake.
 * @param {number} numApples Indicates the starting number of Apples on
 * the grid.
 */
const makeLayout = (size, playerStart, numApples) => {
  // Generate `numApples` number random apple coordinates.
  const appleLocations = genRandomAppleLocations(numApples);
  return [
    [
      Cell({ value: BLANK }),
      Cell({ value: BLANK }),
      Cell({ value: BLANK }),
      Cell({ value: BLANK })
    ],
    [
      Cell({ value: BLANK }),
      Cell({ value: BLANK }),
      Cell({ value: BLANK }),
      Cell({ value: BLANK })
    ],
    [
      Cell({ value: BLANK }),
      Cell({ value: BLANK }),
      Cell({ value: BLANK }),
      Cell({ value: BLANK })
    ],
    [
      Cell({ value: BLANK }),
      Cell({ value: BLANK }),
      Cell({ value: BLANK }),
      Cell({ value: BLANK })
    ]
  ];
};

/**
 * Grid to display the game world.
 *
 * @param {object} props
 * @param {number} props.size The size of the n by n game world.
 * @param {Array<number>} props.playerStart An array of two numbers representing
 * the starting coordinates of the player snake.
 * @param {number} props.numApples Indicates the starting number of Apples on
 * the grid.
 */
const Grid = ({ size, playerStart, numApples }) => {
  // Make game `layout` (the nested array which represents the board state)
  const layout = makeLayout(size, playerStart, numApples);
  return <table>{layout.map(row => <tr>{row.map(cell => cell)}</tr>)} </table>;
};

export default Grid;
