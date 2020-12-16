import {
  PlanetsInfoModel,
  PlanetsStateModel
} from "../../../models/planets-state.model";
import { cloneDeep } from 'lodash';
import { PlanetsModel } from "../../../models/planets.model";

function generateRandomPlanet(): string {
  const randomNumber = Math.floor(Math.random() * (19 - 3 + 1)) + 2;
  return `https://starwars-visualguide.com/assets/img/planets/${ randomNumber }.jpg`
}

function populatePlanetsPhoto(planetsList: Partial<PlanetsModel[]>) {
  return planetsList.map((item: PlanetsModel) => {
    return cloneDeep({ ...item, imageUrl: generateRandomPlanet() });
  });
}

export const setPlanets = (
  state: PlanetsStateModel,
  { planetsInfo }: { planetsInfo: Partial<PlanetsInfoModel> }
): PlanetsStateModel => {
  return {
    ...state,
    planetsInfo: planetsInfo,
    allPlanets: populatePlanetsPhoto(planetsInfo.results)
  }
}

export const addPlanets = (
  state: PlanetsStateModel,
  { planetsInfo }: { planetsInfo: Partial<PlanetsInfoModel> }
): PlanetsStateModel => {
  return {
    ...state,
    planetsInfo: planetsInfo,
    allPlanets: [ ...state.allPlanets, ...populatePlanetsPhoto(planetsInfo.results) ]
  }
}
