import PropTypes from 'prop-types';
import s from './Container.module.css';

const Container = ({ title, children }) => {
  return (
    <section className={s.container}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </section>
  );
};

export default Container;

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
