import React from 'react';
import PropTypes from 'prop-types';
import Shelf from '../Component/Shelf';
import TopShelf from '../Component/TopShelf';


export default function Spotlight(props) {
  const { data } = props;
  return (
    <stackTemplate>
      <collectionList className="collectionList">
        {data.map((row, i) => (
          i
            ? <Shelf {...row} />
            : <TopShelf {...row} />
        ))}
      </collectionList>
    </stackTemplate>
  );
}

const Asset = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

Spotlight.propTypes = {
  data: PropTypes.shape({
    row: PropTypes.shape({
      title: PropTypes.string.isRequired,
      assets: PropTypes.arrayOf(
        PropTypes.shape(Asset),
      ),
    }),
  }).isRequired,
};
