import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import CourseCard from "@/components/course-card";

export function CourseCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent className="max-w-6xl	mx-auto">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <CourseCard
                mainTitle="COMPLETE C#/.NET"
                subTitle="DEVELOPER COURSE"
                description="Dive into profession step by step - from zero to your first job offer"
                buttonTexts={["ONLINE", "FEE-BASED", "COMPLETE PROGRAMS"]}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
