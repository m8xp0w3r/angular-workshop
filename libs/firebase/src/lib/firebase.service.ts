/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { QueryConstraint } from "@firebase/firestore";
import { Observable } from "rxjs";
import {
	collection,
	collectionData,
	CollectionReference,
	deleteDoc,
	doc,
	docData,
	DocumentReference,
	DocumentSnapshot,
	Firestore,
	getDoc,
	query,
	setDoc
} from "@angular/fire/firestore";

@Injectable({
	providedIn: 'root'
})
export class FirebaseService {

	constructor(public firestore: Firestore) {
	}

	/**
	 * Returns a reference to an AngularFirestoreCollection.
	 *
	 * @param {string} collectionName The name of the collection.
	 * @param {QueryConstraint} queryFn Optional query function to narrow the result set. Should be something like this: orderBy('createdAt', 'desc')
	 * @param {string} idField
	 */
	getCollection<T>(collectionName: string, queryFn?: QueryConstraint[], idField = "id"): Observable<T[]> {
		const firestoreCollection = collection(this.firestore, collectionName) as CollectionReference<T>;
		if (queryFn) {
			return collectionData<T>(query(firestoreCollection, ...queryFn), {idField});
		}
		return collectionData<T>(firestoreCollection, {idField});
	}

	/**
	 * Fetches a reference for the document
	 *
	 * @param collectionName The name of the collection where the document is stored.
	 * @param documentId The id of the document where the reference is looked for.
	 */
	getDocumentReference<T>(collectionName: string, documentId: string): DocumentReference<T> {
		return doc(this.firestore, collectionName + "/" + documentId) as DocumentReference<T>;
	}

	/**
	 * Create a reference to a single document in a collection.
	 *
	 * @param {string} collectionName The name of the collection where the document is stored.
	 * @param {string} documentId The id of the requested document.
	 */
	getDocument<T>(collectionName: string, documentId: string): Promise<DocumentSnapshot<T>> {
		const docRef = this.getDocumentReference<T>(collectionName, documentId);
		return getDoc<T>(docRef);
	}

	/**
	 * Fetches a document from the firestore and listens to changes of that document.
	 *
	 * @param {string} collectionName The collection where the document is stored.
	 * @param {string} documentId The id of the document.
	 */
	getDocumentWithChanges<T>(collectionName: string, documentId: string): Observable<T> {
		const docRef = this.getDocumentReference<T>(collectionName, documentId);
		return docData<T>(docRef);
	}

	/**
	 * Adds an item to the collection.
	 *
	 * @param collectionName The name of the collection where the item should be added.
	 * @param item The item which should be added to the collection.
	 * @param documentId The id of the item which should be added.
	 */
	addItem<T>(collectionName: string, item: T, documentId: string): Promise<void> {
		const docRef = this.getDocumentReference<T>(collectionName, documentId);
		return setDoc<T>(docRef, item);
	}

	/**
	 * Deletes an item to the collection.
	 *
	 * @param collectionName The name of the collection where the item should be deleted.
	 * @param documentId The id of the item which should be deleted.
	 */
	deleteItem<T>(collectionName: string, documentId: string): Promise<void> {
		const docRef = this.getDocumentReference<T>(collectionName, documentId);
		return deleteDoc(docRef);
	}
}
