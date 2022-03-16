import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function InputDate() {
  const [value, onChange] = useState(new Date());
  return <DatePicker 
          sx={() => ({ flex: 1 })}
          zIndex={9999}
          value={value}
          inputFormat="DD/MM/YYYY"
          onChange={onChange} 
          placeholder="e.g. 27/02/2022  DD/MM/YYYY"
        />;
}

export default InputDate;