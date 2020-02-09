// @flow
import React from 'react';

import '../../../style/components/Shared/LoadingSpinner.Module.scss';

const LoadingSpinner = (): React$Element<any> => (
  <div className="LoadingSpinner">
    <span className="LoadingSpinner__spinner" />
  </div>
);

export default LoadingSpinner;
