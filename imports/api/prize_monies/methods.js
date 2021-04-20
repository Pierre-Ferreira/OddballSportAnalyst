import { Meteor } from 'meteor/meteor';
import PrizeMonies from './collection';
import './hooks';

Meteor.methods({
  'prize_monies.lookup': (noOfPlayers) => {
    check(noOfPlayers, Number);
    if (noOfPlayers.length === 0) throw new Meteor.Error(403, 'No of Players is required');
    if (!Meteor.userId()) {
      throw new Meteor.Error(403, 'PrizeMonies Error. User not logged in.');
    } else {
      //TODOS: Fix/Uncomment the prize monies.
      //const noOfPlayersInfo =  PrizeMonies.findOne({ noOfPlayers });
      const noOfPlayersInfo = 1000;
      console.log('noOfPlayersInfo:', noOfPlayersInfo)
      return noOfPlayersInfo;
    }
  },
});
