import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControlFlow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { signal } from '@angular/core';
import { Signal } from './components/signal/signal';
import { User } from './components/user/user';
import { AttDirectives } from './components/att-directives/att-directives';
import { Pipes1 } from './components/pipes1/pipes1';

export const routes: Routes = [
    {
        path : "Admin", component : Admin
    },
    {
        path : "ControlFlow", component : ControlFlow
    },
    {
        path : "DataBinding", component : DataBinding
    },
    {
        path : "signal" , component : Signal
    },
    {
        path : "User" , component : User
    },
    {
        path : "AttDirectives", component : AttDirectives
    },
    {
        path : "Pipes1", component : Pipes1
    }
];
