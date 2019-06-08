import React from 'react';

class FlippyCard extends React.Component {
  render() {
    const { className, cardType, style,  elementType, animationDuration,  ...rest } = this.props;
    return (React.createElement((elementType || 'div'),
      {
        className:`flippy-card flippy-${cardType} ${className || ''}`,
        ...rest,
        style: {
          ...(style || {}),
          ...{ transitionDuration: `${(animationDuration / 1000)}s` }
        },
      }, this.props.children)
    );
  }
}

export const FrontSide = ({ isFlipped, style, animationDuration, ...props }) => (
  <FlippyCard
    {...props}
    style={
      {
        ...(style || {}),
      }
    }
    animationDuration={animationDuration}
    cardType="front"
  />
);

export const BackSide = ({ isFlipped, style, ...props }) => (
  <FlippyCard
    {...props}
    style={
      {
        ...(style || {}),
      }
    }
    cardType="back"
  />
);

FlippyCard.defaultProps = {
  animationDuration: 600
};
