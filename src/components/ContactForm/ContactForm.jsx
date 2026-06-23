import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css';

export default function ContactForm() {
  
  return (
    <form className={css.form}>
      <button type="submit">Add contact</button>
    </form>
  );
}