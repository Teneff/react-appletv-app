import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import API from '../API';

function RatingCardiTunes(props) {
  const { current, total, max } = props;
  return (
    <ratingCard>
      <title>{`${current} / ${total}`}</title>
      <ratingBadge value={current / max} />
      <description>
        {`Average of ${total} iTunes user ratings and reviews.`}
      </description>
    </ratingCard>
  );
}
RatingCardiTunes.propTypes = {
  current: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

function RatingCardRottenTomatos(props) {
  const { fresh, rotten } = props;
  return (
    <ratingCard>
      <title>
        <badge src="resource://tomato-fresh" />
        {/* { Math.round(rotten / fresh * 100) } */}
        {'asd'}
      </title>
      <text>Tomatometer</text>
      <infoTable>
        <info>
          <header>
            <title>{rotten + fresh}</title>
          </header>
          <text>Reviews</text>
        </info>
        <info>
          <header>
            <title>{fresh}</title>
          </header>
          <text>Fresh</text>
        </info>
        <info>
          <header>
            <title>{rotten}</title>
          </header>
          <text>Rotten</text>
        </info>
      </infoTable>
    </ratingCard>
  );
}
RatingCardRottenTomatos.propTypes = {
  fresh: PropTypes.number.isRequired,
  rotten: PropTypes.number.isRequired,
};

function RatingCardDefault(props) {
  const { title, description, text } = props;

  return (
    <reviewCard>
      <badge src="{rating.badge}" />
      <title>{title}</title>
      <description>{description}</description>
      <text>{text}</text>
    </reviewCard>
  );
}
RatingCardDefault.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

function RatingsSection(props) {
  const { ratings } = props;

  return (
    <section>
      {ratings.map((rating, key) => {
        switch (rating.provider) {
          case 'iTunes':
            return <RatingCardiTunes key={key} {...rating.data} />;
          case 'RottenTomatoes':
            return <RatingCardRottenTomatos key={key} {...rating.data} />;
          default:
            return <RatingCardDefault key={key} {...rating.data} />;
        }
      })}
    </section>
  );
}
RatingsSection.propTypes = {
  ratings: PropTypes.arrayOf(
    PropTypes.shape({
      provider: PropTypes.string.isRequired,
      data: PropTypes.object.isRequired,
    }),
  ).isRequired,
};

function ReviewsShelf(props) {
  const { ratings } = props;
  return (
    <shelf>
      <header>
        <title>Reviews and Ratings</title>
      </header>
      <RatingsSection ratings={ratings} />
    </shelf>
  );
}
ReviewsShelf.propTypes = {
  ratings: PropTypes.arrayOf(PropTypes.object).isRequired,
};


function EpisodesShelf(props) {
  const { episodes = [] } = props;
  return (
    <shelf>
      <header>
        <title>{`${episodes.length} Episodes`}</title>
      </header>
      <section>
        {episodes.map(episode => (
          <lockup key={episode.title}>
            <img
              src={episode.image.src}
              width={episode.image.width}
              height={episode.image.height}
              alt={episode.title}
            />
            <title>{episode.title}</title>
          </lockup>
        ))}
      </section>
    </shelf>
  );
}
EpisodesShelf.defaultProps = {
  episodes: [],
};
EpisodesShelf.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
      }).isRequired,
    }),
  ),
};

function ProductInfo(props) {
  const { info } = props;
  return (
    <productInfo>
      {info.map((item, key) => (
        <infoTable key={key}>
          <header>
            <title>{item.title}</title>
          </header>
          {item.data.map((data, key) => (
            <info key={key}>
              <header>
                {data.title.length === 3
                  ? <textBadge>SDH</textBadge>
                  : <title>{data.title}</title>
                }
              </header>
              <text>{data.text}</text>
            </info>
          ))}
        </infoTable>
      ))}
    </productInfo>
  );
}
ProductInfo.propTypes = {
  info: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
};

function CastMember(props) {
  const { firstName, lastName, role } = props;

  return (
    <monogramLockup>
      <monogram firstName={firstName} lastName={lastName} />
      <title>{`${firstName} ${lastName}`}</title>
      <subtitle>{role}</subtitle>
    </monogramLockup>
  );
}
CastMember.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
    this.ref = React.createRef();
  }

  componentDidMount() {
    API.get('/movie.json')
      .then(({ data }) => this.setState({
        data,
        isLoaded: true,
      }));
  }

  componentDidCatch(error, info) {
    console.warn(error, info);
  }

  render() {
    const { data, isLoaded } = this.state;
    return (
      !isLoaded
        ? <Loading />
        : (
          <productBundleTemplate ref={this.ref}>
            <background />
            <banner>
              <stack>
                <title>{data.title}</title>
                <row>
                  {data.tomato && (
                  <text>
                    <badge src="resource://tomato-fresh" />
                    {data.tomato}
                  </text>
                  )}
                  <text>{data.duration && global.formatDuration(data.duration)}</text>
                  <text>{data.genres}</text>
                  <text>{data.year}</text>
                  {data.badges.map((badge, key) => (
                    <badge key={key} src={`resource://${badge}`} className="badge" />
                  ))}
                </row>
                <text>{data.subtitle}</text>
                <description allowsZooming="true" moreLabel="more">
                  {data.description}
                </description>
                <row>
                  {data.preview && (
                  <buttonLockup>
                    <badge src="resource://button-preview" />
                    <title>Preview</title>
                  </buttonLockup>
                  )}
                  {data.price && (
                  <buttonLockup type="buy">
                    <text>{`$${data.price}`}</text>
                    <title>Buy</title>
                  </buttonLockup>
                  )}
                </row>
              </stack>
              {data.image && (
              <heroImg src={data.image.src} />
              )}
            </banner>
            <EpisodesShelf episodes={data.episodes} />
            <RatingsSection ratings={data.ratings} />
            <shelf>
              <header>
                <title>Cast and Crew</title>
              </header>
              <section>
                {data.cast.map((member, key) => (
                  <CastMember key={key} {...member} />
                ))}
              </section>
            </shelf>
            <ProductInfo info={data.info} />
          </productBundleTemplate>
        )
    );
  }
}
