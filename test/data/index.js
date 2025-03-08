export let productToCreate = {
  slug: "zx9-speaker-test",
  name: "ZX9 Speaker-test",
  image: {
    mobile: "./assets/product-zx9-speaker/mobile/image-product-test.jpg",
    tablet: "./assets/product-zx9-speaker/tablet/image-product-test.jpg",
    desktop: "./assets/product-zx9-speaker/desktop/image-product-test.jpg",
  },
  category: "speakers test",
  categoryImage: {
    mobile: "./assets/product-zx9-speaker/mobile/image-category-page-preview-test.jpg",
    tablet: "./assets/product-zx9-speaker/tablet/image-category-page-preview-test.jpg",
    desktop: "./assets/product-zx9-speaker/desktop/image-category-page-preview-test.jpg",
  },
  new: true,
  price: 4500,
  description:
    "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
  features:
    "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).\n\nDiscover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
  includes: [
    {
      quantity: 2,
      item: "Speaker unit test",
    },
    {
      quantity: 2,
      item: "Speaker cloth panel test",
    },
    {
      quantity: 1,
      item: "User manual test",
    },
    {
      quantity: 1,
      item: "3.5mm 10m audio cable test",
    },
    {
      quantity: 1,
      item: "10m optical cable test",
    },
  ],
  gallery: {
    first: {
      mobile: "./assets/product-zx9-speaker/mobile/image-gallery-1-test.jpg",
      tablet: "./assets/product-zx9-speaker/tablet/image-gallery-1-test.jpg",
      desktop: "./assets/product-zx9-speaker/desktop/image-gallery-1-test.jpg",
    },
    second: {
      mobile: "./assets/product-zx9-speaker/mobile/image-gallery-2-test.jpg",
      tablet: "./assets/product-zx9-speaker/tablet/image-gallery-2-test.jpg",
      desktop: "./assets/product-zx9-speaker/desktop/image-gallery-2-test.jpg",
    },
    third: {
      mobile: "./assets/product-zx9-speaker/mobile/image-gallery-3-test.jpg",
      tablet: "./assets/product-zx9-speaker/tablet/image-gallery-3-test.jpg",
      desktop: "./assets/product-zx9-speaker/desktop/image-gallery-3-test.jpg",
    },
  },
  others: [
    {
      slug: "zx7-speaker-test",
      name: "ZX7 Speaker-test",
      image: {
        mobile: "./assets/shared/mobile/image-zx7-speaker-test.jpg",
        tablet: "./assets/shared/tablet/image-zx7-speaker-test.jpg",
        desktop: "./assets/shared/desktop/image-zx7-speaker-test.jpg",
      },
    },
    {
      slug: "xx99-mark-one-headphones-test",
      name: "XX99 Mark I-test",
      image: {
        mobile: "./assets/shared/mobile/image-xx99-mark-one-headphones-test.jpg",
        tablet: "./assets/shared/tablet/image-xx99-mark-one-headphones-test.jpg",
        desktop: "./assets/shared/desktop/image-xx99-mark-one-headphones-test.jpg",
      },
    },
    {
      slug: "xx59-headphones-test",
      name: "XX59-test",
      image: {
        mobile: "./assets/shared/mobile/image-xx59-headphones-test.jpg",
        tablet: "./assets/shared/tablet/image-xx59-headphones-test.jpg",
        desktop: "./assets/shared/desktop/image-xx59-headphones-test.jpg",
      },
    },
  ],
};

export let createOrder = {
  customer: {
    name: "Martin Kutzner",
    email: "test@gmail.com",
    phoneNumber: "+5435100000",
    address: "Quiróz 2348",
    zipCode: "5003",
    city: "Bahía blanca",
    country: "Cordoba",
  },
  payment: {
    eMoneyNumber: "",
    eMoneyPin: "",
  },
  orderItems: [
    {
      productId: "67aba5a8216fbbfa583ce28e",
      name: "ZX9 Speaker",
      unitPrice: 4500,
      imageUrl: "./assets/product-zx9-speaker/mobile/image-product.jpg",
      quantity: 1,
    },
    {
      productId: "67aba52906c03bc37b566acb",
      name: "YX1 Wireless Earphones",
      unitPrice: 599,
      imageUrl: "./assets/product-yx1-earphones/mobile/image-product.jpg",
      quantity: 2,
    },
  ],
  totalAmount: 5748,
  shippingCost: 50,
};
