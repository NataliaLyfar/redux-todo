import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { MainHeader } from "./common/MainHeader";




export const MainLayout = () => {
  return (
  <>
    <MainHeader />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
  </>
  );
};


