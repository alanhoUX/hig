import Interface from 'hig-interface';
import Core from '/helpers/js/_core';
import './section-label.scss';
import Template from './section-label.html';

class SectionLabel extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
  }

  setLabel(label) {
    this._findDOMEl('.hig__section__label', this.el).textContent = label;
  }

  addSlot(slotElement) {
    this.mountPartialToComment('SLOT', slotElement);
  }
}

SectionLabel._interface = Interface.components.SectionLabel;
SectionLabel._defaults = {};
SectionLabel._partials = {};

export default SectionLabel;
