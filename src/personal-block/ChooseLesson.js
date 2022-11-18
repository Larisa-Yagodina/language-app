import React, {useEffect, useState} from 'react';
import {Button} from "@mui/material";
import {initialTrainingRoute} from "../serverData/InitialTrainingRoute";
import ListItemText from "@mui/material/ListItemText";
import {Link} from "react-router-dom";

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

function ChooseLesson() {

    const userId = 'dlkfjl3487f9s';

    const getNextLesson = () => {
        let lessons = initialTrainingRoute.find(el => el.userId === userId).userRoute;
        for (let i = 0; i < lessons.length; i++) {
            console.log('first FOR')
            if (lessons[i].isStudied === false) {
                setNextLesson(lessons[i]);
                return 'Next';
            } else if (lessons[i].subThemes.length > 0) {
                let subThemes = lessons[i].subThemes;
                for (let j = 0; j < subThemes.length; j++) {
                    console.log('second FOR')
                    if (subThemes[j].isStudied === false) {
                        setNextLesson(subThemes[j]);
                        return "Next";
                    }
                }
            }
        }
    };


    const getPreviousLessons = () => {

    }

    //const [nextLesson, setNextLesson] = useState(initialTrainingRoute.find(el => el.userId === userId).userRoute.filter(el => el.isStudied === false)[0])
    const [nextLesson, setNextLesson] = useState(initialTrainingRoute.find(el => el.userId === userId).userRoute.find(el => el.isStudied === false))

    useEffect(() => {
        getNextLesson()
    }, [])

    const previousLessonsLength = initialTrainingRoute.find(el => el.userId === userId)
        .userRoute.filter(el => el.isStudied === true).length;
    const [previousLesson, setPreviousLesson] = useState(initialTrainingRoute.find(el => el.userId === userId)
        .userRoute.filter(el => el.isStudied === true)[Math.floor(Math.random() * previousLessonsLength)]
    )

    return (
        <div style={parent}>
            <div style={blockWrapper}>
                {previousLessonsLength > 0 &&
                    <div style={block}>
                        <h3>Повторим пройденное?</h3>
                        <h4>{previousLesson.name}</h4>
                        <Button variant="outlined" size="large">
                            <Link to={`/my-lessons${previousLesson.link}`}
                                  style={{textDecoration: 'none', color: '#0062cc'}}>
                                <ListItemText id={'lkjsd'} primary={'Repeat'}/>
                            </Link>
                        </Button>
                    </div>
                }
                <div style={block}>
                    <h2>Урок на сегодня: </h2>
                    <h3> {nextLesson.name} </h3>
                    <Button variant="outlined" size="large">
                        <Link to={`/my-lessons${nextLesson.link}`}
                              style={{textDecoration: 'none', color: '#0062cc'}}>
                            <ListItemText id={'lkjsd'} primary={'Start new lesson'}/>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ChooseLesson;