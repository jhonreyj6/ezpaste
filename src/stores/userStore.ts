import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      user: {},
      access_token: "",
      isAuthenticated: false,
      login: (data) =>
        set((state) => ({
          user: data.user,
          access_token: data.access_token,
          isAuthenticated: true,
        })),
      logout: () =>
        set((state) => ({
          user: {},
          access_token: "",
          isAuthenticated: false,
        })),
      updateUser: (data) =>
        set((state) => ({
          user: data,
        })),
    }),
    {
      name: "auth-storage", // Storage key in localStorage
    }
  )
);

export default useUserStore;

// const useAuthStore = create(
//   persist(
//     (set) => ({
//       user: {},
//       access_token: "",
//       authenticated: false,
//       login: (data) =>
//         set((state) => ({
//           user: data.user,
//           access_token: data.access_token,
//           authenticated: true,
//         })),
//       logout: () =>
//         set((state) => ({
//           user: {},
//           access_token: "",
//           authenticated: false,
//         })),
//     }),
//     {
//       name: "auth-storage", // Storage key in localStorage
//       storage: {
//         getItem: (name) => sessionStorage.getItem(name), // Use sessionStorage instead of localStorage
//         setItem: (name, value) => sessionStorage.setItem(name, value),
//         removeItem: (name) => sessionStorage.removeItem(name),
//       },
//       partialize: (state) => ({ user: state.user, access_token: state.access_token }),
//     }
//   )
// );

// export default useAuthStore;
