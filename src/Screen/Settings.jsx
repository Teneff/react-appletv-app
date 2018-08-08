import React from 'react';
import PropTypes from 'prop-types';

const BASEURL = 'http://localhost:9000';

export default function Settings(props) {
  const { settings } = props;
  return (
    <listTemplate>
      <banner>
        <title>Settings</title>
      </banner>
      <list>
        <section>
          {settings.map((setting, key) => {
            const heroImg = `${BASEURL}assets/settings/${setting.label.replace(' ', '_')}.png`;

            const decoration = (
              setting.decoratinoLabel
                ? <decorationLabel>{ setting.decoratinoLabel }</decorationLabel>
                : <decorationImage className="listItemDecoration" src="resource://chevron" />
            );

            return (
              <listItemLockup key={key}>
                <title>
                  { setting.label }
                </title>
                {decoration}
                <relatedContent>
                  <itemBanner>
                    <heroImg src={heroImg} />
                  </itemBanner>
                </relatedContent>
              </listItemLockup>
            );
          })}
        </section>
      </list>
    </listTemplate>
  );
}

Settings.propTypes = {
  settings: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      decoratinoLabel: PropTypes.string,
    }).isRequired,
  ).isRequired,
};
