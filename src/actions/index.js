export const FETCH_ABOUT = 'FETCH_ABOUT';
export const FETCH_PUNA = 'FETCH_PUNA';
export const FETCH_CLASSES = 'FETCH_CLASSES';
// export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
// let chosenLanguage = 'en';

export function getAbout() {
  return {
    type: FETCH_ABOUT,
    payload: {}
  }
}

export function getPuna() {
  return {
    type: FETCH_ABOUT,
    payload: {}
  }
}

export function getClasses() {
  return {
    type: FETCH_CLASSES,
    payload: {}

  }
}

// export function setLanguage(lang) {
//   console.log('IN ACTION CREATOR');
//   chosenLanguage = lang;
//   return
// }
