interface ItemProps {
  label: string;
  onEdit: () => void;
  onDelete: () => void;
}

export default function Item({ label, onEdit, onDelete }: ItemProps) {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white border-b hover:bg-gray-50 transition-colors">
      <span className="font-semibold">{label}</span>

      <div className="flex gap-2">
        <button
          onClick={onEdit}
          className="px-3 py-1 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-700 transition-colors"
        >
          Editar
        </button>

        <button
          onClick={onDelete}
          className="px-3 py-1 text-sm rounded-md bg-red-500 text-white hover:bg-red-700 transition-colors"
        >
          Excluir
        </button>
      </div>
    </div>
  );
}
