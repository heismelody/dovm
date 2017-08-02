import { NODE_TYPE } from './nodeType';
import VNode from './vnode';

export default class VText extends VNode {
  constructor(text) {
    super();
    this.text = text;

    this.nodeType = NODE_TYPE.VTEXT;
  }
}
