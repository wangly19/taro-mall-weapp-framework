declare module '@/config/routes' {
  export interface Route  {
    name: string;
    path: string;
    useAuth: boolean;
    isTab: boolean;
    selectIcons?: string[]
  }

  export interface TabRoute {
    iconPath?: string
    selectedIconPath?: string
    pagePath: string
    text: string
  }

  const router: {
    routes: Route[],
    getTabBarRoutes: () => TabRoute[],
    getPageRoutes: () => string[]
  }

  export default router
}