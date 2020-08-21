import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Nh2v2rbhqbSa-kHwd_Dbs0OuQjZIBPC2M6viwaLRJ27Zd0lKo0bJdRgu86GPWjMJfQOXNpTHKLHiGrl5R6_4OMmgS6zoCB7mpE-p2NjmLF1AJJrJ5zq0X4QTPzE9X3Yx",
  },
});
