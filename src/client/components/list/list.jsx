import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import ListItem from './list-item';
import ColorsListQuery from '../../graphql/queries/color-list.graphql';

const List = ({ data }) => (
  <ul>
    {
      data.colorList && data.colorList.map((color) => (
        <ListItem key={color.id}>{color.name}</ListItem>
      ))
    }
  </ul>
);

List.defaultProps = {
  data: {
    colorList: []
  }
};

List.propTypes = {
  data: PropTypes.shape({
    colorList: PropTypes.arrayOf(PropTypes.object)
  })
};

export default graphql(ColorsListQuery)(List);
