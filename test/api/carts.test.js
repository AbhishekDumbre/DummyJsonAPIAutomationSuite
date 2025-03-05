import { assert,expect } from "chai";
import carts from '../../lib/api_carts.mjs'
let api_obj=new carts()
describe('test carts api',async()=>{
  it('get all carts',async()=>{
    const response=await api_obj.get_all_carts();
    for(let i=0;i<response.carts.length-1;i++){
      expect(response.carts[i]).to.have.property('id').to.be.a('number');
      expect(response.carts[i]).to.have.property('total').to.be.a('number');
      expect(response.carts[i]).to.have.property('discountedTotal').to.be.a('number');
      expect(response.carts[i]).to.have.property('userId').to.be.a('number');
      expect(response.carts[i]).to.have.property('totalProducts').to.be.a('number');
    }
    console.log(response);
  })

  it('get single products',async()=>{
    let carts_id=1
    const response=await api_obj.get_single_carts(carts_id);
    for(let i=0;i<response.products.length-1;i++){
      expect(response.products[i]).to.have.property('id').to.be.a('number');
      expect(response.products[i]).to.have.property('title').to.be.a('string');
      expect(response.products[i]).to.have.property('price').to.be.a('number');
      expect(response.products[i]).to.have.property('quantity').to.be.a('number');
      expect(response.products[i]).to.have.property('total').to.be.a('number');
    }
    console.log(response);
  })

  it('get carts by userId',async()=>{
    let userId=5;
    const response=await  api_obj.get_user_carts(userId);
    console.log(response);
  })

  it('add new carts',async()=>{
    let id1=144, quantity1= 100, total1=1000, discount1= 3.4, discountper1=3.3, id2= 98
    let quantity2=200, total2=2000, discount2=6.8, discountper2=6.6
    const response=await api_obj.add_new_carts(id1,quantity1,total1,discount1,discountper1,
                                               id2,quantity2,total2,discount2,discountper2
    )
    console.log(response);
  })

  it('update carts',async()=>{
    let id=1,quantity=100,total=1000,discountper=3.3,discount=10
    const response=await api_obj.update_user_carts(id,quantity,total,discountper,discount);
    console.log(response);
  })

  it('delete carts',async()=>{
    let carts_id=1
    let response=await api_obj.delete_carts(carts_id);
    console.log(response);
  })
})