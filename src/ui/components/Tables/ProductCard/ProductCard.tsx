import React from 'react';
import s from '@/ui/components/Products/ProductsList/productList.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { IProduct } from '@/interfaces';

type Props = {
    products: IProduct[] | [];
    imgWidth: number;
    imgHeight: number;
};

const ProductCard: React.FC<Props> = ({ products, imgWidth = 185, imgHeight = 335 }) => {
    return (
        <>
            {products.length > 0
                ? products.map((product) => (
                      <li key={product.id} className={s.item}>
                          <Link href={`/products/${product.id}`} className={s.link}>
                              <div className={s.imgWrap}>
                                  <Image
                                      src={product.images[0].secureUrl}
                                      alt={product.name}
                                      width={imgWidth}
                                      height={imgHeight}
                                      className={s.img}
                                  />
                              </div>
                              <div className={s.descriptionWrap}>
                                  <h4 className={s.title}>{product.name}</h4>
                                  <div className={s.subtitleWrap}>
                                      {product.types ? (
                                          <p className={s.subtitle}>{product.types.map((el) => el.name).join(' ')}</p>
                                      ) : null}
                                  </div>
                                  <p className={s.price}>{product.price} грн.</p>
                              </div>
                          </Link>
                      </li>
                  ))
                : null}
        </>
    );
};

export default ProductCard;
