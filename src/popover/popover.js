/** cSpell:ignore popcomp */
/* eslint-disable class-methods-use-this */
// @ts-nocheck
import { Utils, DomUtils } from '../utils';

/**
 * POPPER COMPONENT
 * Original source: popper-plugin
 * Handles positioning of popover elements
 */

const allPositions = ['top', 'bottom', 'left', 'right'];
const allPositionsClass = allPositions.map((d) => `position-${d}`);
const arrowRotateMapping = {
  top: 'rotate(180deg)',
  left: 'rotate(90deg)',
  right: 'rotate(-90deg)',
};

export class PopperComponent {
  /**
   * Create a Popper
   * @property {element} $popperEle - Popper element
   * @property {element} $triggerEle - Trigger element
   * @property {element} $arrowEle - Arrow icon in the popper
   * @property {string} [position=auto] - Position of popper (top, bottom, left, right, auto)
   * @property {number} [margin=8] - Space between popper and its activator (in pixel)
   * @property {number} [offset=5] - Space between popper and window edge (in pixel)
   * @property {number} [enterDelay=0] - Delay time before showing popper (in milliseconds)
   * @property {number} [exitDelay=0] - Delay time before hiding popper (in milliseconds)
   * @property {number} [showDuration=300] - Transition duration for show animation (in milliseconds)
   * @property {number} [hideDuration=200] - Transition duration for hide animation (in milliseconds)
   * @property {number} [transitionDistance=10] - Distance to translate on show/hide animation (in pixel)
   * @property {number} [borderRadiusOffset=4] - Offset to subtract from translate when dropdown opens at top/bottom for seamless border radius
   * @property {number} [zIndex=1] - CSS z-index value for popper
   * @property {function} [afterShow] - Callback function to trigger after show
   * @property {function} [afterHide] - Callback function to trigger after hide
   */
  constructor(options) {
    try {
      this.setProps(options);
      this.init();
    } catch (e) {
      console.warn(`Couldn't initiate popper`);
      console.error(e);
    }
  }

  init() {
    let $popperEle = this.$popperEle;

    if (!$popperEle || !this.$triggerEle) {
      return;
    }

    DomUtils.setStyle($popperEle, 'zIndex', this.zIndex);

    this.setPosition();
  }

  /** set methods - start */
  setProps(options) {
    options = this.setDefaultProps(options);
    let position = options.position ? options.position.toLowerCase() : 'auto';

    this.$popperEle = options.$popperEle;
    this.$triggerEle = options.$triggerEle;
    this.$arrowEle = options.$arrowEle;
    this.margin = parseFloat(options.margin);
    this.offset = parseFloat(options.offset);
    this.enterDelay = parseFloat(options.enterDelay);
    this.exitDelay = parseFloat(options.exitDelay);
    this.showDuration = parseFloat(options.showDuration);
    this.hideDuration = parseFloat(options.hideDuration);
    this.transitionDistance = parseFloat(options.transitionDistance);
    this.borderRadiusOffset = parseFloat(options.borderRadiusOffset);
    this.maxHeight = options.maxHeight ? parseFloat(options.maxHeight) : null;
    this.zIndex = parseFloat(options.zIndex);
    this.afterShowCallback = options.afterShow;
    this.afterHideCallback = options.afterHide;

    this.hasArrow = this.$arrowEle ? true : false;

    if (position.indexOf(' ') !== -1) {
      let positionArray = position.split(' ');
      this.position = positionArray[0];
      this.secondaryPosition = positionArray[1];
    } else {
      this.position = position;
    }
  }

  setDefaultProps(options) {
    let defaultOptions = {
      position: 'auto',
      margin: 8,
      offset: 5,
      enterDelay: 0,
      exitDelay: 0,
      showDuration: 300,
      hideDuration: 200,
      transitionDistance: 10,
      borderRadiusOffset: 4,
      zIndex: 1,
    };

    return Object.assign(defaultOptions, options);
  }

