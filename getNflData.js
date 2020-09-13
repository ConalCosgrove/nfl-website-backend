import axios from 'axios';
import { weekInformation, altGameInformationForWeek, inGameInfo } from './nflApiRoutes.js';
import { getApiToken } from './getApiToken.js';
let token;
let configuredQuery;

const createConfiguredQuery = (token) => {
  return axios.create({
    headers: {
      authorization: `Bearer ${token}`
    }
  });
}

const refreshTokenAndQuery = async () => {
  console.log('refreshing api token...')
  token = await getApiToken();
  console.log('new token is', token)
  configuredQuery = createConfiguredQuery(token);
}

const main = async () => {
  console.log('getting api token...');
  token = await getApiToken();
  console.log('api token is', token);
  configuredQuery = createConfiguredQuery(token);
  setInterval(refreshTokenAndQuery, 3540000);
}


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
  if (!token || !configuredQuery) throw new Error('Server is still initializing');
  const games = await getCurrentWeeksGames();
  const gamesWithDetailIds = games.map((game) => game.gameDetailId).filter((id) => id !== null);
  const gameIdString = gamesWithDetailIds.join('","');
  const gameDetails = await configuredQuery.get(inGameInfo(gameIdString))
  gameDetails.data.data.viewer.gameDetailsByIds.forEach((gameDeets) => {
    const gameIndex = games.find((game) => game.gameDetailId === gameDeets.id);
    if (gameIndex) gameIndex.information = gameDeets;
  });
  return games;
}

main();