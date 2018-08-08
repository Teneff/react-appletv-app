import React from 'react';
import PropTypes from 'prop-types';

export default function Section({ name, assets = [] }) {
  return (
    <section>
      <header>
        <title>{name}</title>
      </header>
      {assets.map(asset => (

        <lockup>
        (asset.image.src &&
          <img {...asset.image} alt={asset.image.alt} />
        )
          <title>
            {asset.title}
          </title>
        </lockup>
      ))}
    </section>
  );
}

Section.propTypes = {
  name: PropTypes.string.isRequired,
  assets: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
