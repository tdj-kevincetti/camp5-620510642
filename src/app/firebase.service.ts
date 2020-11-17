import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import * as firebase from "firebase/app";
import {Tweet} from './tweet';

@Injectable(
  {providedIn: "root"}
)
export class FirebaseService {

  constructor(
    private firestore: AngularFirestore
  ) { }

}