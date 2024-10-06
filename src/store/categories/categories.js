// category store
import { defineStore } from 'pinia';
import { db  } from '@/firebase/firebaseConfig.js'; 

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: []
  }),
  actions: {
    async fetchCategories() {
      try {
        const querySnapshot = await db.collection('catogries').get();
        this.categories = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log('categories:',this.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }
  }
});
