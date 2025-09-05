import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Signal } from './components/signal/signal';
import { User } from './components/user/user';
import { Admin } from './components/admin/admin';
import { DataBinding } from './components/data-binding/data-binding';
import { ControlFlow } from './components/control-flow/control-flow';
// import { RouterLink } from "../../node_modules/@angular/router/router_module.d";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Signal, User, Admin, DataBinding, ControlFlow, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