  /**
   * Calculate the optimal position for the popper without modifying the DOM
   * Returns the calculated position data without applying it
   * @returns {Object} Position data including position, top, left, and whether to flip
   */
  calculatePosition() {
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;
    let popperEleCoords = DomUtils.getAbsoluteCoords(this.$popperEle);
    let triggerEleCoords = DomUtils.getAbsoluteCoords(this.$triggerEle);
    let popperEleWidth = popperEleCoords.width;
    let popperEleHeight = popperEleCoords.height;
    let popperEleTop = popperEleCoords.top;
    let popperEleRight = popperEleCoords.right;
    let popperEleBotttom = popperEleCoords.bottom;
    let popperEleLeft = popperEleCoords.left;
    let triggerEleWidth = triggerEleCoords.width;
    let triggerEleHeight = triggerEleCoords.height;
    let triggerEleTop = triggerEleCoords.top;
    let triggerEleRight = triggerEleCoords.right;
    let triggerEleBottom = triggerEleCoords.bottom;
    let triggerEleLeft = triggerEleCoords.left;
    let topDiff = triggerEleTop - popperEleTop;
    let leftDiff = triggerEleLeft - popperEleLeft;
    let left = leftDiff;
    let top = topDiff;
    let position = this.position;
    let secondaryPosition = this.secondaryPosition;
    let widthCenter = triggerEleWidth / 2 - popperEleWidth / 2;
    let heightCenter = triggerEleHeight / 2 - popperEleHeight / 2;
    let margin = this.margin;
    let borderRadiusOffset = this.borderRadiusOffset;
    let topEdge = window.scrollY - popperEleTop;
    let bottomEdge = viewportHeight + topEdge;
    let leftEdge = window.scrollX - popperEleLeft;
    let rightEdge = viewportWidth + leftEdge;
    let inversePosition = null;
    let viewportOffset = this.offset;
    let flipped = false;

    if (viewportOffset) {
      topEdge += viewportOffset;
      bottomEdge -= viewportOffset;
      leftEdge += viewportOffset;
      rightEdge -= viewportOffset;
    }

    /** find the position which has more space */
    if (position === 'auto') {
      let moreVisibleSides = DomUtils.getMoreVisibleSides(this.$triggerEle);
      position = moreVisibleSides.vertical;
    }

    let positionsValue = {
      top: {
        top: top - popperEleHeight - margin,
        left: left + widthCenter,
      },
      bottom: {
        top: top + triggerEleHeight + margin,
        left: left + widthCenter,
      },
      right: {
        top: top + heightCenter,
        left: left + triggerEleWidth + margin,
      },
      left: {
        top: top + heightCenter,
        left: left - popperEleWidth - margin,
      },
    };

    let positionValue = positionsValue[position];
    top = positionValue.top;
    left = positionValue.left;

    /** Calculate available space and adjust height/position if needed */
    if (this.maxHeight && (position === 'top' || position === 'bottom')) {
      let spaceAbove = triggerEleTop - topEdge - margin;
      let spaceBelow = bottomEdge - triggerEleBottom - margin;
      let maxAvailableSpace = position === 'bottom' ? spaceBelow : spaceAbove;
      let oppositeSpace = position === 'bottom' ? spaceAbove : spaceBelow;
      
      // Check if we should flip to opposite position for better fit
      if (maxAvailableSpace < 100 && oppositeSpace > maxAvailableSpace) {
        // Flip to opposite position
        position = position === 'bottom' ? 'top' : 'bottom';
        flipped = true;
        maxAvailableSpace = oppositeSpace;
        // Recalculate positionsValue with new position and get new coordinates
        let newPositionsValue = {
          top: {
            top: topDiff - popperEleHeight - margin,
            left: leftDiff + widthCenter,
          },
          bottom: {
            top: topDiff + triggerEleHeight + margin,
            left: leftDiff + widthCenter,
          },
        };
        let newPositionValue = newPositionsValue[position];
        top = newPositionValue.top;
        left = newPositionValue.left;
      }
      
      // Only reduce if we need to fit in smaller space than desired
      if (this.maxHeight > maxAvailableSpace) {
        // Reduce height to fit available space (with minimum of 100px)
        let newHeight = Math.max(100, maxAvailableSpace);
        // Update height for positioning calculations
        popperEleHeight = newHeight;
        // Recalculate position with new height
        if (position === 'top') {
          top = topDiff - popperEleHeight - margin;
        } else {
          top = topDiff + triggerEleHeight + margin;
        }
      }
    }

    /** setting secondary position value */
    if (secondaryPosition) {
      if (secondaryPosition === 'top') {
        top = topDiff;
      } else if (secondaryPosition === 'bottom') {
        top = topDiff + triggerEleHeight - popperEleHeight;
      } else if (secondaryPosition === 'left') {
        left = leftDiff;
      } else if (secondaryPosition === 'right') {
        left = leftDiff + triggerEleWidth - popperEleWidth;
      }
    }

    /* if popperEle is hiding on left edge */
    if (left < leftEdge) {
      if (position === 'left') {
        inversePosition = 'right';
      } else if (leftEdge + popperEleLeft > triggerEleRight) {
        /** if triggerEle is hiding on left edge */
        left = triggerEleRight - popperEleLeft;
      } else {
        left = leftEdge;
      }
    } else if (left + popperEleWidth > rightEdge) {
      /* if popperEle is hiding on right edge */
      if (position === 'right') {
        inversePosition = 'left';
      } else if (rightEdge + popperEleLeft < triggerEleLeft) {
        /** if triggerEle is hiding on right edge */
        left = triggerEleLeft - popperEleRight;
      } else {
        left = rightEdge - popperEleWidth;
      }
    }

    /* if popperEle is hiding on top edge */
    if (top < topEdge) {
      if (position === 'top') {
        inversePosition = 'bottom';
      } else if (topEdge + popperEleTop > triggerEleBottom) {
        /** if triggerEle is hiding on top edge */
        top = triggerEleBottom - popperEleTop;
      } else {
        top = topEdge;
      }
    } else if (top + popperEleHeight > bottomEdge) {
      /* if popperEle is hiding on bottom edge */
      if (position === 'bottom') {
        inversePosition = 'top';
      } else if (bottomEdge + popperEleTop < triggerEleTop) {
        /** if triggerEle is hiding on bottom edge */
        top = triggerEleTop - popperEleBotttom;
      } else {
        top = bottomEdge - popperEleHeight;
      }
    }

    /** if popper element is hidden in the given position, show it on opposite position */
    if (inversePosition) {
      let inversePositionValue = positionsValue[inversePosition];
      position = inversePosition;
      flipped = true;

      if (position === 'top' || position === 'bottom') {
        top = inversePositionValue.top;
      } else if (position === 'left' || position === 'right') {
        left = inversePositionValue.left;
      }
    }

    // Apply border radius offset for seamless connection at top/bottom positions
    if (position === 'top') {
      top += borderRadiusOffset;
    } else if (position === 'bottom' || !position || position === 'auto') {
      top -= borderRadiusOffset;
    }

    return {
      position,
      top,
      left,
      flipped,
      popperEleWidth,
      popperEleHeight,
      triggerEleWidth,
      triggerEleHeight,
      topDiff,
      leftDiff,
    };
  }

