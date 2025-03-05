import 'dotenv/config'
export default class carts{
  constructor(){
    this.base_url=process.env.base_url;
  }
  async get_all_carts(){
    const url=this.base_url+'/carts';
    try{
      return await(await fetch(url)).json();
    }catch(error){
      return console.log('some problem in all carts api');

    }
  }

  async get_single_carts(carts_id){
    const url=this.base_url+`/carts/${carts_id}`
    try{
      return await(await fetch(url)).json();
    }catch(error){
      return console.log('some problem in single carts api');
    }
  }

  async get_user_carts(user_id){
    const url=this.base_url+`/carts/user/${user_id}`
    try{
      return await(await fetch(url)).json();
    }catch(error){
      return console.log('some problem in user carts api');
    }
  }
  async add_new_carts(id1,quantity1,total1,discount1,discountper1,id2,quantity2,total2,discount2,discountper2){
    const url=this.base_url+`/carts/add`
    let para_data={
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: 1,
        products: [
          {
            id: `${id1}`,
            quantity: `${quantity1}` ,
            total: `${total1}` ,
            discountPercentage:  `${discountper1}`,
            discountedTotal: `${discount1}`,
          },
          {
            id: `${id2}` ,
            quantity:  `${quantity2}`,
            total: `${total2}` ,
            discountPercentage: `${discountper2}` ,
            discountedTotal :`${discount2}`
          },
        ]
      })
    }
    try{
      return await(await fetch(url,para_data)).json();
    }catch(error){
      return console.log('some problem in add user carts api');
    }
    
  }

  async update_user_carts(id,quantity,total,discountper,discount){
    const url=this.base_url+`/carts/${id}`
    let para_data={
      method: 'PUT', /* or PATCH */
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        merge: true, // this will include existing products in the cart
        products: [
          {
            id: `${id}`,
            quantity: `${quantity}` ,
            total: `${total}` ,
            discountPercentage:  `${discountper}`,
            discountedTotal: `${discount}`
          },
        ]
      })
    }
    try{
      return await(await(fetch(url,para_data))).json();

    }catch(error){
       return console.log('the some problem in update user api');
    }

  }

  async delete_carts(cards_id){
    const url=this.base_url+`/carts/${cards_id}`
    let para_data={
      method:'DELETE'
    }
    try{
      return await(await(fetch(url,para_data))).json();

    }catch(error){
       return console.log('the some problem in delete user api');
    }

  }
}