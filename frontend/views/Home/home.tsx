import React, { useState } from 'react';
import { ComboBox } from '@hilla/react-components/ComboBox.js';
import '.frontend/views/index.css';
export default function Example() {
  const [items, setItems] = useState(['Chrome', 'Edge', 'Firefox', 'Safari']);

  return (
    <ComboBox
      allowCustomValue
      label="Browser"
      helperText="Select or type a browser"
      items={items}
      onCustomValueSet={(event) => {
        setItems([...items, event.detail]);
      }}
    />
  );
}