  setPosition() {
    DomUtils.show(this.$popperEle, 'inline-flex');

    let transitionDistance = this.transitionDistance;
    let borderRadiusOffset = this.borderRadiusOffset;
    let fromTop;
    let fromLeft;

    // Get calculated position
    let positionData = this.calculatePosition();
    let position = positionData.position;
    let top = positionData.top;
    let left = positionData.left;
    let popperEleHeight = positionData.popperEleHeight;
    let popperEleWidth = positionData.popperEleWidth;
    let triggerEleHeight = positionData.triggerEleHeight;
    let triggerEleWidth = positionData.triggerEleWidth;
    let topDiff = positionData.topDiff;
    let leftDiff = positionData.leftDiff;

    // Apply height adjustments based on maxHeight if needed
    if (this.maxHeight && (position === 'top' || position === 'bottom')) {
      let viewportHeight = window.innerHeight;
      let triggerEleCoords = DomUtils.getAbsoluteCoords(this.$triggerEle);
      let triggerEleTop = triggerEleCoords.top;
      let triggerEleBottom = triggerEleCoords.bottom;
      let topEdge = window.scrollY - DomUtils.getAbsoluteCoords(this.$popperEle).top;
      let bottomEdge = viewportHeight + topEdge;
      let margin = this.margin;
      let viewportOffset = this.offset;

      if (viewportOffset) {
        topEdge += viewportOffset;
        bottomEdge -= viewportOffset;
      }

      let spaceAbove = triggerEleTop - topEdge - margin;
      let spaceBelow = bottomEdge - triggerEleBottom - margin;
      let maxAvailableSpace = position === 'bottom' ? spaceBelow : spaceAbove;

      if (this.maxHeight > maxAvailableSpace) {
        let newHeight = Math.max(100, maxAvailableSpace);
        DomUtils.setStyle(this.$popperEle, 'height', `${newHeight}px`);
        DomUtils.setStyle(this.$popperEle, 'maxHeight', `${newHeight}px`);
      } else {
        DomUtils.setStyle(this.$popperEle, 'height', '');
        DomUtils.setStyle(this.$popperEle, 'maxHeight', `${this.maxHeight}px`);
      }
    }

    if (position === 'top') {
      fromTop = top + transitionDistance;
      fromLeft = left;
    } else if (position === 'right') {
      fromTop = top;
      fromLeft = left - transitionDistance;
    } else if (position === 'left') {
      fromTop = top;
      fromLeft = left + transitionDistance;
    } else {
      fromTop = top - transitionDistance;
      fromLeft = left;
    }
    fromTop = fromTop;
    fromLeft = fromLeft;

    let transformText = `translate3d(${parseInt(fromLeft)}px, ${parseInt(fromTop)}px, 0)`;

    DomUtils.setStyle(this.$popperEle, 'transform', transformText);
    DomUtils.setData(this.$popperEle, 'fromLeft', fromLeft);
    DomUtils.setData(this.$popperEle, 'fromTop', fromTop);
    DomUtils.setData(this.$popperEle, 'top', top);
    DomUtils.setData(this.$popperEle, 'left', left);
    DomUtils.removeClass(this.$popperEle, allPositionsClass.join(' '));
    DomUtils.addClass(this.$popperEle, `position-${position}`);

    // Store the resolved position so it can be accessed after show
    this.resolvedPosition = position;

    if (this.hasArrow) {
      let arrowLeft = 0;
      let arrowTop = 0;
      let fullLeft = left + popperEleLeft;
      let fullTop = top + popperEleTop;
      let arrowWidthHalf = this.$arrowEle.offsetWidth / 2;
      let rotateText = arrowRotateMapping[position] || '';

      if (position === 'top' || position === 'bottom') {
        let triggerEleWidthCenter = triggerEleWidth / 2 + triggerEleLeft;
        arrowLeft = triggerEleWidthCenter - fullLeft;

        /** if arrow crossed left edge of popper element */
        if (arrowLeft < arrowWidthHalf) {
          arrowLeft = arrowWidthHalf;
        } else if (arrowLeft > popperEleWidth - arrowWidthHalf) {
          /** if arrow crossed right edge of popper element */
          arrowLeft = popperEleWidth - arrowWidthHalf;
        }
      } else if (position === 'left' || position === 'right') {
        let triggerEleHeightCenter = triggerEleHeight / 2 + triggerEleTop;
        arrowTop = triggerEleHeightCenter - fullTop;

        /** if arrow crossed top edge of popper element */
        if (arrowTop < arrowWidthHalf) {
          arrowTop = arrowWidthHalf;
        } else if (arrowTop > popperEleHeight - arrowWidthHalf) {
          /** if arrow crossed bottom edge of popper element */
          arrowTop = popperEleHeight - arrowWidthHalf;
        }
      }

      DomUtils.setStyle(this.$arrowEle, 'transform', `translate3d(${parseInt(arrowLeft)}px, ${parseInt(arrowTop)}px, 0) ${rotateText}`);
    }

    DomUtils.hide(this.$popperEle);
  }

