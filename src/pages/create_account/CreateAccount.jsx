import React from 'react';
import SectionOne from '../../widgets/create_account/SectionOne';
import './create-account.scss';
import SectionTwo from '../../widgets/create_account/SectionTwo';

export default function CreateAccount() {
  return (
    <main className='create-account__parent'>
      <SectionOne/>
      <SectionTwo/>
    </main>
  )
}