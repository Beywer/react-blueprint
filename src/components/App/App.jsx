import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';

export default class App extends React.Component {
  state = {
    isInitializeDispatched: false,
    isUpdateDispatched: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.props.initialize();
      this.setState({isInitializeDispatched: true});

      setTimeout(() => {
        this.props.update();
        this.setState({isUpdateDispatched: true});
      }, 1000);
    }, 200);
  }

  render() {
    const {name, version} = this.props;
    const {isInitializeDispatched, isUpdateDispatched} = this.state;

    return (
      <div className={styles.appRoot}>
        <div>
          <h1>
            {name} {version}
          </h1>
          {isInitializeDispatched && <div>App initialized</div>}
          {isUpdateDispatched && <div>App fully updated</div>}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  initialize: PropTypes.func,
  update: PropTypes.func,
};

App.defaultProps = {
  initialize: () => '',
  update: () => '',
};
