import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { items as factionItems } from '../factions/items';

import { getIsConvertible } from './selectors';

import DummiedItem from './DummiedItem';
import FactionItem from './FactionItem';
import UsableItem from './UsableItem';

function MatchingItem({ filterString, match, id, isConvertible }) {
  const { data, element } = match;
  const { name } = data;

  // Render nothing if filtered out
  if (!name.toLowerCase().includes(filterString.toLowerCase())) {
    return null;
  }

  console.info(`${id}: ${name}`);
  console.info(`is faction? ${!!factionItems[id]}`);
  console.info(factionItems);

  // If this is a faction item, render a FactionItem
  if (factionItems[id]) {
    return <FactionItem id={id} data={data} element={element} />;
  }

  // If this is convertible, render a UsableItem
  if (isConvertible) {
    return <UsableItem data={data} element={element} />;
  }

  // Not convertible; render a DummiedItem
  return <DummiedItem data={data} element={element} />;
}

MatchingItem.propTypes = {
  filterString: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  id: PropTypes.number.isRequired,
  isConvertible: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, props) => ({
  filterString: state.possessions.filterString,
  isConvertible: getIsConvertible(state, props),
});

export default connect(mapStateToProps)(MatchingItem);
