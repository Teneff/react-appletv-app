import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.field = React.createRef();
    this.submit = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.form.current.addEventListener('submit', this.handleSubmit);
    this.submit.current.addEventListener('select', this.handleSubmit);
  }

  componentWillUnmount() {
    this.form.current.removeEventListener('submit', this.handleSubmit);
    this.submit.current.removeEventListener('select', this.handleSubmit);
  }

  handleSubmit(event) {
    console.log('handleSubmit', event);
    const keyboard = this.field.current.getFeature('Keyboard');
    const { onSubmit } = this.props;
    onSubmit({
      value: keyboard.text,
    });
    navigationDocument.removeDocument(event.target.ownerDocument);
  }

  render() {
    const { image, description, value } = this.props;

    return (
      <formTemplate ref={this.form}>
        <banner>
          <img src={image.src} width={image.width} height={image.height} alt={image.alt} />
          <description>{description}</description>
        </banner>
        <textField ref={this.field}>{value}</textField>
        <footer>
          <button ref={this.submit}>
            <text>Submit</text>
          </button>
        </footer>
      </formTemplate>
    );
  }
}

Form.defaultProps = {
  image: {
    src: '',
    width: 0,
    height: 0,
    alt: '',
  },
  description: '',
  value: '',
};

Form.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  description: PropTypes.string,
  value: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};
