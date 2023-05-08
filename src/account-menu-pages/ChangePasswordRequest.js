import React from 'react';

const ChangePasswordRequest = () => {
    return (
        <div>
            <h2>Введите email, и мы пришлем ссылку для смены пароля</h2>
            <input type="text"/>
            <button>Send</button>
        </div>
    );
};

export default ChangePasswordRequest;