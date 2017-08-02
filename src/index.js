import VNode from './vnode';
import VText from './vtext';

let root = document.createElement('div');

root.setAttribute('id','app');
document.body.appendChild(root);

let stringBOXNode = new VText('ssss');

let a = new VNode('div', {
  id: '111'
}, [stringBOXNode]);
// const stringBOXDOMNode = stringBOXNode.createElement();

let redBoxNode = new VNode('div', {
  attributes: {
    style: 'width: 100px; height: 100px; background-color: #FF0000;',
    class: 'box box-red',
    'data-size': 100,
    id: 'test',
  },

  id: 'aaa',

}, [stringBOXNode, a, stringBOXNode], 'test');

const redBoxDomNode = redBoxNode.createElement();

document.body.appendChild(redBoxDomNode);
