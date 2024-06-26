/*
Copyright 2024 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

import { FunctionComponent } from 'preact';

import PlusIcon from '../../icons/plus.svg';

export interface AddToCartButtonProps {
  onClick: (e: any) => any;
}
export const AddToCartButton: FunctionComponent<AddToCartButtonProps> = ({
  onClick,
}: AddToCartButtonProps) => {
  return (
    <div className="ds-sdk-add-to-cart-button">
      <button
        className="flex items-center justify-center h-[32px] w-full p-sm"
        onClick={onClick}
      >
        <PlusIcon className="w-[14px] mr-xs" />
        Quick Add
      </button>
    </div>
  );
};
