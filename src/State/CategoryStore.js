import { create } from "zustand";

const CategoryStore = create((set) => ({
    category: '',
    setCategory: (newCategory) =>
      set((state) => ({
        category: newCategory,
      })),
  }));


export default CategoryStore