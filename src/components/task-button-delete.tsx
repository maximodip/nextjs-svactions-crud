import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { removeTask } from "@/actions/tasks-actions";

export function TaskButtonDelete({ taskId }: { taskId: number }) {
  return (
    <form action={removeTask}>
      <input type="hidden" name="taskId" value={taskId} />
      <Button variant="outline" size="sm">
        <Trash2 className="w-4 h-4 mr-2" />
        Delete
      </Button>
    </form>
  );
}
