export const FETCH_ABOUT = 'FETCH_ABOUT';

export function getAbout() {
  console.log("ACTION JS");
  return {
    type: FETCH_ABOUT,
    payload: {}

  }
}
