import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "250be0e953f142659da570e819c4a857",
  },
});
