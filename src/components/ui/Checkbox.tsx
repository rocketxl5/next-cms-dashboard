'use client';

import React, { useEffect, useRef } from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string; // optional
  indeterminate?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  indeterminate = false,
  id,
  ...props
}) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label
      htmlFor={id}
      className="inline-flex items-center cursor-pointer align-middle"
    >
      <input
        id={id}
        checked={checked}
        type="checkbox"
        className="form-checkbox h-4 w-4 text-blue-600"
        {...props}
      />
      {label && <span className="ml-2">{label}</span>}
    </label>
  );
};
