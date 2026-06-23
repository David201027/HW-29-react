import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css';

export default function ContactList() {

  return (
    <ul className={css.list}>
    </ul>
  );
}