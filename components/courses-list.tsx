import { Category, Course} from "@prisma/client";
import { CourseCard } from "@/components/course-card";

type CourseWithProgressCartegory = Course & {
    category: Category | null;
    chapters: {id: string} [];
    progress: number | null;
};

interface CousrsesListProps {
    items: CourseWithProgressCartegory[];
}

export const CourseList = ({
    items
}: CousrsesListProps) => {
    return ( 
        <div>
        <div className="grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 ">
            {items.map((item) => (
                <div  key={item.id}>
                    <CourseCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    imageUrl={item.imageUrl!}
                    chaptersLength={item.chapters.length}
                    price={item.price!}
                    progress={item.progress}
                    category={item?.category?.name!}
                    />
                </div>
                   
            ))} 
        </div>
        {items.length === 0 &&  (
            <div className="text-center text-sm text-muted-foreground mt-10">
                 No courses found
                </div>
        )
        } 
        </div> 
    ) 
}
