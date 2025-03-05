import "dotenv/config";
export default class apiCommon {
  constructor() {
    this.base_url = process.env.base_url;
  }

  async get_all_user() {
    const url = this.base_url + "/users";
    let param_data = {
      method: "GET",
    };
    try {
      return await (await fetch(url)).json();
    } catch (error) {
      return await console.log("something wrong in apis" + error);
    }
  }

  async get_user_token(user_name, pass_word) {
    let url = this.base_url + "/user/login";
    const param_data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user_name,
        password: pass_word,
        expiresInMins: 30,
      }),
    };
    try {
      return await (await fetch(url, param_data)).json();
    } catch (error) {
      return await (await fetch(url, param_data)).json();
      return console.log("some problem in api " + error);
    }
  }

  async get_current_authenticated_user(access_token) {
    const url = this.base_url + "/user/me";
    let para_data = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      credentials: "include",
    };
    try {
      return await (await fetch(url, para_data)).json();
    } catch (error) {
      return console.log("some problem in api " + error);
    }
  }

  async get_single_user(id) {
    const url = this.base_url + "/users/" + id;
    try {
      return await (await fetch(url)).json();
    } catch (error) {
      return console.log("some problem in api" + error);
    }
  }
  async serach_user(name) {
    const url = this.base_url + "/users/search?" + `q=${name}`;
    try {
      return await (await fetch(url)).json();
    } catch (error) {
      return console.log("some problem in serch user api" + error);
    }
  }

  async filter_user(keys, val) {
    const url = this.base_url+"/users/filter?"+`key=${keys}&value=${val}`;
    try {
      return await (await fetch(url)).json();
    } catch (error) {
      return console.log("some problem in filter api" + error);
    }
  }

  async get_limit_skip_user(limit_no, skip_no, select_key) {
    const url =
      this.base_url +
      "/users" +
      `?limit=${limit_no}&skip=${skip_no}&select=${select_key}`;
    try {
      return await (await fetch(url)).json();
    } catch (error) {
      return console.log("some problem in limit_skip_user" + error);
    }
  }
  async  get_user_data_asc_desc(name,para){
    const url=this.base_url+`/users?sortBy=${name}&order=${para}`
    try{
      return await(await fetch(url)).json();
    }catch(error){
      return console.log("the some problem in asc and desc api "+error);

    }

  }

  async get_user_cards(id) {
    const url = this.base_url + `/users/${id}/carts`;
    try {
      return await (await fetch(url)).json();
    } catch (error) {
      return console.log("the some problem in users cards api" + error);
    }
  }
  async get_user_post(id) {
    const url = this.base_url + `/users/${id}/posts`;
    try {
      return await (await fetch(url)).json();
    } catch (error) {
      return console.log("the some problem in users post api" + error);
    }
  }

  async get_todos_user(id) {
    const url = this.base_url + `/users/${id}/todos`;
    try {
      return await (await fetch(url)).json();
    } catch (error) {
      return console.log("the some problem in users todos api" + error);
    }
  }

  async add_new_user(firstName, lastName, midname, age, username, password) {
    const url = this.base_url + "/users/add";
    let param_data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: `${firstName}`,
        lastName: `${lastName}`,
        maidenName: `${midname}`,
        age: `${age}`,
        username: `${username}`,
        password: `${password}`,
      }),
    };
    try {
      return await (await fetch(url, param_data)).json();
    } catch (error) {
      return console.log("the error in add new user" + error);
    }
  }

  async update_user(id,firstName, lastName, midname, age, username, password) {
    const url = this.base_url+`/users/${id}`;
    let para_data = {
      method: "PUT" ,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: `${firstName}`,
        lastName: `${lastName}`,
        maidenName: `${midname}`,
        age: `${age}`,
        username: `${username}`,
        password: `${password}`,
      }),
    };
    try {
      return await (await fetch(url, para_data)).json();
    } catch (error) {
      return console.log("the error in add new user" + error);
    }
  }

  async delete_user(id){
    const url=this.base_url+`/users/${id}`
    let para_data={
      method:'DELETE'
    }
    try{
      return await(await fetch(url,para_data)).json();

    }catch(error){
      return console.log('the some problem in delete api'+error);
    }
  }
}
