import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import {
  Headphones,
  KeyboardIcon,
  Monitor,
  Mouse,
  SpeakerIcon,
  SquareIcon,
} from "lucide-react";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  const categoryIcon = {
    keyboards: <KeyboardIcon size={16} />,
    monitors: <Monitor size={16} />,
    headphones: <Headphones size={16} />,
    mousepads: <SquareIcon size={16} />,
    speakers: <SpeakerIcon size={16} />,
    mouses: <Mouse size={16} />,
  };

  return (
    <Badge
      variant="outline"
      className="items-center justify-center gap-2 rounded-lg py-3"
    >
      {categoryIcon[category.slug as keyof typeof categoryIcon]}
      <span className="text-xs font-bold">{category.name}</span>
    </Badge>
  );
};

export default CategoryItem;
