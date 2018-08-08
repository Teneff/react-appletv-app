import React from 'react';

import Section from './Section';


export default function Shelf(row) {
  return (
    <shelf>
      <Section {...row} />
    </shelf>
  );
}
