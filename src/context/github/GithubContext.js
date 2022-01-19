import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer"

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({children}) => {
  const initialState = {
    users: [],
    isLoading: false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  // Get initial users

  const fetchUsers = async () => {
    setIsLoading();

    const res = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await res.json();

    dispatch({
      type: 'GET_USERS',
      payload: data
    })
  };

  // Set loading
  const setIsLoading = () => {
    dispatch({
      type: 'SET_LOADING'
    })
  }

  return <GithubContext.Provider value={{
    users: state.users,
    isLoading: state.isLoading,
    fetchUsers,
  }}>
    {children}
  </GithubContext.Provider>

}

export default GithubContext
