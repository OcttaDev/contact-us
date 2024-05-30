"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { formSchema } from "../utils/form-scheme";
import { useToast } from "@/app/components/ui/use-toast";
import { useEffect } from "react";
import { TreatTask } from "../classes/treat-task";

export type FormData = z.infer<typeof formSchema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const { toast } = useToast();

  const treatTask = new TreatTask();

  const handleCreateNewTask = (data: FormData) => {
    if (data) {
      treatTask
        .CreateTask(data)
        .then(() => {
          toast({
            title: "Sua demanda foi enviada com sucesso!",
            description: "Fique alerta, logo entraremos em contato.",
          });

          //reset();
        })
        .catch((error) => {
          toast({
            variant: "destructive",
            title: "Erro ao criar demanda.",
            description: "Error",
          });
        });
    }
  };

  useEffect(() => {
    const displayError = async () => {
      const error = await treatTask.handleErrors(errors);
      if (error) {
        toast({
          variant: "destructive",
          title: error.erro,
          description: error.message,
        });
      }
    };

    displayError();
  }, [errors]);

  return (
    <div>
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit(handleCreateNewTask)}
      >
        <div className="flex flex-col gap-2">
          <label className="text-gray-400 font-bold">Nome completo</label>
          <input
            type="text"
            className="h-9 rounded-md px-5 text-gray-800 outline-none"
            {...register("client")}
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-gray-400 font-bold">Email</label>
            <input
              type="text"
              className="h-9 rounded-md px-5 text-gray-800 outline-none"
              {...register("email")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-400 font-bold">Telefone</label>
            <input
              type="text"
              className="h-9 rounded-md px-5 text-gray-800 outline-none"
              {...register("contact")}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-400 font-bold">Descreva a demanda</label>
          <textarea
            className="rounded-md max-h-32 min-h-32 p-5 text-gray-800 outline-none"
            {...register("task")}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-secondary h-9 rounded-md font-bold hover:bg-secondary/80 transition-all"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
