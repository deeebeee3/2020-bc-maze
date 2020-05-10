const { Engine, Render, Runner, World, Bodies } = Matter;

const cells = 3;
const width = 600;
const height = 600;

const engine = Engine.create();

const { world } = engine;

const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: true,
    width,
    height,
  },
});

Render.run(render);
Runner.run(Runner.create(), engine);

// Walls
const walls = [
  Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 40, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 40, height, { isStatic: true }),
];

World.add(world, walls);

// Maze generation

//old way maze generation
// const grid = [];
// for (let i = 0; i < 3; i++) {
//   grid.push([]);
//   for (let j = 0; j < 3; j++) {
//     grid[i].push(false);
//   }
// }

//new way maze generation
const grid = Array(cells)
  .fill(null)
  .map(() => Array(cells).fill(false));

const verticals = Array(cells)
  .fill(null)
  .map(() => Array(cells - 1).fill(false));

const horizontals = Array(cells)
  .fill(null)
  .map(() => Array(cells - 1).fill(false));

const startRow = Math.floor(Math.random() * cells);
const startColumn = Math.floor(Math.random() * cells);

const stepThroughCell = (row, column) => {
  //if i have visited the cell at [row, column], then return
  if (grid[row][column]) {
    return;
  }

  //mark this cell as being visited
  grid[row][column] = true;

  //assemble randomly-ordered list of neighbours
  const neighbours = [
    [row - 1, column],
    [row, column + 1],
    [row + 1, column],
    [row, column - 1],
  ];

  //for each neighbour.....
  //see if that neighbour is out of bounds
  //if we have visited that neighbour, continue to next neighbour
  //remove a wall from either horiontals or verticals
  //visit that next cell
};

stepThroughCell(startRow, startColumn);

console.log(grid);
