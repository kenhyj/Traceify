import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ListItem, ListItemText, Typography } from '@material-ui/core';
import { useStyles } from './DropdownMenu.css';

function DropdownMenuLink(props) {
  const { primary, to, onClick } = props;
  const location = useLocation();
  const classes = useStyles();

  const CustomLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <Link ref={ref} to={to} {...linkProps} />
      )),
    [to]
  );

  const InactiveListItem = () => {
    const inactiveTypography = (
      <Typography className={classes.inactiveListItemTypography}>
        {primary}
      </Typography>
    );
    return (
      <>
        <ListItemText primary={inactiveTypography} />
      </>
    );
  };

  const ActiveListItem = () => {
    const activeTypography = (
      <Typography className={classes.activeListItemTypography}>
        {primary}
      </Typography>
    );
    return (
      <>
        <ListItemText primary={activeTypography} />
      </>
    );
  };

  const CustomListItem = () => {
    return (
      <>
        {location.pathname === to ? <ActiveListItem /> : <InactiveListItem />}
      </>
    );
  };

  return (
    <li>
      <ListItem button component={CustomLink} onClick={onClick}>
        <CustomListItem />
      </ListItem>
    </li>
  );
}

export default DropdownMenuLink;
