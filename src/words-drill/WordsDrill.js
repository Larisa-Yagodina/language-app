import {Box, CircularProgress} from "@mui/material";

const WordsDrill = ({randomIndex, openTranslation, sentences}) => {

    return (
        <div>
            {randomIndex !== null && (sentences[randomIndex] !== undefined) ?
                <h2>{sentences[randomIndex].russian}</h2> :
                <Box sx={{ width: '100%' }}>
                    <CircularProgress />
                </Box>
            }
            {!openTranslation ? <br/> : <h3>{(sentences[randomIndex] !== undefined) ? sentences[randomIndex].english : ""}</h3>}
        </div>
    );
};

export default WordsDrill;