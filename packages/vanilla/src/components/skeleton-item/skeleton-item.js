import Interface from 'hig-interface';
import Core from '/helpers/js/_core';
import './skeleton-item.scss';
import Template from './skeleton-item.html';

class SkeletonItem extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
  }

  _componentDidMount() {
    this.themedElements = [this.el];
  }

  setMaxWidth(maxWidth) {
    this.el.style.maxWidth = maxWidth;
  }

  setMarginBottom(marginBottom) {
    this.el.style.marginBottom = marginBottom;
  }
}

SkeletonItem._interface = Interface.components.SkeletonItem;
SkeletonItem._defaults = {};
SkeletonItem._partials = {};

export default SkeletonItem;
