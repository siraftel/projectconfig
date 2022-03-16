import { forwardRef } from 'react';
import { CloseButton, MultiSelect, Box } from '@mantine/core';
import highest from "./../../Assets/Icons/highest.png"
import high from "./../../Assets/Icons/high.png"
import low from "./../../Assets/Icons/low.png"
import lowest from "./../../Assets/Icons/lowest.png"

function Value({ image, value, label, onRemove, ...others }) {
  return (
    <div {...others}>
      <Box
        sx={(theme) => ({
          display: 'flex',
          cursor: 'default',
          alignItems: 'center',
          paddingLeft: 10,
          // border: `1px solid ${theme.colors.gray[4]}`,
          // borderRadius: 4,
        })}
      >
        <div style={{ marginRight: 10 }}>
          <img src={image} alt="label icon"/>
        </div>
        {/* <div style={{ lineHeight: 1, fontSize: 12 }}>{label}</div> */}
        <CloseButton onMouseDown={onRemove} variant="transparent" size={22} iconSize={14} tabIndex={-1} />
      </Box>
    </div>
  );
}

const countriesData = [
  {
    image: (highest),
    label: "Highest",
    value: "Highest"
  },
  {
    image: (high),
    label: "High",
    value: "High"
  },
  {
    image: (low),
    label: "Low",
    value: "Low"
  },
  {
    image: (lowest),
    label: "Lowest",
    value: "Lowest"
  }
];

const Item = forwardRef(({ image, label, value, ...others }, ref) => (
  <div ref={ref} {...others}>
    <Box sx={{ display: 'flex' }}>
      <Box mr={10}>
        <img src={image} alt="label icon"/>
      </Box>
      <div>{label}</div>
    </Box>
  </div>
));

export function InputPriority() {
  return (
    <MultiSelect
      size="sm"
      sx={() => ({ flex: 1 })}
      zIndex={9999}
      placeholder="Pick priority"
      data={countriesData}
      itemComponent={Item}
      searchable
      limit={20}
      valueComponent={Value}
      maxSelectedValues={1}
    />
  );
}

export default InputPriority;