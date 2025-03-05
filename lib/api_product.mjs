import "dotenv/config";
export default class products {
  constructor() {
    this.base_url =process.env.base_url;
  }

  async get_all_products() {
    const url = this.base_url + `/products`
    try {
      return await (await fetch(url)).json();
    } catch (error) {
      return await (await fetch(url)).json()
    }
  }

  async get_single_products(id) {
    const url = this.base_url + `/products/${id}`;
    try {
      return await (await fetch(url)).json();
    } catch (error) {
      return console.log("some problem in single products api");
    }
  }

  async search_prodcuts(product_name) {
    const url = this.base_url + `/products/search?q=${product_name}`;
    try {
      return await (await fetch(url)).json();
    } catch (error) {
      return console.log("some problem in search products api");
    }
  }

  async limit_skip_product(limit, skip, select) {
    const url =
      this.base_url + `/products?limit=${limit}&skip=${skip}&select=${select}`;
    try {
      return await (await fetch(url)).json();
    } catch (error) {
      return console.log("some problem in limit and skip products api");
    }
  }

  async sort_product(key,ord) {
    const url = this.base_url + `/products?sortBy=${key}&order=${ord}`;
    try {
      return await (await fetch(url)).json();
    } catch (error) {
      return console.log("some problem in sort product products api");
    }
  }

  async all_prodcuts_categories() {
    const url = this.base_url + "/products/categories";
    try {
      return await (await fetch(url)).json();
    } catch (error) {
      return console.log("some problem in product categories api");
    }
  }

  async get_products_category_list() {
    const url = this.base_url + "/products/category-list";
    try {
      return await (await fetch(url)).json();
    } catch (error) {
      return console.log("some problem in all product category api");
    }
  }

  async get_products_category(product_name) {
    const url = this.base_url + `/products/category/${product_name}`;
    try {
      return await (await fetch(url)).json();
    } catch (error) {
      return console.log("some problem in products category api");
    }
  }

  async add_new_product(
    title,
    desc,
    category,
    price,
    discountPer
  ) {
    const url = this.base_url + "/products/add";
    let para_data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: `${title}`,
        description: `${desc}`,
        price: `${price}`,
        discountPercentage: `${discountPer}`
      }),
    };
    try {
      return await (await fetch(url, para_data)).json();
    } catch (error) {
      return console.log("some problem in add new product api");
    }
  }

  async update_product(product_id,title,desc,category,price) {
    const url = this.base_url + `/products/${product_id}`;
    let para_data = {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: `${title}`,
        description: `${desc}`,
        category:`${category}`,
        price: `${price}`,
        
      }),
    }
    try {
      return await (await fetch(url, para_data)).json();
    } catch (error) {
      return console.log("some problem in update product api");
    }
  }

  async delete_product(product_id){
    const url = this.base_url + `/products/${product_id}`;
    let para_data={
      method:'DELETE'
    }
    try {
      return await (await fetch(url, para_data)).json();
    } catch (error) {
      return console.log("some problem in delete  product api");
    }
  }
  

};
