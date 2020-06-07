// @flow
import React from 'react';
import css from '../../../style/components/Blog/PopUp.module.scss';
import type { PopUpType } from '../../../types/component';

const PopUp = (props: PopUpType): React$Element<any> => {
  const {
    popUpClass, children, onClickYes, onClickNo,
  } = props;
  return (
    <>
      <div
        className={popUpClass
          .split(' ')
          .map((str: string): string => css[str])
          .join(' ')}
      >
        <div className={css.TextContainer}>{children}</div>
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
