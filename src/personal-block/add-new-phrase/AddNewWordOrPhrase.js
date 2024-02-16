import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {addUserPhrase, addUserPhraseWithCheckAuth} from "../../redux/actionsUserPhrases";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {appLinks} from "../../routes/appLinks";

const AddNewWordOrPhrase = (props) => {

    const {
        register,
        handleSubmit,
        reset,
        formState,
        formState: { isSubmitSuccessful }
    } = useForm({ defaultValues: { english: "", russian: "", word: "", description: "" } });

    const onSubmit = (inputData) => {
        const userSentence = {
            "english": inputData.english.trim(),
            "russian": inputData.russian.trim(),
            "note": `«${inputData.word.trim()}» — ${inputData.description.trim()}`,
            "isStudied": false,
            "userId": "dlkfjl3487f9s",
        }
        console.log('SUBMIT')
        props.addUserPhrase(userSentence)
        reset({ ...inputData })
    }

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ english: "", russian: "", word: "", description: "" });
        }
    }, [formState, reset]);

    return (
        <div>
            <h2>Add new phrase you want to learn</h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-1 flex-col justify-evenly"
            >
                <Box
                    sx={{
                        '& .MuiTextField-root': {m: 1, width: '45%'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            id="standard-multiline-static"
                            multiline
                            rows={3}
                            variant="standard"
                            label="Sentence in English"
                            type="text"
                            {...register("english")}
                        />
                        <TextField
                            id="standard-multiline-static"
                            multiline
                            rows={3}
                            variant="standard"
                            label="Russian equivalent"
                            type="text"
                            {...register("russian",)}
                        />

                    </div>

                    <div>
                        <h3>Add notes:</h3>
                        <TextField
                            id="standard-search"
                            variant="standard"
                            label="English word or phrase"
                            type="text"
                            multiline
                            rows={3}
                            {...register("word", {required: 'Word or phrase is required.'})}
                            helperText="Добавьте слово или устойчивое выражение, которое использовано в предложении (по английски)."
                        />

                        <TextField
                            id="standard-search"
                            variant="standard"
                            label="Description"
                            type="text"
                            multiline
                            rows={3}
                            {...register("description", {required: 'Description is required.'})}
                            helperText="Добавьте пояснения — определение слова или выражения, его эквивалент в русском (как бы вы это сказали по-русски)."
                        />


                        {/*ВЫПАДАШКА*/}
                        {/*<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>*/}
                        {/*    <InputLabel id="demo-simple-select-standard-label">Part of speech</InputLabel>*/}
                        {/*    <Select*/}
                        {/*        labelId="demo-simple-select-standard-label"*/}
                        {/*        id="demo-simple-select-standard"*/}
                        {/*        label="Part of speech"*/}
                        {/*        {...register("partOfSpeech")}*/}
                        {/*    >*/}
                        {/*        {partsOfSpeech.map(el => <AccountMenu value={el}>{el}</AccountMenu>)}*/}
                        {/*    </Select>*/}
                        {/*</FormControl>*/}

                    </div>

                    <div style={{margin: "30px 8px"}}>
                        <Button type='submit' variant="outlined" color='info'>Submit</Button>
                    </div>
                    {
                        !props.hideButton &&
                        <div style={{margin: "30px 8px"}}>
                            <Link type='button' to={appLinks.phrasesToRemember}
                                  style={{textDecoration: 'none', color: 'black'}}>
                                <Button variant="outlined" color='info'> Go to phrases</Button>
                            </Link>
                        </div>
                    }
                </Box>

            </form>


        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    addUserPhrase: (newPhrase) => dispatch(addUserPhraseWithCheckAuth(newPhrase))
})
export default connect(null, mapDispatchToProps)(AddNewWordOrPhrase);