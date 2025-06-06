export const GET_MY_PROFILE = "GET_MY_PROFILE";
export const GET_PROFILE_BY_ID = "GET_PROFILE_BY_ID";
export const SET_MY_PROFILE_ERROR = "SET_MY_PROFILE_ERROR";

export const GET_USER_PROFILES = "GET_USER_PROFILES";
export const SET_USER_PROFILES_ERROR = "SET_USER_PROFILES_ERROR";

export const SET_EXPERIENCES = "SET_EXPERIENCES";
export const ADD_EXPERIENCE = "ADD_EXPERIENCE";
export const UPDATE_EXPERIENCE = "UPDATE_EXPERIENCE";

export const SET_EXPERIENCES_ERROR = "SET_EXPERIENCES_ERROR";
export const SET_EXPERIENCES_LOADING = "SET_EXPERIENCES_LOADING";

const token = import.meta.env.VITE_API_TOKEN;

export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Errore nel recupero dei profili utente");
    const data = await res.json();
    dispatch({ type: GET_USER_PROFILES, payload: data });
  } catch (error) {
    dispatch({ type: SET_USER_PROFILES_ERROR, payload: error.message });
  }
};

export const getMyProfileAction = () => async (dispatch) => {
  try {
    const res = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Errore nel recupero del profilo personale");
    const data = await res.json();
    dispatch({ type: GET_MY_PROFILE, payload: data });
  } catch (error) {
    dispatch({ type: SET_MY_PROFILE_ERROR, payload: error.message });
  }
};

export const getProfileByIdAction = (userId) => async (dispatch) => {
  try {
    const res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Utente non trovato");
    const data = await res.json();
    dispatch({ type: GET_PROFILE_BY_ID, payload: data });
  } catch (error) {
    dispatch({ type: SET_MY_PROFILE_ERROR, payload: error.message });
  }
};

export const getExperiences = (userId) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Errore nel recupero delle esperienze");
    const data = await res.json();
    dispatch(setExperiences(data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const createExperience = (userId, experienceData) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(experienceData),
    });
    if (!res.ok) throw new Error("Errore durante la creazione dell'esperienza");
    const data = await res.json();
    dispatch(addExperience(data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const updateExperience = (userId, experienceId, experienceData) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experienceId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(experienceData),
    });
    if (!res.ok) throw new Error("Errore durante l'aggiornamento dell'esperienza");
    const data = await res.json();
    dispatch(updateExperienceAction(data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const setExperiences = (experiences) => ({
  type: SET_EXPERIENCES,
  payload: experiences,
});

export const addExperience = (experience) => ({
  type: ADD_EXPERIENCE,
  payload: experience,
});

export const updateExperienceAction = (experience) => ({
  type: UPDATE_EXPERIENCE,
  payload: experience,
});

export const setError = (error) => ({
  type: SET_EXPERIENCES_ERROR,
  payload: error,
});

export const setLoading = (isLoading) => ({
  type: SET_EXPERIENCES_LOADING,
  payload: isLoading,
});
