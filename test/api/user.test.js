import { assert, expect } from "chai";
import apiCommon from "../../lib/api_common.mjs";
let api_obj, access_token_varible;
api_obj = new apiCommon();
describe("api users check", async () => {
  it("get the all users", async () => {
    const resp_data = await api_obj.get_all_user();
    expect(resp_data.users[0]).to.have.property("id").to.be.a("number");
    expect(resp_data.users[0]).to.have.property("firstName").to.be.a("string");
    expect(resp_data.users[0]).to.have.property("lastName").to.be.a("string");
    expect(resp_data.users[0]).to.have.property("maidenName").to.be.a("string");
    expect(resp_data.users[0]).to.have.property("age").to.be.a("number");
    expect(resp_data.users[0]).to.have.property("gender").to.be.a("string");
    expect(resp_data.users[0]).to.have.property("email").to.be.a("string");
    expect(resp_data.users[0]).to.have.property("phone").to.be.a("string");
    expect(resp_data.users[0]).to.have.property("username").to.be.a("string");
    expect(resp_data.users[0]).to.have.property("password").to.be.a("string");
  });

  it("get the user tokens", async () => {
    let response = await api_obj.get_user_token("emilys", "emilyspass");
    expect(response).to.have.property("accessToken").to.be.a("string");
    expect(response).to.have.property("refreshToken").to.be.a("string");
    expect(response).to.have.property("id").to.be.a("number");
    expect(response).to.have.property("username").to.be.a("string");
    expect(response).to.have.property("email").to.be.a("string");
    expect(response).to.have.property("firstName").to.be.a("string");
    expect(response).to.have.property("lastName").to.be.a("string");
    expect(response).to.have.property("gender").to.be.a("string");
    expect(response).to.have.property("image").to.be.a("string");
    access_token_varible = await response.accessToken;
    console.log(response);
  });
  it("get curent authenticated user", async () => {
    let response = await api_obj.get_current_authenticated_user(
      access_token_varible
    );

    expect(response).to.have.property("id").to.be.a("number");
    expect(response).to.have.property("username").to.be.a("string");
    expect(response).to.have.property("email").to.be.a("string");
    expect(response).to.have.property("firstName").to.be.a("string");
    expect(response).to.have.property("lastName").to.be.a("string");
    expect(response).to.have.property("gender").to.be.a("string");
    expect(response).to.have.property("image").to.be.a("string");
    console.log(response);
  });

  it("get single user details", async () => {
    let resp_data = await api_obj.get_single_user(1);
    expect(resp_data).to.have.property("id").to.be.a("number");
    expect(resp_data).to.have.property("firstName").to.be.a("string");
    expect(resp_data).to.have.property("lastName").to.be.a("string");
    expect(resp_data).to.have.property("maidenName").to.be.a("string");
    expect(resp_data).to.have.property("age").to.be.a("number");
    expect(resp_data).to.have.property("gender").to.be.a("string");
    expect(resp_data).to.have.property("email").to.be.a("string");
    expect(resp_data).to.have.property("phone").to.be.a("string");
    expect(resp_data).to.have.property("username").to.be.a("string");
    expect(resp_data).to.have.property("password").to.be.a("string");
  });

  it("get serach the users", async () => {
    let name = "Emily";
    const response = await api_obj.serach_user(name);
    expect(response.users[0]).to.have.property("firstName").to.equal(name);
  });

  it("filter the users", async () => {
    const response = await api_obj.filter_user("hair.color", "Brown");
    console.log(response);
  });

  it("for the limit and skip users", async () => {
    const resp_data = await api_obj.get_limit_skip_user(5, 10, "firstName,age");
    console.log(resp_data);
    let len = resp_data.users.length;
    let count = 0;
    for (let val of resp_data.users) {
      console.log(val.id);
      count++;
    }
    expect(count).to.equal(5);

    console.log(count);
  })


  it("order the users in asc", async () => {
    let response = await api_obj.get_user_data_asc_desc("firstName", "asc");
    let flag = true;
    for (let i = 0; i < response.length; i++) {
      if (response.users[i - 1].firstName > response.users[i].firstName) {
        flag = false;
      }
    }
    if (flag == true) {
      console.log("the given sequence is ascending order");
    } else {
      console.log("the given sequence is not ascending order");
    }
  //  console.log(response);
  });

  it("get user by cards id", async () => {
    let user_id = 6;
    let response = await api_obj.get_user_cards(user_id);
    console.log(response);
    if (response.carts[0].userId == user_id) {
      console.log("the given user id is same in cards id");
    } else {
      console.log("the given user id is not founds in cards");
    }
  });

  it("geeting a post by user id", async()=> {
    let user_id = 6,flag=true
    let response = await api_obj.get_user_post(user_id);
    for (let i = 0; i < response.posts.length; i++) {
      if (response.posts[i].userId !== user_id) {
         flag=false;
         break;
      }
    }
    if(flag==true){
      console.log("the given user id is same in post");
    }else{
      console.log('the given userId is not found in post');
    }
    console.log(response);

  });
  it('user todos by using user id',async()=>{
   let user_id=6,flag=true
   let response=await api_obj.get_todos_user(user_id)
   for(let i=0;i<response.todos.length;i++){
      if(response.todos[0].userId==user_id){
         flag==false;
         break;
      }
   }
   if(flag==true){
      console.log("the given user id is same in todos");
    }else{
      console.log('some userId is not found in todos');
    }
    console.log(response);
  })

  it('adding new user',async()=>{
   let firstName='Abhishek', lastName='dumbre', midname='anil', age=25, username='abhishek@123', password='pass@123'
   let response=await api_obj.add_new_user(firstName, lastName, midname, age, username, password)
   console.log(response);
  })

  it('update user',async()=>{
   let firstName='Abhishek';
   let response= await api_obj.update_user(2,firstName)
   console.log(response);
  })
  
  it('delete user',async()=>{
   let id=2;
   let response=await api_obj.delete_user(2)
   console.log(response);
  })
  
});
