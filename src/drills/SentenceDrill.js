import {Box, CircularProgress} from "@mui/material";

const SentenceDrill = ({randomIndex, openTranslation, sentences}) => {

    return (
        <div>

            {randomIndex !== null && (sentences[randomIndex] !== undefined) ?
                <h2>{sentences[randomIndex].russian}</h2> :
                // Это - крутящаяся штука, если нет предложений
                <Box sx={{ width: '100%' }}>
                    <CircularProgress />
                </Box>
            }
            {!openTranslation ? <br/> : <h3 style={{whiteSpace: 'pre-line'}}>{(sentences[randomIndex] !== undefined) ? sentences[randomIndex].english : ""}</h3>}
           <div style={{marginTop: '80px'}}>
               <p>{sentences[randomIndex] !== undefined ? sentences[randomIndex].note : null}</p>
           </div>

        </div>
    );
};

export default SentenceDrill;