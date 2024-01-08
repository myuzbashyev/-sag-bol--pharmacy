const useTogglers = defineStore("togglers", {
  state: () => ({
    isSidebarVisible: false,
    isSignInOpen: false,
    isSearchVisible: false,
    isMenuVisible: false,
    isSubMenuVisible: false,
    activeIndex: null,
  }),
});
