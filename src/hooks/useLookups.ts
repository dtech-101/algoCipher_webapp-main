import { profileEnd } from "console";
import { getLookups } from "../services/api/lookupApi";
import {
  Lookup,
  Lookups,
  projectCategory,
  projectSolutionLanguage,
  projectSolutionPlatform,
  projectTimeline,
} from "../types/lookup";
import { IApi } from "../types/apiTypes";

const useLookups = () => {
  const matchLookup = (name: string, lookups: Lookups): Lookup[] => {
    switch (name) {
      case projectCategory:
        return lookups.ProjectCategory;
      case projectSolutionLanguage:
        return lookups.ProjectSolutionLanguage;
      case projectSolutionPlatform:
        return lookups.ProjectSolutionPlatform;
      case projectTimeline:
        return lookups.ProjectTimeline;
      default:
        return [];
    }
  };

  const fetchLookup = async (name: string, api: IApi): Promise<Lookup[]> => {
    const cachedLookups = localStorage.getItem("lookups");
    // return existing cached lookup
    if (cachedLookups) {
      return matchLookup(
        name,
        JSON.parse(cachedLookups, (key, val) => {
          return val;
        })
      );
    }

    // fetch and cache lookups
    const lookups = await getLookups(api);
    if (lookups) {
      localStorage.setItem("lookups", JSON.stringify(lookups));
      return matchLookup(name, lookups);
    }

    return [];
  };

  return {
    fetchLookup,
  };
};
export default useLookups;
