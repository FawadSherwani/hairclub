import { ViewTransition } from "react";

export default function Template({ children }) {
  return (
    <ViewTransition enter="page-slide" exit="page-slide">
      <div className="route-page">{children}</div>
    </ViewTransition>
  );
}
