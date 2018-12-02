import React from 'react';
import css from './PopUp.module.scss'

const PopUp = (props) => {
  const { popUpClass, children, onClickYes, onClickNo } = props;
  return (
    <>
      <div className={popUpClass.split(' ').map(str => css[str]).join(' ')}>
        <div className={css.TextContainer}>
          { children }
        </div>
        <div className={css.ConfirmButtonBox}>
          <div className={css.ConfirmButtonContainer}>
            <button type="button" onClick={onClickYes}>
              Yes
            </button>
          </div>
          <div className={css.ConfirmButtonContainer}>
            <button type="button" onClick={onClickNo}>
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;