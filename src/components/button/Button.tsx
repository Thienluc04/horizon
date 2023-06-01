import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps {
  kind?: 'primary' | 'secondary' | 'dashboard' | 'dashboardSecondary';
  type?: 'submit' | 'button';
  className?: string;
  to?: string;
  onClick?: () => void;
  isLoading?: boolean;
}

export function Button({
  kind = 'primary',
  type = 'button',
  className = '',
  to,
  isLoading,
  children,
  onClick = () => {},
}: PropsWithChildren<ButtonProps>) {
  if (to) {
    if (kind === 'primary') {
      return (
        <Link
          to={to}
          type={type}
          className={`flex justify-center items-center bg-primaryGradient  text-white text-base font-medium rounded-md min-h-[40px] px-4 ${className}`}
          onClick={onClick}
        >
          {children}
        </Link>
      );
    } else if (kind === 'secondary') {
      return (
        <Link
          to={to}
          type={type}
          className={`flex justify-center items-center bg-white text-primary border border-gray3 text-base font-medium rounded-md min-h-[40px] px-4 ${className}`}
          onClick={onClick}
        >
          {children}
        </Link>
      );
    } else if (kind === 'dashboard') {
      return (
        <Link
          to={to}
          type={type}
          className={`flex justify-center items-center bg-dashboardPrimary text-white text-base font-medium rounded-md min-h-[40px] px-4 ${className}`}
          onClick={onClick}
        >
          {children}
        </Link>
      );
    } else if (kind === 'dashboardSecondary') {
      return (
        <Link
          to={to}
          type={type}
          className={`flex justify-center items-center bg-dashboardSecondary text-white text-base font-medium rounded-md min-h-[40px] px-4 ${className}`}
          onClick={onClick}
        >
          {children}
        </Link>
      );
    }
  } else {
    if (kind === 'primary') {
      return (
        <button
          type={type}
          className={`bg-primaryGradient  text-white text-base font-medium rounded-md min-h-[40px] px-4 ${
            isLoading ? '!bg-loadingBtn cursor-default' : ''
          } ${className}`}
          onClick={onClick}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="mx-auto h-6 w-6 border-2 border-t-transparent border-white animate-spin rounded-full"></div>
          ) : (
            children
          )}
        </button>
      );
    } else if (kind === 'secondary') {
      return (
        <button
          type={type}
          className={`bg-white text-primary border border-gray3 text-base font-medium rounded-md min-h-[40px] px-4 ${
            isLoading ? '!bg-blue-300 cursor-default' : ''
          } ${className}`}
          onClick={onClick}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="mx-auto h-6 w-6 border-2 border-t-transparent border-white animate-spin rounded-full"></div>
          ) : (
            children
          )}
        </button>
      );
    } else if (kind === 'dashboard') {
      return (
        <button
          type={type}
          className={`bg-dashboardPrimary text-white border border-gray3 text-base font-medium rounded-md min-h-[40px] px-4 ${
            isLoading ? '!bg-slate-500 cursor-default' : ''
          } ${className}`}
          onClick={onClick}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="mx-auto h-6 w-6 border-2 border-t-transparent border-white animate-spin rounded-full"></div>
          ) : (
            children
          )}
        </button>
      );
    } else if (kind === 'dashboardSecondary') {
      return (
        <button
          type={type}
          className={`bg-dashboardSecondary text-white border border-gray3 text-base font-medium rounded-md min-h-[40px] px-4 ${
            isLoading ? '!bg-slate-500 cursor-default' : ''
          } ${className}`}
          onClick={onClick}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="mx-auto h-6 w-6 border-2 border-t-transparent border-white animate-spin rounded-full"></div>
          ) : (
            children
          )}
        </button>
      );
    }
  }
  return <button></button>;
}
