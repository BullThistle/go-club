import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.players = database.list('players');
  }

  getPlayers(){
    return this.players;
  }
  
  addPlayer(newPlayer: Player) {
    this.players.push(newPlayer);
  }
  
  getPlayerById(playerId: string){
   return this.database.object('players/' + playerId);
  }
  
  deletePlayer(localPlayerToDelete){
    var playerEntryInFirebase = this.getPlayerById(localPlayerToDelete.$key);
    playerEntryInFirebase.remove();
  }
  
  updatePlayer(localUpdatedPlayer, playerId){
    let playerEntryInFirebase = this.getPlayerById(playerId);
    console.log(playerId)
    if (localUpdatedPlayer.name != null) {
      playerEntryInFirebase.update({name: localUpdatedPlayer.name});
    } 
    if (localUpdatedPlayer.country != null) {
      playerEntryInFirebase.update({country: localUpdatedPlayer.country});
    } 
    if (localUpdatedPlayer.rating != null) {
      playerEntryInFirebase.update({rating: localUpdatedPlayer.rating});
    } 
  }
}
