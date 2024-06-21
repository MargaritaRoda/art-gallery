interface RouteObject {
  caseSensitive?: boolean;
  children?: RouteObject;
  element?: React.ReactNode;
  index?: boolean;
  path?: string;
}
declare function createRoutesFromElements(
  children: React.ReactNode,
): RouteObject[];
