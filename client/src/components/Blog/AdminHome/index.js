import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actions from '../../../redux/reducers/actions';

const Home = (props) => {
  const { createNewDraft } = props;
  return (
    <>
      <button onClick={createNewDraft}>New Post</button>
    </>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => {
  const { createNewDraft } = actions;
  return bindActionCreators(
    {
      createNewDraft,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
