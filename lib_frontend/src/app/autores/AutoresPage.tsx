import Item from "@/components/item-componete";
import type { Autor } from "@/types/Autor";
import { useQuery } from "@tanstack/react-query";

const AutoresPage = () => {
  const fetchAutores = async () => {
    const response = await fetch("http://localhost:3000/api/v1/autores/");

    if (!response.ok) {
      throw new Error("Erro ao buscar autores");
    }

    return response.json();
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["autores"],
    queryFn: fetchAutores,
  });

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Erro ao carregar usuários</div>;

  return (
    <div className="mx-10 my-4">
      <div className="w-full bg-white rounded-lg shadow-md border p-4 space-y-2">
        <h1 className="text-2xl font-semibold">Autores</h1>
        {data.map((autor: Autor) => (
          <Item
            key={autor.id}
            label={autor.nome}
            onEdit={() => console.log("Editar autor:", autor.id)}
            onDelete={() => console.log("Excluir autor:", autor.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoresPage;
