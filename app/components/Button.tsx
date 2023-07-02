'use client';
import clsx from 'clsx';

import React from 'react';

interface ButtonProsp {
  type?: 'button' | 'submit' | 'reset' | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secodary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button:React.FC<ButtonProsp> = ({
  type,
  fullWidth,
  children,
  onClick,
  secodary,
  danger,
  disabled
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(`
        flex 
        justify-center
        rounded-md
        px-3
        py-2
        text-sm
        font-semibold
        foucus-visible:outline
        foucus-visible:outline-2
        foucus-visible:outline-offset-2`,
        disabled && "opacity-50 cursor-default",
        fullWidth && "w-full",
        secodary ? 'text-gray-900' : 'text-white',
        danger && 'bg-rose-500 hover:bg-rose-600',
        !secodary && !danger && 'bg-sky-500 hover:sky-600'
        )}
    >
      {children}
    </button>
  )
}

export default Button