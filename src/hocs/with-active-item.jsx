import { useState } from 'react';

const withActiveItem = (WrappedComponent) => (props) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <WrappedComponent
      {...props}
      activeItem={activeItem}
      onSetActiveItem={setActiveItem}
    />
  );
};

export default withActiveItem;
