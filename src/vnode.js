import { NODE_TYPE } from './nodeType';

/**
* Virtual Node Class
*
* @class VNode
* @constructor
*/
export default class VNode {
  /**
  * Constructor
  *
  * @method constructor
  * @param {String} tagName
  * @param {Object} properties
  * @param {Array} childNode
  * @param {String} namespace
  * @param {String} id
  */
  constructor(tagName, properties, childNode, id, namespace) {
    this.tagName = tagName;

    this.properties = properties || {};
    this.children = childNode || [];
    this.namespace = namespace || null;
    this.id = id ? String(id) : null;
    this.nodeType = NODE_TYPE.VNODE;
  }

  /**
  * create real HTMLElement from the v-node
  *
  * @method createElement
  * @return {HTMLElement} node in dom
  */
  createElement() {
    let element;

    // 1.parse domain and create domNode
    if (this.nodeType === NODE_TYPE.VNODE) {
      element = (this.domain === null) ?
        document.createElement(this.tagName)
        : document.createElementNS(this.namespace, this.tagName);
    }
    else if (this.nodeType === NODE_TYPE.VTEXT) {
      element = document.createTextNode(this.text);
      console.warn(element);
      return element;
    }

    // 2.parse attribute
    this.applyProps(element, this.properties);

    // 3.append child
    for (const child in this.children) {
      const childElement = this.children[child].createElement();
      if (childElement) {
        element.appendChild(childElement);
      }
    }

    console.warn(element);
    return element;
  }

  /**
  * Apply properties to the HTMLElement node
  *
  * @method applyProps
  * @param {HTMLElement} domNode HTMLElement node
  * @param {Object} props Properties
  */
  applyProps(domNode, props) {
    for (const key in props) {
      if (props.hasOwnProperty(key)) {
        if (typeof props[key] === 'object') {
          this.applyAttr(domNode, props[key]);
        } else {
          if (props[key]) {
            domNode.setAttribute(key, props[key]);
          } else {
            domNode.removeAttribute(key);
          }
        }
      }
    }
  }

  /**
  * Apply attribute to the HTMLElement node
  *
  * @method applyAttr
  * @param {HTMLElement} domNode HTMLElement node
  * @param {Object} props Properties
  */
  applyAttr(domNode, props) {
    for (let key in props) {
      if (props.hasOwnProperty(key)) {
        if (props[key]) {
          domNode.setAttribute(key, props[key]);
        } else {
          domNode.removeAttribute(key);
        }
      }
    }
  }

  /**
  * @TODO
  */
  removeProps(domNode, props) {

  }
}
