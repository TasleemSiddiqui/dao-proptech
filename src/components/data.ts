import { StaticImageData } from "next/image";

interface IProjectThumbnail {
  id: number;
  title: string;
  logo: string | StaticImageData;
  description: string;
  address: string;
  projectType: string;
  slug: string;
  image: string | StaticImageData;
  totalArea: string;
  developmentalRound: string;
  expCompletion: string;
}

export default IProjectThumbnail;

export const projectThumbnail: IProjectThumbnail[] = [
  {
    id: 1,
    title: "Urban Dwellings",
    logo: "/project/buildings/UD-icon-light-01.svg",
    description:
      "A modern architecture being developed on an area of 18 kanals. The structure combines the experience of a home with luxurious amenities in a new community living concept.",
    address: "Plot #6, Bahria Garden City, Islamabad",
    projectType: "Apartment Complex",
    slug: "/projects/urban-dwellings",
    image: "/project/buildings/img1.PNG",
    totalArea: "624,000 sq. ft.",
    developmentalRound: "5 out of 21",
    expCompletion: "2027",
  },
  {
    id: 2,
    title: "Urban Dwellings",
    logo: "/project/buildings/UD-icon-light-01.svg",
    description:
      "A modern architecture being developed on an area of 18 kanals. The structure combines the experience of a home with luxurious amenities in a new community living concept.",
    address: "Plot #6, Bahria Garden City, Islamabad",
    projectType: "Apartment Complex",
    slug: "/projects/urban-dwellings",
    image: "/project/buildings/img1.PNG",
    totalArea: "624,000 sq. ft.",
    developmentalRound: "5 out of 21",
    expCompletion: "2027",
  },
  {
    id: 3,
    title: "Urban Dwellings",
    logo: "/project/buildings/UD-icon-light-01.svg",
    description:
      "A modern architecture being developed on an area of 18 kanals. The structure combines the experience of a home with luxurious amenities in a new community living concept.",
    address: "Plot #6, Bahria Garden City, Islamabad",
    projectType: "Apartment Complex",
    slug: "/projects/urban-dwellings",
    image: "/project/buildings/img1.PNG",
    totalArea: "624,000 sq. ft.",
    developmentalRound: "5 out of 21",
    expCompletion: "2027",
  },
  {
    id: 4,
    title: "Urban Dwellings",
    logo: "/project/buildings/UD-icon-light-01.svg",
    description:
      "A modern architecture being developed on an area of 18 kanals. The structure combines the experience of a home with luxurious amenities in a new community living concept.",
    address: "Plot #6, Bahria Garden City, Islamabad",
    projectType: "Apartment Complex",
    slug: "/projects/urban-dwellings",
    image: "/project/buildings/img1.PNG",
    totalArea: "624,000 sq. ft.",
    developmentalRound: "5 out of 21",
    expCompletion: "2027",
  },
  {
    id: 5,
    title: "Urban Dwellings",
    logo: "/project/buildings/UD-icon-light-01.svg",
    description:
      "A modern architecture being developed on an area of 18 kanals. The structure combines the experience of a home with luxurious amenities in a new community living concept.",
    address: "Plot #6, Bahria Garden City, Islamabad",
    projectType: "Apartment Complex",
    slug: "/projects/urban-dwellings",
    image: "/project/buildings/img1.PNG",
    totalArea: "624,000 sq. ft.",
    developmentalRound: "5 out of 21",
    expCompletion: "2027",
  },
  {
    id: 6,
    title: "Urban Dwellings",
    logo: "/project/buildings/UD-icon-light-01.svg",
    description:
      "A modern architecture being developed on an area of 18 kanals. The structure combines the experience of a home with luxurious amenities in a new community living concept.",
    address: "Plot #6, Bahria Garden City, Islamabad",
    projectType: "Apartment Complex",
    slug: "/projects/urban-dwellings",
    image: "/project/buildings/img1.PNG",
    totalArea: "624,000 sq. ft.",
    developmentalRound: "5 out of 21",
    expCompletion: "2027",
  },
];
