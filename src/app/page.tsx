import { TaskCard } from "@/components/task-card";
import prisma from "@/lib/prisma";

async function Home() {
  const tasks = await prisma.task.findMany();

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto mt-2">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}

export default Home;
