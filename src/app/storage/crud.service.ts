import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageDBService {
  private _storage: Storage | null = null;

  constructor(private storage : Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public async set(key: string, value: any) {
    await this._storage.set(key, value);
  }

  public async get(key: string) {
    return await this._storage.get(key);
  }

  public async update(key: string, value: any) {
    let items = await this.get(key);
    if (items == null|| items.length == 0) {
      items = [];
    }

    items.push(value);
    await this._storage.set(key, items);
    let a = this.get(key);
    console.log(a);
  }

  public async remove(key: string) {
    await this._storage.remove(key);
  }

  public async removeAll(key: string) {
    await this._storage.remove(key);
  }

  public async clear() {
    await this._storage.clear();
  }
}
