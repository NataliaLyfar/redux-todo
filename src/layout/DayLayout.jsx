import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { DayHeader } from './common/DayHeader';



export const DayLayout = () => {

  return (
  <>
    <DayHeader/>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
  </>
  );
};