import React from 'react';

const ConfirmBook = ({option}) => {
    return (
        <div className={option!=="confirm"&&"hidden"}>
            <h1>Confirm book</h1>
        </div>
    );
};

export default ConfirmBook;