  resetPosition() {
    DomUtils.setStyle(this.$popperEle, 'transform', 'none');
    this.setPosition();
  }
  /** set methods - end */

  /**
   * @prop {boolean} [resetPosition] - Recalculate position before show
   * @prop {object} [data] - Any custom data which would be passed to afterShow callback function call
   */
  show({ resetPosition, data } = {}) {
    clearTimeout(this.exitDelayTimeout);
    clearTimeout(this.hideDurationTimeout);

    if (resetPosition) {
      this.resetPosition();
    }

    this.enterDelayTimeout = setTimeout(() => {
      let left = DomUtils.getData(this.$popperEle, 'left');
      let top = DomUtils.getData(this.$popperEle, 'top');
      let transformText = `translate3d(${parseInt(left)}px, ${parseInt(top)}px, 0)`;
      let showDuration = this.showDuration;

      DomUtils.show(this.$popperEle, 'inline-flex');

      /** calling below method to force redraw - it would move the popper element to its fromLeft and fromTop position */
      DomUtils.getCoords(this.$popperEle);

      DomUtils.setStyle(this.$popperEle, 'transitionDuration', showDuration + 'ms');
      DomUtils.setStyle(this.$popperEle, 'transform', transformText);
      DomUtils.setStyle(this.$popperEle, 'opacity', 1);

      this.showDurationTimeout = setTimeout(() => {
        if (typeof this.afterShowCallback === 'function') {
          this.afterShowCallback(data);
        }
      }, showDuration);
    }, this.enterDelay);
  }

