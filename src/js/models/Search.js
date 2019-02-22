import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const proxy = `https://cors-anywhere.herokuapp.com/`;
    const key = "7bac983105bb52ae23664f806a793475";
    try {
      const res = await axios(
        `${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`
      );
      this.result = res.data.recipes;
    } catch (error) {
      console.log(error);
    }
  }
}
