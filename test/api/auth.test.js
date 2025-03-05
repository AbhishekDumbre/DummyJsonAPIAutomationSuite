import { assert,expect } from "chai";
import auth from '../../lib/api_auth.mjs'

let api_obj= new auth(),access_token,refreshToken
describe('Auth',async()=>{
  it('login user and get token',async()=>{
    let username='emilys',password='emilyspass'
    const response=await api_obj.login_user_get_token(username,password);
    expect(response).to.have.property('accessToken').to.be.a('string');
    expect(response).to.have.property('refreshToken').to.be.a('string');
    expect(response).to.have.property('id').to.be.a('number');
    expect(response).to.have.property('username').to.be.a('string');
    expect(response).to.have.property('email').to.be.a('string');
    expect(response).to.have.property('firstName').to.be.a('string');
    expect(response).to.have.property('lastName').to.be.a('string');
    expect(response).to.have.property('gender').to.be.a('string');
    expect(response).to.have.property('image').to.be.a('string');
    access_token=await response.accessToken;
    refreshToken=await response.refreshToken
    console.log(response);
  })

  it('get current auth user',async()=>{
    const response=await api_obj.get_current_auth_user(access_token)
    expect(response).to.have.property('id').to.be.a('number');
    expect(response).to.have.property('username').to.be.a('string');
    expect(response).to.have.property('email').to.be.a('string');
    expect(response).to.have.property('firstName').to.be.a('string');
    expect(response).to.have.property('lastName').to.be.a('string');
    expect(response).to.have.property('gender').to.be.a('string');
    expect(response).to.have.property('image').to.be.a('string');
    console.log(response);
  })

  it('refresh auth session',async()=>{
    const response=await api_obj.get_refresh_auth_session(refreshToken)
    expect(response).to.have.property('accessToken').to.be.a('string');
    expect(response).to.have.property('refreshToken').to.be.a('string');
    console.log(response)
  })
})