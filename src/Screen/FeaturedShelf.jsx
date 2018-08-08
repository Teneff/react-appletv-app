import React from 'react';

const path = 'http://localhost:9001/static';


export default class FeaturedShelf extends React.Component {
  static highlightHandler(event) {
    console.log('highlight event', event);
    const lockupElement = event.target;
    const bgImgSrc = `resource://${lockupElement.getAttribute('bgImg')}`;

    // event.currentTarget refers to the element where the event handler was attached.
    const shelfElement = event.currentTarget.parentNode.parentNode;
    const bgElement = shelfElement.getElementsByTagName('background').item(0);
    const bgImgElement = bgElement.getElementsByTagName('img').item(0);

    // Update the section background image URL if necessary.
    if (bgImgElement.getAttribute('src') !== bgImgSrc) {
      bgImgElement.setAttribute('src', bgImgSrc);
    }
  }

  constructor(props) {
    super(props);
    this.featuredShelf = React.createRef();
    this.highlightHandler = FeaturedShelf.highlightHandler.bind(this);
  }

  componentDidMount() {
    this.featuredShelf.current.addEventListener('highlight', FeaturedShelf.highlightHandler);
  }

  componentWillUnmount() {
    this.featuredShelf.current.addEventListener('highlight', FeaturedShelf.highlightHandler);
  }


  render() {
    return (
      <stackTemplate>
        <background>
          <img alt="" />
        </background>
        <collectionList>
          <shelf className="fiveColumnShelf" ref={this.featuredShelf}>
            <header>
              <title>Custom Controller with TVML Shelf</title>
            </header>
            <section>
              <lockup bgImg="grad1">
                <img className="fiveColumnImage" src={`${path}/square_1.jpg`} width="410" height="410" alt="" />
              </lockup>
              <lockup bgImg="grad2">
                <img className="fiveColumnImage" src={`${path}/square_2.jpg`} width="410" height="410" alt="" />
              </lockup>
              <lockup bgImg="grad3">
                <img className="fiveColumnImage" src={`${path}/square_3.jpg`} width="410" height="410" alt="" />
              </lockup>
              <lockup bgImg="grad4">
                <img className="fiveColumnImage" src={`${path}/square_4.jpg`} width="410" height="410" alt="" />
              </lockup>
              <lockup bgImg="grad5">
                <img className="fiveColumnImage" src={`${path}/square_5.jpg`} width="410" height="410" alt="" />
              </lockup>
            </section>
          </shelf>

          <shelf className="fiveColumnShelf">
            <header>
              <title>Regular Shelf</title>
            </header>
            <section>
              <lockup>
                <img className="fiveColumnImage" src={`${path}/square_1.jpg`} width="410" height="410" alt="" />
              </lockup>
              <lockup>
                <img className="fiveColumnImage" src={`${path}/square_2.jpg`} width="410" height="410" alt="" />
              </lockup>
              <lockup>
                <img className="fiveColumnImage" src={`${path}/square_3.jpg`} width="410" height="410" alt="" />
              </lockup>
              <lockup>
                <img className="fiveColumnImage" src={`${path}/square_4.jpg`} width="410" height="410" alt="" />
              </lockup>
              <lockup>
                <img className="fiveColumnImage" src={`${path}/square_5.jpg`} width="410" height="410" alt="" />
              </lockup>
            </section>
          </shelf>
        </collectionList>
      </stackTemplate>
    );
  }
}
