import PropTypes from 'prop-types';
function Container({ children }) {

  return <div>{children}</div>;
}
Container.propTypes = {
  children: PropTypes.array.isRequired,
};
export default Container;