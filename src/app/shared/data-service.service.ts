import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor() {}

  getData() {
    return DATA;
  }
}

const DATA = [
  {
    id: 1,
    name: "angular lvl 1",
    size: 6,
    instructor: "peter",
    hours: 3,
    movie: {
      "favorite movie": "Shawshank Redemption",
      image: "https://via.placeholder.com/100"
    }
  },
  {
    id: 2,
    name: "angular lvl 2",
    size: 12,
    hours: 3
  },
  {
    id: 3,
    name: "angular lvl 3",
    size: 12,
    instructor: "peter",
    movie: {
      "favorite movie": "Shawshank Redemption",
      image: "https://via.placeholder.com/100"
    }
  },
  {
    id: 4,
    name: "angular lvl 4",
    instructor: "peter",
    movie: {
      "favorite movie": "Shawshank Redemption",
      image: "https://via.placeholder.com/100"
    }
  }
];
