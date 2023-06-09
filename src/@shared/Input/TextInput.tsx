import { ChangeEvent, useState, KeyboardEvent, FC, InputHTMLAttributes } from 'react';

export interface Props {
  className?: string;
  placeholder?: string;
  onChange: ({ value }: { value: string }) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (ev: KeyboardEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
}

const TextInput: FC<Props> = ({
  className,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  value = '',
  disabled = false,
}) => {
  const [text, setText] = useState(value);

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;
    console.log(value);
    setText(value);
    onChange({ value });
  };

  return (
    <input
      type="text"
      value={text}
      className={className}
      placeholder={placeholder}
      onChange={handleChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      disabled={disabled}
    />
  );
};

export default TextInput;
