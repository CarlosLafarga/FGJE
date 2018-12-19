import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { MembershipComponent } from './membership.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
//import { MembershipData } from './membership.data';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';

export const routes = [
  { path: '', component: MembershipComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    //InMemoryWebApiModule.forRoot(MembershipData, { delay: 0 }),
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MultiselectDropdownModule,
    NgxPaginationModule,
    PipesModule,
    NgxDatatableModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.cubeGrid,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '4px',
      primaryColour: '#5B3131', 
      secondaryColour: '#AD7E7E', 
      tertiaryColour: '#ffffff'
    })
  ],
  declarations: [
    MembershipComponent
  ]
})
export class MembershipModule { }
