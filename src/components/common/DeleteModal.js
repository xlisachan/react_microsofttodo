import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, DialogActions, Button } from '@material-ui/core';
import { FaRegTrashAlt, FaTimes } from 'react-icons/fa';

const getModalStyle = () => {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 4),
        outline: 'none',
    },
}));

const DeleteModal = ({id, location, name, todo, onClick=f=>f}) => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const renderDelete = () => {
        if (location === 'more-bottom') {
            return <FaRegTrashAlt style={{ margin: '0 5px 3px 0' }} />;
        } else if (location === 'more-top') {
            return <FaTimes />;
        } else {
            return (
                <React.Fragment>
                    <FaRegTrashAlt style={{ margin: '0 5px 3px 0' }} />
                    <span>Delete {todo}</span>
                </React.Fragment>
            );
        };
    };

    return (
        <React.Fragment>
            <div id={`${todo}_${id}`} onClick={handleOpen}>
                { renderDelete() }
            </div>
            
            <Modal
                aria-labelledby={`item-${todo}_${id}`}
                aria-describedby={`content-${todo}_${id}`}
                open={open}>

                <div style={modalStyle} className={classes.paper}>
                    <h2 id={`item-${todo}_${id}`} style={{fontSize: '1rem', fontWeight: 'bold'}}>
                        "{ name }" will be permanently deleted.
                    </h2>

                    <p id={`content-${todo}_${id}`}>
                        You won't be able to undo this action.
                    </p>
                    
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>

                        <Button onClick={onClick} color="primary">
                            Delete { todo }
                        </Button>
                    </DialogActions>
                </div>
            </Modal>
        </React.Fragment>
    );
};

DeleteModal.propTypes = {
    id: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    todo: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default DeleteModal;