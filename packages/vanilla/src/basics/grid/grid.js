import Interface from 'hig-interface';
import Core from '/helpers/js/_core';
import GridItem from '/basics/grid/grid-item/grid-item';
import Template from './grid.html';
import './grid.scss';

/**
 * Creates a Grid
 *
 * @class
 */

class Grid extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
  }

  addGridItem(gridItem) {
    this.mountPartialToComment('GRIDITEM', gridItem);
  }
}

Grid._interface = Interface.basics.Grid;
Grid._defaults = {};
Grid._partials = {
  GridItem
};

export default Grid;
