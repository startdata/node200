const GRID_SIZE = 4
const CELL_SIZE = 20
const CELL_GAP = 2

--grid-size: 4;
--cell-size: 20vmin;

export default class Grid{
    #cells
    constructor(gridElement) {
        gridElement.style.setProperty("--gird-size", GRID_SIZE )
        gridElement.style.setProperty("--cell-size", `${CELL_SIZE}vmin`)
        gridElement.style.setProperty("--cell-gap", `${CELL_GAP}vmin`)
        this.#cells = creat
    }
} 