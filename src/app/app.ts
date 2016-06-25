import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { Home } from './components/home/home';
import { D3Samples } from './components/d3samples/d3samples';
import { About } from './components/about/about';
import { RepoBrowser } from './components/repo-browser/repo-browser';

@Component({
  selector: 'app',
  pipes: [],
  providers: [],
  directives: [ ROUTER_DIRECTIVES ],
  templateUrl: './app.html',
})

@Routes([
  { path: '/',       component: Home,   },
  { path: '/d3samples',       component: D3Samples,   },
  { path: '/about',  component: About,      },
  { path: '/github', component: RepoBrowser },
])

export class App {
  constructor() {}

}
