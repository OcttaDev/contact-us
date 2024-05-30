import { FieldErrors } from "react-hook-form";
import { FormData } from "../components/form";
import axios from "axios";

export class TreatTask {
  constructor() {}

  public async CreateTask(data: FormData) {
    const task = {
      email: data.email,
      client: data.client,
      task: data.task,
      contact: data.contact,
    };

    console.log(task);
    try {
      if (task) {
        const created_task = await axios.post("/api/create-task/", task);
        return created_task;
      }
    } catch (error) {
      return error;
    }
  }

  public async handleErrors(
    errors: FieldErrors<FormData>
  ): Promise<{ erro: string; message: string } | undefined> {
    if (!errors) {
      return;
    }

    if (errors?.client?.message) {
      const error = {
        erro: errors?.client?.message,
        message: "Por favor, preencha este campo corretamente.",
      };
      return error;
    }
    if (errors?.email?.message) {
      const error = {
        erro: errors?.email?.message,
        message: "Por favor, insira um email válido.",
      };
      return error;
    }
    if (errors?.contact?.message) {
      const error = {
        erro: errors?.contact?.message,
        message: "Por favor, insira um número válido.",
      };
      return error;
    }
    if (errors?.task?.message) {
      const error = {
        erro: errors?.task?.message,
        message: "Por favor, preencha este campo corretamente.",
      };
      return error;
    }
  }
}

// toast({
//     variant: "destructive",
//     title: errors?.client?.message,
//     description: "Por favor, preencha este campo corretamente.",
//   });
//   toast({
//     variant: "destructive",
//     title: errors?.email?.message,
//     description: "Por favor, insira um email válido.",
//   });
//   toast({
//     variant: "destructive",
//     title: errors?.contact?.message,
//     description: "Por favor, insira um número válido.",
//   });
//   toast({
//     variant: "destructive",
//     title: errors?.task?.message,
//     description: "Por favor, preencha este campo corretamente.",
//   });
