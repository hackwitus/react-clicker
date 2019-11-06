import React from 'react';
import { Button } from 'semantic-ui-react';

export default props => {
  return <Button.Or text={props.value} />;
};
