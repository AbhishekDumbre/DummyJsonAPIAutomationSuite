import 'dotenv/config'

export default class auth{
  constructor(){
    this.base_url=process.env.base_url;
  }
  async login_user_get_token(username,password){
    const url=this.base_url+`/auth/login`
    let para_data={
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        
        username: `${username}`,
        password: `${password}`,
        expiresInMins: 30, 
      }),
      credentials: 'include'
    }
    try{
      return await(await fetch(url,para_data)).json();
    }
    catch(error){
      return console.log('some problem in login user get token api ')
    }
  }

  async get_current_auth_user(access_token){
    const url=this.base_url+'/auth/me';
    let para_data={
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${access_token}`,
      }, 
      credentials: 'include'
    }
    try{
      return await(await fetch(url,para_data)).json();
    }catch(error){
      return await(await fetch(url,para_data)).json();

      return console.log('some problem in current auth user api ')
    }

  }
   async get_refresh_auth_session(refreshToken){
    const url=this.base_url+'/auth/refresh'
    let para_data={
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        refreshToken: `${refreshToken}`, // Optional, if not provided, the server will use the cookie
        expiresInMins: 30, // optional (FOR ACCESS TOKEN), defaults to 60 
      }),
      credentials: 'include'
    }
    try{
      return await(await fetch(url,para_data)).json();
    }
    catch(error){
      return console.log('some problem in get refresh auth session api ')
    }
   }

}