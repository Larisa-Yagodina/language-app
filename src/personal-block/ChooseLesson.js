import React from 'react';
import {Button} from "@mui/material";

const parent = {
    width: '100%',
    height: '100%',
    top: '20%',
    left: 0,
    overflow: 'auto',
}

const blockWrapper = {
    width: '300px',
    height: '500px',
    top: '20%',
    right: 0,
    bottom: 0,
    left: 0,
    margin: 'auto',
}

const block = {
    width: '300px',
    height: '150px',
    top: '20%',
    right: 0,
    bottom: 0,
    left: 0,
    margin: 'auto',
    textAlign: 'center',
}

function ChooseLesson() {
    return (
        <div style={parent}>
            <div style={blockWrapper}>
                <div style={block}>
                    <h3>Повторим пройденное?</h3>
                    <Button variant="outlined" size="large">
                        Repeat
                    </Button>
                </div>
                <div style={block}>
                    <h2>Урок на сегодня: </h2>
                    <h3> Present Continuous</h3>
                    <Button variant="outlined" size="large">
                        Start new lesson
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ChooseLesson;