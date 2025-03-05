import{assert,expect} from 'chai';
import products from '../../lib/api_product.mjs';

let api_obj=new products();
 describe('cheaking the product api',async()=>{
  it('all the product list',async()=>{
    const response=await api_obj.get_all_products() ;
    for(let i=0;i<response.products;i++){
      expect(response.product[i]).to.have.property("id").to.be.a('number')
      expect(response.product[i]).to.have.property("title").to.be.a('string')
      expect(response.product[i]).to.have.property("description").to.be.a('string')
      expect(response.product[i]).to.have.property("category").to.be.a('string')
      expect(response.product[i]).to.have.property("price").to.be.a('number')
      expect(response.product[i]).to.have.property("rating").to.be.a('number')
      expect(response.product[i].tags[0]).to.be.a('string')
      expect(response.product[i]).to.have.property("brand").to.be.a('string')
      expect(response.product[i]).to.have.property("sku").to.be.a('string')
    }

  })

  it('get single products list',async()=>{
    const response=await api_obj.get_single_products(1);
    expect(response).to.have.property("id").to.be.a('number')
      expect(response).to.have.property("title").to.be.a('string')
      expect(response).to.have.property("description").to.be.a('string')
      expect(response).to.have.property("category").to.be.a('string')
      expect(response).to.have.property("price").to.be.a('number')
      expect(response).to.have.property("rating").to.be.a('number')
      expect(response.tags[0]).to.be.a('string')
      expect(response).to.have.property("brand").to.be.a('string')
      expect(response).to.have.property("sku").to.be.a('string')
      console.log(response);
    })

    it('search products',async()=>{
      let product_name='mobile-accessories'
      const response=await api_obj.search_prodcuts(product_name)
      for(let i=0;i<response.products.length;i++){
      expect(response.products[i]).to.have.property('category').that.equals(product_name)
      }
      console.log(response);
    })

    it('limit and skip products',async()=>{
      let limit=5,skip=10
      const response=await api_obj.limit_skip_product(limit,skip,'id,title,price');
      let count=0,product_id_start=response.products[0].id;

    for(let i=0;i<response.products.length;i++){
        count++
    }
    if(product_id_start==skip+1){
      console.log('the given products is start from skip products ');
    }else{
      console.log('the given products is not start from sip products')
    }
    if(count==limit)
      console.log(`the given product have the ${limit} `)
    else
      console.log('the given product limit is more than'+`${limit}`);

      console.log(response);
    })


    //problems in this test cases
    xit('sort the products',async()=>{
      const response = await api_obj.sort_product('id','asc');
      let flag=true;
      let array=[]                 
      array=response.products
      console.log(array);
      for(let i=0;i<array.length-1;i++){
        let count=0
        if(array[i].id<array[i-1].id){

        }
      }
      if(flag==true){
        console.log('the given string is ascending')
      }else{
        console.log('the given string is not ascendings');
      }
    })

    it('get all products categories',async()=>{
      const response=await api_obj.all_prodcuts_categories();
      console.log(response);
      for(let i=0;i<response.length-1;i++){
        expect(response[i]).to.have.property('slug').to.be.a('string');
        expect(response[i]).to.have.property('name').to.be.a('string');
        expect(response[i]).to.have.property('url').to.be.a('string');

      }
    })

    it('get products category list',async()=>{
      const response=await api_obj.get_products_category_list();
      for(let i=0;i<response.length;i++){
         expect(response[i]).to.be.a('string')
      }

    })

    it('get products by a catergory',async()=>{
      let product_name='smartphones'
      const response=await api_obj.get_products_category(product_name);
      console.log(response)
    })

    it('add new product in products list',async()=>{
      let title= 'realMe' , desc='The realMe 5s is a premium smartphone' , category= 'smarthphones' , price=11000 , discountPer=10.5
      const response=await api_obj.add_new_product(title,desc,category,price,discountPer)
      console.log(response);
    })

    it('update the products',async()=>{
      let title='realMe',desc='The realMe 5s',category='smarthphones', price=11000 
      const response=await api_obj.update_product(2,title,desc,category,price)
      console.log(response);
    })

    it('delete prodcuts',async()=>{
      let product_id=2
      const response=await api_obj.delete_product(product_id);
    })

 })