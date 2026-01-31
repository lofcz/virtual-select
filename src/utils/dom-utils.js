import { Utils } from './utils';

export class DomUtils {
  /**
   * @param {HTMLElement | NodeListOf<HTMLElement>} $ele
   * @param {string} classNames
   */
  static addClass($ele, classNames) {
    if (!$ele) {
      return;
    }

    const classNamesArr = classNames.split(' ');

    DomUtils.getElements($ele).forEach(($this) => {
      $this.classList.add(...classNamesArr);
    });
  }

  /**
   * @param {HTMLElement | NodeListOf<HTMLElement>} $ele
   * @param {string} classNames
   */
  static removeClass($ele, classNames) {
    if (!$ele) {
      return;
    }

    const classNamesArr = classNames.split(' ');

    DomUtils.getElements($ele).forEach(($this) => {
      $this.classList.remove(...classNamesArr);
    });
  }

  /**
   * @param {HTMLElement | NodeListOf<HTMLElement>} $ele
   * @param {string} classNames
   * @param {boolean} [isAdd]
   */
  static toggleClass($ele, classNames, isAdd) {
    if (!$ele) {
      return;
    }

    /** @type {boolean | undefined} */
    let isAdding;

    if (isAdd !== undefined) {
      isAdding = Boolean(isAdd);
    }

    DomUtils.getElements($ele).forEach(($this) => {
      $this.classList.toggle(classNames, isAdding);
    });
  }

  /**
   * @param {HTMLElement | HTMLElement[]} $ele
   * @param {string} className
   * @returns {boolean}
   */
  static hasClass($ele, className) {
    if (!$ele) {
      return false;
    }

    const elements = DomUtils.getElements($ele);
    return elements.some(($el) => $el.classList.contains(className));
  }

  /**
   * @param {HTMLElement} $ele
   * @returns {boolean}
   */
  static hasEllipsis($ele) {
    if (!$ele) {
      return false;
    }

    return $ele.scrollWidth > $ele.offsetWidth;
  }

  /**
   * @param {HTMLElement} $ele
   * @param {string} name
   * @param {string} [type]
   * @returns {any}
   */
  static getData($ele, name, type) {
    if (!$ele) {
      return undefined;
    }

    /** @type {any} */
    let value = $ele ? $ele.dataset[name] : '';

    if (type === 'number') {
      value = parseFloat(value) || 0;
    } else if (value === 'true') {
      value = true;
    } else if (value === 'false') {
      value = false;
    }

    return value;
  }

  /**
   * @param {HTMLElement} $ele
   * @param {string} name
   * @param {string} value
   */
  static setData($ele, name, value) {
    if (!$ele) {
      return;
    }

    // eslint-disable-next-line no-param-reassign
    $ele.dataset[name] = value;
  }

  /**
   * @param {HTMLElement} $ele
   * @param {string} name
   * @param {string} value
   */
  static setAttr($ele, name, value) {
    if (!$ele) {
      return;
    }

    $ele.setAttribute(name, value);
  }

  /**
   * @param {HTMLElement} $from
   * @param {HTMLElement} $to
   * @param {string[]} attrList
   * @param {string[]} valueLessProps
   */
  static setAttrFromEle($from, $to, attrList, valueLessProps) {
    /** @type {any} */
    const values = {};

    attrList.forEach((attr) => {
      values[attr] = $from.getAttribute(attr);
    });

    attrList.forEach((attr) => {
      const value = values[attr];

      if (value || (valueLessProps.indexOf(attr) !== -1 && value === '')) {
        $to.setAttribute(attr, value);
      }
    });
  }

  /**
   * @param {HTMLElement} $ele
   * @param {string} name
   * @param {string} value
   */
  static setStyle($ele, name, value) {
    if (!$ele) {
      return;
    }

    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    $ele.style[name] = value;
  }

  /**
   * @param {HTMLElement} $ele
   * @param {any} props
   */
  static setStyles($ele, props) {
    if (!$ele || !props) {
      return;
    }

    Object.keys(props).forEach((name) => {
      // @ts-ignore
      // eslint-disable-next-line no-param-reassign
      $ele.style[name] = props[name];
    });
  }

  /**
   * @param {HTMLElement} $ele
   * @param {string} name
   * @param {string} value
   */
  static setAria($ele, name, value) {
    if (!$ele) {
      return;
    }
    let attrName = name;

    if (attrName !== 'role') {
      attrName = `aria-${attrName}`;
    }

    $ele.setAttribute(attrName, value);
  }

  /**
   * @param {any} $ele
   * @returns {any[]}
   */
  static getElements($ele) {
    if (!$ele) {
      return [];
    }

    return $ele.forEach === undefined ? [$ele] : $ele;
  }

  /**
   * @static
   * @param {string} [$selector='']
   * @param {*} [$parentEle=undefined]
   * @return {*}
   * @memberof DomUtils
   */
  static getElementsBySelector($selector = '', $parentEle = undefined) {
    let elements;
    const parent = $parentEle !== undefined ? $parentEle : document;

    if ($selector !== '') {
      elements = parent.querySelectorAll($selector);
    }

    return elements !== undefined ? Array.from(elements) : [];
  }

