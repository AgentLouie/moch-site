import { create } from 'zustand';

// 1. Create the global state store
export const useTransitionStore = create((set) => ({
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
}));

// 2. Create the custom hook we'll use in our components
export const usePageTransition = () => {
  const setIsLoading = useTransitionStore((state) => state.setIsLoading);

  const transitionTo = (event, url) => {
    // Prevent the browser from instantly navigating
    event.preventDefault();
    
    // Show the loader
    setIsLoading(true);

    // Wait 1 second for the animation, then go to the new page
    setTimeout(() => {
      window.location.href = url;
    }, 1000); // 1000ms = 1 second
  };

  return transitionTo;
};