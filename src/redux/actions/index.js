export const GET_MY_PROFILE = "GET_MY_PROFILE";
export const GET_PROFILE_BY_ID = "GET_PROFILE_BY_ID";
export const SET_MY_PROFILE_ERROR = "SET_MY_PROFILE_ERROR";
export const GET_USER_PROFILES = "GET_USER_PROFILES";
export const SET_USER_PROFILES_ERROR = "GET_USER_PROFILES_ERROR";
export const GET_EXPERIENCES_BY_ID = "GET_EXPERIENCES_BY_ID";
export const SET_EXPERIENCES_ERROR = "SET_EXPERIENCES_ERROR";
export const ADD_EXPERIENCES_BY_ID = "ADD_EXPERIENCES_BY_ID";
export const SET_ADD_EXPERIENCES_ERROR = "SET_ADD_EXPERIENCES_ERROR";
export const GET_POSTS = "GET_POSTS";
export const SET_POSTS_ERROR = "SET_POSTS_ERROR";
export const UPDATE_POST = "UPDATE_POST";

const token = import.meta.env.VITE_API_TOKEN;

//user profiles
export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Errore nel recupero del profilo");
      }

      const data = await res.json();
      dispatch({ type: GET_USER_PROFILES, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

//me
export const getMyProfileAction = (userId) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Errore nel recupero del profilo");
      }

      const data = await res.json();
      dispatch({ type: GET_MY_PROFILE, payload: data });
    } catch (error) {
      dispatch({ type: SET_MY_PROFILE_ERROR, payload: error.message });
    }
  };
};

//userId
export const getProfileByIdAction = (userId) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Utente non trovato");
      }

      const data = await res.json();
      dispatch({ type: GET_PROFILE_BY_ID, payload: data });
    } catch (error) {
      dispatch({ type: SET_MY_PROFILE_ERROR, payload: error.message });
    }
  };
};

//experiences
export const getExperiences = (userId) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Utente non trovato");
      }

      const data = await res.json();
      dispatch({ type: GET_EXPERIENCES_BY_ID, payload: data });
    } catch (error) {
      dispatch({ type: SET_EXPERIENCES_ERROR, payload: error.message });
    }
  };
};

//experiences POST
export const addExperiences = (userId, experienceData) => {
  console.log(userId, experienceData);
  return async (dispatch) => {
    try {
      const res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(experienceData),
      });

      if (!res.ok) {
        throw new Error("Utente non trovato");
      }

      const data = await res.json();
      dispatch({ type: ADD_EXPERIENCES_BY_ID, payload: data });
    } catch (error) {
      dispatch({ type: SET_ADD_EXPERIENCES_ERROR, payload: error.message });
    }
  };
};

//all posts
export const getAllPosts = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        throw new Error("Errore nel recuper dei post");
      }
      const data = await res.json();
      dispatch({ type: GET_POSTS, payload: data });
    } catch (error) {
      console.error("errore nei post", error);
      dispatch({ type: SET_POSTS_ERROR, payload: error.message });
    }
  };
};

//edit post
export const updatePost = (postId, updateData) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updateData),
      });

      if (!res.ok) {
        throw new Error("Errore nella modifica del post");
      }
      const updatedPost = await res.json();
      dispatch({ type: UPDATE_POST, payload: updatedPost });
    } catch (error) {
      dispatch({ type: SET_POSTS_ERROR, payload: error.message });
    }
  };
};
