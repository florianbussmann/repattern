import { Check, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface AudioCardProps {
  id: string;
  title: string;
  duration: string;
  category: string;
  isActive: boolean;
  onClick: () => void;
}

export const AudioCard = ({
  title,
  duration,
  category,
  isActive,
  onClick,
}: AudioCardProps) => {
  return (
    <Card
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden cursor-pointer transition-all duration-300",
        "hover:shadow-glow hover:scale-[1.02] hover:border-primary/50",
        isActive && "border-primary shadow-glow scale-[1.02]"
      )}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-2">
            <Badge variant="outline" className="bg-gradient-primary">
              {category}
            </Badge>
          </div>
        </div>

        <div className={cn(
          "absolute inset-0 bg-gradient-primary opacity-0 transition-opacity duration-300",
          "group-hover:opacity-5"
        )} />
      </div>
    </Card>
  );
};
