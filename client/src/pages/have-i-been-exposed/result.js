import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Result(props) {
  return (
    <div>
      <DialogTitle>Your risk to hand is high</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You have been to the places:
        </DialogContentText>
      </DialogContent>
    </div>
  );
}
