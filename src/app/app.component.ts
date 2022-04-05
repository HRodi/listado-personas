import { Component, OnInit } from "@angular/core";
import firebase from "firebase/compat/app";
import { LoginService } from "./login/login.service";
import { initializeApp } from "firebase/app";
import 'firebase/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB4Zcc3bMSu9uhd10f_1HIbwfRJGF-5_04",
  authDomain: "listado-personas-595f3.firebaseapp.com",
  databaseURL: "https://listado-personas-595f3-default-rtdb.firebaseio.com",
  projectId: "listado-personas-595f3",
  storageBucket: "listado-personas-595f3.appspot.com",
  messagingSenderId: "645261591083",
  appId: "1:645261591083:web:d8194ac8e4c8262c61206e",
  measurementId: "G-R0802W04L3",
};

const app = initializeApp(firebaseConfig);
//onst analytics = getAnalytics(app);

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {

  
  titulo = "Listado de Personas";

  ngOnInit(): void {
    firebase.initializeApp(firebaseConfig);
  }

  constructor(private loginService: LoginService) {}


  isAutenticado() {
    return this.loginService.isAutenticado();
  }

  salir() {
    this.loginService.logout();
  }
}