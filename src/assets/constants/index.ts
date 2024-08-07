import {
  // facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  // twitter,
} from "../icons";
import {
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  headerk50,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: headerk50,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "10+", label: "Game venues" },
  { value: "500+", label: "Games" },
  { value: "1k+", label: "Customers" },
];

export const products = [
  {
    id: "product1",
    name: "Kenya @50",
    price: "KES 400 per day",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/pushnotifications-3134c.appspot.com/o/chezahive%2F20240314_135533-min.jpg?alt=media&token=e1c4f377-aeb7-4819-9d64-64fc8bcb5fdc",
      "https://firebasestorage.googleapis.com/v0/b/pushnotifications-3134c.appspot.com/o/chezahive%2F20240314_135624-min.jpg?alt=media&token=b84fe957-d360-4430-aced-15355c7269f1",
      "https://firebasestorage.googleapis.com/v0/b/pushnotifications-3134c.appspot.com/o/chezahive%2F20240314_135627-min.jpg?alt=media&token=c17e7a7c-6aaf-4f71-886d-7040d22a6c6c",
    ],
  },
  {
    id: "product2",
    name: "Scrabble",
    price: "KES 200 per day",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/pushnotifications-3134c.appspot.com/o/chezahive%2F20240314_133828-min.jpg?alt=media&token=e2795adc-2c85-4df2-81fa-d90d69ae3c20",
      "https://firebasestorage.googleapis.com/v0/b/pushnotifications-3134c.appspot.com/o/chezahive%2F20240314_133847-min.jpg?alt=media&token=860307cd-93d1-4375-bbcf-2e24d21c928b",
    ],
  },
  {
    id: "product3",
    name: "These cards will get you drunk!",
    price: "KES 200 per day",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/pushnotifications-3134c.appspot.com/o/chezahive%2F20240314_134026-min.jpg?alt=media&token=657f6ef8-6234-4479-82aa-6ebfa862530c",
      "https://firebasestorage.googleapis.com/v0/b/pushnotifications-3134c.appspot.com/o/chezahive%2F20240314_134132-min.jpg?alt=media&token=c93fdc50-dce6-4ee9-a622-28f3d18db8a9",
      "https://firebasestorage.googleapis.com/v0/b/pushnotifications-3134c.appspot.com/o/chezahive%2F20240314_134145-min.jpg?alt=media&token=0d7c45ff-28f4-4e8b-93f6-78bdf04ef786",
    ],
  },
  {
    id: "product4",
    name: "What do you meme?",
    price: "KES 250 per day",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/pushnotifications-3134c.appspot.com/o/chezahive%2F20240314_134501-min.jpg?alt=media&token=424302f9-a958-4f9a-b820-c6ec850f6920",
      "https://firebasestorage.googleapis.com/v0/b/pushnotifications-3134c.appspot.com/o/chezahive%2F20240314_134722-min.jpg?alt=media&token=96cb7405-92cb-4262-9a93-b6b148ee55fa",
      "https://firebasestorage.googleapis.com/v0/b/pushnotifications-3134c.appspot.com/o/chezahive%2F20240314_134748-min.jpg?alt=media&token=7451729d-5421-42e7-a69f-1df1705dea93",
    ],
  },
  {
    id: "product5",
    name: "Cards against humanity",
    price: "KES 250 per day",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/pushnotifications-3134c.appspot.com/o/chezahive%2F20240314_135017-min.jpg?alt=media&token=fdb60eea-7bf8-42df-9e3b-9f88f2da731f",
      "https://firebasestorage.googleapis.com/v0/b/pushnotifications-3134c.appspot.com/o/chezahive%2F20240314_135033-min.jpg?alt=media&token=29712ca6-9b53-4848-9915-e495ea69b11b",
      "https://firebasestorage.googleapis.com/v0/b/pushnotifications-3134c.appspot.com/o/chezahive%2F20240314_135225-min.jpg?alt=media&token=b56be9a8-533b-42fb-bc96-cd958d9ce048",
    ],
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Games",
    links: [
      { name: "Kenya @50", link: "/" },
      { name: "Scrabble", link: "/" },
      { name: "These cards will get you drunk!", link: "/" },
      { name: "What do you meme?", link: "/" },
      { name: "Cards agains humabity", link: "/" },
      { name: "and many more...", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      // { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      // { name: "How it works", link: "/" },
      // { name: "Privacy policy", link: "/" },
      // { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "chezahive@gmail.com", link: "mailto:chezahive@gmail.com" },
      { name: "+254700250238", link: "tel:+254700250238" },
    ],
  },
];

export const socialMedia = [
  // { src: facebook, alt: "facebook logo" },
  // { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
