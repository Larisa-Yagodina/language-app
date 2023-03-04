import React from 'react';
import MainMenu from "./main-menu/MainMenu";
import axios from 'axios';
import Alerts from "./redux/Alerts";

const App = () => {


    // если нашли ошибку в данных в БД
    const patchS = () => {
        axios.patch( `https://english-app-server.vercel.app/userPhrases/63f1fc5d88be9c28d37b362c`, {
            "english": "I don’t care if you’re an indie store or a massive corporation...",
            "russian": "Меня не волнует, будь у вас свой маленький магазин или крупная корпорация...",
            "note": "«indie» — небольшой и независимый от больших корпораций (магазин, компания, музыкант и т. п.)"
        })
            .then(res => console.log(res))
            .catch(arr => console.log(arr))
    }
    // useEffect(() => {
    //     patchS();
    // }, [])


    return (
        <div style={{ margin: 12 }}>
            <MainMenu />
            <Alerts />
        </div>
    );
};

export default App;