import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CompoundDataService {
  url = "http://localhost:3000";
  allCoumpounds: number = 0;
  pagination: number = 1;

  constructor(private httpClient: HttpClient) {}

  getCompounds(page: number) {
    return this.httpClient.get(`${this.url}/compounds?page=${page}`);
  }

  getCompoundById(id: string) {
    return this.httpClient.get(`${this.url}/compounds/${id}`);
  }

  upsertCompound(data: any) {
    return this.httpClient.put(`${this.url}/upsert`, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  }

  deleteCompound(id: string) {
    return this.httpClient.delete(`${this.url}/delete/${id}`, {
      headers: {
        'Content-type': 'application/json'
      }
    });
  }
}