  /**
   * @param {HTMLElement} $ele
   * @param {string} events
   * @param {Function} callback
   * @param {Object} [context]
   * @param {AbortController} [context.eventHandler]
   */
  static addEvent($ele, events, callback, context) {
    if (!$ele) {
      return;
    }

    const eventsArray = Utils.removeArrayEmpty(events.split(' '));

    eventsArray.forEach((event) => {
      const $eleArray = DomUtils.getElements($ele);

      $eleArray.forEach(($this) => {
        const options = context?.eventHandler ? { signal: context.eventHandler.signal } : undefined;
        $this.addEventListener(event, callback, options);
      });
    });
  }

  /**
   * @param {HTMLElement} $ele
   * @param {string} eventName
   * @param {boolean} [bubbles]
   */
  static dispatchEvent($ele, eventName, bubbles = false) {
    if (!$ele) {
      return;
    }

    const $eleArray = DomUtils.getElements($ele);

    /** using setTimeout to trigger asynchronous event */
    setTimeout(() => {
      $eleArray.forEach(($this) => {
        $this.dispatchEvent(new CustomEvent(eventName, { bubbles }));
      });
    }, 0);
  }

  /**
   * convert object to dom attributes
   * @param {ObjectString} data
   */
  static getAttributesText(data) {
    let html = '';

    if (!data) {
      return html;
    }

    // @ts-ignore
    Object.entries(data).forEach(([k, v]) => {
      if (v !== undefined) {
        html += ` ${k}="${v}" `;
      }
    });

    return html;
  }

  /**
   * convert "maxValue" to "data-max-value"
   * @param {string} prop
   */
  static convertPropToDataAttr(prop) {
    return prop ? `data-${prop}`.replace(/([A-Z])/g, '-$1').toLowerCase() : '';
  }

  /**
   * Changes the tab index of an element passed as an input
   * @static
   * @param {HTMLElement | NodeListOf<HTMLElement>} $ele
   * @param {number} newTabIndex
   * @memberof DomUtils
   */
  static changeTabIndex($ele, newTabIndex) {
    if (!$ele) {
      // eslint-disable-next-line no-console
      console.log($ele, 'Invalid element provided.');
      return;
    }

    DomUtils.getElements($ele).forEach(($this) => {
      // eslint-disable-next-line no-param-reassign
      $this.tabIndex = newTabIndex;
    });
  }

  /**
   * @param {HTMLElement} $ele
   * @param {string} event
   * @param {Function} callback
   */
  static removeEvent($ele, event, callback) {
    if (!$ele) {
      return;
    }

    const $eleArray = DomUtils.getElements($ele);

    $eleArray.forEach(($this) => {
      $this.removeEventListener(event, callback);
    });
  }

  /**
   * Get single element from selector string or return element
   * @param {string|HTMLElement} $ele
   * @return {HTMLElement|null}
   */
  static getElement($ele) {
    if ($ele) {
      if (typeof $ele === 'string') {
        $ele = document.querySelector($ele);
      } else if ($ele.length !== undefined) {
        $ele = $ele[0];
      }
    }

    return $ele || null;
  }

  /**
   * Show an element
   * @param {HTMLElement} $ele
   * @param {string} [value='block'] - CSS display value
   */
  static show($ele, value = 'block') {
    DomUtils.setStyle($ele, 'display', value);
  }

  /**
   * Hide an element
   * @param {HTMLElement} $ele
   */
  static hide($ele) {
    DomUtils.setStyle($ele, 'display', 'none');
  }

  /**
   * Get bounding client rect coordinates
   * @param {HTMLElement} $ele
   * @return {DOMRect|{}}
   */
  static getCoords($ele) {
    return $ele ? $ele.getBoundingClientRect() : {};
  }

  /**
   * Get absolute coordinates including scroll position
   * @param {HTMLElement} $ele
   * @return {Object|undefined}
   */
  static getAbsoluteCoords($ele) {
    if (!$ele) {
      return undefined;
    }

    let box = $ele.getBoundingClientRect();
    let pageX = window.pageXOffset;
    let pageY = window.pageYOffset;

    return {
      width: box.width,
      height: box.height,
      top: box.top + pageY,
      right: box.right + pageX,
      bottom: box.bottom + pageY,
      left: box.left + pageX,
    };
  }

  /**
   * Get which sides of an element are more visible in the viewport
   * @param {HTMLElement} $ele
   * @return {Object}
   */
  static getMoreVisibleSides($ele) {
    if (!$ele) {
      return {};
    }

    let box = $ele.getBoundingClientRect();
    let availableWidth = window.innerWidth;
    let availableHeight = window.innerHeight;
    let leftArea = box.left;
    let topArea = box.top;
    let rightArea = availableWidth - leftArea - box.width;
    let bottomArea = availableHeight - topArea - box.height;
    let horizontal = leftArea > rightArea ? 'left' : 'right';
    let vertical = topArea > bottomArea ? 'top' : 'bottom';

    return {
      horizontal,
      vertical,
    };
  }

  /**
   * Get all scrollable parent elements
   * @param {HTMLElement} $ele
   * @return {Array}
   */
  static getScrollableParents($ele) {
    if (!$ele) {
      return [];
    }

    let $scrollableElems = [window];
    let $parent = $ele.parentElement;

    while ($parent) {
      let overflowValue = getComputedStyle($parent).overflow;

      if (overflowValue.indexOf('scroll') !== -1 || overflowValue.indexOf('auto') !== -1) {
        $scrollableElems.push($parent);
      }

      $parent = $parent.parentElement;
    }

    return $scrollableElems;
  }
}
