// Hook (useAuth.tsx) コンポーネントを扱うときはtsx
import React, { useState, useEffect, useContext, createContext, useReducer, ReactNode } from "react";

export interface authContextType {
  state: StateType;
  // signin(email: any, password: any): Promise<any>;
  // signup(email: any, password: any): Promise<any>;
  signin(email: any, password: any): void;
  signup(email: any, password: any): void;
  signout(): void;
  sendPasswordResetEmail(email: any): Promise<boolean>;
  confirmPasswordReset(code: any, password: any): Promise<boolean>;
}

export interface StateType {
  user?: any;
  loading: boolean;
}

interface Props {
  children: ReactNode;
}

/*
 * 初期値
 */
const initialAuthState: StateType = {
  user: null,
  loading: false,
}
/*
 * action: {type: xxx, payload: yyy}
 */
const authReducer = (state: any, action: any) => {
  if (process.env.NODE_ENV === "development") {
    console.log(`↓↓↓↓ reducer ↓↓↓↓`);
    console.log(`state: ${JSON.stringify(state)}`);
    console.log(`action: ${JSON.stringify(action)}`);
    console.log(`↑↑↑↑ reducer ↑↑↑↑`);
  }
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true};
    case 'LOADED':
      return { ...state, loading: false};
    case "SIGNIN":
        return {...state, user: action.payload,};
    case "SIGNOUT":
      return {...state, user: null,};
    default:
      return state;
  }
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
// const authContext = createContext<authContextType | undefined>(undefined);
// export const useAuth = () => {
//   return useContext(authContext);
// };
// const [useAuth, AuthCtx] = createCtx<authContextType>();

const AuthCtx = createContext<authContextType | undefined>(undefined)

export const useAuth = () => {
  const c = useContext(AuthCtx);
  if (!c) throw new Error("useAuth must be inside a Provider with a value");
  return c;
};

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export const ProvideAuth = ( props: Props ) => {
  const auth = useProvideAuth();
  return <AuthCtx.Provider value={auth}>{props.children}</AuthCtx.Provider>;
}

// Provider hook that creates auth object and handles state
const useProvideAuth: any = () => {
  // const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [state, dispatch] = useReducer(authReducer, initialAuthState)

  const signin = (email: any, password: any) => {
    dispatch({type: 'LOADING'});
    const user = {name: 'test-signin'};
    dispatch({type: 'SIGNIN', payload: {email, password}});
    return dispatch({type: 'LOADED'});
  };
  const signup = (email: any, password: any) => {
    dispatch({type: 'LOADING'});
    const user = {name: 'test-signup'};
    dispatch({type: 'SIGNIN', payload: {email, password}});
    return dispatch({type: 'LOADED'});
  };
  const signout = () => {
    dispatch({type: 'LOADING'});
    dispatch({type: 'SIGNOUT'});
    return dispatch({type: 'LOADED'});
  };
  const sendPasswordResetEmail = (email: any) => {
    return null;
  };
  const confirmPasswordReset = (code: any, password: any) => {
    return null;
  };
  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    let unmount = false;
    // Cleanup subscription on unmount
    return () => {
      unmount = true;
    }
  }, []);
  // Return the user object and auth methods
  return {
    // user,
    // loading,
    state,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}