  /**
   * @prop {object} [data] - Any custom data which would be passed to afterHide callback function call
   */
  hide({ data } = {}) {
    clearTimeout(this.enterDelayTimeout);
    clearTimeout(this.showDurationTimeout);

    this.exitDelayTimeout = setTimeout(() => {
      if (this.$popperEle) {
        let left = parseInt(DomUtils.getData(this.$popperEle, 'fromLeft'));
        let top = parseInt(DomUtils.getData(this.$popperEle, 'fromTop'));
        let transformText = `translate3d(${left}px, ${top}px, 0)`;
        let hideDuration = this.hideDuration;

        DomUtils.setStyle(this.$popperEle, 'transitionDuration', hideDuration + 'ms');
        DomUtils.setStyle(this.$popperEle, 'transform', transformText);
        DomUtils.setStyle(this.$popperEle, 'opacity', 0);

        this.hideDurationTimeout = setTimeout(() => {
          DomUtils.hide(this.$popperEle);

          if (typeof this.afterHideCallback === 'function') {
            this.afterHideCallback(data);
          }
        }, hideDuration);
      }
    }, this.exitDelay);
  }

  updatePosition() {
    DomUtils.setStyle(this.$popperEle, 'transitionDuration', '0ms');

    this.resetPosition();

    let left = parseInt(DomUtils.getData(this.$popperEle, 'left'));
    let top = parseInt(DomUtils.getData(this.$popperEle, 'top'));

    DomUtils.show(this.$popperEle, 'inline-flex');
    DomUtils.setStyle(this.$popperEle, 'transform', `translate3d(${left}px, ${top}px, 0)`);
  }
}

/**
 * POPOVER COMPONENT
 * Original source: popover-plugin
 * Handles popover show/hide behavior and interactions
 */

const keyDownMethodMapping = {
  27: 'onEscPress',
};

const dataProps = [
  'target',
  'position',
  'margin',
  'offset',
  'enterDelay',
  'exitDelay',
  'showDuration',
  'hideDuration',
  'transitionDistance',
  'updatePositionThrottle',
  'zIndex',
  'hideOnOuterClick',
  'showOnHover',
  'hideArrowIcon',
  'disableManualAction',
  'disableUpdatePosition',
];

let attrPropsMapping;

export class PopoverComponent {
  /**
   * @property {(element|string)} ele - Trigger element to toggle popover element
   * @property {string} target - CSS selector to get popover element
   * @property {string} [position=auto] - Position of popover element (auto, top, bottom, left, right, top left, top right, bottom left, bottom right, left top, left bottom, right top, right bottom)
   * @property {number} [margin=8] - Space between popover element and its Trigger element (in pixel)
   * @property {number} [offset=5] - Space between popover element and window edge (in pixel)
   * @property {number} [enterDelay=0] - Delay time before showing popover element (in milliseconds)
   * @property {number} [exitDelay=0] - Delay time before hiding popover element (in milliseconds)
   * @property {number} [showDuration=300] - Transition duration for show animation (in milliseconds)
   * @property {number} [hideDuration=200] - Transition duration for hide animation (in milliseconds)
   * @property {number} [transitionDistance=10] - Distance to translate on show/hide animation (in pixel)
   * @property {number} [updatePositionThrottle=100] - Throttle time for updating popover position on scroll event (in milliseconds)
   * @property {number} [zIndex=1] - CSS z-index value for popover element
   * @property {boolean} [hideOnOuterClick=true] - Hide on clicking outside of popover element
   * @property {boolean} [showOnHover=false] - Show popover element on hovering trigger element
   * @property {boolean} [hideArrowIcon=false] - Hide arrow icon in the popover
   * @property {boolean} [disableManualAction=false] - By default popover would be showed on click/hover trigger element.
   * Set true to disable it and handle show/hide programmatically.
   * @property {boolean} [disableUpdatePosition=false] - By default popover position would be updated on scrolling the parent element.
   * Set true to disable it.
   * @property {function} [beforeShow] - Callback function for before showing popover
   * @property {function} [afterShow] - Callback function for after showing popover
   * @property {function} [beforeHide] - Callback function for before hiding popover
   * @property {function} [afterHide] - Callback function for after hiding popover
   */
  constructor(options) {
    try {
      this.setProps(options);
      this.init();
    } catch (e) {
      console.warn(`Couldn't initiate Popover component`);
      console.error(e);
    }
  }

