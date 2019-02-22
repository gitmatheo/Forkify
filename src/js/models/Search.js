import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    // const proxy = `https://cors-anywhere.herokuapp.com/`;
    const KEY = "04e7ee6d9dd8c947f0f4c283981bd332";
    const ID = "9746243b";

    try {
      const res = await axios(
        `https://api.edamam.com/search?&q=${
          this.query
        }&app_id=${ID}&app_key=${KEY}`
      );
      this.result = res.data.hits;
    } catch (error) {
      alert(error);
    }
  }
}
