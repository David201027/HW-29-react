import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';

export default function Filter() {
  
  return (
    <label className={css.label}>
      Find contacts by name
      <input type="text" />
    </label>
  );
}