  init() {
    if (!this.$popover) {
      return;
    }

    this.setElementProps();
    this.renderArrow();
    this.initPopper();
    this.addEvents();
  }

  /** dom event methods - start */
  getEvents() {
    let events = [
      { $ele: document, event: 'click', method: 'onDocumentClick' },
      { $ele: document, event: 'keydown', method: 'onDocumentKeyDown' },
    ];

    if (!this.disableManualAction) {
      events.push({ $ele: this.$ele, event: 'click', method: 'onTriggerEleClick' });

      if (this.showOnHover) {
        events.push({ $ele: this.$ele, event: 'mouseenter', method: 'onTriggerEleMouseEnter' });
        events.push({ $ele: this.$ele, event: 'mouseleave', method: 'onTriggerEleMouseLeave' });
      }
    }

    return events;
  }

  addOrRemoveEvents(action) {
    let events = this.getEvents();

    events.forEach((d) => {
      this.addOrRemoveEvent({
        action,
        $ele: d.$ele,
        events: d.event,
        method: d.method,
      });
    });
  }

  addEvents() {
    this.addOrRemoveEvents('add');
  }

  removeEvents() {
    this.addOrRemoveEvents('remove');
    this.removeScrollEventListeners();
    this.removeResizeEventListeners();
  }

  addOrRemoveEvent({ action, $ele, events, method, throttle }) {
    if (!$ele) {
      return;
    }

    events = Utils.removeArrayEmpty(events.split(' '));

    events.forEach((event) => {
      let eventsKey = `${method}-${event}`;
      let callback = this.events[eventsKey];

      if (!callback) {
        callback = this[method].bind(this);

        if (throttle) {
          callback = Utils.throttle(callback, throttle);
        }

        this.events[eventsKey] = callback;
      }

      if (action === 'add') {
        DomUtils.addEvent($ele, event, callback);
      } else {
        DomUtils.removeEvent($ele, event, callback);
      }
    });
  }

  addScrollEventListeners() {
    this.$scrollableElems = DomUtils.getScrollableParents(this.$ele);

    this.addOrRemoveEvent({
      action: 'add',
      $ele: this.$scrollableElems,
      events: 'scroll',
      method: 'onAnyParentScroll',
      throttle: this.updatePositionThrottle,
    });
  }

  removeScrollEventListeners() {
    if (!this.$scrollableElems) {
      return;
    }

    this.addOrRemoveEvent({
      action: 'remove',
      $ele: this.$scrollableElems,
      events: 'scroll',
      method: 'onAnyParentScroll',
    });

    this.$scrollableElems = null;
  }

  addResizeEventListeners() {
    this.addOrRemoveEvent({
      action: 'add',
      $ele: window,
      events: 'resize',
      method: 'onResize',
      throttle: this.updatePositionThrottle,
    });
  }

  removeResizeEventListeners() {
    this.addOrRemoveEvent({
      action: 'remove',
      $ele: window,
      events: 'resize',
      method: 'onResize',
    });
  }

  onAnyParentScroll() {
    this.popper.updatePosition();
  }

  onResize() {
    this.popper.updatePosition();
  }

  onDocumentClick(e) {
    let $target = e.target;
    let $triggerEle = $target.closest('.pop-comp-ele');
    let $popoverEle = $target.closest('.pop-comp-wrapper');

    if (this.hideOnOuterClick && $triggerEle !== this.$ele && $popoverEle !== this.$popover) {
      this.hide();
    }
  }

  onDocumentKeyDown(e) {
    let key = e.which || e.keyCode;
    let method = keyDownMethodMapping[key];

    if (method) {
      this[method](e);
    }
  }

  onEscPress() {
    if (this.hideOnOuterClick) {
      this.hide();
    }
  }

