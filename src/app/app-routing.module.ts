import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  WebComponentWrapper, WebComponentWrapperOptions
} from '@angular-architects/module-federation-tools';
const routes: Routes = [
  {
    path: "App",
    loadChildren: () =>loadRemoteModule({
    type:"module",
    remoteEntry:"http://localhost:8080/remoteEntry.js",
     
    exposedModule:"App"
    })
    .then(m => {return m.AppModule})
    },
    {
      path: "react-test",
      loadChildren: () =>loadRemoteModule({
      type:"module",
      remoteEntry:"http://localhost:8080/remoteEntry.js",
       
      exposedModule:"demo"
      })
      .then(m => {return m.AppModule})
      },

    {
      path: 'react',
      component: WebComponentWrapper,
      data: {
        type: 'script',
        remoteEntry: 'http://localhost:8080/remoteEntry.js',
        remoteName: 'react',
        exposedModule: './',
        elementName: 'react-element',
      } as WebComponentWrapperOptions,
    },
    {
      path: 'react1',
      component: WebComponentWrapper,
      data: {
        type: 'script',
        remoteEntry: 'http://localhost:4204/remoteEntry.js',
        remoteName: 'react',
        exposedModule: './web-components',
        elementName: 'react-element',
      } as WebComponentWrapperOptions,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
function then(arg0: (m: any) => any) {
  throw new Error('Function not implemented.');
}

