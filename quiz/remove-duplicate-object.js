const products = [
  {
    product_id: 1,
    product_name: "Test 1",
    is_available: true,
  },
  {
    product_id: 2,
    product_name: "Test 2",
    is_available: true,
  },
  {
    product_id: 3,
    product_name: "Test 3",
    is_available: true,
  },
  {
    product_id: 4,
    product_name: "Test 4",
    is_available: true,
  },
  {
    product_id: 3,
    product_name: "Test 4",
    is_available: true,
  },
  {
    product_id: 5,
    product_name: "Test 5",
    is_available: false,
  },
  {
    product_id: 6,
    product_name: "Test 6",
    is_available: true,
  },
  {
    product_id: 7,
    product_name: "Test 7",
    is_available: true,
  },
];

const uniqueProducts = (products) => {
  // the function should return unique list of products
  const result = [];

  let uniqueProdsSet = new Set();
  products.forEach((prod) => {
    if (!uniqueProdsSet.has(prod.product_id)) {
      uniqueProdsSet.add(prod.product_id);
      result.push(prod);
    }
  });

  return result;
};

console.log(uniqueProducts(products));
