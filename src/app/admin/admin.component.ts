import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PlayerService]
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private playerService: PlayerService) { }
  players: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  ngOnInit() {
    this.players = this.playerService.getPlayers(); 
  }

  submitForm(name: string, country: string, rating: number) {
    var newPlayer: Player = new Player(name, country, rating);
    this.playerService.addPlayer(newPlayer);
  }

}
