import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "[app-login]",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  /* template: `
    `,
  styles: ["h1 {color: blue}"],*/
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  curso: string = "FullStack"
}
