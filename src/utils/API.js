
// export default {
//   getUsers: function() {
//     //return axios.get("https://randomuser.me/api/?results=200&nat=us");
//     return axios.get( "https://randomuser.me/api/?results=1&nat=us&inc=name,email,phone,dob,picture");
//   }
// }

import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=200&nat=us";

export default {
  search: function () {
      console.log(axios.get(BASEURL));
     return axios.get(axios.get(BASEURL));
    }
};
