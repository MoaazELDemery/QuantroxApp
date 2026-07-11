/**
 * Coordination between the Preloader and page-entrance animations:
 * hero timelines wait for `introDone()` so they don't play hidden
 * behind the loading screen.
 */

const KEY = "qx-intro";

export const introAlreadyShown = (): boolean => {
  try {
    return sessionStorage.getItem(KEY) === "1";
  } catch {
    return true;
  }
};

export const markIntroShown = (): void => {
  try {
    sessionStorage.setItem(KEY, "1");
  } catch {
    /* private mode - ignore */
  }
  window.dispatchEvent(new Event("qx:intro-done"));
};

/** Resolves immediately if the intro already ran this session, else when it finishes. */
export const introDone = (): Promise<void> =>
  new Promise((resolve) => {
    if (introAlreadyShown()) return resolve();
    window.addEventListener("qx:intro-done", () => resolve(), { once: true });
  });
