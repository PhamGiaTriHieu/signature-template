import {create} from 'zustand';

const useValuesStore = create((set) => ({
  values: {},
  setName: (name) =>
    set((state) => ({
      values: {...name},
    })),
}));

export default useValuesStore;
