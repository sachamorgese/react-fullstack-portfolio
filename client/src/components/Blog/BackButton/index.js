// @flow

import React from 'react';
import type { BrowserHistory } from 'history/createBrowserHistory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../../../style/components/Blog/BackButton.Module.scss';

export default ({ history }: { history: BrowserHistory }): React$Element<any>  => (
  <button className="BackButton--root" type="button" onClick={history.goBack}>
    <FontAwesomeIcon icon={faArrowLeft} />
  </button>
);
