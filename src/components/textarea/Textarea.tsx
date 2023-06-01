import { PropsWithChildren } from 'react';
import { Control, FieldValues, useController } from 'react-hook-form';

export interface TextareaProps {
  control: Control<FieldValues, any>;
  name: string;
  placeholder: string;
  className?: string;
}

export function Textarea({
  control,
  name = '',
  placeholder = '',
  className = '',
  ...props
}: PropsWithChildren<TextareaProps>) {
  const { field } = useController({
    name,
    control,
    defaultValue: '',
  });
  return (
    <textarea
      id={name}
      placeholder={placeholder}
      {...field}
      {...props}
      className={`border border-dashboardPrimary p-3 rounded-lg h-[180px] ${className}`}
    ></textarea>
  );
}
