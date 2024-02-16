export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  provider:{
    id: number,
    name: string;
  };
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    provider:{
      id: 1,
      name: 'Apple'
    }
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    provider:{
      id: 1,
      name: 'Apple'
    }
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    provider:{
      id: 2,
      name: 'Amazon'
    }
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