  onTriggerEleClick() {
    this.toggle();
  }

  onTriggerEleMouseEnter() {
    this.show();
  }

  onTriggerEleMouseLeave() {
    this.hide();
  }
  /** dom event methods - end */

  /** set methods - start */
  setProps(options) {
    options = this.setDefaultProps(options);
    this.setPropsFromElementAttr(options);

    let convertToBoolean = Utils.convertToBoolean;

    this.$ele = options.ele;
    this.target = options.target;
    this.position = options.position;
    this.margin = parseFloat(options.margin);
    this.offset = parseFloat(options.offset);
    this.enterDelay = parseFloat(options.enterDelay);
    this.exitDelay = parseFloat(options.exitDelay);
    this.showDuration = parseFloat(options.showDuration);
    this.hideDuration = parseFloat(options.hideDuration);
    this.transitionDistance = parseFloat(options.transitionDistance);
    this.updatePositionThrottle = parseFloat(options.updatePositionThrottle);
    this.zIndex = parseFloat(options.zIndex);
    this.hideOnOuterClick = convertToBoolean(options.hideOnOuterClick);
    this.showOnHover = convertToBoolean(options.showOnHover);
    this.hideArrowIcon = convertToBoolean(options.hideArrowIcon);
    this.disableManualAction = convertToBoolean(options.disableManualAction);
    this.disableUpdatePosition = convertToBoolean(options.disableUpdatePosition);
    this.beforeShowCallback = options.beforeShow;
    this.afterShowCallback = options.afterShow;
    this.beforeHideCallback = options.beforeHide;
    this.afterHideCallback = options.afterHide;

    this.events = {};

    this.$popover = DomUtils.getElement(this.target);
  }

  setDefaultProps(options) {
    let defaultOptions = {
      position: 'auto',
      margin: 8,
      offset: 5,
      enterDelay: 0,
      exitDelay: 0,
      showDuration: 300,
      hideDuration: 200,
      transitionDistance: 10,
      updatePositionThrottle: 100,
      zIndex: 1,
      hideOnOuterClick: true,
      showOnHover: false,
      hideArrowIcon: false,
      disableManualAction: false,
      disableUpdatePosition: false,
    };

    return Object.assign(defaultOptions, options);
  }

  setPropsFromElementAttr(options) {
    let $ele = options.ele;

    for (let k in attrPropsMapping) {
      let value = $ele.getAttribute(k);

      if (value) {
        options[attrPropsMapping[k]] = value;
      }
    }
  }

  setElementProps() {
    let $ele = this.$ele;
    $ele.popComp = this;
    $ele.show = PopoverComponent.showMethod;
    $ele.hide = PopoverComponent.hideMethod;
    $ele.updatePosition = PopoverComponent.updatePositionMethod;

    DomUtils.addClass(this.$ele, 'pop-comp-ele');
    DomUtils.addClass(this.$popover, 'pop-comp-wrapper');
  }
  /** set methods - end */

  /** get methods - start */
  getOtherTriggerPopComp() {
    let popComp = this.$popover.popComp;
    let otherPopComp;

    if (popComp && popComp.$ele !== this.$ele) {
      otherPopComp = popComp;
    }

    return otherPopComp;
  }
  /** get methods - end */

  initPopper() {
    let options = {
      $popperEle: this.$popover,
      $triggerEle: this.$ele,
      $arrowEle: this.$arrowEle,
      position: this.position,
      margin: this.margin,
      offset: this.offset,
      enterDelay: this.enterDelay,
      exitDelay: this.exitDelay,
      showDuration: this.showDuration,
      hideDuration: this.hideDuration,
      transitionDistance: this.transitionDistance,
      zIndex: this.zIndex,
      afterShow: this.afterShow.bind(this),
      afterHide: this.afterHide.bind(this),
    };

    this.popper = new PopperComponent(options);
  }

  beforeShow() {
    if (typeof this.beforeShowCallback === 'function') {
      this.beforeShowCallback(this);
    }
  }

  beforeHide() {
    if (typeof this.beforeHideCallback === 'function') {
      this.beforeHideCallback(this);
    }
  }

  show() {
    if (this.isShown()) {
      return;
    }

    if (this.isShownForOtherTrigger()) {
      this.showAfterOtherHide();
      return;
    }

    DomUtils.addClass(this.$popover, 'pop-comp-disable-events');

    this.$popover.popComp = this;
    this.beforeShow();
    this.popper.show({ resetPosition: true });

    DomUtils.addClass(this.$ele, 'pop-comp-active');
  }

