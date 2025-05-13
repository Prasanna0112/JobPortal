import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Data Scientist",
  "Graphic Designer",
  "Product Designer",
  "UI/UX Designer",
  "Software Engineer",
];

const CategoryCarousel = () => {
  return (
    <div>
      <Carousel className="w-full max-w-3xl mx-auto my-13">
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Button variant="outline" className="rounded-full hover:bg-[#6A38C2] hover:cursor-pointer hover:text-white text-[#6A38C2] font-bold border-1 border-[#6A38C2] w-full h-10 my-5">
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-[#6A38C2] text-white" />
        <CarouselNext className="bg-[#6A38C2] text-white" />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
