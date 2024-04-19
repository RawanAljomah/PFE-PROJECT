"use client";

import { Category } from "@prisma/client";
import {
   FcAdvertising,
   FcBusinessman,
   FcMoneyTransfer,
   FcCircuit,
   FcManager,
   FcDatabase,
   FcCustomerSupport,
   FcProcess,
   FcCollaboration
    
}from "react-icons/fc";
import { IconType } from "react-icons";
import { CategoryItem } from "./category-item";

interface CategoriesProps {
    items: Category[];
}
const iconMap: Record<Category["name"], IconType> ={
     "Marketing and Branding": FcAdvertising,
     "Sales and Business Development": FcBusinessman,
     "Financial Management and Funding": FcMoneyTransfer,
     "Product Development and Innovation": FcCircuit,
     "Leadership and Team Building": FcManager,
     "Technology and IT Infrastructure" :FcDatabase,
     "Customer Experience and Support": FcCustomerSupport,
     "Operations and Process Optimization": FcProcess,
     "Networking and Relationship Building": FcCollaboration
}




export const Categories = ({
    items,

}:CategoriesProps) => {
    return (
        <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
            {items.map((item) => (
            <CategoryItem
            key={item.id}
            label={item.name}
            icon={iconMap[item.name]}
            value={item.id}
            />
        ))}
        </div>
    )
}