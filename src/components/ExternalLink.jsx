import React from 'react';
import { Link } from 'react-router-dom';

const ExternalLink = ({ to, children, ...props }) => {
  const isExternal = to.startsWith('http');
  if (isExternal) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
};

export default ExternalLink;
