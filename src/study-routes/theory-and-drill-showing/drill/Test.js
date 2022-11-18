import React, {useState} from 'react';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {Button} from "@mui/material";

const style = {
    textAlign: 'center',
    margin: '0 10%'
}



function Test(props) {

    const test = props.theory[0].test;

    let [nexQuestion, setNextQuestion] = useState(0);
    let [rightAnswers, setRightAnswers] = useState(0)

    const countAnswers = (answer, index) => {
        setNextQuestion(nexQuestion + 1)
        if (answer === test[index].rightAnswer ) setRightAnswers(rightAnswers + 1)
    }

    return (
        <div style={style}>
            { nexQuestion !== test.length &&
                <div>
                    <h4 style={{color: "gray"}}>{nexQuestion + 1}/{test.length}</h4>

                    <h2>{nexQuestion + 1}. {test[nexQuestion].question}</h2>

                    {test[nexQuestion].answers.map((el, index) =>

                        <ListItemButton key={"question" + index} onClick={() => countAnswers(el, nexQuestion)}>
                            <ListItemText primary={el} />
                        </ListItemButton>
                    )}
                </div>
            }
            { nexQuestion === test.length &&
                <div>
                <h2> Result: {rightAnswers}/{test.length} </h2>
                    {rightAnswers === test.length ?
                        <div>
                            <h2>Perfect!</h2>
                            <Button variant="outlined" size="large" onClick={() => props.handleChange(null, props.goBackTo)}>
                                button is in progress
                            </Button>
                        </div> :
                        <div>
                            <h3>Repetition is the key to confidence</h3>
                            <Button variant="outlined" size="large" onClick={() => props.handleChange(null, props.goBackTo)}>
                                Repeat this lesson
                            </Button>
                        </div>
                    }
                </div>
            }

        </div>
    );
};

export default Test;