// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import type { LinksListType } from '../../../types/component';
import PopUp from '../PopUp';

export default function(props: LinksListType) {
  const {
    listName,
    listArray,
    messageItem,
    deleteDraft,
    hideMessage,
    onDeleteClick,
    linkType,
  } = props;
  return (
    <>
      <span className="ListLabel">{listName}</span>
      <ul>
        {listArray.length ? (
          listArray.map((dr, index) => {
            const { title, _id: id } = dr;
            const url = `/blog/${linkType}/${id}`;
            const name = listName;
            const popUpClass =
              messageItem.name === name && messageItem.index === index
                ? 'PopUp Show'
                : 'PopUp';
            return (
              <li className="LinksListItem" key={id}>
                <Link to={url}>{title || 'untitled'}</Link>
                <div className="TrashContainer">
                  <PopUp
                    popUpClass={popUpClass}
                    onClickYes={() => deleteDraft(id)}
                    onClickNo={hideMessage}
                  >
                    <span>Do you want to delete</span>
                    <br />
                    <span className="ExternalSpan">
                      &quot;
                      <span>{`${title || 'untitled'}`}</span>
                      {'"?'}
                    </span>
                  </PopUp>
                  <button
                    type="button"
                    onClick={() => onDeleteClick(name, index)}
                  >
                    <FontAwesomeIcon color="white" icon={faTrashAlt} />
                  </button>
                </div>
              </li>
            );
          })
        ) : (
          <li>No Content!</li>
        )}
      </ul>
    </>
  );
}
