import {Box, CircularProgress} from "@mui/material";

const GrammarThemesDrill = ({randomIndex, openTranslation, sentences}) => {

    return (
        <div>
            {randomIndex === null && <div>
                <h2>Let`s translate it 😉</h2>
                <p>translate it in English and check your sentence</p>
            </div>
            }
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

export default GrammarThemesDrill;