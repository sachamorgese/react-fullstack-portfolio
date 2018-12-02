// @flow
// libraries
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
// components
import PopUp from '../PopUp';
// actions
import blogActions from '../../../redux/reducers/blog/actions';
import messageAction from '../../../redux/reducers/messages/actions';
// css
import './AdminHome.Module.scss';
// types
import type { adminHomeComponentType } from '../../../types';

class Home extends Component<adminHomeComponentType> {
  componentWillMount() {
    const { getDrafts } = this.props;
    getDrafts();
  }

  onDeleteClick = (name, index) => {
    const { showMessage } = this.props;
    const payload = {
      name,
      index,
    };
    showMessage(payload);
  };

  render() {
    const {
      createNewDraft,
      hideMessage,
      deleteDraft,
      drafts,
      message: { item },
    } = this.props;
    return (
      <>
        <button className="NewPost" type="button" onClick={createNewDraft}>
          New Post
        </button>
        <span className="ListLabel">Drafts</span>
        <ul>
          {drafts.map((dr, index) => {
            const { title, _id: id } = dr;
            const url = `/blog/draft/${id}`;
            const name = 'drafts';
            const popUpClass =
              item.name === name && item.index === index
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
                    <span>{`"${title || 'untitled'}"?`}</span>
                  </PopUp>
                  <button
                    type="button"
                    onClick={() => this.onDeleteClick(name, index)}
                  >
                    <FontAwesomeIcon color="white" icon={faTrashAlt} />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

const mapStateToProps = ({ blog: { drafts }, message }) => ({
  drafts,
  message,
});

const mapDispatchToProps = (dispatch: *) => {
  const { createNewDraft, getDrafts, deleteDraft } = blogActions;
  const { showMessage, hideMessage } = messageAction;
  return bindActionCreators(
    {
      createNewDraft,
      getDrafts,
      showMessage,
      hideMessage,
      deleteDraft,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
