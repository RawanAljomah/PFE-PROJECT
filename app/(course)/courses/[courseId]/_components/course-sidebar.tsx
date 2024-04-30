import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import {Chapter, Course, UserProgress} from "@prisma/client"
import { redirect } from "next/navigation";

interface CoursesSidebarProps {
    course: Course & {
        chapters: (Chapter & {
            userProgress: UserProgress [] | null;
        }) []
    };
    progressCount: number;
}


export const CourseSidebar = async ({
    course,
    progressCount,

}: CoursesSidebarProps) => {
    const {userId} = auth();

    if (!userId) {
        return redirect("/");
    }
    const purchase = await db.purchase.findUnique({
        where: {
            userId_courseId: {
                userId,
                courseId: course.id,
            }
        }
    })
   return (
   <div>
 course sidebar!
    </div>
    )
}