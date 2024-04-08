import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
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
    imgURL: headerk50,
    name: "Kenya at 50",
    price: "KES 500",
  },
  {
    imgURL: headerk50,
    name: "Kenya at 50",
    price: "KES 500",
  },
  {
    imgURL: headerk50,
    name: "Kenya at 50",
    price: "KES 500",
  },
  {
    imgURL: headerk50,
    name: "Kenya at 50",
    price: "KES 500",
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
    title: "Products",
    links: [
      { name: "Chuck Taylor All Star", link: "/" },
      { name: "Run Star Hike Platform", link: "/" },
      { name: "Chuck 70 Tri-Color", link: "/" },
      { name: "Star Player 76", link: "/" },
      { name: "Chuck Taylor All Star Lift Platform", link: "/" },
      { name: "Run Star Legacy Chelsea CX", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@converse.com", link: "mailto:customer@converse.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
