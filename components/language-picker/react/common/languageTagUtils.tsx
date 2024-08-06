import { stripDemarcation } from "./matchingSubstringDemarcation";

// TODO put this somewhere else?
export function createTag(
    languageCode?: string,
    scriptCode?: string,
    regionCode?: string,
    dialectCode?: string
  ) {
    if (!languageCode) {
      // Unlisted language
      return `qaa-x-${dialectCode}`;
    }
    let tag = languageCode;
    if (scriptCode) {
      tag += `-${scriptCode}`;
    }
    if (regionCode) {
      tag += `-${regionCode}`;
    }
    if (dialectCode) {
      tag += `-${dialectCode}`;
    }
    return stripDemarcation(tag);
  }