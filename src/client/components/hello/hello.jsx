import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import HelloQuery from '../../graphql/queries/hello.graphql';

const Hello = ({ data }) => <h1>{data.hello ? data.hello.message : 'No Message'}</h1>;

Hello.defaultProps = {
  data: {}
};

Hello.propTypes = {
  data: PropTypes.shape({
    hello: PropTypes.object
  })
};

export default graphql(HelloQuery)(Hello);
