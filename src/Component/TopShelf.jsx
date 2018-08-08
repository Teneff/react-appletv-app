import React from 'react';
import Section from './Section';
import Shelf from './Shelf';

export default function TopShelf(row) {
  return (
    <shelf>
      <Section {...row} />
    </shelf>
  );
}

TopShelf.propTypes = Shelf.propTypes;
