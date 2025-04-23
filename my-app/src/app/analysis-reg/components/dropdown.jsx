import * as React from 'react';
import PropTypes from 'prop-types';
import { Select as BaseSelect, selectClasses } from '@mui/base/Select';
import { Option as BaseOption, optionClasses } from '@mui/base/Option';
import { styled } from '@mui/system';

const PopupContext = React.createContext();

const options = [
  { value: 10, label: 'Documentation' },
  { value: 20, label: 'Components' },
  { value: 30, label: 'Features' },
];

export default function DropDown() {
  return (
    <PopupContext.Provider value={{ placement: 'bottom' }}>
      <Select defaultValue={10}>
        {options.map((option) => (
          <BaseOption key={option.value} value={option.value} aria-label={option.label}>
            {option.label}
          </BaseOption>
        ))}
      </Select>
    </PopupContext.Provider>
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

const Popup = styled('div')`
  /* Stiluri personalizate pentru Popup */
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 8px;
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