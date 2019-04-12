import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../environment';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {PageEvent} from '@angular/material';

import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'pokemon-detail',//selector/ custom element name
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})


export class PokemonDetailComponent implements OnInit {


  record: any = {
    name: "",
    anime_id: "loading",
    genre: "loading",
    type: "loading",
    episodes: "loading",
    rating: "loading",
    members: "loading",
    img_url: "loading"
  }
  genre = "fjfjf";
  constructor(private http: HttpClient, public dialog: MatDialog, private route: ActivatedRoute) {
  }//inject module into component
  currentDialog: MatDialogRef<PokemonDetailComponent> = null;
  destroy = new Subject<any>();


  openModal(){
    /*
    this.route.params.subscribe(params => {
      console.log("Before " + item);
      console.log(item);
      console.log(item[0].id);
             console.log("Sigh");
             //console.log(this.route.snapshot.data);
            this.genre = item[0];
            console.log("sigh");
           //this.genre = "vnkjns";
           this.dialog.open();
           //this.dialog.open(PokemonDetailComponent);
           
         });
    */
    this.route.params.subscribe(params => {
      //params.id contains the value of the id variable in the url
      this.http.get(`${environment.BASE_URL}/api/anime/${params.id}`).subscribe(data => {
        this.record = data;//pulls data for the pokeid specified in url
      })
    });
    
    /*this.route.params.subscribe(params => {
      this.http.get(`${environment.BASE_URL}/api/anime/${params.id}`).subscribe(data=>{
        this.record = data;//pulls data for the pokeid specified in url
        this.dialog.open(PokemonDetailComponent, {
           data: { id: params.id }
      });
      })
    });*/
    
    
    /*
    this.route.params.pipe(takeUntil(this.destroy))
      .subscribe(params => {
        if (this.currentDialog) {
          this.currentDialog.close();
        }

        this.currentDialog = matDialog.open(PokemonDetailComponent, {
          data: { id: params.id }
        });
        this.currentDialog.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          router.navigateByUrl('/');
        })
      })
      */

  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      //params.id contains the value of the id variable in the url
      this.http.get(`${environment.BASE_URL}/api/anime/${params.id}`).subscribe(data => {
        this.record = data;//pulls data for the pokeid specified in url
        this.genre = "vnkjns";
      })
    });
  }
}