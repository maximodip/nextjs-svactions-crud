import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Pencil } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Task } from "@prisma/client";
import clsx from "clsx";
import { TaskButtonDelete } from "./task-button-delete";
import Link from "next/link";

export function TaskCard({ task }: { task: Task }) {
  return (
    <Card className="overflow-hidden" key={task.id}>
      <CardHeader className="relative pb-2">
        <Badge
          className={clsx("absolute top-2 right-2", {
            "bg-red-500 text-white": task.priority === "high",
            "bg-yellow-500": task.priority === "medium",
            "bg-green-500": task.priority === "low",
            "bg-blue-500": task.priority === "urgent",
          })}
        >
          {task.priority}
        </Badge>
        <CardTitle className="text-lg font-semibold line-clamp-1">
          {task.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
          {task.description}
        </p>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Created: {new Date(task.createdAt).toLocaleDateString()}
        </p>
        <div className="flex justify-between w-full">
          <Link
            href={`/tasks/${task.id}/edit`}
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            <Pencil className="w-4 h-4 mr-2" />
            Edit
          </Link>
          <TaskButtonDelete taskId={task.id} />
        </div>
      </CardFooter>
    </Card>
  );
}
