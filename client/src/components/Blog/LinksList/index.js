// @flow
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import type { LinksListType, LinksType } from '../../../types/component';
import PopUp from '../PopUp';
import type { ActionType } from '../../../types/actionType';

export default function LinksList(props: LinksListType): React$Element<any> {
  const dispatch = useDispatch();

  const {
    listName,
    listArray,
    messageItem,
    deleteEntry,
    hideMessage,
    onDeleteClick,
    linkType,
  } = props;

  return (
    <>
      <span className="ListLabel">{listName}</span>
      <ul>
        {listArray.length ? (
          listArray.map(
            (entry: LinksType, index: number): React$Element<any> => {
              const { title, _id: id } = entry;
              const url = `/blog/${linkType}/${id}`;
              const name = listName;
              const popUpClass = messageItem.name === name && messageItem.index === index
                ? 'PopUp Show'
                : 'PopUp';
              return (
                <li className="LinksListItem" key={id}>
                  <Link to={url}>{title || 'untitled'}</Link>
                  <div className="TrashContainer">
                    <PopUp
                      popUpClass={popUpClass}
                      onClickYes={(): ActionType => dispatch(deleteEntry(id))}
                      onClickNo={(): ActionType => dispatch(hideMessage())}
                    >
                      <span>Do you want to delete</span>
                      <br />
                      <span className="ExternalSpan">
                        &quot;
                        <span>{`${title || 'untitled'}`}</span>
                        {' '}
                        &quot; ?
                      </span>
                    </PopUp>
                    <button
                      type="button"
                      onClick={(): void => onDeleteClick(name, index)}
                    >
                      <FontAwesomeIcon color="white" icon={faTrashAlt} />
                    </button>
                  </div>
                </li>
              );
            },
          )
        ) : (
          <li>No Content!</li>
        )}
      </ul>
    </>
  );
}
