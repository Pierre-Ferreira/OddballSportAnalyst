import { Meteor } from 'meteor/meteor';
import GameRunningStatistics from './collection';

Meteor.publish('current_game_running_statistics', (gameSetupId) => {
  check(gameSetupId, String);
  const GameRunningStatisticsDoc = GameRunningStatistics.find({ gameSetupId });
  console.log('GameRunningStatisticsDoc:', GameRunningStatisticsDoc);
  return GameRunningStatisticsDoc;
});
Meteor.publish('current_game_running_isRunning', (gameSetupId) => {
  check(gameSetupId, String);
  const GameRunningStatisticsDoc = GameRunningStatistics.find({ gameSetupId });
  console.log('GameRunningStatisticsDoc:', GameRunningStatisticsDoc);
  return GameRunningStatisticsDoc;
});
// Meteor.publish('current_game_running_statistics', (gameSetupId) => {
//   check(gameSetupId, String);
//   return GameRunningStatistics.find({ gameSetupId });
// });
