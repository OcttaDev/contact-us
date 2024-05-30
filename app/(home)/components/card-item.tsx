import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { IconType } from "react-icons";

export default function CardItem({
  Icon,
  title,
  description,
}: {
  Icon: IconType;
  title: string;
  description: string;
}) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-center">
            <Icon size={40} />
          </CardTitle>
          <CardDescription className="flex justify-center">
            {title}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="max-w-[300px]">{description}</p>
        </CardContent>
      </Card>
    </>
  );
}
