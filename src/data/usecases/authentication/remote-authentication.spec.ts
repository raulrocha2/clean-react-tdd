import { HttpPostClient } from "@/data/protocols/http"
import {RemoteAuthentication } from "./remote-authentication"


export class HttpClientSpy implements HttpPostClient {
  url?: string
  post(url: string): Promise<void> {
    this.url = url
    return Promise.resolve()
  }

}

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})