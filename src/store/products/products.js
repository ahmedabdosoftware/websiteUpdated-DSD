// Pinia Store - src/stores/products.js
import { defineStore } from 'pinia';
import { db, storage } from '@/firebase/firebaseConfig.js';

export const useProductsStore = defineStore('useProductsStore', {
  state: () => ({
    products: [],
  }),

  actions: {

    async fetchProducts() {
      const querySnapshot = await db.collection('products').get();
      this.products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      console.log(this.products[0]);
    },
    
  }

} );
