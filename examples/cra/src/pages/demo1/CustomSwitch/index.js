import React, { useState, useEffect } from 'react';
import { withRouter, matchPath } from 'react-router-dom';
import { Offscreen } from 'react-stillness-component';

const StillnessSwitch = (props) => {
  const { match, location, childLocation } = props;
  const [paths, setPaths] = useState([]);

  const _location = childLocation || location;

  let element, isExist;

  return React.Children.map(props.children, (child) => {
    if (React.isValidElement(child)) {
      const path = child.props.path || child.props.from;

      const childMatch = isExist
        ? null
        : path
        ? matchPath(_location.pathname, { ...child.props, path })
        : match;

      if (childMatch !== null) {
        isExist = true;
      }

      element = (
        <Offscreen visible={childMatch !== null}>
          {React.cloneElement(child, {
            _location,
            computedMatch: childMatch,
          })}
        </Offscreen>
      );

      return element;
    }
  });
};

export default withRouter(StillnessSwitch);
