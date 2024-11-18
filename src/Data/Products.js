import Hcr_4 from "../Assets/images/Products/HCR_4.jpg";
import D_fender_2x2 from "../Assets/images/Products/D_fender_2x2.jpg";
import wheel_choker_8 from "../Assets/images/Products/wheel_choker_8.jpg";
import black_speed_breaker from "../Assets/images/Products/black_speed_breaker.jpg";
import dock_bumper_13x10x4 from "../Assets/images/Products/dock_bumper_13x10x4.jpg";
import core_cable_protector from "../Assets/images/Products/2_core_cable_protector.jpg";
import { Construction, Build, DesignServices, Engineering, HomeRepairService, Architecture } from '@mui/icons-material';

export const Products = [
  {
    title: "Dock Fenders",
    description:
      "Innovating Dock Fenders and a comprehensive line of Rubber Products, ensuring superior protection for marine infrastructure worldwide.",
    image: D_fender_2x2,
    icon: <Construction className="text-4xl text-black-500" />,
  },
  {
    title: "Dock Bumpers",
    description:
      "At Elastomech, we proudly offer a comprehensive range of high-performance Dock Bumpers, designed to safeguard your docks and vessels with unmatched durability",
    image: dock_bumper_13x10x4,
    icon: <HomeRepairService className="text-4xl text-black-500" />,
  },
  {
    title: "Wheel Chokers",
    description:
      "Wheel chokers are practical devices designed to secure wheels, preventing unintended movement of vehicles or machinery.Crafted from durable materials",
    image: wheel_choker_8,
    icon: <Engineering className="text-4xl text-black-500" />,

  },
  {
    title: "Speed Breakers",
    description:
      "high-quality, durable speed breakers designed to enhance road safety and manage traffic effectively. Built with robust materials, our speed breakers are engineered",
    image: black_speed_breaker,
    icon: <DesignServices className="text-4xl text-black-500" />,

  },
  {
    title: "Hose Ramps",
    description:
      "At Elastomech, we design and manufacture high-quality hose ramps, providing durable solutions for accessibility and convenience.",
    image: Hcr_4,
    icon: <Build className="text-4xl text-black-500" />,

  },
  {
    title: "Cable Protectors",
    description:
      "Durable and reliable cable protectors designed to safeguard wires and prevent tripping hazards, ensuring safety in high-traffic areas.",
    image: core_cable_protector,
    icon: <Architecture className="text-4xl text-black-500" />,

  },
];
