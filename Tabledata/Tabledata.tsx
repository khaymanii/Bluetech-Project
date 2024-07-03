const TableData = () => {
  // Headers
  const headers: string[] = [
    "S/N",
    "Name",
    "Category",
    "Price",
    "In Stock",
    "Rating",
    "Brand",
    "Color",
    "Size",
    "On Sale",
  ];

  // Dummy data for table body (10x10 array of mixed types)
  const data: (
    | string
    | number
    | string
    | number
    | string
    | number
    | string
    | string
  )[][] = [
    [
      1,
      "T-Shirt",
      "Apparel",
      "$10.99",
      "Yes", // Replace boolean with string "Yes" or "No"
      "4.5",
      "Brand A",
      "Red",
      "M",
      "Yes", // Replace boolean with string "Yes" or "No"
    ],
    [
      2,
      "Jeans",
      "Apparel",
      "$39.99",
      "Yes", // Replace boolean with string "Yes" or "No"
      "4.0",
      "Brand B",
      "Blue",
      "32",
      "No", // Replace boolean with string "Yes" or "No"
    ],
    [
      3,
      "Sneakers",
      "Footwear",
      "$59.99",
      "No", // Replace boolean with string "Yes" or "No"
      "4.8",
      "Brand C",
      "Black",
      "10",
      "Yes", // Replace boolean with string "Yes" or "No"
    ],
    [
      4,
      "Backpack",
      "Accessories",
      "$29.99",
      "Yes", // Replace boolean with string "Yes" or "No"
      "4.2",
      "Brand D",
      "Green",
      "L",
      "No", // Replace boolean with string "Yes" or "No"
    ],
    [
      5,
      "Watch",
      "Accessories",
      "$199.99",
      "Yes", // Replace boolean with string "Yes" or "No"
      "4.9",
      "Brand E",
      "Silver",
      "One Size",
      "Yes", // Replace boolean with string "Yes" or "No"
    ],
    [
      6,
      "Hat",
      "Apparel",
      "$14.99",
      "No", // Replace boolean with string "Yes" or "No"
      "4.1",
      "Brand F",
      "Yellow",
      "One Size",
      "No", // Replace boolean with string "Yes" or "No"
    ],
    [
      7,
      "Socks",
      "Apparel",
      "$5.99",
      "Yes", // Replace boolean with string "Yes" or "No"
      "4.3",
      "Brand G",
      "White",
      "M",
      "Yes", // Replace boolean with string "Yes" or "No"
    ],
    [
      8,
      "Laptop",
      "Electronics",
      "$899.99",
      "Yes", // Replace boolean with string "Yes" or "No"
      "4.7",
      "Brand H",
      "Gray",
      "15 inch",
      "No", // Replace boolean with string "Yes" or "No"
    ],
    [
      9,
      "Headphones",
      "Electronics",
      "$49.99",
      "No", // Replace boolean with string "Yes" or "No"
      "4.4",
      "Brand I",
      "Black",
      "One Size",
      "Yes", // Replace boolean with string "Yes" or "No"
    ],
    [
      10,
      "Sunglasses",
      "Accessories",
      "$19.99",
      "Yes", // Replace boolean with string "Yes" or "No"
      "4.6",
      "Brand J",
      "Brown",
      "One Size",
      "No", // Replace boolean with string "Yes" or "No"
    ],
  ];

  return { headers, data };
};

export default TableData;
