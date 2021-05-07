import React, { useState } from "react";

import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from "@material-ui/core/styles";

import { QuestionAnswerForm } from "../questionAnswerForm/questionAnswerForm";

import styles from "./removeModal.module.scss";

const useStyles = makeStyles((theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: "10px",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(3, 4),
      width: "600px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  })
);



export default function RemoveModalWindow({ removeEmployee }) {
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [id, setId] = useState();

  const [correctId, setCorrectId] = useState(false)
   
  const patternRegexpId = "^[0-9]{1,10}$"

  const onChange = e => {
    setId(e.target.value);
    const regexp = new RegExp(patternRegexpId);
    const correctValue = e.target.value ? regexp.test(e.target.value) : false;
    setCorrectId(correctValue);
  };

  let [pressButtonState, setPressButtonState] = useState(false);

  const onSubmit = async e => {
    e.preventDefault();
    setPressButtonState(true);
    if (correctId) {
      removeEmployee(id)
      handleClose()
    }
  };

  return (
    <div >
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        style={{ width: "200px"}}
      >
        Remove employee
      </Button>
      <Modal
        closeAfterTransition
        aria-describedby="transition-modal-description"
        aria-labelledby="transition-modal-title"
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
        className={classes.modal}
        open={open}
        onClose={handleClose}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={styles.modal_wrapper}>
              <h2>Remove employee</h2>
              <form onSubmit={onSubmit}>
                <div className={styles.form_wrapper}>
                  <QuestionAnswerForm
                    change={onChange}
                    correctValue={correctId}   
                    name="id"
                    pressButtonState={pressButtonState}
                    question='Введите ID сотрудника'
                    value={id}
                  />
                </div>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
