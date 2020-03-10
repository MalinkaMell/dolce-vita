import React from 'react';
import ItalianGrocery from '../components/grocery/Italiangrocery';
import Groceries from '../components/grocery/Groceries';

const Other = props => {
  return (
    <React.Fragment>
      <ItalianGrocery />
      <Groceries location={props.location} />
    </React.Fragment>
  )
}

export default Other;