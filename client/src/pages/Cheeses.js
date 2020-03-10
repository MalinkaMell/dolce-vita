import React from 'react';
import ItalianGrocery from '../components/grocery/Italiangrocery';
import Groceries from '../components/grocery/Groceries';

const Cheeses = props => {
  return (
    <React.Fragment>
      <ItalianGrocery />
      <Groceries location={props.location} />
    </React.Fragment>
  )
}

export default Cheeses;