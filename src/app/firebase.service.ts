import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import * as firebase from "firebase/app";
import { Tweet } from "./tweet";

@Injectable({ providedIn: "root" })
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}

  getTweets() {
    let DocRef = this.firestore.collection<Tweet>("tweet", e =>
      e.orderBy("date", "desc")
    );
    return DocRef.valueChanges();
  }

  addTweet(n: string, messege: string) {
    let tweet = {
      name: n,
      msg: messege,
      date: firebase.default.firestore.Timestamp.now()
    };
    const ref = this.firestore.collection("tweet").add(tweet);

    ref.then(newRef => {
      const updateID = {
        id: newRef.id
      };
      newRef.update(updateID);
    });
    return ref;
  }

  deleteTweet(id: string) {
    return this.firestore
      .collection("tweet")
      .doc(id)
      .delete();
  }
}