import "./App.css"

import { Controller, useForm } from "react-hook-form" // Controller - controla os inputs do form, useForm - controla o form como um todo, extraindo elementos do form

type FormData = {
  name: string
  date: string
  subject: string
  description: string
}

export default function App() {
  const { control, handleSubmit } = useForm<FormData>({ defaultValues: {
    name: "",
    date: "",
    subject: "",
    description: "",
  }})

  function onSubmit(data: FormData) {
    console.log(data)
  }

  return (
    <div>
      <h1>Evento</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller 
          control={control}
          name="name"
          render={({ field }) => (
            <input type="text" placeholder="Nome do evento" {...field} />
          )}
        />

        <span className="error">Nome é obrigatório</span>

        <Controller 
          name="date"
          control={control}
          render={({ field }) => (
            <input type="date" placeholder="Nome do evento" lang="pt-BR" {...field} />
          )}
        />

        <Controller
          name="subject"
          control={control}
          render={({ field }) => (
            <select {...field}>
              <option value="" disabled>
                Selecione...
              </option>

              <option value="react">React</option>
              <option value="nodejs">Node.js</option>
              <option value="javascript">Javascript</option>
              <option value="typescript">Typescript</option>
            </select>
          )}
        />

        <Controller 
          name="description"
          control={control}
          render={({ field }) => (
            <textarea placeholder="Descrição" rows={4} {...field} />
          )}
        />

        <button type="submit">Salvar</button>
      </form>
    </div>
  )
}
