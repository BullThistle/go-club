import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
  providers: [PlayerService]
})

export class EditPlayerComponent implements OnInit {
  playerId: string;
  playerToUpdate;
  playerForm: FormGroup;
  name: string;
  rating: number;
  country: string;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private location: Location, private playerService: PlayerService) {
    this.playerForm = fb.group({
      'name' : [null, Validators.required],
      'rating': [null, Validators.required],
      'country': [null, Validators.required],
    })
  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.playerId = urlParameters['id'];
    });

    this.playerToUpdate = this.playerService.getPlayerById(this.playerId);
  }
  
  beginUpdatingPlayer(updatedPlayer){
    this.playerService.updatePlayer(updatedPlayer);
    this.router.navigate(['admin']);
  }
  
  goToAdminPage() {
    this.router.navigate(['admin']);
  }
}
