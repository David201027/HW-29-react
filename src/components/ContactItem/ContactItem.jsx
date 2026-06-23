import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export default function ContactItem({ id, name, number, onDelete }) {
  return (
    <li className={css.item}>
      <p>{name}: {number}</p>
      <button type="button" onClick={onDelete}>Delete</button>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};