// @flow

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import actions from '../../../redux/reducers/blog/actions';
import './AdminHome.Module.scss';

import type { adminHomeComponentType } from '../../../redux/reducers/types';

class Home extends Component<adminHomeComponentType> {
  componentWillMount() {
    const { getDrafts } = this.props;
    getDrafts();
  }

  render() {
    const { createNewDraft, drafts } = this.props;
    return (
      <>
        <button className="NewPost" type="button" onClick={createNewDraft}>
          New Post
        </button>
        <ul>
          {drafts.map((dr) => {
            const { title, _id: id } = dr;
            const url = `/blog/post/${id}`;
            return (
              <li className="LinksListItem" key={id}>
                <Link to={url}>{title || 'untitled'}</Link>
                <div className="TrashContainer">
                  <div className="PopUp">
                    <div className="TextContainer">
                      <span>Do you want to delete</span>
                      <br />
                      <span>{`${title}?`}</span>
                    </div>
                    <div className="ConfirmButtonBox">
                      <div className="ConfirmButtonContainer">
                        <button type="button">Yes</button>
                      </div>
                      <div className="ConfirmButtonContainer">
                        <button type="button">No</button>
                      </div>
                    </div>
                  </div>
                  <button type="button">
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

const mapStateToProps = ({ blog: { drafts } }) => ({ drafts });

const mapDispatchToProps = (dispatch: Function) => {
  const { createNewDraft, getDrafts } = actions;
  return bindActionCreators(
    {
      createNewDraft,
      getDrafts,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
