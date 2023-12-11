import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  items: any;

  constructor(private firestore: Firestore) {
    const itemsCollection  = collection(firestore, 'items');
    this.items = collectionData(itemsCollection);
  }

  addItem(item: any): void {
    this.items.add(item);
  }

  updateItem(id: string, data: any): void {
    this.items.doc(id).update(data);
  }

  deleteItem(id: string): void {
    this.items.doc(id).delete();
  }

  getItems(): Observable<any[]> {
    return this.items;
  }
}