  hide() {
    if (!this.isShown()) {
      return;
    }

    this.beforeHide();
    this.popper.hide();
    this.removeScrollEventListeners();
    this.removeResizeEventListeners();
  }

  toggle(show) {
    if (show === undefined) {
      show = !this.isShown();
    }

    if (show) {
      this.show();
    } else {
      this.hide();
    }
  }

  isShown() {
    return DomUtils.hasClass(this.$ele, 'pop-comp-active');
  }

  /**
   * Calculate the optimal position for the popover without showing it
   * This allows setting position classes before the dropdown becomes visible
   * @returns {Object} Position data including position name and flip status
   */
  calculatePosition() {
    if (this.popper) {
      return this.popper.calculatePosition();
    }
    return { position: this.position || 'bottom', flipped: false };
  }

  isShownForOtherTrigger() {
    let otherPopComp = this.getOtherTriggerPopComp();

    return otherPopComp ? otherPopComp.isShown() : false;
  }

  /** showing popover after same popover with different trigger element hide */
  showAfterOtherHide() {
    let otherPopComp = this.getOtherTriggerPopComp();

    if (!otherPopComp) {
      return;
    }

    let otherHideTime = otherPopComp.exitDelay + otherPopComp.hideDuration + 100;

    setTimeout(() => {
      this.show();
    }, otherHideTime);
  }

  afterShow() {
    if (this.showOnHover) {
      /** using setTimeout to avoid an issue in firefox. show/hide event is calling continuously when showOnHover is enabled */
      setTimeout(() => {
        DomUtils.removeClass(this.$popover, 'pop-comp-disable-events');
      }, 2000);
    } else {
      DomUtils.removeClass(this.$popover, 'pop-comp-disable-events');
    }

    if (!this.disableUpdatePosition) {
      this.addScrollEventListeners();
      this.addResizeEventListeners();
    }

    if (typeof this.afterShowCallback === 'function') {
      this.afterShowCallback(this);
    }
  }

  afterHide() {
    DomUtils.removeClass(this.$ele, 'pop-comp-active');

    if (typeof this.afterHideCallback === 'function') {
      this.afterHideCallback(this);
    }
  }

  renderArrow() {
    if (this.hideArrowIcon) {
      return;
    }

    let $arrowEle = this.$popover.querySelector('.pop-comp-arrow');

    if (!$arrowEle) {
      this.$popover.insertAdjacentHTML('afterbegin', '<i class="pop-comp-arrow"></i>');
      $arrowEle = this.$popover.querySelector('.pop-comp-arrow');
    }

    this.$arrowEle = $arrowEle;
  }

  destroy() {
    this.removeEvents();
  }

  /** static methods - start */
  static init(options) {
    let $eleArray = options.ele;

    if (!$eleArray) {
      return;
    }

    let singleEle = false;

    if (typeof $eleArray === 'string') {
      $eleArray = document.querySelectorAll($eleArray);

      if (!$eleArray) {
        return;
      }

      if ($eleArray.length === 1) {
        singleEle = true;
      }
    }

    if ($eleArray.length === undefined) {
      $eleArray = [$eleArray];
      singleEle = true;
    }

    let instances = [];
    $eleArray.forEach(($ele) => {
      options.ele = $ele;
      PopoverComponent.destroy($ele);
      instances.push(new PopoverComponent(options));
    });

    return singleEle ? instances[0] : instances;
  }

  static destroy($ele) {
    if (!$ele) {
      return;
    }

    let popComp = $ele.popComp;

    if (popComp) {
      popComp.destroy();
    }
  }

  static showMethod() {
    this.popComp.show();
  }

  static hideMethod() {
    this.popComp.hide();
  }

  static updatePositionMethod() {
    this.popComp.popper.updatePosition();
  }

  static getAttrProps() {
    const { convertPropToDataAttr } = DomUtils;
    const result = {};

    dataProps.forEach((d) => {
      result[convertPropToDataAttr(d)] = d;
    });

    return result;
  }
  /** static methods - end */
}

attrPropsMapping = PopoverComponent.getAttrProps();

window.PopoverComponent = PopoverComponent;
