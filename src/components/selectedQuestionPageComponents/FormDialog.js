import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles (theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing (1),
      width: '50ch',
    },
  },
}));

export default function FormDialog({answer}) {
  const [txtValue, setTxtValue] = useState ('');
  const [open, setOpen] = React.useState (false);

  const classes = useStyles ();
  const [value, setValue] = useState ('Controlled');

  // const handleChange = event => {
  //   // setTxtValue (event.target.value);
  //   setValue (event.target.value);
  //   console.log (txtValue);
  // };

  const handleClickOpen = () => {
    setOpen (true);
  };

  const handleClose = () => {
    setOpen (false);
  };

  const handleSubmit = e => {
    const date = Date.now ();
    // e.preventDefault ();
    console.log ('this is out put', txtValue);
    const data = {
      answer_id: answer.id,
      question_id: answer.question_id,
      comment: txtValue,
      users_id: 1,
      date: new Intl.DateTimeFormat ('en-GB', {
        dateStyle: 'full',
        timeStyle: 'long',
      }).format (date),
    };
    console.log ('this is data', data);
    fetch ('https://question-mark-api.herokuapp.com/comments', {
      method: 'POST',
      body: JSON.stringify (data),
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
    })
      .then (response => {
        return response.json ();
      })
      .then (data => {
        console.log (data);
      })
      .catch (err => {
        console.error (err);
      });
    setOpen (false);
  };

  return (
    <div className="commentsForm">
      <Button variant="contained" color="default" onClick={handleClickOpen}>
        ADD COMMENT
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Comment</DialogTitle>
        <DialogContent>
          <form className={classes.root} noValidate autoComplete="off">

            <div>

              <TextField
                id="outlined-multiline-static"
                label="Comment here"
                multiline
                rows={8}
                cols={50}
                defaultValue=""
                variant="outlined"
                onChange={e => setTxtValue (e.target.value)}
              />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={e => {
              handleSubmit (e);
            }}
            color="primary"
          >
            ADD
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
