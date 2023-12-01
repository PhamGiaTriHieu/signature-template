import {create} from 'zustand';

const useValuesStore = create((set) => ({
  values: {},
  setName: (name) =>
    set((state) => ({
      values: {...name},
    })),

  //   setJobTitle: (jobTitle) =>
  //     set((state) => ({
  //       values: {...state, jobTitle},
  //     })),
}));

export default useValuesStore;
