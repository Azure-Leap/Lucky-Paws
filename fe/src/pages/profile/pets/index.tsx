import React,{useState} from "react";
import LayoutWithSidebar from "../profileLayout";
import { useAnimals } from "@/hooks/usePets";
import PetModal from "@/components/Dashboard/PetsModal/Modal";

export default function Pets() {
  const { animals } = useAnimals();

  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
  return (
    <div className="relative overflow-x-auto container grid bg-blue-300 mx-auto">
      <div className="bg-red-300 justify-self-end">
        <button onClick={handleOpen} className="bg-orange-500 justify-self-end rounded-xl py-2 px-3 text-white">
          + Add New
        </button>
      </div>
      <table className="w-3/4 mx-auto text-sm text-left shadow-md text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Pets name
            </th>
            <th scope="col" className="px-6 py-3">
              Type
            </th>
            <th scope="col" className="px-6 py-3">
              Size
            </th>
            <th scope="col" className="px-6 py-3">
              Age
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {animals?.map((animal: any, idx: number) => (
            <tr key={idx} className="bg-white border-b  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {animal.name}
              </th>
              <td className="px-6 py-4">{animal.animaltype.title}</td>
              <td className="px-6 py-4">{animal.size}</td>
              <td className="px-6 py-4">{animal.age}</td>
              <td className="px-6 py-4">
                <button
                  
                  className="mx-2 font-medium text-blue-600  hover:underline"
                >
                  Edit
                </button>
                <button
                  
                  className="mx-2 font-medium text-red-600  hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <PetModal open={open} setOpen={setOpen}/>
    </div>
  );
}

Pets.getLayout = function (page: any) {
  return <LayoutWithSidebar>{page}</LayoutWithSidebar>;
};
