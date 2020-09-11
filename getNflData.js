import axios from 'axios';
import {weekInformation, altGameInformationForWeek, inGameInfo } from './nflApiRoutes.js';

const configuredQuery = axios.create({
  headers: {
    authorization: `Bearer ${process.env.TOKEN}`
  }
});

export const getCurrentWeekData = async () => {
  const weekData = await configuredQuery.get(weekInformation)
    .catch((error) => {
      throw new Error(`Failed to get week data: ${error}`)
    });
  return weekData?.data?.data?.viewer?.league?.current?.week;
}

export const getCurrentWeeksGames = async () => {
  try {
    const week = await getCurrentWeekData();
    const games = await configuredQuery.get(altGameInformationForWeek(week));
    return games.data.data.viewer.league.gamesByWeek;
  } catch (error) {
    console.log(error)
  }
  
}

export const getCurrentWeeksGameInfo = async () => {
  const games = await getCurrentWeeksGames();
  const gamesWithDetailIds = games.map((game) => game.gameDetailId).filter((id) => id !== null);
  const gameIdString = gamesWithDetailIds.join(',');
  const gameDetails = await configuredQuery.get(inGameInfo(gameIdString))
  gameDetails.data.data.viewer.gameDetailsByIds.forEach((gameDeets) => {
    const gameIndex = games.find((game) => game.gameDetailId === gameDeets.id);
    gameIndex.information = gameDeets;
  });
  return games;
}

