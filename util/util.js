// Delete Product from List By Id
export const deleteProduct = (list, id) => {
  console.log(list, id);
      const filter = list.filter((item) => item.id !== id);
  console.log(filter);
      return filter;
  };
  
  // Find Product Index From List
  export const findProductIndex = (list, slug) => {
    const index = list.findIndex((item) => item.slug === slug);
    return index;
  };
  export const findProductIndexById = (list, id) => {
    console.log("list",list);
    const index = list.findIndex((item) => item.id === id);
    return index;
  };
  