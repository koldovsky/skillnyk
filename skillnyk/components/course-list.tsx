/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/RlZ4nNz2dE5
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Gabarito } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'

gabarito({
  subsets: ['latin'],
  display: 'swap',
})

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function CourseList() {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 md:py-16 lg:py-20">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Як це працює?</h2>
        <ul>
          <li className="text-lg md:text-xl max-w-2xl mb-10 text-center">
            Щоб розпочати програму ти обираєш будь-який курс, який тобі цікавий і сплачуєш фіксовану суму 12999 грн, яка включає ціну курсу та право участі в програмі.
          </li>
          <li className="text-lg md:text-xl max-w-2xl mb-10 text-center">
            Після успішного завершення курсу і отримання сертифікату ти отримуєш знижку на наступні курси. 
          </li>
          <li className="text-lg md:text-xl max-w-2xl mb-10 text-center">
            Чим більше курсів ти проходиш, тим сильніше прокачуєш свої скіли в IT, і тим доступніше стають тобі наступні курси. 
          </li>
          <li className="text-lg md:text-xl max-w-2xl mb-10 text-center">
            Знижка зростає після завершення кожного курсу на 10% аж до 50%. 
          </li>
        </ul>
      </div>
      {/* <Carousel className="w-full">
        <CarouselContent>
          {Array.from({ length: 12 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/6 p-4">
              <Card className="h-full">
                <CardContent className="p-0">
                  <img
                    src="/placeholder.svg"
                    alt={`Product ${index + 1}`}
                    width={300}
                    height={300}
                    className="w-full h-[300px] object-cover rounded-t-lg"
                  />
                </CardContent>
                <CardFooter className="p-4">
                  <h3 className="text-xl font-bold mb-2">Product {index + 1}</h3>
                  <p className="text-muted-foreground text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/50 hover:bg-background/75 rounded-full p-2 cursor-pointer">
          <ChevronLeftIcon className="w-6 h-6 text-primary" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/50 hover:bg-background/75 rounded-full p-2 cursor-pointer">
          <ChevronRightIcon className="w-6 h-6 text-primary" />
        </CarouselNext>
      </Carousel> */}
    </section>
  )
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
