<template>
    <div  :data-lang="myLanguage" class="allContent">
      <section class="infoProduct">
        <div >
          <div class="mainPicture">
            <img v-if="product" :src="product.imageUrl" class="fullPicture" />
          </div>
          <div v-if="productImages.length">
            <div v-for="(image, index) in productImages" :key="index">
              <img :src="image" class="smallPicture" />
            </div>
          </div>
        </div>
        <div>
          <span class="lanDir" >home/ {{ product.name }}</span>
          <p class="lanDir">{{ product.name }}</p>
          <span class="lanDir" >${{ product.priceMaterial }}</span>
          <div class="contBtn">
            <button>{{ lannguage.askByWats }}</button>
          </div>
          <h2 class="lanDir">{{lannguage.detailsOfProduct}}</h2>
          <p class="lanDir">{{ product.description }}!</p>
        </div>
      </section>
      <section class="moreProduct">
        <div>
          <h2 class="lanDir">{{lannguage.relatedOfProduct}}</h2>
        </div>
        <div>
          <div v-if="productsRelatedAfterCut.length">
            <div v-for="s in productsRelatedAfterCut" :key="s.id">
              <BoxProduct :oneProduct="s"></BoxProduct>
            </div>
          </div>
          <div v-else>
            <font-awesome-icon icon="box-open" class="no-products-icon" />
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'pinia';
  import { useProductsStore } from '@/store/products/products.js';
  import BoxProduct from "@/components/catalog/BoxProduct.vue";
  
  export default {
    name: "ProductDetails",
    components: {
      BoxProduct
    },
    data() {
      return {
        id: '',
        product: '',
        productsRelated: [],
        productImages: []
      };
    },
    methods: {
      ...mapActions(useProductsStore, ['fetchProducts']),
      selectedProduct() {
        this.id = this.$route.params.ProductId;
        console.log("this product id", this.id);
  
        this.product = this.products.find(product => product.id == this.id);
        console.log("this product", this.product);

        if(this.product.images){
          this.productImages = this.product.images ; // Assuming images is an array in the product object
        }

        this.productsRelatedWithCurrent();
      },
      productsRelatedWithCurrent() {
        this.productsRelated = this.products.filter(product => {
          return product.categoryId == this.product.categoryId;
        });
      }
    },
    computed: {
      ...mapState(useProductsStore, ['products']),
      lannguage() {
        return this.$store.getters.catchLang;
      },
      myLanguage() {
        return this.$store.getters.myLanguage;
      },
      productsRelatedAfterCut() {
        return this.productsRelated.slice(0, Math.min(this.productsRelated.length, 4));
      }
    },
    watch: {
      '$route.params.ProductId': {
        immediate: true,
        handler() {
          this.selectedProduct();
        }
      }
    },
    async created() {
      try {
        await this.fetchProducts();
        console.log("this all products", this.products);
        this.selectedProduct();
      } catch (error) {
        console.error(error);
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  $main_color: #254178;
  
  .allContent {
    width: 100%;
    min-height: 100vh;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .infoProduct {
    width: 70%;
    height: 550px;
    display: flex;
    flex-wrap: wrap;
    > div {
      width: 50%;
      height: 100%;
    }
    > div:first-child {
      display: flex;
      flex-wrap: wrap;
      > div:first-child {
        width: 100%;
        height: 77%;
       // background-color: red;
        display: flex;
        align-items: center;
        justify-content: center;
        .fullPicture {
          width: 90%;
          height: 90%;
        }
      }
      > div:nth-child(2) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-end;
        width: 100%;
        height: 23%;
       // background-color: forestgreen;
        >div {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          width: 30%;
          height: 90%;
          .smallPicture {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;
      padding-left: 35px;
     
      h2 {
        text-transform: capitalize;
      }
      p:first-of-type {
        text-transform: capitalize;
        font-size: 38px;
        font-weight: 600;
        height: 90px;
        text-align: start;
      }
      span {
        font-size: 19px;
        text-transform: capitalize;
        font-weight: 600;
      }
      p:nth-of-type(2) {
        text-transform: capitalize;
        font-size: 19px;
        font-weight: 600;
        line-height: 30px;
        text-align: start;
      }

      > div {
        width:100%;
        height: 70px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        button {
          text-transform: capitalize;
          width: 200px;
          height: 43px;
          border-radius: 20px;
          background-color: $main_color;
          font-size: 19px;
          color: white;
        }
      }
      .allContent[data-lang="Ar"] > .contBtn{
        justify-content: flex-end;

      }
    }
  }
 .moreProduct {
    width: 70%;
    min-height: 200px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 25px;
    > div:first-child {
      display: flex;
      align-items: center;
      width: 100%;
      height: 50px;
    //  background-color: darkblue;
      h2 {
        text-transform: capitalize;
        font-size: 30px;
      }
    }
    > div:nth-child(2) {
      margin: 30px 0px ;
      width: 100%;
      min-height: 150px;
      display: flex;
      flex-wrap: wrap;
      > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 100%;
      }
    }
  }
  .lanDir{
   // background-color: red;
    width:100%;
}
// arabic style
.allContent[data-lang="Ar"] .lanDir{
  text-align:end !important;
  padding-right: 15px ;

}
  @media(max-width:450px){
    .infoProduct {
        width: 100%;
        height: 1100px;

       
    > div {
      width: 100%;
      height: 550px;
    }
    }
    
  }
  </style>
  