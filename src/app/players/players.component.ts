import { PlayerService } from '../player.service';
import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers: [PlayerService],
})

export class PlayersComponent implements OnInit {
  players: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  
  constructor(private router: Router, private playerService: PlayerService) {}
  
  ngOnInit(){
    this.players = this.playerService.getPlayers(); 
  }

  goToDetailPage(clickedPlayer) {
    this.router.navigate(['player', clickedPlayer.$key]);
  }

}
