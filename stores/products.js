
import { defineStore } from "pinia";
import { db_products } from "~/db";

export const dbproduct = defineStore('db-product', {
    state: () => {
        return {
            products: db_products
        }
    },
    getters: {
        showallproduct() {
            return this.products
        }
    },
    actions: {
        getproductfiltering(size, gender, price, rating) {
            // console.log('p',price);
            // console.log('r',rating);
            let productfilter = this.products.filter((pro) => {
                if (size === 'all') {
                    return this.products
                } else {
                    let ppp = pro.size.find((p) => { if (p === size) { return pro } })
                    return ppp
                }
            })
            let productfiltergender = productfilter.filter((pro) => {
                if (gender === 'all') {
                    return productfilter
                } else {
                    return pro.person === gender
                }
            })

            let productfilterprice = productfiltergender.filter((pro) => {
                if (price == '0') {
                    return productfiltergender
                } else {
                    return pro.price <= price
                }
            })
            let productfilterraiting = productfilterprice.filter((pro) => {
                if (rating == '0') {
                    return productfilterprice
                } else {
                    console.log('eeee', pro.rating);
                    return pro.rating == rating
                }
            })



            return productfilterraiting
        }
    }
})


