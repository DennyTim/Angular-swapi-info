import {
  PlanetsInfoModel,
  PlanetsStateModel
} from "../../../models/planets-state.model";
import { cloneDeep } from 'lodash';
import { PlanetsModel } from "../../../models/planets.model";

const compose = (...callbacks) => (comp) => {
  return callbacks.reduceRight((prevResult, f) => f(prevResult), comp);
}

function generateRandomPlanet(): string {
  const randomNumber = Math.floor(Math.random() * (19 - 3 + 1)) + 2;
  return `https://starwars-visualguide.com/assets/img/planets/${ randomNumber }.jpg`
}

function populatePlanetsPhoto(planetsList: Partial<PlanetsModel[]>) {
  return planetsList.map((item: PlanetsModel) => {
    return cloneDeep({ ...item, imageUrl: generateRandomPlanet() });
  });
}

function generateId(planetsList: Partial<PlanetsModel[]>) {
  return planetsList.map((item: PlanetsModel) => {
    return cloneDeep({
      ...item,
      id: Date.now()
              .toString(36) + Math.random()
                                  .toString(36)
                                  .substring(2)
    });
  });
}

export const setPlanets = (
  state: PlanetsStateModel,
  { planetsInfo }: { planetsInfo: Partial<PlanetsInfoModel> }
): PlanetsStateModel => {
  return {
    ...state,
    planetsInfo: planetsInfo,
    allPlanets: compose(generateId, populatePlanetsPhoto)(planetsInfo.results)
  }
}

export const addPlanets = (
  state: PlanetsStateModel,
  { planetsInfo }: { planetsInfo: Partial<PlanetsInfoModel> }
): PlanetsStateModel => {
  return {
    ...state,
    planetsInfo: planetsInfo,
    allPlanets: [
      ...state.allPlanets,
      ...compose(generateId, populatePlanetsPhoto)(planetsInfo.results)
    ]
  }
}

export const addOnePlanet = (
  state: PlanetsStateModel,
  { selectedPlanet }: { selectedPlanet: PlanetsModel }
): PlanetsStateModel => {
  return {
    ...state,
    selectedPlanet: cloneDeep({
      ...selectedPlanet,
      imageUrl: generateRandomPlanet()
    })
  }
}

export const clearCurrentKey = (
  key: string,
  initialValue: PlanetsStateModel[keyof PlanetsStateModel]
) => (state: PlanetsStateModel): PlanetsStateModel => {
  return {
    ...state,
    [key]: initialValue
  }
}
