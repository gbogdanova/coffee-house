"use client";

import React from 'react';
import { Product } from '../../types/product';
import Image from 'next/image';
import truncateText from '@/utils/truncateText';
import formatPrice from '@/utils/formatPrice';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({product}: ProductCardProps) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/products/${product.id}`)} 
    className="text-dark box-border border border-lightB rounded-3xl overflow-hidden">
        <div className="h-full flex flex-col relative group hover:cursor-pointer">
          <div className="overflow-hidden rounded-3xl">
            <Image 
              src={product.image} 
              alt={product.name} 
              width={300} 
              height={300} 
              className="w-full transition-transform duration-300 transform group-hover:scale-110" 
            />
          </div>
          <div className="flex flex-col flex-1 px-3 py-4 gap-2 justify-between">
              <div className="flex font-medium text-heading-3">{product.name}</div>
              <div className="flex flex-grow font-light">{truncateText(product.description)}</div>
              <div className="flex font-semibold text-heading-3">{formatPrice(product.price)}</div>
          </div>
        </div>
   </div>
  )
}
