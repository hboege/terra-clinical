import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import memoize from 'memoize-one';
import KeyCode from 'keycode-js';

import styles from './Row.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String identifier of the section in which the Row will be rendered.
   */
  sectionId: PropTypes.string.isRequired,
  /**
   * String identifier for the Row.
   */
  rowId: PropTypes.string.isRequired,
  /**
   * String-formatted width that the Row should be rendered as. Any valid css width value is supported (i.e. 200px, 3rem).
   */
  width: PropTypes.string.isRequired,
  /**
   * String-formatted height that the Row should be rendered as. Any valid css width value is supported (i.e. 200px, 3rem).
   */
  height: PropTypes.string.isRequired,
  /**
   * Boolean indicating whether or not the Row should render as selected.
   */
  isSelected: PropTypes.bool,
  /**
   * Boolean indicating whether the Row is selectable.
   */
  isSelectable: PropTypes.bool,
  /**
   * Function that will be called upon Row selection. The `isSelectable` prop must be true for this function to be called.
   * Parameters: `onSelect(sectionId, rowId)`
   */
  onSelect: PropTypes.func,
  /**
   * Function that will be called upon the mouse entering the selectable region of the Row. The `isSelectable` prop must be true for this function to be called.
   * Parameters: `onHoverStart(event)`
   */
  onHoverStart: PropTypes.func,
  /**
   * Function that will be called upon the mouse leaving the selectable region of the Row. The `isSelectable` prop must be true for this function to be called.
   * Parameters: `onHoverEnd(event)`
   */
  onHoverEnd: PropTypes.func,
  /**
   * Boolean indicating whether the row should be styled with alternate background styling.
   */
  isStriped: PropTypes.bool,
  /**
   * Content to render within the Row.
   */
  children: PropTypes.node,
};

class Row extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleTargetClick = this.handleTargetClick.bind(this);

    this.getRowStyles = memoize(this.getRowStyles);
  }

  /* eslint-disable class-methods-use-this */
  getRowStyles(width, height) {
    return {
      width,
      height,
    };
  }
  /* eslint-enable class-methods-use-this */

  handleKeyDown(event) {
    const pressedKey = event.nativeEvent.keyCode || event.nativeEvent.key; 
    if (pressedKey === KeyCode.KEY_RETURN || pressedKey === KeyCode.KEY_SPACE) {
      const { onSelect } = this.props;

      if (onSelect) {
        event.preventDefault();
        onSelect(this.props.sectionId, this.props.rowId);
      }
    }
  }

  handleTargetClick() {
    const { onSelect } = this.props;

    if (onSelect) {
      onSelect(this.props.sectionId, this.props.rowId);
    }
  }

  render() {
    const {
      rowId,
      sectionId,
      width,
      height,
      isSelected,
      isStriped,
      children,
      isSelectable,
      onSelect,
      onHoverStart,
      onHoverEnd,
      ...customProps
    } = this.props;

    /* eslint-disable react/forbid-dom-props */
    return (
      <div
        {...customProps}
        className={cx(['row', { selected: isSelected, striped: isStriped }, customProps.className])}
        style={this.getRowStyles(width, height)}
        onClick={isSelectable ? this.handleTargetClick : undefined}
        onKeyDown={isSelectable ? this.handleKeyDown : undefined}
        onMouseEnter={isSelectable ? onHoverStart : undefined}
        onMouseLeave={isSelectable ? onHoverEnd : undefined}
        tabIndex={isSelectable ? '0' : undefined}
        data-row
        data-row-id={rowId}
        data-section-id={sectionId}
      >
        {children}
      </div>
    );
    /* eslint-enable react/forbid-dom-props */
  }
}

Row.propTypes = propTypes;

export default Row;
