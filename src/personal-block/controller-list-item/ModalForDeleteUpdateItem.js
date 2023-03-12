import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import {Box} from "@mui/material";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import {connect} from "react-redux";
import {changeUserPhrase, deleteUserPhrase} from "../../redux/actions";

function ModalForDeleteUpdateItem(props) {

    const [english, setEnglish] = useState(props.phrase.english)
    const [russian, setRussian] = useState(props.phrase.russian)
    const [note, setNote] = useState(props.phrase.note)

    const onConfirmButton = () => {
        if (props.mode === 'edit') {
            props.changeUserSentence(props.phrase._id, {...props.phrase, english, russian, note})
        } else if (props.mode === 'delete') {
            props.deleteUserPhrase(props.phrase._id)
        }
        props.toggleDrawer()
    }

    return (
        <div>

            <React.Fragment key='right'>
                <Drawer
                    anchor='right'
                    open={props.isOpenDrawer}
                    onClose={props.toggleDrawer}
                >
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': {m: 2, width: '33ch'},
                        }}
                        noValidate
                        autoComplete="off"
                        // onClick={props.toggleDrawer}
                        // onKeyDown={props.toggleDrawer}
                    >
                        { props.mode === 'delete' ?
                            <div>
                            <h3 style={{margin: '20px 17px'}}>Delete phrase</h3>
                                <div style={{margin: '50px 35px'}}>
                                <p>Delete this?</p>
                                    <p><b>{props.phrase.english}</b></p>
                                </div>
                            </div>
                            :
                            <>
                            <h3 style={{margin: '20px 17px'}}>Edit phrase</h3>
                            <div>
                            <TextField
                            id="outlined-multiline-static"
                            label="English sentence"
                            multiline
                            rows={3}
                            value={english}
                            onChange={(e) => setEnglish(e.target.value)}
                            />
                            </div>
                            <div>
                            <TextField
                            id="outlined-multiline-static"
                            label="Russian equivalent"
                            multiline
                            rows={3}
                            value={russian}
                            onChange={(e) => setRussian(e.target.value)}
                            />
                            </div>
                            <div>
                            <TextField
                            id="outlined-multiline-static"
                            label="Note"
                            multiline
                            rows={3}
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            />
                            </div>
                            </>
                        }
                        <div style={{margin: '10px 17px'}}>
                            <Button variant="outlined" onClick={onConfirmButton}>{props.mode === 'edit' ? 'Save' : 'Delete' }</Button> {' '}
                            <Button variant="outlined" onClick={props.toggleDrawer}>Cancel</Button>
                        </div>
                    </Box>
                </Drawer>
            </React.Fragment>

        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    changeUserSentence: (id, editedData) => dispatch(changeUserPhrase(id, editedData)),
    deleteUserPhrase: (id) => dispatch(deleteUserPhrase(id))
})

export default connect(null, mapDispatchToProps)(ModalForDeleteUpdateItem);