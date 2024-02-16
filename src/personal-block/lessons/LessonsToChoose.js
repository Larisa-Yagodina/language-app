import React, {useEffect, useState} from 'react';
import {Button, createTheme} from "@mui/material";
import {initialTrainingRoute} from "../../data/serverData/InitialTrainingRoute";
import ListItemText from "@mui/material/ListItemText";
import {Link} from "react-router-dom";
import {colour, muiDefaultColour} from '../../StylesConstatns';

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
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: 'auto',
}

const block = {
    width: '300px',
    height: '120px',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: '100px auto',
    textAlign: 'center',
}

function LessonsToChoose(props) {

    const userId = 'dlkfjl3487f9s';

    const getNextLesson = () => {
        let lessons = initialTrainingRoute.find(el => el.userId === userId).userRoute;
        for (let i = 0; i < lessons.length; i++) {
            if (lessons[i].isStudied === false) {
                setNextLesson(lessons[i]);
                return 'Next';
            } else if (lessons[i].subThemes.length > 0) {
                let subThemes = lessons[i].subThemes;
                for (let j = 0; j < subThemes.length; j++) {
                    if (subThemes[j].isStudied === false) {
                        setNextLesson(subThemes[j]);
                        return "Next";
                    }
                }
            }
        }
    };

    const [previousLessonsLength, setPreviousLessonsLength] = useState(0);
    const [previousRandomLesson, setPreviousRandomLesson] = useState(initialTrainingRoute.find(el => el.userId === userId)
        .userRoute.filter(el => el.isStudied === true)[Math.floor(Math.random() * previousLessonsLength)]
    )

    const getPreviousRandomLessons = () => {
        let lessons = initialTrainingRoute.find(el => el.userId === userId).userRoute;
        let previousLessons = [];
        for (let i = 0; i < lessons.length; i++) {
            if (lessons[i].isStudied === true) {
                previousLessons.push(lessons[i])
            }
            if (lessons[i].subThemes.length > 0) {
                let subThemes = lessons[i].subThemes;
                for (let j = 0; j < subThemes.length; j++) {
                    if (subThemes[j].isStudied === true) {
                        previousLessons.push(subThemes[j])
                    }
                }
            }
        }
        setPreviousLessonsLength(previousLessons.length)
        setPreviousRandomLesson(previousLessons[Math.floor(Math.random() * previousLessons.length)]);
    }

    const [nextLesson, setNextLesson] = useState(initialTrainingRoute.find(el => el.userId === userId).userRoute.find(el => el.isStudied === false))

    useEffect(() => {
        getNextLesson();
        getPreviousRandomLessons();
    }, [])

    return (
        <div style={parent}>

            <div style={blockWrapper}>
                {(previousLessonsLength > 0 && !props.mainPage) &&
                    <div style={block}>
                        <h3>Повторим пройденное?</h3>
                        <h4>{previousRandomLesson.name}</h4>
                        <Button variant="outlined" color={muiDefaultColour} size="large">
                            <Link to={`/my-lessons${previousRandomLesson.link}`}
                                  style={{textDecoration: 'none', color: colour}}>
                                <ListItemText id={'lkjsd'} primary={'Repeat'}/>
                            </Link>
                        </Button>
                    </div>
                }
                <div style={block}>
                    <h2>{ !props.title ? "Урок на сегодня:" : props.title }</h2>
                    <h3> {nextLesson.name} </h3>
                    <Button variant="outlined" color={muiDefaultColour} size="large">
                        <Link to={`/my-lessons${nextLesson.link}`}
                              style={{textDecoration: 'none', color: colour}}>
                            <ListItemText id={'lkjsd'} primary={'Start new lesson'}/>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default LessonsToChoose;