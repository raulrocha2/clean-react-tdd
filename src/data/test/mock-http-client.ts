import { HttpPostClient } from "../protocols/http"


export class HttpClientSpy implements HttpPostClient {
  url?: string
  post(url: string): Promise<void> {
    this.url = url
    return Promise.resolve()
  }

}
