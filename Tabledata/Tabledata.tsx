const TableData = () => {
  // Headers
  const headers: string[] = [
    "S/N",
    "Image",
    "SKU",
    "Name",
    "Title",
    "Description",
    "Brand",
    "Cost Price",
    "Quantity",
    "Size",
  ];

  // Dummy data for table body (10x10 array of mixed types)
  const data: (
    | string
    | string
    | string
    | string
    | string
    | string
    | string
    | number
    | number
    | number
  )[][] = [
    [
      1,
      "images/image1.svg",
      "Apparel",
      "$10.99",
      "Yes",
      "4.5",
      "Brand A",
      123,
      234,
      12,
    ],
    [
      2,
      "images/image2.svg",
      "Apparel",
      "$39.99",
      "Yes",
      "4.0",
      "Brand B",
      123,
      234,
      12,
    ],
    [
      3,
      "images/image3.svg",
      "Footwear",
      "$59.99",
      "No",
      "4.8",
      "Brand C",
      123,
      234,
      12,
    ],
    [
      4,
      "images/image4.svg",
      "Accessories",
      "$29.99",
      "Yes",
      "4.2",
      "Brand D",
      123,
      234,
      12,
    ],
    [
      5,
      "images/image5.svg",
      "Accessories",
      "$199.99",
      "Yes",
      "4.9",
      "Brand E",
      123,
      234,
      12,
    ],
    [
      6,
      "images/image6.svg",
      "Apparel",
      "$14.99",
      "No",
      "4.1",
      "Brand F",
      123,
      234,
      12,
    ],
    [
      7,
      "images/image7.svg",
      "Apparel",
      "$5.99",
      "Yes",
      "4.3",
      "Brand G",
      123,
      234,
      12,
    ],
    [
      8,
      "images/image8.svg",
      "Electronics",
      "$899.99",
      "Yes", // Replace boolean with string "Yes" or "No"
      "4.7",
      "Brand H",
      123,
      234,
      12,
    ],
    [
      9,
      "images/image9.svg",
      "Electronics",
      "$49.99",
      "No", // Replace boolean with string "Yes" or "No"
      "4.4",
      "Brand I",
      123,
      234,
      12,
    ],
    [
      10,
      "images/image10.svg",
      "Accessories",
      "$19.99",
      "Yes", // Replace boolean with string "Yes" or "No"
      "4.6",
      "Brand J",
      123,
      234,
      12,
    ],
  ];

  return { headers, data };
};

export default TableData;
