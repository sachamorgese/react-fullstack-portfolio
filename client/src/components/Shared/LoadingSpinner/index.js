// @flow
import React from 'react';

import '../../../style/components/Shared/LoadingSpinner.Module.scss';

export default function LoadingSpinner(): React$Element<any> {
  return (
    <div className="LoadingSpinner">
      <span className="LoadingSpinner__spinner" />
    </div>
  )
};
