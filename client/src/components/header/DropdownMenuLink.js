import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemText } from '@material-ui/core';

function DropdownMenuLink(props) {
  const { primary, to, onClick } = props;

  const CustomLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <Link ref={ref} to={to} {...linkProps} />
      )),
    [to],
  );

  return (
    <li>
      <ListItem button component={CustomLink} onClick={onClick}>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

export default DropdownMenuLink;
