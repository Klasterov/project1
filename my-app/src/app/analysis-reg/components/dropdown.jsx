import * as React from 'react';
import PropTypes from 'prop-types';
import { Select as BaseSelect, selectClasses } from '@mui/base/Select';
import { Option as BaseOption, optionClasses } from '@mui/base/Option';
import { styled } from '@mui/system';

const options = [
  { value: 10, label: 'Documentation' },
  { value: 20, label: 'Components' },
  { value: 30, label: 'Features' },
];

export default function DropDown() {
  return (
    <Select defaultValue={10}>
      {options.map((option) => (
        <Option key={option.value} value={option.value} aria-label={option.label}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
}

const Select = React.forwardRef(function CustomSelect(props, ref) {
  const slots = {
    root: StyledButton,
    listbox: AnimatedListbox,
    popup: Popup,
    ...props.slots,
  };

  return <BaseSelect {...props} ref={ref} slots={slots} />;
});

Select.propTypes = {
  slots: PropTypes.shape({
    root: PropTypes.elementType.isRequired,
    listbox: PropTypes.elementType.isRequired,
    popup: PropTypes.elementType.isRequired,
  }),
};

const StyledButton = styled('button')`
  /* Stiluri personalizate */
`;

const AnimatedListbox = React.forwardRef(function AnimatedListbox(props, ref) {
  const popupContext = React.useContext(PopupContext) || {};
  const verticalPlacement = popupContext.placement?.split('-')[0] || 'bottom';

  return (
    <div className={`placement-${verticalPlacement}`}>
      <ul {...props} ref={ref} />
    </div>
  );
});

AnimatedListbox.propTypes = {
  ownerState: PropTypes.object,
};