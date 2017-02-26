import cs from 'classnames';
import Immutable from 'immutable';
import React from 'react';

import LoMoCovers from './LoMoCovers';

/**
 * Represent a single row in a LoLoMo container.
 */
export default function LoLoMoRow({ actions, children, defaultTitle, hasSelection, model, selectedSubjectId }) {
  return (
    <div className={cs('mb-lolomo-row', { 'no-selection': !hasSelection }, { 'has-selection': hasSelection })}>
      <div className="row-head">
        <a className="title">{model.get('title') ? model.get('title') : defaultTitle}</a>
      </div>
      <div className="row-content">
        <LoMoCovers subjects={model.get('subjects')} actions={actions} selectedSubjectId={selectedSubjectId} />
      </div>
      {children}
    </div>
  );
}

LoLoMoRow.propTypes = {
  actions: React.PropTypes.object,
  children: React.PropTypes.element,
  defaultTitle: React.PropTypes.string.isRequired,
  hasSelection: React.PropTypes.bool,
  model: React.PropTypes.objectOf(Immutable.Map).isRequired,
  selectedSubjectId: React.PropTypes.string
};

LoLoMoRow.defaultProps = {
  actions: {},
  children: null,
  hasSelection: false,
  selectedSubjectId: null
};
