import React from 'react';

import Option from './DropdownItem';

import Select from 'react-select';

const options = [
  {
    label: 'Cartão de Crédito',
    subLabel: 'Acumule milhas, anuidade grátis...',
    value: '1',
    style: { color: '#1e88e5' },
  },
  {
    label: 'Contas Digitais',
    subLabel: 'Mensalidade grátis, saques grátis...',
    value: '2',
    style: { color: '#f4771e' },
  },
  {
    label: 'Máquinas de pagamento',
    subLabel: 'Aluguel, compra, com 3G, wifi...',
    value: '3',
    style: { color: '#7cb342' },
  },
  {
    label: 'Empréstimos',
    subLabel: 'Pessoa, para negativados...',
    value: '4',
    style: { color: '#00acc1' },
  },
];

const customStyles = {
  control: (base, state) => ({
    ...base,
    height: '73px',
    width: '250px',
    border: 'none',
    backgroundColor: state.isFocused ? 'rgba(0, 0, 0, 0.16)' : '#1565c0',
  }),
  option: () => ({
    margin: '25px',
  }),
  placeholder: () => ({
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '18px',
    fontWeight: '900',
    paddingLeft: '10px',
  }),

  menuList: () => ({
    height: 'auto',
    cursor: 'pointer',
  }),
  singleValue: () => ({
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '18px',
    fontWeight: '900',
    paddingLeft: '10px',
  }),
  indicatorSeparator: () => {},
  dropdownIndicator: (defaultStyles) => ({
    ...defaultStyles,
    color: '#1565c0',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: '5px',
    padding: 0,
    marginRight: 30,
  }),
};

function DropdownMenu() {
  return (
    <div className="dropdown no-mobile">
      <Select
        options={options}
        components={{ Option }}
        placeholder="Cartão de Crédito"
        styles={customStyles}
        isSearchable={false}
      />
    </div>
  );
}

export default DropdownMenu;
