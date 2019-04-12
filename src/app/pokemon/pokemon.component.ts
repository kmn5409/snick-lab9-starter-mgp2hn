import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PageEvent} from '@angular/material';
import {environment} from '../environment';
import {PokemonDetailComponent} from '../pokemon-detail/pokemon-detail.component';
import { ActivatedRoute } from '@angular/router';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

//standard component boilerplate code
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  
  records;
  //default for pagination
  length = 700;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  
  

  constructor(private http:HttpClient , public dialog: MatDialog, private route: ActivatedRoute) { }//inject module into component

  


  ngOnInit() {
    //use module to perfrom ajax, must use arrow anonymous function
    this.http.get(`${environment.BASE_URL}/api/anime`).subscribe(data=>{
      this.records = data;//set records to data received 
    })
  }

  /*openModal(id ,v,g,h,j,y): void{
         
          var p = new PokemonDetailComponent(this.http , this.dialog, this.route);
          p.open(id);
          
     setTimeout(()=>{
        this.dialog.open(PokemonDetailComponent);
       },0);
      

  }*/
  /*
    openModal(){
         
        this.http.get(`${environment.BASE_URL}/api/anime`).subscribe(data=>{
      this.records = data;//set records to data received
      //var p = new PokemonDetailComponent(this.http , this.dialog, this.route);
      //p.openModal(data); 
    })
    */
          //p.open();
          
         /* 
     setTimeout(()=>{
        this.dialog.open(PokemonDetailComponent);
       },0);*/
      

  //}


  getServerData(pageEvent){
    console.log(pageEvent);
    this.http.get(`${environment.BASE_URL}/api/anime?limit=${pageEvent.pageSize}&offset=${pageEvent.pageIndex}`).subscribe(data=>{
      this.records = data;//set records to data received 
    })
  }
}