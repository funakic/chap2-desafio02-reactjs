import {
  useEffect,
  useRef,
  useState,
  useCallback,
  ElementType,
} from 'react';

import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps {
  name: string;
  icon?: ElementType;
  filled: boolean;
  focused: boolean;
}

export function Input({ name, icon: Icon, filled, focused, ...rest }: InputProps) {

// const Input = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(focused);
  const [isFilled, setIsFilled] = useState(filled);

  const { fieldName, defaultValue, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    // setIsFilled(!!inputRef.current?.value);
  }, []);

  // useEffect(() => {
  //   registerField({
  //     name: fieldName,
  //     ref: inputRef.current,
  //     path: 'value',
  //   });
  // }, [fieldName, registerField]);

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}

      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
};