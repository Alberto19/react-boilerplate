import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const HelloChild = ({ pathname, search, hash }) => (
  <div>
    Hello-Child
    <ul>
      <li><Link to="/hello?color=Blue&size=40">with query string</Link></li>
      <li><Link to="/hello#lovelove">with hash</Link></li>
    </ul>
    <div>
      pathname: {pathname}
    </div>
    <div>
      search: {search}
    </div>
    <div>
      hash: {hash}
    </div>
  </div>
);

HelloChild.propTypes = {
  pathname: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  pathname: state.getIn(['router', 'location', 'pathname']),
  search: state.getIn(['router', 'location', 'search']),
  hash: state.getIn(['router', 'location', 'hash']),
});

export default connect(mapStateToProps)(HelloChild);
