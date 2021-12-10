/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import MuiLink from '@material-ui/core/Link';

/** @type {React.FC<import('@material-ui/core').LinkProps & import('react-router-dom').LinkProps>} */
const Link = (props) => {
  return (
    <MuiLink
      component={RouterLink}
      {...props}
    />
  );
}

export default Link;
