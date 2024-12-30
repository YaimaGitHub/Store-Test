import { BrowserRouter, HashRouter } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import { AuthRoutes } from "./auth.routes";
import { UserRoutes } from "./user.routes";
import { useEffect, useRef, useState } from "react";

export function Routes() {

  const [isFirst, setIsFirst] = useState(0)
  const {user} = useAuth()

  useEffect(() => {
  
    if (isFirst == 0) {
      setIsFirst(1)
    } else {
      setIsFirst(2)
    }

  }, [user])

  return (
    <HashRouter>
      {(isFirst == 2 && user) ?
          <UserRoutes/>
        : (isFirst == 2 && !user) &&
          <AuthRoutes/>
      }
    </HashRouter>
  );
}
